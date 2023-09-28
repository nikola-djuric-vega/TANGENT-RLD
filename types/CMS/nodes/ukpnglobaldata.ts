import { DNO } from '_types/local'
import { Media } from '../media'
import { Link } from '../link'

export interface UkpnGlobalDataQuery {
  allUkpnHomepage: { items: UkpnGlobalItem[] }
  allUkpnSiteSettings: { items: SiteSettingsData[] }
  allGlobalHeader: GlobalHeader
}
export interface UkpnGlobalData {
  allSiteSettings: UkpnGlobalSiteSettingsData
}

export enum StormMode {
  STORM = 'Storm',
  NORMAL = 'Normal',
  PREPARE = 'Prepare',
  INCIDENT = 'Incident',
}

export interface SiteSettingsData {
  click4AssistanceId?: string
  enableNewWebChat: boolean
  reportPowerCutLink: Link
  threePostcodesSearchPanelToggle: boolean
  twoCallsPanelToggle: boolean
  stormMode?: StormMode
  mobileLogo?: Media
  desktopLogo?: Media
  children?: GlobalChildrenItemsObject
}

export interface UkpnGlobalSiteSettingsData {
  click4AssistanceId?: string
  enableNewWebChat: boolean
  reportPowerCutLink: Link
  threePostcodesSearchPanelToggle: boolean
  twoCallsPanelToggle: boolean
  stormMode?: StormMode
  mobileLogo?: Media
  desktopLogo?: Media
  GlobalHeader?: GlobalHeader
  GlobalFooter?: GlobalFooter
  MainNavigation?: UkpnMainNavigation
  RightHandMenuNavigation?: UkpnRightHandMenuNavigation
  DNOs?: DNOs
}

export enum GlobalChildrenItemsName {
  HEADER = 'GlobalHeader',
  FOOTER = 'GlobalFooter',
  MAINNAVIGATION = 'MainNavigation',
  RIGHTHANDMENUNAVIGATION = 'RightHandMenuNavigation',
  DNOs = 'DNOs',
}

export interface GlobalChildrenItemsObject {
  GlobalHeader?: GlobalHeader
  GlobalFooter?: GlobalFooter
  MainNavigation?: UkpnMainNavigation
  RightHandMenuNavigation?: UkpnRightHandMenuNavigation
  DNOs?: DNOs
}

export interface GlobalChildrenItemsArray {
  items: (
    | GlobalHeader
    | GlobalFooter
    | UkpnMainNavigation
    | UkpnRightHandMenuNavigation
    | DNOs
  )[]
}

export interface GlobalHeader {
  __typename: GlobalChildrenItemsName.HEADER
  secondaryNavigationLinks: Link[]
}

export interface GlobalFooter {
  __typename: GlobalChildrenItemsName.FOOTER
  footerLogo?: FooterLogo
  generalLinks?: Link[]
  informationLinks?: Link[]
  serviceLinks?: Link[]
  languageSelector?: LanguageSelectorItem[]
  socialMediaItems?: SocialMediaItem[]
}

export interface UkpnRightHandMenuNavigation {
  __typename: GlobalChildrenItemsName.RIGHTHANDMENUNAVIGATION
  menuLinks?: Link[]
}
export interface UkpnMainNavigation {
  __typename: GlobalChildrenItemsName.MAINNAVIGATION
  children: { items: NavigationItem[] }
}

export interface NavigationItem {
  name?: string
  navigationMenu?: NavigationMenu[]
  promoBoxes?: PromoBox[]
}

export interface NavigationMenu {
  title?: string
  navigationLinks?: Link[]
}

export interface PromoBox {
  __typename: string
  promoBoxType?: string
  title?: string
  largeText?: string
  body: string
  cTA?: Link
}

export interface UkpnGlobalItem {
  allSiteSettings: SiteSettingsData
}
export interface FooterLogo {
  url: string
}

export interface LanguageSelectorItem {
  label: string
  link: Link
}

export interface SocialMediaItem {
  icon: string
  url: string
}

export interface DNOs {
  __typename: GlobalChildrenItemsName.DNOs
  descendants: {
    items: DnosEntity[]
  }
}

export interface DnosEntity {
  dnoPhoneNumber: string
  websiteURL: string
  dnoLogo: Media
  name: DNO
}
