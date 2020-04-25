import React from "react"
import {
  Heading,
  useColorMode,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/core"

const Devices = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt={20}>
      <Heading as="h5" fontFamily="bold" className="transform -skew-x-12">
        Devices
      </Heading>
      <Box mt={5}>
        <List styleType="square">
          <ListItem className="list-item">
            I use Macbook Pro 2017 as my main device.
          </ListItem>

          <ListItem className="list-item">
            I have{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://eu.jbl.com/JBL+LINK+20.html?dwvar_JBL%20LINK%2020_color=Black-EMEA-Current&cgid=bluetooth-portables#start=1"
            >
              JBL Link 20
            </Link>{" "}
            for music and everything sound.
          </ListItem>
          <ListItem className="list-item">
            I use Apple Magic Mouse 2 as well.
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Devices
