import type { NextPage } from 'next'
import React from 'react'
import Layout from '_hoc/Layout/Layout'
import LandingPageLightBlueBanner from '_molecules/LandingPageLightBlueBanner/LandingPageLightBlueBanner'
import LandingPageDarkBlueBanner from '_molecules/LandingPageDarkBlueBanner/LandingPageDarkBlueBanner'
import TitleWithMeta from '_atoms/TitleWithMeta/TitleWithMeta'
import pageTitle from 'data/title-meta-text'

const Home: NextPage = () => {
  return (
    <>
      <TitleWithMeta title={pageTitle.index} />
      <Layout>
        <LandingPageDarkBlueBanner />
        <LandingPageLightBlueBanner />
      </Layout>
    </>
  )
}

export default Home
