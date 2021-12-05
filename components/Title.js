import { Typography, Box, TextField } from '@mui/material'
import { GitHub, Github } from './Icons'

export default function Title({ isBlog = false }) {
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold', mb: '0' }}
        variant="h3"
        component="h1"
        gutterBottom
      >
        Latest
      </Typography>
      {!isBlog && (
        <Typography
          sx={{ fontWeight: 'lighter', fontSize: '1.2rem' }}
          variant="h5"
          component="p"
          gutterBottom
        >
          A blog created with Next.js and Tailwind.css
        </Typography>
      )}

      {isBlog && (
        <TextField
          style={{ width: '50%', marginTop: '1rem' }}
          id="input-with-sx"
          label="Search Articles"
          variant="outlined"
        />
      )}
    </>
  )
}
