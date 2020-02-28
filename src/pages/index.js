import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

//images
import Wave from "../images/waving.gif"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  let app = useRef(null)
  let image = useRef(null)
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

    //Image
    tl.from(image, 1.7, { y: 20, ease: "power3.easeOut" }, "Start").from(
      image.firstElementChild,
      2,
      {
        scale: 1.6,
        ease: "power3.easeOut",
      },
      1
    )

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

  return (
    <Layout>
      <SEO title="Front-End Developer, UI/UX Designer" />

      <div ref={el => (overlay = el)} className="overlay">
        <div className="flex flex-wrap justify-center items-center h-full">
          <div
            ref={el => (content = el)}
            className="flex text-white font-sans text-2xl"
          >
            <div className="px-3">Designer </div>
            <div className="px-3">Developer </div>
            <div className="px-3">Traveler</div>
          </div>
        </div>
      </div>

      <div ref={el => (app = el)} className="mt-20 lg:mt-40 invisible">
        <div ref={el => (image = el)} className="block">
          <img className="h-12" src={Wave} alt="Wave" />
        </div>

        <div
          ref={el => (contents = el)}
          className="w-full lg:w-127 px-4 lg:px-0"
        >
          <h1
            className="font-header text-3xl lg:text-5xl leading-none"
            id="header"
          >
            <div>Hey there *waves*, my name is</div>
            <div>Felix Yeboah - Jefferson, UI</div>
            <div>designer, a developer and a</div>
            <div>traveler.</div>
          </h1>
          <p className="text-xl leading-normal">
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
          </p>
          <p className="text-xl leading-normal">
            My inbox is always open for any opportunities, whether for a
            potential project or just to say hi, I'll try my best to answer your
            email!
          </p>
          <p className="mt-16">
            <a
              className="pb-2 border-b-2 border-black text-2xl font-sans hover:transition-easy hover:border-b-0 mail-link"
              href="mailto:hello@jeffson.dev"
            >
              Say hello: hello@jeffson.dev
            </a>
          </p>
        </div>
        <div>
          <div className="mt-20">
            <Projects limit />
          </div>

          <div className="text-center text-xl mt-6">
            <button>
              <AniLink
                paintDrip
                duration={1}
                hex="#000"
                className="project-link"
                to="/projects"
              >
                see all my projects
              </AniLink>
            </button>
          </div>

          <div className="mt-40">
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
