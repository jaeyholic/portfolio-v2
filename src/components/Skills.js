import React from "react"
import { Heading, Box, Flex, Text, useColorMode } from "@chakra-ui/core"

const Skills = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={{ base: 4, lg: 0 }}>
      <Heading
        as="h1"
        fontFamily="display"
        fontSize={{ base: "3xl", lg: "5xl" }}
      >
        My Skills.
      </Heading>

      <Flex wrap="wrap" mt={10}>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box mb={6}>
            <Heading
              as="h5"
              fontSize={{ base: "lg", lg: "2xl" }}
              fontFamily="medium"
              mb={3}
            >
              UI Design
            </Heading>
            <Text
              as="ul"
              color={`mode.${colorMode}.list`}
              fontSize={{ base: "base", lg: "xl" }}
              lineHeight="none"
            >
              <Text as="li">Sketch</Text>
              <Text as="li">Adobe XD</Text>
            </Text>
          </Box>

          <Box mb={6}>
            <Heading
              as="h5"
              fontSize={{ base: "lg", lg: "2xl" }}
              fontFamily="medium"
              mb={3}
            >
              Designs
            </Heading>
            <Text
              as="ul"
              color={`mode.${colorMode}.list`}
              fontSize={{ base: "base", lg: "xl" }}
              lineHeight="none"
            >
              <Text as="li">InDesign</Text>
              <Text as="li">Photoshop</Text>
              <Text as="li">Illustrator</Text>
            </Text>
          </Box>

          <Box>
            <Heading
              as="h5"
              fontSize={{ base: "lg", lg: "2xl" }}
              fontFamily="medium"
              mb={3}
            >
              Languages
            </Heading>
            <Text
              as="ul"
              color={`mode.${colorMode}.list`}
              fontSize={{ base: "base", lg: "xl" }}
              lineHeight="none"
            >
              <Text as="li">HTML & CSS</Text>
              <Text as="li">JavaScript (ES6)</Text>
              <Text as="li">TypeScript</Text>
            </Text>
          </Box>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <Box>
            <Heading
              as="h5"
              fontSize={{ base: "lg", lg: "2xl" }}
              fontFamily="medium"
              mb={3}
            >
              Tools
            </Heading>
            <Text
              as="ul"
              color={`mode.${colorMode}.list`}
              fontSize={{ base: "base", lg: "xl" }}
              lineHeight="none"
            >
              <Text as="li">React</Text>
              <Text as="li">Vue</Text>
              <Text as="li">Express</Text>
              <Text as="li">Gatsby</Text>
              <Text as="li">Gridsome</Text>
              <Text as="li">Wordpress</Text>
              <Text as="li">Node.js</Text>
              <Text as="li">MongoDB</Text>
              <Text as="li">Git & Github</Text>
              <Text as="li">Chrome DevTools</Text>
              <Text as="li">Postman</Text>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Skills
