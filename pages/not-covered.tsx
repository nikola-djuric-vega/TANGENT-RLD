import { NextPage } from 'next'
import Layout from '_hoc/Layout/Layout'
import React, { useEffect } from 'react'
import pageTitle from 'data/title-meta-text'
import { resetBodyStyles } from '_utils/reset-body-styles'
import TitleWithMeta from '_atoms/TitleWithMeta/TitleWithMeta'
import NotCoveredDarkBlueBanner from '_molecules/NotCoveredDarkBlueBanner/NotCoveredDarkBlueBanner'

const NotCovered: NextPage = () => {
  useEffect(() => {
    resetBodyStyles()
  }, [])

  return (
    <>
      <TitleWithMeta title={pageTitle.notCovered} />
      <Layout>
        <NotCoveredDarkBlueBanner />
      </Layout>
    </>
  )
}

export default NotCovered
