import pageTitle from 'data/title-meta-text'
import Head from 'next/head'
export interface TitleWithMetaProps {
  title: string
}

const TitleWithMeta = ({ title = pageTitle.index }: TitleWithMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex,follow" />
    </Head>
  )
}

export default TitleWithMeta
