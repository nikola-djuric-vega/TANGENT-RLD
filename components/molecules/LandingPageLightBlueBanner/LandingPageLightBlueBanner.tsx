import React from 'react'
import RelatedContent from '_molecules/RelatedContent/RelatedContent'
import {
  ModuleColors,
  RelatedContentItem,
} from '_types/CMS/nodes/components/UKPN'
import {
  ButtonColors,
  ComponentsTypeName,
  LinkAppearance,
  LinkType,
} from '_types/CMS'
import {
  RLDBlobGlobalData,
  useRLDBlobGlobalData,
} from '_context/rld-blob-global-data'

const LandingPageLightBlueBanner = () => {
  const { microSiteData } = useRLDBlobGlobalData() as RLDBlobGlobalData

  const linkProp: RelatedContentItem[] = [
    {
      serviceTitle: microSiteData?.landingPage?.lightBlueBanner?.heading,
      serviceCopyText: microSiteData?.landingPage?.lightBlueBanner?.message,
      cTAButton: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'https://www.powercut105.com/',
            name: microSiteData?.landingPage?.lightBlueBanner?.cta as string,
          },
          cTAType: ButtonColors.DARK,
        },
      ],
    },
  ]

  return (
    <RelatedContent
      __typename={ComponentsTypeName.RELATED_CONTENT}
      moduleColor={ModuleColors.DEFAULT}
      links={linkProp}
    />
  )
}

export default LandingPageLightBlueBanner
