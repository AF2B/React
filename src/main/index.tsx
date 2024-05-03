import { theme } from '@/context/theme'
import Login from '@/presentation/pages/login/login'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <Login />
  </ThemeProvider>,
  document.getElementById('main')
)
