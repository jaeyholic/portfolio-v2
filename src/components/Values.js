import React from "react"
import { useColorMode, Box, Heading, Text } from "@chakra-ui/core"

const Values = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={{ base: 4, lg: 0 }} mt={{ base: 10, lg: 0 }}>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", lg: "5xl" }}
        fontFamily="display"
      >
        Values.
      </Heading>

      <Box mt={{ base: 5, lg: 10 }}>
        <Box>
          <Heading
            as="h5"
            fontFamily="medium"
            fontSize={{ base: "lg", lg: "2xl" }}
            mb={1}
          >
            Good design is good business
          </Heading>
          <Text
            color={`mode.${colorMode}.list`}
            fontSize={{ base: "base", lg: "xl" }}
            lineHeight="normal"
          >
            It’s not only about beauty, it has to work.
          </Text>
        </Box>

        <Box mt={{ base: 5, lg: 10 }}>
          <Heading
            as="h5"
            fontFamily="medium"
            fontSize={{ base: "lg", lg: "2xl" }}
            mb={1}
          >
            Never not learning
          </Heading>
          <Text
            color={`mode.${colorMode}.list`}
            fontSize={{ base: "base", lg: "xl" }}
            lineHeight="normal"
          >
            There’s always something new to learn.
          </Text>
        </Box>

        <Box mt={{ base: 5, lg: 10 }}>
          <Heading
            as="h5"
            fontFamily="medium"
            fontSize={{ base: "lg", lg: "2xl" }}
            mb={1}
          >
            Get to the root of the problem
          </Heading>
          <Text
            color={`mode.${colorMode}.list`}
            fontSize={{ base: "base", lg: "xl" }}
            lineHeight="normal"
          >
            To come up with the best solution.
          </Text>
        </Box>

        <Box mt={{ base: 5, lg: 10 }}>
          <Heading
            as="h5"
            fontFamily="medium"
            fontSize={{ base: "lg", lg: "2xl" }}
            mb={1}
          >
            Keep it simple
          </Heading>
          <Text
            color={`mode.${colorMode}.list`}
            fontSize={{ base: "base", lg: "xl" }}
            lineHeight="normal"
          >
            Why make it complicated?
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Values
