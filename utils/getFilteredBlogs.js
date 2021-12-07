export default function getFilteredBlogs(blogs, tagName) {
  const filteredBlogs = blogs.filter((blog) => {
    const isTagExists = blog.tags.some(
      (tag) => tag.tag.toLowerCase() == tagName.toLowerCase()
    )
    if (isTagExists) return blog
  })

  return filteredBlogs
}
