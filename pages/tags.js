import { Grid, Typography, Box, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { getTags } from '../utils/getTags'

export default function Tags({ tags }) {
  const allTags = getTags(tags)

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height="clamp(200px , 60vh, 600px);"
    >
      <Grid sm={2} item my={10}>
        <Typography
          sx={{ fontSize: '3.5rem', lineHeight: '2.5rem', fontWeight: '800' }}
          variant="h1"
        >
          Tags
        </Typography>
      </Grid>
      <Grid item sm={7}>
        <Box display="flex" flexWrap="wrap">
          {allTags.map((tag, index) => {
            return (
              <div key={index} style={{ marginLeft: '1.25rem' }}>
                <Link href={`/tag/${tag.name.toLowerCase()}`} passHref>
                  <MuiLink
                    sx={{ fontWeight: 'light', mr: '.5rem' }}
                    underline="none"
                  >
                    {tag.name.toUpperCase()}
                  </MuiLink>
                </Link>
                <Typography
                  display="inline-block"
                  component="p"
                  variant="subtitle1"
                >{`(${tag.counter})`}</Typography>
              </div>
            )
          })}
        </Box>
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blogs')
  const { blogs } = await res.json()

  const tags = []

  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tags.push(tag)
    })
  })

  return {
    props: { tags },
  }
}
