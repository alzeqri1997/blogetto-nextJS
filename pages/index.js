import Title from '../components/Title'
import Posts from '../components/Posts'
import NewsletterForm from '../components/NewsletterForm'

export default function Home({ data }) {
  const { blogs } = data
  return (
    <>
      <Title />
      {blogs.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
      <NewsletterForm />
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
