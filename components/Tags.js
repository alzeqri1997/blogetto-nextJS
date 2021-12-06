import { Box } from '@mui/system'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'

export default function Tags({ tag, link }) {
  return (
    <Box style={{ marginRight: '.5rem' }}>
      <Link href={`/api/${link}`} passHref>
        <MuiLink sx={{ fontWeight: 'light' }} underline="none">
          {tag.toUpperCase()}
        </MuiLink>
      </Link>
    </Box>
  )
}
