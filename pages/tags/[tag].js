import { useRouter } from 'next/router'
import { useState } from 'react'
import Title from '../../components/Title'
import Posts from '../../components/Posts'
import displayBlogs from '../../utils/displayBlogs'
import getFilteredBlogs from '../../utils/getFilteredBlogs'

export default function SingleTag({ data }) {
  const { tag } = useRouter().query
  const { blogs } = data
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogs = getFilteredBlogs(blogs, tag)

  const getBlogs = displayBlogs(filteredBlogs, searchValue)

  return (
    <>
      <Title
        title={tag.toUpperCase()}
        isBlog={true}
        setSearchValue={setSearchValue}
      />
      {getBlogs.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/tags')
  const { tags } = await res.json()

  const paths = await tags.map((tag) => {
    return {
      params: {
        tag: tag.tag.toLowerCase(),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blogs')
  const data = await res.json()

  return {
    props: { data },
  }
}
