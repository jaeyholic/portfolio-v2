import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {
  Heading,
  useColorMode,
  Box,
  Text,
  List,
  ListItem,
  Link,
  Stack,
} from "@chakra-ui/core"
import Editors from "../components/uses/Editors"
import DesktopApps from "../components/uses/DesktopApps"
import Services from "../components/uses/Services"

const Uses = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO title="Uses" />

      <Box
        mt={{ base: 20, lg: 32 }}
        px={{ base: 4, lg: 0 }}
        fontSize={{ base: "lg", lg: "xl" }}
        fontFamily="uses"
      >
        <Heading
          as="h1"
          fontFamily="bold"
          fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "tall", md: "normal", lg: "none" }}
          id="header"
          pb={2}
          color={`mode.${colorMode}.heading`}
        >
          Uses
        </Heading>
        <Box
          w={20}
          borderBottomWidth={4}
          borderBottomColor={`mode.${colorMode}.listItem`}
        />

        <Text mt={4} fontFamily="inherit">
          Last Updated:{" "}
          <Text as="span" fontFamily="list" fontStyle="italic">
            25/04/2020
          </Text>
        </Text>

        <Box w={{ base: "100%", lg: 127 }} mt={10}>
          <Text fontFamily="inherit">
            I don't get queries about my work environment so often, but just in
            case if you want to know, here are the tools, devices and services I
            use to get things done. These are not the best ones, but I
            personally feel these very comfortable. I consider this as a
            checklist too.
          </Text>

          <Stack>
            <Editors />
            <DesktopApps />
            <Services />
          </Stack>
        </Box>
      </Box>
    </Layout>
  )
}

export default Uses
