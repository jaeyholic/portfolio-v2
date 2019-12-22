import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

import Layout from "../components/layout"
import SEO from "../components/seo"

//images
import Wave from "../images/waving.gif"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

ScrollMagicPluginGsap(ScrollMagic, gsap)

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
    ).from(paragraph, 3.5, { y: 20, opacity: 0, ease: "power3.easeOut" }, 3.5)
  }, [tl])

  return (
    <Layout>
      <SEO title="👨‍💻👨‍🌾🙋‍♂️ - Front-End Developer, UI/UX Designer" />

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
          <h1 className="font-header text-3xl lg:text-5xl leading-none">
            <div>Hey there *waves*, my name is</div>
            <div>Felix Yeboah - Jefferson, UI</div>
            <div>designer, a developer and a</div>
            <div>traveler.</div>
          </h1>
          <p id="sub-header" className="text-xl leading-normal">
            A design-minded & a full-stack javascript web developer focused on
            building beautiful interfaces & experiences
            <span role="img">👨‍💻</span>. I am super passionate about design,
            development, and business. I have been very fortunate to be able to
            do all three as a career. Enough about me, how can i help you?
          </p>
          <p className="mt-16">
            <a
              className="pb-2 border-b-2 border-black text-xl font-sans hover:transition-easy hover:border-b-0"
              href="mailto:gabsco208309@hotmail.com"
            >
              hello@jaeyholic.dev
            </a>
          </p>
        </div>
        <div>
          <div id="projects" className="mt-20">
            <Projects />
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
