import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Bars } from './Icons'

export default function MenuTrigger() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="info"
      >
        <Bars />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/blog">Blog</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/tags">Tags</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/projects">Projects</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/about">About</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
