import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Img from "gatsby-image"
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/core"

const Projects = ({ title, text, img, link }) => {
  let app = useRef(null)
  let image = useRef(null)
  let contents = useRef(null)

  const [tl] = useState(gsap.timeline({ delay: 0.8 }))

  useEffect(() => {
    //For Header
    tl.to(app, 0, {
      css: { visibility: "visible" },
    })

    //Image
    tl.from(image, 1.2, { y: 20, ease: "power3.easeOut" }, "Start").from(
      image.firstElementChild,
      2,
      {
        scale: 1.6,
        ease: "power3.easeOut",
      },
      0.2
    )

    //Contents Animation
    const headlineFirst = contents.children[0]
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
      0.15,
      "Start"
    )
  }, [tl])

  return (
    <Flex
      wrap="wrap"
      my={{ base: 16, lg: 20 }}
      px={{ base: 4, lg: 0 }}
      ref={(el) => (app = el)}
    >
      <Box w={{ base: "100%", lg: 3 / 5 }}>
        <Box ref={(el) => (image = el)}>
          <Img fluid={img} />
        </Box>
      </Box>

      <Box
        w={{ base: "100%", lg: 2 / 5 }}
        pl={{ lg: 10 }}
        mt={{ base: 4, lg: 0 }}
      >
        <Flex justify="center" align="center" h="100%">
          <Box ref={(el) => (contents = el)}>
            <Heading as="h3" fontSize="3xl">
              {title}
            </Heading>
            <Text my={4} fontSize="lg">
              {text}
            </Text>
            <Link
              isExternal
              fontSize={{ base: "base", lg: "lg" }}
              textDecoration="none"
              _hover={{ textDecor: "none" }}
              className="project-link"
              href={link}
            >
              Visit {title}
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Projects
