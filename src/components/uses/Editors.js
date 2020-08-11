import React from "react"
import {
  Heading,
  useColorMode,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/core"

const Editors = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt={20}>
      <Heading as="h5" fontFamily="bold" className="transform -skew-x-12">
        Editor + Terminal
      </Heading>
      <Box mt={5}>
        <List styleType="square">
          <ListItem className="list-item">
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://code.visualstudio.com/"
            >
              Visual Studio Code
            </Link>{" "}
            is my current editor which I switched to in September 2017 after
            years of Sublime Text.
          </ListItem>

          <ListItem className="list-item">
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.jetbrains.com/"
            >
              Pycharm &amp; Webstorm
            </Link>{" "}
            from Jetbrains are also IDEs i use depending on the project or if i
            am bored using VSCode.
          </ListItem>

          <ListItem className="list-item">
            I use{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.typography.com/fonts/operator/overview"
            >
              Operator Mono
            </Link>{" "}
            in VS Code, my Jetbrain IDEs and Hyper Term
          </ListItem>

          <ListItem className="list-item">
            I'm currently switching between Firefox Developer and Microsoft Edge
            as my main browser
          </ListItem>

          <ListItem className="list-item">
            I currently use{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.iterm2.com/"
            >
              Iterm2
            </Link>{" "}
            for my terminal
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Editors
