import { Typography, Grid, Avatar } from '@mui/material'
import avatarImg from '../public/images/avatar.webp'

export default function About() {
  return (
    <>
      <Typography
        borderBottom="1px solid #333"
        fontSize="4rem"
        fontWeight="bold"
        variant="h1"
      >
        About
      </Typography>

      <Grid sx={{ my: '1.5rem' }} container>
        <Grid sx={{ mb: '1.5rem' }} item xs={12} lg={5}>
          <Avatar
            sx={{ width: '200px', height: '200px', mx: 'auto' }}
            src={avatarImg.src}
            alt="Avatar"
          />
          <Typography mt="1rem" textAlign="center" variant="h4" color="primary">
            Ahmed Al-zeqri
          </Typography>
          <Typography mt=".5rem" textAlign="center" component="p" variant="p">
            Web Developer, JavaScript advocate
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Typography
            fontSize="1.1em"
            lineHeight="1.6"
            component="p"
            variant="p"
          >
            Tails Azimuth is a professor of atmospheric sciences at the Stanford
            AI Lab. His research interests includes complexity modelling of
            tailwinds, headwinds and crosswinds. He leads the clean energy group
            which develops 3D air pollution-climate models, writes differential
            equation solvers, and manufactures titanium plated air ballons. In
            his free time he bakes raspberry pi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed neque elit, tristique placerat
            feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent
            ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus
            tempus vulputate.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
