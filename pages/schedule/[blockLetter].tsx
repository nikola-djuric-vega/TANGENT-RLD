import ScheduleDarkBlueBanner from '_molecules/ScheduleDarkBlueBanner/ScheduleDarkBlueBanner'
import { handleStatus, handleAllWeekDays } from '_utils/blocks-parsing-helpers'
import DesktopSchedule from '_organism/DesktopSchedule/DesktopSchedule'
import MobileSchedule from '_organism/MobileSchedule/MobileSchedule'
import React, { useState, useEffect, useCallback } from 'react'
import TitleWithMeta from '_atoms/TitleWithMeta/TitleWithMeta'
import type { NextPage, GetStaticPropsContext } from 'next'
import { useRLDGlobalData } from '_context/rld-global-data'
import { resetBodyStyles } from '_utils/reset-body-styles'
import { BlobData, ScheduleMonths } from '_types/data'
import { DESKTOP_SCREEN } from 'data/schedule-text'
import { ScheduleCardProps } from '_types/data'
import { useRouter } from 'next/router'
import Layout from '_hoc/Layout/Layout'
import debounce from 'lodash/debounce'
import dynamic from 'next/dynamic'
import Papa from 'papaparse'
import axios from 'axios'

import MULTI_SCHEDULE_ALL from 'data/multi-block'
import {
  RLDBlobGlobalData,
  useRLDBlobGlobalData,
} from '_context/rld-blob-global-data'
import {
  createBannerText,
  createBannerTitle,
  createSubTitleText,
} from '_utils/schedule-helpers'

const DynamicMobileSchedule = dynamic(
  () => import('_organism/MobileSchedule/MobileSchedule')
) as typeof MobileSchedule
const DynamicDesktopSchedule = dynamic(
  () => import('_organism/DesktopSchedule/DesktopSchedule')
) as typeof DesktopSchedule

const Schedule: NextPage = ({ blockLetter }: { blockLetter?: string }) => {
  const { query } = useRouter()
  const [scheduleData, setScheduleData] = useState<string | undefined>()
  const [activeBlock, setActiveBlock] = useState<string | undefined>()
  const [weeklySchedule, setWeeklySchedule] = useState<
    ScheduleCardProps[] | undefined
  >()
  const [scheduleMonth, setScheduleMonth] = useState<
    ScheduleMonths | undefined
  >()

  const {
    data: { desktopScheduleData },
  } = useRLDGlobalData()

  const [isMobile, setIsMobile] = useState(false)

  const { microSiteData } = useRLDBlobGlobalData() as RLDBlobGlobalData

  const scheduleDataUrl = process.env.NEXT_PUBLIC_BLOB_SCHEDULE_URL

  useEffect(() => {
    setActiveBlock(blockLetter?.split('-')[0])
  }, [blockLetter])

  useEffect(() => {
    const updateMobile = debounce(
      () => setIsMobile(window.innerWidth < DESKTOP_SCREEN ? true : false),
      150
    )
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })

    resetBodyStyles()

    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  const handleParsedBlob = useCallback(
    (blob: BlobData[]) => {
      let allWeekDays: string[] = []

      const usableFormatData = blob.reduce(
        (acc: ScheduleCardProps[], object: BlobData) => {
          if (!Boolean(object?.block) || !Boolean(object?.date)) {
            return acc
          }

          allWeekDays.push(object.date)
          if (object.block.toLowerCase() !== activeBlock) return acc

          if (acc.find((item) => item.day === object.date)) {
            const itemIndex = acc.findIndex((item) => item.day === object.date)
            acc[itemIndex].periods.push(object.period)
          } else {
            acc.push({
              day: object.date,
              confirmed: handleStatus(object.status),
              periods: [object.period],
            })
          }

          return acc
        },
        []
      )

      const [weekdayHelper, weekMonths] = handleAllWeekDays(allWeekDays)
      setScheduleMonth(weekMonths)

      handleCreateWeeklySchedule(usableFormatData, weekdayHelper)
    },
    [activeBlock]
  )

  const getScheduleData = async () => {
    try {
      const res = await axios.get(scheduleDataUrl as string)
      setScheduleData(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getScheduleData()
  }, [blockLetter, query])

  useEffect(() => {
    if (typeof scheduleData !== 'string') return
    Papa.parse<any>(scheduleData, {
      header: true,
      complete: function (results) {
        handleParsedBlob(results?.data)
      },
    })
  }, [scheduleData, handleParsedBlob])

  const handleCreateWeeklySchedule = (
    schedule: ScheduleCardProps[],
    weekdays: string[]
  ) => {
    const formattedWeekDays: ScheduleCardProps[] = []
    weekdays.forEach((day) => {
      const weekdayChecker = day.split(' ')[1]
      const dayFromSchedule = schedule.find(
        (obj) => obj.day.split('/')[0] === weekdayChecker
      )

      if (dayFromSchedule) {
        formattedWeekDays.push({
          day,
          confirmed: dayFromSchedule.confirmed,
          periods: dayFromSchedule.periods,
        })
      } else {
        formattedWeekDays.push({
          day,
          confirmed: false,
          periods: [],
        })
      }
    })

    setWeeklySchedule(formattedWeekDays)
  }
  const blockLettersArray = blockLetter?.split('-')

  return (
    <>
      <TitleWithMeta title={`Block ${activeBlock?.toUpperCase()} Schedule`} />

      <Layout isSchedule>
        <ScheduleDarkBlueBanner
          bannerText={createBannerText(blockLettersArray, microSiteData)}
          bannerTitle={createBannerTitle(
            blockLettersArray,
            microSiteData,
            activeBlock
          )}
        />

        {Boolean(weeklySchedule?.length) && isMobile ? (
          <DynamicMobileSchedule
            blocks={blockLettersArray}
            activeBlock={activeBlock}
            setActiveBlock={setActiveBlock}
            weeklyScheduleData={weeklySchedule}
            mobileScheduleData={{
              titleText: `Block ${activeBlock?.toUpperCase()} schedule`,
              subTitleText: createSubTitleText(weeklySchedule, scheduleMonth),
            }}
          />
        ) : (
          <DynamicDesktopSchedule
            blocks={blockLettersArray}
            activeBlock={activeBlock}
            setActiveBlock={setActiveBlock}
            weeklyScheduleData={weeklySchedule}
            desktopScheduleData={{
              date: createSubTitleText(weeklySchedule, scheduleMonth),
              info: desktopScheduleData.info,
            }}
          />
        )}
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const blockLetterPaths = MULTI_SCHEDULE_ALL.map((blockLetter) => ({
    params: {
      blockLetter: blockLetter.toString().toLowerCase(),
    },
  }))

  return {
    paths: [...blockLetterPaths],
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  const blockLetter = params?.blockLetter

  return {
    props: {
      blockLetter,
    },
  }
}

export default Schedule
