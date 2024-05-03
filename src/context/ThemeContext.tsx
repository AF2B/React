import { createContext } from 'react'

export const ThemeContext = createContext({
  colors: {
    primary: '#000',
    secondary: '#fff'
  },
  fonts: {
    main: 'Arial',
    secondary: 'Verdana'
  }
})
