import type { NextPage } from 'next'
import Layout from '_hoc/Layout/Layout'
import ScheduleDarkBlueBanner from '_molecules/ScheduleDarkBlueBanner/ScheduleDarkBlueBanner'
import TitleWithMeta from '_atoms/TitleWithMeta/TitleWithMeta'
import pageTitle from 'data/title-meta-text'

const linkProps = {
  text: 'Back to Search',
  href: '/',
}

const Home: NextPage = () => {
  return (
    <Layout>
      <TitleWithMeta title={pageTitle.notFound} />
      <ScheduleDarkBlueBanner
        bannerTitle="404 Page Not Found"
        bannerText="This page does not exist in our database. Please check your spelling and try again later."
        linkInfo={linkProps}
      />
    </Layout>
  )
}

export default Home
