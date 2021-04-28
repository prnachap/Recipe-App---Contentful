import React from "react"
import RecipeList from "./RecipeList"
import TagList from "./TagList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          title
        }
        cookTime
        prepTime
        content {
          tags
        }
        title
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipeList recipes={recipes.slice(0, 4)} />
    </section>
  )
}

export default AllRecipes
