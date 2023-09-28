import { StreetFormThankYouPage } from './pages/form-pages/street-form-thank-you-page'
import { SafeSpaceWidgetType } from './nodes/components/UKPN/safe-space-widget'
import { StreetFormPage } from './pages/form-pages/street-form-page'
import { SiteSettings } from './compositions/site-settings'
import { PageMetadata } from './compositions/page-metadata'
import { SearchResults } from './pages/search-results'
import { FormByID } from './compositions/form-by-id'
import { PageBase } from './compositions/page-base'
import { DictionaryItems } from '_types/local'
import { EmailSettings } from './compositions'
import { Form as FormType } from '_types/CMS'
import { Form } from './compositions/form'
import { MapPage } from './pages/map-page'

import {
  DoubleCtaNavIconImageType,
  PowerCutCurvedBannerType,
  CtaFullWidthOffsetType,
  TextWithVideoImageType,
  DangerousSituationType,
  HomePageHeroBannerType,
  StormLandingBannerType,
  LandingHeroBannerType,
  PowerCutComponentType,
  PowerCutContactUsType,
  CtaFullWidthBoxType,
  AnchorComponentType,
  TextBoxWithCTAType,
  RelatedContentType,
  ProcessGraphicType,
  NavigationIconType,
  HelpAndContactType,
  QuickLinkCardType,
  SimpleContentType,
  TabbedContentType,
  HelpAndAdviceType,
  SubNavigationType,
  IsPowerOffCTAType,
  ImageCarouselType,
  BannerCurvedType,
  NotificationType,
  SocialLinksType,
  UsefulLinksType,
  AreaCheckerType,
  WhatsMyMpanType,
  FeedbackCTAType,
  WhatServiceType,
  Buttons5MaxType,
  MediaTilesType,
  DoubleCTAType,
  AccordionType,
  ChecklistType,
  ImageGridType,
  ContactUsType,
  TextBoxesType,
  StormBodyType,
  NewsAndViews,
  TableType,
  RawHtml,
} from './nodes/components/UKPN'

import {
  PowerCutUnsubscribeTextUpdates,
  PowerCutRegisterTextUpdates,
  RadioButtonsWithMainImage,
  RadioButtonsWithImages,
  ConfirmationFailure,
  ConfirmationSuccess,
  PowerCutListPage,
  ICELandingPage,
  PowerCutChecks,
  UkpnHomepage,
  PowerCutPage,
  GenericPage,
  SearchPage,
  ErrorPage,
} from './pages'

import {
  T9ApplicationStartOverview,
  T7ProjectContentOverview,
  T5InstallersLandingPage,
  T6SSContentOverview,
  T4PsrLandingPage,
  T8SsCalculator,
  T2LandingPage,
  NewsArticle,
  NewsListing,
  T3ContactUs,
} from './pages/main-site-pages'

import {
  UnMeteredConnectionFormThankYouPage,
  MeteredConnectionFormThankYouPage,
  UnMeteredConnectionFormPage,
  MeteredConnectionFormPage,
  EmailFormThankYouPage,
  PowerCutThankYouPage,
  PSRFormThankYouPage,
  CatAThankYouPage,
  PowerCutFormPage,
  EmailFormPage,
  CatAFormPage,
  PSRFormPage,
} from './pages/form-pages'

export enum SitesNames {
  UKPN = 'UKPN',
  G81 = 'G81',
}

