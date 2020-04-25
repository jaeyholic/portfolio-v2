import React from "react"
import {
  Heading,
  useColorMode,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/core"

const Services = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt={20}>
      <Heading as="h5" fontFamily="bold" className="transform -skew-x-12">
        Services
      </Heading>
      <Box mt={5}>
        <List styleType="square">
          <ListItem className="list-item">
            Music from{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.spotify.com/"
            >
              Spotify
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
              href="https://www.apple.com/apple-music/"
            >
              Apple Music
            </Link>
          </ListItem>

          <ListItem className="list-item">
            I mostly spend my days on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.youtube.com/"
            >
              Youtube
            </Link>{" "}
            watching tutorials and other relevant videos
          </ListItem>

          <ListItem className="list-item">
            All my studies on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://udemy.com/"
            >
              Udemy
            </Link>{" "}
          </ListItem>

          <ListItem className="list-item">
            Web hosting on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://netlify.com/"
            >
              Netlify
            </Link>
            ,{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.heroku.com/"
            >
              Heroku
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
              href="https://vercel.com/"
            >
              Now
            </Link>
          </ListItem>

          <ListItem className="list-item">
            I communicate with my clients mostly on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.slack.com/"
            >
              Slack
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
              href="https://www.whatsapp.com/"
            >
              WhatsApp
            </Link>
          </ListItem>

          <ListItem className="list-item">
            I listen to my podcasts on Apple PodCasts
          </ListItem>

          <ListItem className="list-item">
            I register my domains on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.namecheap.com/"
            >
              Namecheap
            </Link>
          </ListItem>

          <ListItem className="list-item">
            News feeds on{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.medium.com/"
            >
              Medium
            </Link>
            ,{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://www.reddit.com/"
            >
              Reddit
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
              href="https://dev.to/"
            >
              Dev.to
            </Link>
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
              href="https://www.github.com/"
            >
              GitHub
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
              href="https://www.gitlab.com/"
            >
              Gitlab
            </Link>{" "}
            for version control.
          </ListItem>

          <ListItem className="list-item">
            My package Managers are{" "}
            <Link
              pos="relative"
              transform="rotate(-2deg)"
              _hover={{ textDecor: "none" }}
              borderBottomWidth={4}
              borderBottomColor={`mode.${colorMode}.listItem`}
              fontFamily="link"
              isExternal
              href="https://yarnpkg.com/"
            >
              Yarn
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
              href="https://pipenv.pypa.io/en/latest/"
            >
              Pipenv
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Services
