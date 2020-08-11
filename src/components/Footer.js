import React from "react"
import {
  FaGithub,
  FaInstagram,
  FaMedium,
  FaDev,
  FaTwitter,
} from "react-icons/fa"
import { Box, Flex, Heading, Text, Link, useColorMode } from "@chakra-ui/core"

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      mx="auto"
      mt={{ base: 24, lg: 48 }}
      mb={8}
      px={{ base: 2, md: 0 }}
      className="container"
      color={`mode.${colorMode}.text`}
    >
      <Flex wrap="wrap" justify="space-between" align="center">
        <Heading as="h5" fontFamily="bold">
          Jeff.son
        </Heading>
        <Box d={{ base: "none", lg: "flex" }} fontSize="lg">
          Have a great day.{" "}
          <Text as="span" role="img" aria-label="kiss emoji">
            😘
          </Text>
        </Box>
        <Text as="ul" d={{ base: "none", md: "flex" }}>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://github.com/jaeyholic"
            >
              GitHub
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://instagram.com/jaeyholic"
            >
              Instagram
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://medium.com/@jaeyholic"
            >
              Medium
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://dev.to/jaeyholic"
            >
              Dev.to
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://twitter.com/jaeyholic"
            >
              Twitter
            </Link>
          </Text>
        </Text>

        <Text as="ul" d={{ base: "flex", md: "none" }}>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://github.com/jaeyholic"
            >
              <FaGithub />
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://instagram.com/jaeyholic"
            >
              <FaInstagram />
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://medium.com/@jaeyholic"
            >
              <FaMedium />
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://dev.to/jaeyholic"
            >
              <FaDev />
            </Link>
          </Text>
          <Text as="li" px={4}>
            <Link
              isExternal
              _hover={{ color: `mode.${colorMode}.list` }}
              className="transition duration-200 ease-in-out"
              href="https://twitter.com/jaeyholic"
            >
              <FaTwitter />
            </Link>
          </Text>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