export enum PageTypeNames {
  UKPN_HOMEPAGE = 'UkpnHomepage',
  DOCUMENT_PAGE = 'DocumentPage',
  ICE_LANDING_PAGE = 'LandingICE',
  GENERIC_PAGE = 'GenericPage',
  MAP_PAGE = 'MapPage',
  POWER_CUT = 'PowerCut',
  POWER_CUT_LIST_PAGE = 'PowerCutList',
  POWER_CUT_FORM_PAGE = 'PowerCutFormPage',
  POWER_CUT_THANK_YOU_PAGE = 'PowerCutThankYouPage',
  POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES = 'UnsubscribeTextUpdatesPage',
  POWER_CUT_REGISTER_TEXT_UPDATES = 'RegisterTextUpdatesPage',
  CONFIRMATION_SUCCESS = 'ConfirmationSuccess',
  CONFIRMATION_FAILURE = 'ConfirmationFailure',
  NEWS_LISTING = 'NewsListing',
  NEWS_ARTICLE = 'NewsArticle',
  EMAIL_FORM_PAGE = 'EmailFormPage',
  EMAIL_FORM_THANK_YOU_PAGE = 'EmailFormThankYouPage',
  CAT_A_FORM_PAGE = 'CatAFormPage',
  CAT_A_THANK_YOU_PAGE = 'CatAThankYouPage',
  PSR_FORM_THANK_YOU_PAGE = 'PSRFormThankYouPage',
  PSR_FORM_PAGE = 'PSRFormPage',
  ERROR_PAGE = 'ErrorPage',
  SEARCH_PAGE = 'SearchPage',
  SEARCH_RESULTS_PAGE = 'SearchResults',
  SUCCESS_PAGE = 'SuccessPage',
  T2_LANDING_PAGE = 'T2LandingPage',
  T3_CONTACT_US = 'T3ContactUs',
  T4_PSR_LANDING = 'T4PSRLanding',
  T5_INSTALLERS_LANDING = 'T5InstallersLanding',
  T6_SS_CONTENT_OVERVIEW = 'T6SSContentOverview',
  T7_PROJECTS_CONTENT_OVERVIEW = 'T7ProjectsContentOverview',
  T8_SS_CALCULATOR = 'T8SSCalculator',
  T9_APPLICATION_START_OVERVIEW = 'T9ApplicationStartOverview',
  STREET_FORM_PAGE = 'StreetFurnitureFormPage',
  STREET_FORM_THANK_YOU_PAGE = 'StreetFurnitureFormThankYouPage',
  METERED_CONNECTION_FORM_PAGE = 'MeteredConnectionFormPage',
  METERED_CONNECTION_THANK_YOU_PAGE = 'MeteredConnectionFormThankYouPage',
  UNMETERED_CONNECTION_FORM_PAGE = 'UnMeteredConnectionFormPage',
  UNMETERED_CONNECTION_THANK_YOU_PAGE = 'UnMeteredConnectionFormThankYouPage',
  RADIO_BUTTONS_WITH_MAIN_IMAGE = 'RadioButtonsWithMainImage',
  RADIO_BUTTONS_WITH_IMAGES = 'RadioButtonsWithImages',
  POWER_CUT_CHECKS = 'PowerCutChecks',
  STORM_PREPARE = 'StormPrepare',
  FOLDER = 'ContentFolder',
}

// CMS naming convention may not match Front End
export enum ComponentsTypeName {
  MEDIA_TILES = 'MediaTiles',
  USEFUL_LINKS = 'UsefulLinks',
  DOUBLE_CTA = 'DoubleCTA',
  CTA_FULL_WIDTH_OFFSET = 'CTAFullWidthOffset',
  NAVIGATION_ICON = 'NavigationIconContainer',
  ANCHOR_COMPONENT = 'AnchorComponent',
  ACCORDION = 'Accordion',
  SIMPLE_CONTENT = 'SimpleContent',
  RELATED_CONTENT = 'RelatedContent',
  CTA_FULL_WIDTH_BOX = 'CTAFullWidthBox',
  SOCIAL_LINKS = 'SocialLinks',
  PROCESS_GRAPHIC = 'ProcessGraphic',
  LANDING_HERO_BANNER = 'LandingHeroBanner',
  HOME_PAGE_HERO_BANNER = 'HomePageHeroBanner',
  POWER_CUT = 'PowerCut',
  CHECKLIST = 'Checklist',
  IMAGE_GRID = 'ImageGrid',
  CONTACT_US = 'ContactUs',
  NAV_ICON_ITEM = 'NavIconItem',
  BANNER_CURVED = 'BannerCurved',
  RAW_HTML = 'RawHtml',
  TABBED_CONTENT = 'TabbedContent',
  TEXT_WITH_VIDEO_IMAGE = 'TextWithVideoImage',
  TEXT_BOXES = 'TextBoxes',
  HELP_AND_ADVICE = 'HelpAndAdvice',
  NOTIFICATION = 'Notification',
  POWER_CUT_CURVED_BANNER = 'PowerCutCurvedBanner',
  AREA_CHECKER = 'AreaChecker',
  WHATS_MY_MPAN = 'MpanChecker',
  HELP_AND_CONTACT = 'HelpAndContact',
  WHAT_SERVICE = 'WhatService',
  TABLE = 'TableContainer',
  SUB_NAVIGATION = 'SubNavigationComponent',
  FEEDBACK_CTA = 'FeedbackCTA',
  IS_POWER_OFF_CTA = 'IsPowerOffCTA',
  STORM_BODY = 'StormBody',
  DANGEROUS_SITUATION = 'DangerousSituationComponent',
  POWER_CUT_COMPONENT = 'PowerCutComponent',
  NEWS_AND_VIEWS = 'NewsAndViewsComponent',
  BUTTONS_5_MAX = 'Buttons5Max',
  POWER_CUT_CONTACT_US = 'PowerCutContactUs',
  IMAGE_CAROUSEL = 'ImageCarousel',
  SAFE_SPACE_WIDGET = 'SafeSpaces',
  PLAIN_LINK = 'PlainLink',
  STORM_LANDING_BANNER = 'StormLandingBanner',
  QUICK_LINK_CARD = 'QuickLinkCard',
  TEXT_BOX_WITH_CTA = 'TextBoxWithCTA',
}
export interface PageProps {
  data: CmsPage
  formData?: FormType
  dictionaryItems?: DictionaryItems
  customFieldsData?: CmsPage
}

