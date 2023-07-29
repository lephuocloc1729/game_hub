// theme.js
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
// 1. import `extendTheme` function

// 2. Add your color mode config
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme