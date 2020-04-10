import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

//images
import Wave from "../images/waving.gif"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  Heading,
  Text,
  useColorMode,
  Box,
  Link,
  Image,
  Flex,
} from "@chakra-ui/core"

const IndexPage = () => {
  let app = useRef(null)
  // let image = useRef(null)
  let contents = useRef(null)
  let overlay = useRef(null)
  let content = useRef(null)

  const [tl] = useState(gsap.timeline({ delay: 1 }))

  useEffect(() => {
    //content Animation
    //Contents Animation
    const line1 = content.children[0]
    const line2 = line1.nextSibling
    const line3 = line2.nextSibling

    //Contents Animation
    const headlineFirst = contents.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const headlineFourth = headlineThird.nextSibling
    const paragraph = contents.children[1]
    const paragraph2 = contents.children[2]

    tl.staggerFrom(
      [line1, line2, line3],
      0.7,
      {
        y: 50,
        opacity: 0,
        ease: "power3.easeOut",
        delay: 0.8,
      },
      0.15,
      "Start"
    ).to(overlay, {
      duration: 0.7,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.05,
      },
    })

    //For Header
    tl.to(app, 0, {
      css: { visibility: "visible" },
    })

    // //Image
    // tl.from(image, 1.7, { y: 20, ease: "power3.easeOut" }, "Start").from(
    //   image.firstElementChild,
    //   2,
    //   {
    //     scale: 1.6,
    //     ease: "power3.easeOut",
    //   },
    //   1
    // )

    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird, headlineFourth],
      1.5,
      {
        y: 50,
        opacity: 0,
        ease: "power3.easeOut",
        delay: 1.8,
      },
      1.8,
      "Start"
    )
      .from(paragraph, 3.5, { y: 20, opacity: 0, ease: "power3.easeOut" }, 3.5)
      .from(paragraph2, 4.5, { y: 20, opacity: 0, ease: "power3.easeOut" }, 4.5)
  }, [tl])

  const { colorMode } = useColorMode()

  return (
    <Layout>
      <SEO title="Front-End Developer, UI/UX Designer" />

      <Box
        ref={(el) => (overlay = el)}
        bg="gray.900"
        w="100vw"
        h="100vh"
        pos="fixed"
        zIndex="9999"
        overflow="hidden"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Flex wrap="wrap" justify="center" align="center" h="100%">
          <Flex
            color="white"
            fontFamily="sans"
            fontSize="2xl"
            ref={(el) => (content = el)}
          >
            <Box className="px-3">Designer </Box>
            <Box className="px-3">Developer </Box>
            <Box className="px-3">Traveler</Box>
          </Flex>
        </Flex>
      </Box>

      <Box
        mt={{ base: 20, lg: 40 }}
        visibility="hidden"
        ref={(el) => (app = el)}
      >
        <Box
          ref={(el) => (contents = el)}
          w={{ base: "100%", lg: 127 }}
          px={{ base: 4, lg: 0 }}
        >
          <Heading
            as="h1"
            fontFamily="header"
            fontSize={{ base: "2xl", lg: "6xl" }}
            lineHeight={{ base: "32px", lg: "75px" }}
            id="header"
            color={colorMode === "light" ? "gray.800" : "gray.200"}
          >
            <Box>Hey there *waves*, I'm</Box>
            <Box>Felix Yeboah - Jefferson,</Box>
            <Box>UI designer, a developer </Box>
            <Box>and a nomad.</Box>
          </Heading>
          <Text fontSize={{ base: "base", lg: "xl" }} lineHeight="30px">
            A self-taught full-stack javascript web developer &amp; a
            design-minded, focused on building beautiful interfaces &
            experiences
            <span role="img" aria-label="computer man emoji">
              👨‍💻
            </span>
            . Apart from designing and developing, I enjoy traveling, learning
            new things, new cultures, and lifestyles of other people. I am a
            critical thinker who loves to find solutions to problems, not only
            in my line of work but also helps others who are struggling to find
            their feet in the designer's and developers' world.
          </Text>
          <Text fontSize={{ base: "base", lg: "xl" }} lineHeight="30px">
            My inbox is always open for any opportunities, whether for a
            potential project or just to say hi, I'll try my best to answer your
            email!
          </Text>
          <Text mt={16}>
            <Link
              pb={2}
              borderBottomWidth={2}
              borderBottomColor={colorMode === "light" ? "gray.800" : "white"}
              color={colorMode === "light" ? "gray.800" : "white"}
              _hover={{
                borderBottomWidth: 0,
                bg: colorMode === "light" ? "gray.600" : "gray.700",
              }}
              fontFamily="sans"
              fontSize="2xl"
              className="mail-link"
              href="mailto:hello@jeffson.dev"
            >
              Say hello: hello@jeffson.dev
            </Link>
          </Text>
        </Box>
        <Box>
          <Box mt={20}>
            <Projects limit />
          </Box>

          <Box textAlign="center" fontSize="xl" mt={6}>
            <Box as="button">
              <AniLink
                paintDrip
                duration={1}
                hex="#171923"
                className="project-link"
                to="/projects"
              >
                see all my projects
              </AniLink>
            </Box>
          </Box>

          <Box mt={40}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
