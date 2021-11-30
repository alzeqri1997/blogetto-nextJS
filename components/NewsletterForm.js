import { Typography, Box, TextField, Button } from '@mui/material'
import CustomButton from '../components/CustomButton'

export default function NewsletterForm() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Typography variant="h6" gutterBottom>
          Subscribe to the newsletter
        </Typography>
        <Box alignItems="center" component="form" noValidate autoComplete="off">
          <TextField
            sx={{ mr: '1rem' }}
            id="outlined-basic"
            label="Enter your Email"
            variant="outlined"
            size="small"
          />
          <CustomButton variant="contained">sign up</CustomButton>
        </Box>
      </div>
    </Box>
  )
}
