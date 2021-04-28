import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const data = useStaticQuery(query)
  const desc = description ? description : data.site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[{ name: `description`, content: desc }]}
    ></Helmet>
  )
}

export default Seo
