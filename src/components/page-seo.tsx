import { Helmet } from "react-helmet-async"

interface PageSEOProps {
  title: string
  description: string
  canonicalPath: string
}

const BASE_URL = "https://blackvaultgroup.com"

export function PageSEO({ title, description, canonicalPath }: PageSEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${BASE_URL}${canonicalPath}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
