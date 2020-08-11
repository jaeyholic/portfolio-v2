import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import { Box, Heading, useColorMode } from "@chakra-ui/core"

const Portfolio = () => {
  let app = useRef(null)
  let contents = useRef(null)

  const [tl] = useState(gsap.timeline({ delay: 1 }))

  useEffect(() => {
    //For Header
    tl.to(app, 0, { css: { visibility: "visible" } })

    //Contents Animation
    const headlineFirst = contents.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling

    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird],
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

  const { colorMode } = useColorMode()

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Box mt={20} visibility="invisible" ref={(el) => (app = el)}>
        <Box px={{ base: 4, lg: 0 }} ref={(el) => (contents = el)}>
          <Heading
            fontFamily="header"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight="none"
            color={`mode.${colorMode}.heading`}
          >
            <Box>Projects completed, projects</Box>
            <Box>contributed to and projects</Box>
            <Box>got featured on.</Box>
          </Heading>
        </Box>

        <Box>
          <Projects />
        </Box>
      </Box>
    </Layout>
  )
}

export default Portfolio
