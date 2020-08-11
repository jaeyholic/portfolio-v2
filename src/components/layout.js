/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useColorMode, Box } from "@chakra-ui/core"

import "./layout.css"
import Nav from "./Nav"
import Footer from "./Footer"
import customTheme from "../../theme/theme"

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  const brandColorTheme = customTheme.colors.mode[colorMode]

  const duration = 350

  return (
    <Box
      pos="relative"
      fontFamily="sans"
      borderTopWidth={8}
      borderTopColor="yellow.400"
      overflow="hidden"
      color={brandColorTheme.text}
      transition={
        colorMode === "light"
          ? `background ${duration}ms ease-out`
          : `background ${duration}ms ease-in`
      }
      bg={brandColorTheme.bg}
    >
      <Nav />
      <Box>
        <Box mx="auto" className="container">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
