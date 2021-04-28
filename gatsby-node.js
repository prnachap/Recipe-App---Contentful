const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const newSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${newSlug}`,
        component: path.resolve(`src/templates/tags-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
