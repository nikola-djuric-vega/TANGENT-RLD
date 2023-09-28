import { ComponentsTypeName, Link, Media } from '_types/CMS'
import { IconNames } from '_types/local'

export interface HomePageHeroBannerType {
  __typename: ComponentsTypeName.HOME_PAGE_HERO_BANNER
  slides: Array<
    HomePageHeroBannerSlideImageType | HomePageHeroSlideParallaxType
  >
}

export enum HomePageHeroSlideType {
  PARALLAX = 'HomePageBannerParallaxSlide',
  IMAGE = 'HomePageBannerImageSlide',
}

export interface HomePageBannerSlideBase {
  navigationTitle: string
  lighting: string
  title: string
  text: string
  icon: IconNames
  link: Link
}
export interface HomePageHeroBannerSlideImageType
  extends HomePageBannerSlideBase {
  __typename: HomePageHeroSlideType.IMAGE
  desktopImage: Media
  mobileImage: Media
  tabletImage: Media
}

export enum Viewports {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}
export interface HomePageHeroSlideParallaxType extends HomePageBannerSlideBase {
  __typename: HomePageHeroSlideType.PARALLAX
  foregroundDesktopImage: Media
  foregroundTabletImage: Media
  foregroundMobileImage: Media
  backgroudDesktopImage: Media
  backgroudTabletImage: Media
  backgroundMobileImage: Media
  iconDesktopImage: Media
  iconTabletImage: Media
  iconMobileImage: Media
}
