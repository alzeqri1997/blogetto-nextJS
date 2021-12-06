import { Typography, Container, Box } from '@mui/material'
import Tags from '../../components/Tags'

export default function blog({ blog }) {
  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ pt: 8, pb: 6 }}>
        <Typography textAlign="center" component="p" variant="subtitle2">
          {blog.createdAt}
        </Typography>
        <Box display="flex" justifyContent="center">
          {blog.tags.map((tag) => (
            <Tags key={tag.id} tag={tag.tag} link={tag.link} />
          ))}
        </Box>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          borderBottom="1px solid #14ad9c"
          p="1rem 0"
          gutterBottom
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          component="p"
          lineHeight="1.334"
          textAlign="justify"
        >
          {blog.description}
        </Typography>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/blogs')
  const { blogs } = await res.json()

  const paths = await blogs.map((blog) => {
    return {
      params: {
        id: blog.id.toString(),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
  const { blog } = await res.json()

  return {
    props: { blog },
  }
}
