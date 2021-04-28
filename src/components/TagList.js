import { Link } from "gatsby"
import React from "react"
import setUpTags from "../utils/setupTags"
import slugify from "slugify"

const TagList = ({ recipes }) => {
  const tags = setUpTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag
          const newSlug = slugify(text, { lower: true })
          return (
            <Link key={index} to={`/tags/${newSlug}`}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
