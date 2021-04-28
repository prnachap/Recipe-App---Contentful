import React from "react"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const TagTemplate = ({ data, pageContext: { tag } }) => {
  console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
