/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import theme from "./theme/theme"

import "./tailwind.css"
import "./index.scss"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
)
