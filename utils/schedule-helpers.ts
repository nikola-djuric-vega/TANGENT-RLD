import { microSiteData } from '_types/blob/microSiteData'
import { ScheduleCardProps, ScheduleMonths } from '_types/data'
import { checkDay } from './blocks-parsing-helpers'

export const createSubTitleText = (
  weeklySchedule?: ScheduleCardProps[],
  scheduleMonth?: ScheduleMonths
) =>
  typeof weeklySchedule !== 'undefined' && typeof scheduleMonth !== 'undefined'
    ? `${checkDay(weeklySchedule[0]?.day)} ${
        scheduleMonth?.startOfWeekMonth
      } - ${checkDay(weeklySchedule[weeklySchedule?.length - 1]?.day)} ${
        scheduleMonth?.endOfWeekMonth
      }`
    : ''

export const createBannerTitle = (
  blockLettersArray?: string[],
  microSiteData?: microSiteData,
  activeBlock?: string
) => {
  const oneBlock = microSiteData?.schedulePage?.oneBlock?.heading
  const multipleBlocks = microSiteData?.schedulePage?.multipleBlocks?.heading

  return blockLettersArray !== undefined
    ? blockLettersArray?.length > 1
      ? `${multipleBlocks}`
      : `${oneBlock?.preBlockLetterText} ${
          typeof activeBlock === 'string' && activeBlock.toUpperCase()
        } ${oneBlock?.postBlockLetterText}`
    : ''
}

export const createBannerText = (
  blockLettersArray?: string[],
  microSiteData?: microSiteData
) => {
  const oneBlockMessage = microSiteData?.schedulePage?.oneBlock?.message
  const multipleBlocksMessage =
    microSiteData?.schedulePage?.multipleBlocks?.message

  return blockLettersArray !== undefined
    ? blockLettersArray?.length > 1
      ? `${multipleBlocksMessage?.preNumberOfBlocksText} ${blockLettersArray?.length} ${multipleBlocksMessage?.postNumberOfBlocksText}`
      : `${oneBlockMessage}`
    : ''
}
