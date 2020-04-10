import React, { useState, useEffect } from "react"
import { globalHistory } from "@reach/router/lib/history"
import { Link as ReachLink } from "gatsby"
import Hamburger from "./Hamburger"
import { Flex, Box, Link, useColorMode, Button } from "@chakra-ui/core"
import MemoMoon from "./Moon"
import MemoSun from "./Sun"

const Nav = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  })

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      })
    }
  }

  //determine if menu btn should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  useEffect(() => {
    globalHistory.listen(() => {
      setState({ clicked: false, menuName: "Menu" })
    })
  })

  const duration = 30000

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header className="flex items-center h-24">
      <Box className="container" mx="auto">
        <Flex
          pos="absolute"
          wrap="wrap"
          zIndex={10}
          align="center"
          justify="space-between"
          px={{ base: 4, md: 0 }}
          mx="auto"
          className="container logo"
        >
          <Box>
            <Link
              as={ReachLink}
              color={colorMode === "light" ? "gray.800" : "white"}
              fontFamily="display"
              fontSize="4xl"
              to="/"
            >
              Jeff.son
            </Link>
          </Box>

          <Flex>
            <Box
              as="button"
              color={colorMode === "light" ? "gray.800" : "white"}
              className="menu"
            >
              <button
                className="focus:outline-none"
                disabled={disabled}
                onClick={handleMenu}
              >
                Menu
              </button>
            </Box>

            <Box
              transition={colorMode && `all ${duration}ms ease`}
              ml={{ base: 6, md: 4 }}
              as="button"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <Box color="gray.700">
                  <MemoMoon />
                </Box>
              ) : (
                <Box color="gray.200">
                  <MemoSun />
                </Box>
              )}
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Hamburger state={state} />
    </header>
  )
}

export default Nav
