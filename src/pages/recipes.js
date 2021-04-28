import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Recipies = () => {
  return (
    <Layout>
      <Seo title="Recipe" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipies
