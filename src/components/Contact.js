import React from "react"
import { Box, Heading, Text, Link, useColorMode } from "@chakra-ui/core"

const Contact = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={{ base: 4, lg: 0 }}>
      <Heading
        as="h2"
        color={`mode.${colorMode}.heading`}
        fontFamily="header"
        fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
        lineHeight={{ base: "tall", md: "normal", lg: "none" }}
      >
        Let’s work together
        <br /> on your next project.
      </Heading>
      <Box mt={16}>
        <Text
          fontFamily="display"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        >
          Email me
        </Text>
        <Link
          isExternal
          fontFamily="header"
          _hover={{ textDecor: "none" }}
          fontSize={{ base: "md", lg: "lg" }}
          className="mail-link"
          href="mailto:hello@jefson.dev"
        >
          hello@jefson.dev
        </Link>
      </Box>
    </Box>
  )
}

export default Contact
