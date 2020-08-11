import React from "react"
import {
  Heading,
  useColorMode,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/core"

const DesktopApps = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt={20}>
      <Heading as="h5" fontFamily="bold" className="transform -skew-x-12">
        Desktop Apps
      </Heading>
      <Box mt={5}>
        <List styleType="square">
          <ListItem className="list-item">
            I'm a huge{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.alfredapp.com/"
            >
              Alfred
            </Link>{" "}
            fan and i love using it due to it's ease of use.
          </ListItem>

          <ListItem className="list-item">
            I design almost entirely in{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.sketch.com/"
            >
              Sketch
            </Link>{" "}
            and{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.adobe.com/products/xd.html"
            >
              Adobe XD
            </Link>
          </ListItem>

          <ListItem className="list-item">
            The cool Emoji picker i use for my projects is{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://matthewpalmer.net/rocket/"
            >
              Rocket
            </Link>{" "}
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
              href="https://bear.app/"
            >
              Bear
            </Link>{" "}
            and{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://simplenote.com/"
            >
              Simplenote
            </Link>{" "}
            to manage all my tasks and notes.
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
              href="https://www.postman.com/"
            >
              Postman
            </Link>{" "}
            for all my api endpoints testing.
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default DesktopApps
