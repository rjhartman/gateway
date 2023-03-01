import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    @media (min-width: 2000px) {
      font-size: 20px;
    }
    @media (min-width: 3000px) {
      font-size: 24px;
    }
  }

  body {
    background-color: #FFFAFA;
    font-family: 'Roboto', sans-serif;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
