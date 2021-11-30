import { Box, Typography, SvgIcon } from '@mui/material'
import Link from 'next/link'
import { GitHub, Email, LinkedIn, Twitter, Light, Dark } from './Icons'

export default function Footer({ description, title }) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'golden',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box display="flex" gap="1rem" mb="1rem">
        <GitHub />
        <Email />
        <LinkedIn />
        <Twitter />
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.github.com/alzeqri1997">
          Ahmed Al-Zeqri
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}
