import { Typography } from '@mui/material'
import style from '../styles/logo.module.css'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Typography className={style.logo} variant="body1">
        <span>B</span>loggeto
      </Typography>
    </Link>
  )
}
