import {
  DoubleCTAType,
  CtaFullWidthOffsetType,
  LandingHeroBannerType,
  MediaTilesType,
  BannerCurvedType,
  RelatedContentType,
  CtaFullWidthBoxType,
  UsefulLinksType,
  RawHtml,
  SocialLinksType,
  NavigationIconType,
  ChecklistType,
  ProcessGraphicType,
  ImageGridType,
  ContactUsType,
  DoubleCtaNavIconImageType,
  TextWithVideoImageType,
  HelpAndAdviceType,
  AccordionType,
  TabbedContentType,
  PowerCutCurvedBannerType,
  AreaCheckerType,
  SimpleContentType,
  HelpAndContactType,
  WhatsMyMpanType,
  TableType,
  WhatServiceType,
  SubNavigationType,
  FeedbackCTAType,
  IsPowerOffCTAType,
  HomePageHeroBannerType,
  StormBodyType,
  DangerousSituationType,
  AnchorComponentType,
  Buttons5MaxType,
  PowerCutContactUsType,
} from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T2LandingPage
export type T2LandingPageComponents =
  | LandingHeroBannerType
  | UsefulLinksType
  | DoubleCTAType
  | CtaFullWidthOffsetType
  | BannerCurvedType
  | MediaTilesType
  | RelatedContentType
  | CtaFullWidthBoxType
  | RawHtml
  | NavigationIconType
  | SocialLinksType
  | ProcessGraphicType
  | ChecklistType
  | ImageGridType
  | ContactUsType
  | DoubleCtaNavIconImageType
  | TextWithVideoImageType
  | HelpAndAdviceType
  | AccordionType
  | TabbedContentType
  | PowerCutCurvedBannerType
  | AreaCheckerType
  | HelpAndContactType
  | SimpleContentType
  | WhatServiceType
  | WhatsMyMpanType
  | TableType
  | SubNavigationType
  | FeedbackCTAType
  | IsPowerOffCTAType
  | HomePageHeroBannerType
  | StormBodyType
  | DangerousSituationType
  | AnchorComponentType
  | Buttons5MaxType
  | PowerCutContactUsType

export interface T2LandingPage extends CorePageProperties {
  __typename: PageTypeNames.T2_LANDING_PAGE
  applyPowerCutNavigation?: boolean
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components: T2LandingPageComponents[]
}
