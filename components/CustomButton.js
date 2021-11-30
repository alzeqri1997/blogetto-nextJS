import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const customButtonTheme = ({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
})

const ColorButton = styled(Button)(customButtonTheme)

export default function CustomButton({ children }) {
  return (
    <ColorButton size="medium" variant="contained">
      {children}
    </ColorButton>
  )
}
