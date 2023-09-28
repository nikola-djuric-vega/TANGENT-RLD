export interface microSiteData {
  landingPage: LandingPageData
  notPartOfSchedulePage: notPartOfSchedulePageData
  schedulePage: schedulePageData
  cookieBanner: cookieBannerData
}

interface LandingPageData {
  darkBlueBanner: {
    heading: string
  }
  lightBlueBanner: {
    heading: string
    message: string
    cta: string
  }
}

interface notPartOfSchedulePageData {
  heading: string
}

interface schedulePageData {
  oneBlock: schedulePageOneBlockData
  multipleBlocks: schedulePageMultipleBlocksData
}

interface schedulePageOneBlockData {
  heading: {
    preBlockLetterText: string
    postBlockLetterText: string
  }
  message: string
}
interface schedulePageMultipleBlocksData {
  heading: string
  message: {
    preNumberOfBlocksText: string
    postNumberOfBlocksText: string
  }
}

interface cookieBannerData {
  message: {
    preLinkText: string
    postLinkText: string
  }
}
