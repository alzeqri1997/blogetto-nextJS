import { Typography } from "@mui/material";
import style from "../styles/logo.module.css";

export default function Logo() {
  return (
    <Typography className={style.logo} variant='body1'>
      <span>B</span>loggeto
    </Typography>
  );
}
