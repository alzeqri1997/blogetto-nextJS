import { Typography, TextField } from '@mui/material'

export default function Title({
  title = 'Latest',
  description = 'A blog created with Next.js and Tailwind.css',
  isBlog = false,
  setSearchValue,
}) {
  const handleChange = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value.toLowerCase())
  }
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold', mb: '0' }}
        variant="h3"
        component="h1"
        gutterBottom
      >
        {title}
      </Typography>
      {!isBlog && (
        <Typography
          sx={{ fontWeight: 'lighter', fontSize: '1.2rem' }}
          variant="h5"
          component="p"
          gutterBottom
        >
          {description}
        </Typography>
      )}

      {isBlog && (
        <TextField
          style={{ width: '50%', marginTop: '1rem' }}
          id="input-with-sx"
          label="Search Articles"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
      )}
    </>
  )
}
