import React from 'react'
import { ThemeProvider } from 'styled-components'

import { myTheme } from './styles/Theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes } from './routes'

export const App: React.VFC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      {/* Global styles */}
      <GlobalStyles />

      {/* Routes */}
      <Routes />
    </ThemeProvider>
  )
}

export default App
