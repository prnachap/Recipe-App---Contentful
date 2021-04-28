const setUpTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (tag in allTags) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 0
      }
    })
  })
  const newTag = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return newTag
}
export default setUpTags
