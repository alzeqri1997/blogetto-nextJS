import Title from '../components/Title'
import project1 from '../public/images/project-1.png'
import project2 from '../public/images/project-2.png'
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'

export default function Projects() {
  return (
    <>
      <Title title="Project" description="Showcase your projects here" />
      <Grid container spacing={3} pt={1} mt={3} borderTop="1px solid #333">
        <Grid item sm={12} md={6}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              height="50%"
              component="img"
              image={project1.src}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Memories App
              </Typography>
              <Typography>
                It&apos;s a web application that lets you create and save your
                memories.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://github.com/alzeqri1997/memories-client"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              height="50%"
              component="img"
              image={project2.src}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Banckist Website
              </Typography>
              <Typography>
                a fully responsive website using Html, Sass, and Javascript
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://github.com/alzeqri1997/bankist-website"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
