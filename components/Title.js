import { Typography } from '@mui/material'

export default function Title() {
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold' }}
        variant="h3"
        component="h1"
        gutterBottom
      >
        Sticky footer
      </Typography>
      <Typography
        sx={{ fontWeight: 'lighter', fontSize: '1.2rem' }}
        variant="h5"
        component="p"
        gutterBottom
      >
        {'Pin a footer to the bottom of the viewport.'}
        {'The footer will move as the main element of the page grows.'}
      </Typography>
    </>
  )
}
