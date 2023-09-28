import { ComponentsTypeName, Link } from '_types/CMS'

export interface FeedbackCTAType {
  __typename: ComponentsTypeName.FEEDBACK_CTA
  feedbackCTAs: FeedbackCTAItemType[]
}

export interface FeedbackCTAItemType {
  title: string
  text: string
  cTALink: Link
}
