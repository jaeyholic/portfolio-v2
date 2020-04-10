import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import Values from "../components/Values"
import { Box, Heading, Text, useColorMode, Link, Flex } from "@chakra-ui/core"

const SecondPage = () => {
  let app = useRef(null)
  let contents = useRef(null)
  let image = useRef(null)

  const [tl] = useState(gsap.timeline({ delay: 1 }))

  useEffect(() => {
    //For Header
    tl.to(app, 0, { css: { visibility: "visible" } })

    //Contents Animation
    const headlineFirst = contents.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling

    tl.from(image, 1.2, { y: 20, ease: "power3.easeOut" }, "Start").from(
      image.firstElementChild,
      1,
      {
        scale: 1.6,
        ease: "power3.easeOut",
        stagger: {
          amount: 0.05,
        },
      },
      1
    )

    tl.staggerFrom(
      [headlineFirst, headlineSecond],
      1,
      {
        y: 50,
        opacity: 0,
        ease: "power3.easeOut",
        delay: 0.8,
      },
      1,
      "Start"
    )
  }, [tl])

  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { colorMode } = useColorMode()

  return (
    <Layout>
      <SEO title="About" />
      <Box
        mt={{ base: 20, lg: 40 }}
        px={{ base: 4, lg: 0 }}
        ref={(el) => (app = el)}
      >
        <Box ref={(el) => (contents = el)}>
          <Heading
            as="h2"
            fontFamily="header"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            w={{ lg: 127 }}
            color={`mode.${colorMode}.heading`}
          >
            <Box>I Design and,</Box>
            <Box>Develop for the web.</Box>
          </Heading>
        </Box>

        <Box
          w="100%"
          overflow="hidden"
          mx="auto"
          mt={20}
          ref={(el) => (image = el)}
        >
          <Img fluid={data.me.childImageSharp.fluid} />
        </Box>

        <Box
          fontSize={{ base: "xl", lg: "2xl" }}
          w={{ lg: 135 }}
          mt={{ base: 12, lg: 20 }}
          lineHeight="short"
          fontFamily="medium"
        >
          <Text>
            A self-taught Full-Stack Javascript Web Developer and UI/UX Designer
            from Accra, Ghana. I am super passionate about design, development,
            traveling, and a fanatic of all things digital. I have been very
            fortunate to be able to do all as a career.
          </Text>
          <Text fontFamily="header" color={`mode.${colorMode}.heading`}>
            I consider myself as a learner, a life-long learner.
          </Text>
          <Text>
            I{" "}
            <Text as="span" textDecoration="line-through">
              drink
            </Text>{" "}
            coffee, and I eat pizza. I listen to a lot of music. I write code
            and improve my design and skills every day: a fast learner and a
            person who's always humble to learn and grow in all areas. I feel
            honored to have worked with extraordinary people, startups, and
            companies that helped to improve not only my skills but also my
            life.
          </Text>

          <Text>
            I{" "}
            <Text as="span" fontFamily="medium">
              currently
            </Text>{" "}
            work with{" "}
            <Link
              isExternal
              color={`mode.${colorMode}.link`}
              _hover={{ color: `mode.${colorMode}.heading` }}
              textDecoration="underline"
              fontFamily="medium"
              href="https://beeandbloom.digital"
            >
              Bee &amp; Bloom Digital
            </Link>{" "}
            as a Frontend Developer &amp; UI/UX Designer &amp;{" "}
            <Link
              isExternal
              color={`mode.${colorMode}.link`}
              _hover={{ color: `mode.${colorMode}.heading` }}
              textDecoration="underline"
              fontFamily="medium"
              href="https://completefarmer.com"
            >
              Complete Farmer Limited
            </Link>{" "}
            as a freelance Frontend Developer.
          </Text>
        </Box>

        <Flex wrap="wrap" mt={20}>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Skills />
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Values />
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default SecondPage
