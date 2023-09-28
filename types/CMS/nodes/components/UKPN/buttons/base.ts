import { PrimaryButton } from './primary-button'
import { SecondaryButton } from './secondary-button'
import { TertiaryButton } from './tertiary-button'
import { Video } from './video'
import { Download } from './download'

export type CTAButton =
  | PrimaryButton
  | SecondaryButton
  | TertiaryButton
  | Video
  | Download
