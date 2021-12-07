export default function displayBlogs(blogs, searchValue) {
  const displayBlogs =
    blogs.lenth > 0 && !searchValue
      ? blogs
      : blogs.filter((blog) => blog.title.toLowerCase().includes(searchValue))

  return displayBlogs
}
