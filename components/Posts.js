import Link from 'next/link'
import { Typography, Container, Grid, Card, CardContent } from '@mui/material'
import Tags from './Tags'

export default function Posts({ post }) {
  return (
    <Grid sx={{ borderTop: '1px solid #333', pt: 5, mt: 3 }} container>
      <Grid item xs={12} md={3}>
        {post.createdAt}
      </Grid>
      <Grid item xs={12} md={9}>
        <Container disableGutters={true} component="div" maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card
                sx={{
                  display: 'flex',
                  boxShadow: 'none',
                  backgroundImage: 'none',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{ display: 'flex' }}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {post.tags.map((tag, index) => (
                      <Tags key={index} tag={tag.tag} link={tag.link} />
                    ))}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description.split(' ').splice(0, 11).join(' ') +
                      '...'}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    <Link href={`/blogs/${post.id.toString()}`}>Read More</Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}
