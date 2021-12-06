import { useState } from 'react'
import Title from '../components/Title'
import Posts from '../components/Posts'

export default function Blog({ data }) {
  const { blogs } = data
  const [searchValue, setSearchValue] = useState('')

  const displayBlogs =
    blogs.lenth > 0 && !searchValue
      ? blogs
      : blogs.filter((blog) => blog.title.toLowerCase().includes(searchValue))

  return (
    <>
      <Title title="All Posts" isBlog={true} setSearchValue={setSearchValue} />
      {displayBlogs.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blogs')
  const data = await res.json()

  return {
    props: { data },
  }
}
