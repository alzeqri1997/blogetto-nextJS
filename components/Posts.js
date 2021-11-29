import Link from 'next/link'
import { Typography, Container, Grid, Card, CardContent } from '@mui/material'
import Tags from './Tags'
import { tags } from '../data'

export default function Posts() {
  return (
    <Grid sx={{ borderTop: '1px solid #333', pt: 5, mt: 3 }} container>
      <Grid item xs={12} md={3}>
        August 7, 2021
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
                    New features in v1
                  </Typography>
                  <Typography
                    sx={{ display: 'flex' }}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {tags.map((tag, index) => (
                      <Tags key={index} tag={tag.tag} link={tag.link} />
                    ))}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    An overview of the new features released in v1 - code block
                    copy, multiple authors, frontmatter layout and more
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    <Link href="/">Read More</Link>
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
