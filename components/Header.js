import { useColorMode, useCustomTheme } from './CustomTheme'

import { AppBar, Container, Toolbar, Box, IconButton } from '@mui/material'
import Link from 'next/link'
import Logo from './Logo'
import { Dark, Light } from './Icons'

export default function Header() {
  const colorMode = useColorMode()

  const { palette } = useCustomTheme()
  return (
    <AppBar position="static" sx={{ boxShadow: 'none', mb: 3 }} color="inherit">
      <Container maxWidth="md">
        <Toolbar
          disableGutters={true}
          sx={{ justifyContent: 'space-between', p: 0 }}
        >
          <Logo />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Link href="/blog">Blog</Link>
            <Link href="/tags">Tags</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <IconButton onClick={colorMode.toggleColorMode}>
              {palette.mode === 'dark' ? <Light /> : <Dark />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