export enum CompositionTypeNames {
  FORM = 'Form',
  FORM_BY_ID = 'FormByID',
}

export interface CmsRouteItem {
  __typename: PageTypeNames
  hideFromSearchEngines?: boolean
  updateDate?: string
  url: string
  id: string
}
export interface BreadcrumbsItem {
  __typename: PageTypeNames
  id: string
  name: string
  url?: string
  breadcrumb?: string
}

export interface CmsRoute {
  [key: string]: {
    items: CmsRouteItem[]
  }
}

export interface CmsRouteContent {
  content: CmsRouteItem
}

export type CmsPage =
  | UkpnHomepage
  | GenericPage
  | PowerCutFormPage
  | PowerCutThankYouPage
  | EmailFormPage
  | EmailFormThankYouPage
  | CatAFormPage
  | CatAThankYouPage
  | PowerCutListPage
  | PowerCutRegisterTextUpdates
  | PowerCutUnsubscribeTextUpdates
  | ConfirmationSuccess
  | ConfirmationFailure
  | PSRFormThankYouPage
  | PSRFormPage
  | ErrorPage
  | SearchPage
  | SearchResults
  | T2LandingPage
  | T3ContactUs
  | T4PsrLandingPage
  | T5InstallersLandingPage
  | T6SSContentOverview
  | T5InstallersLandingPage
  | T6SSContentOverview
  | T7ProjectContentOverview
  | T8SsCalculator
  | T9ApplicationStartOverview
  | MapPage
  | StreetFormThankYouPage
  | StreetFormPage
  | MeteredConnectionFormThankYouPage
  | MeteredConnectionFormPage
  | UnMeteredConnectionFormThankYouPage
  | UnMeteredConnectionFormPage
  | RadioButtonsWithImages
  | RadioButtonsWithMainImage
  | ICELandingPage
  | PowerCutPage
  | NewsListing
  | NewsArticle
  | PowerCutChecks

export type FormPages =
  | PSRFormPage
  | CatAFormPage
  | EmailFormPage
  | PowerCutFormPage
  | StreetFormPage
  | MeteredConnectionFormPage
  | UnMeteredConnectionFormPage

export type MainSitePages =
  | GenericPage
  | T2LandingPage
  | T3ContactUs
  | T4PsrLandingPage
  | T5InstallersLandingPage
  | T6SSContentOverview
  | T7ProjectContentOverview
  | T8SsCalculator
  | T9ApplicationStartOverview
  | NewsArticle
  | NewsListing
  | SearchResults

export type Components =
  | UsefulLinksType
  | RelatedContentType
  | DoubleCTAType
  | CtaFullWidthOffsetType
  | TextBoxesType
  | AccordionType
  | MediaTilesType
  | SocialLinksType
  | SimpleContentType
  | NavigationIconType
  | CtaFullWidthBoxType
  | MediaTilesType
  | SocialLinksType
  | ProcessGraphicType
  | ChecklistType
  | ImageGridType
  | ContactUsType
  | DoubleCtaNavIconImageType
  | LandingHeroBannerType
  | BannerCurvedType
  | RawHtml
  | TabbedContentType
  | TextWithVideoImageType
  | HelpAndAdviceType
  | NotificationType
  | PowerCutCurvedBannerType
  | AreaCheckerType
  | WhatsMyMpanType
  | HelpAndContactType
  | WhatServiceType
  | TableType
  | PowerCutComponentType
  | SubNavigationType
  | FeedbackCTAType
  | IsPowerOffCTAType
  | HomePageHeroBannerType
  | StormBodyType
  | DangerousSituationType
  | AnchorComponentType
  | NewsAndViews
  | Buttons5MaxType
  | PowerCutContactUsType
  | ImageCarouselType
  | SafeSpaceWidgetType
  | StormLandingBannerType
  | QuickLinkCardType
  | TextBoxWithCTAType

export interface CmsContentPage<T = CmsPage> {
  content: T
}

export interface ContentConnection {
  allContent: {
    __typename: string
    items: CmsPage[]
  }
}

export interface EmailSettingsData {
  allContent: {
    items: Array<{
      emailDetails: EmailSettings[]
    }>
  }
}

export interface RedirectsData {
  allPageRedirect: {
    items: Array<{
      pageURL: string
      destination: {
        url: string
      }
    }>
  }
}

export type CorePageProperties = PageBase & SiteSettings & PageMetadata

export type DocumentType = Form | FormByID
