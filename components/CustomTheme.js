import * as React from 'react'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export function CustomTheme({ children }) {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#14ad9c',
          },
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  return React.useContext(ColorModeContext)
}

export function useCustomTheme() {
  const them = useTheme()
  return them
}
