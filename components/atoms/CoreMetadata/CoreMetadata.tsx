import { CmsPage } from '_types/CMS'
import Head from 'next/head'

export interface CoreMetadataProps {
  data: CmsPage
}

const CoreMetadata = ({ data }: CoreMetadataProps) => {
  return (
    <Head>
      <title>{data.seoTitle || data.pageTitle}</title>
      {data.seoDescription && (
        <meta name="description" content={data.seoDescription} />
      )}
      <link rel="icon" href="/favicon.ico" />
      {!!data.hideFromSearchEngines && <meta name="robots" content="noindex" />}
    </Head>
  )
}

export default CoreMetadata
