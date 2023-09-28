export enum LinkType {
  CONTENT = 'CONTENT',
  EXTERNAL = 'EXTERNAL',
  MEDIA = 'MEDIA',
}

export interface Link {
  __typename?: string
  name: string
  type: LinkType
  target?: string
  udi?: string
  url: string
}

export enum LinkAppearance {
  PRIMARY = 'PrimaryButton',
  SECONDARY = 'SecondaryButton',
  TERTIARY = 'TertiaryButton',
  SEARCH = 'SearchLink',
  BREADCRUMB = 'breadcrumb',
  BLUE_ARROW = 'blueArrow',
  FACEBOOK_ARROW = 'facebookArrow',
  TWITTER_ARROW = 'twitterArrow',
  DOWNLOAD = 'Download',
  LOGIN = 'login',
  BACK = 'back',
  BOXED = 'boxed',
  BLANK = 'blank',
}
