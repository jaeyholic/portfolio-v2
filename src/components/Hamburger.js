import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "./Animations.js"
import { Box, Text } from "@chakra-ui/core"

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)
  let line5 = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1)
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
      staggerReveal(reveal1, reveal2)
      staggerText(line1, line2, line3, line4, line5)
    }
  }, [state])

  return (
    <Box ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <Box
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></Box>
      <Box ref={(el) => (reveal2 = el)} className="menu-layer">
        <Box mx="auto" className="container">
          <Box className="wrapper">
            <Box className="menu-links">
              <Box as="nav" m={0} p={0}>
                <Text
                  as="ul"
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  d="block"
                  w={{ base: "100%", md: 110, lg: 125 }}
                  px={{ base: 4, md: 0 }}
                  pos="relative"
                  overflow="hidden"
                  color="gray.800"
                  pt={8}
                >
                  <Text
                    as="li"
                    ref={(el) => (line1 = el)}
                    fontFamily="header"
                    h={{ base: 16, md: 24 }}
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#171923"
                      activeClassName="text-black"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/projects"
                    >
                      see my projects
                    </AniLink>
                  </Text>
                  <Text
                    as="li"
                    ref={(el) => (line2 = el)}
                    fontFamily="header"
                    h={{ base: 16, md: 24 }}
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#171923"
                      activeClassName="text-black"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/about"
                    >
                      more about me
                    </AniLink>
                  </Text>
                  <Text
                    as="li"
                    ref={(el) => (line3 = el)}
                    fontFamily="header"
                    h={{ base: 16, md: 24 }}
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#171923"
                      activeClassName="text-black"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/blogs"
                    >
                      my writings
                    </AniLink>
                  </Text>
                  <Text
                    as="li"
                    ref={(el) => (line4 = el)}
                    fontFamily="header"
                    h={{ base: 16, md: 24 }}
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#171923"
                      activeClassName="text-black"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to="/uses"
                    >
                      my uses
                    </AniLink>
                  </Text>
                  <Text
                    as="li"
                    ref={(el) => (line5 = el)}
                    fontFamily="header"
                    h={{ base: 16, md: 24 }}
                  >
                    <a
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      href="mailto:hello@jeffson.dev"
                    >
                      contact me
                    </a>
                  </Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hamburger
