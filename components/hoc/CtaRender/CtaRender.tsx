import { CTAButton } from '_types/CMS/nodes/components/UKPN/buttons/base'
import { ButtonAppearance, ButtonColors, LinkType } from '_types/CMS'
import Link from '_atoms/Button&Link/Link/Link'
export interface CtaRenderProps {
  cta: CTAButton
  className?: string
  color?: ButtonColors
  tabIndex?: number
}

const CtaRender = ({ color, className, tabIndex, cta }: CtaRenderProps) => {
  const colorValue = !!color ? color : ButtonColors.DARK

  return cta.uRL ? (
    <>
      {cta.__typename !== ButtonAppearance.VIDEO ? (
        <Link
          download={cta.uRL.type === LinkType.MEDIA}
          appearance={cta.__typename}
          target={cta.uRL.target}
          className={className}
          tabIndex={tabIndex}
          url={cta.uRL.url}
          color={colorValue}
        >
          {cta.uRL.name}
        </Link>
      ) : null}
    </>
  ) : null
}

export default CtaRender
