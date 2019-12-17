import React, { useEffect, useRef } from "react"
import { TweenMax, Power3, TimelineLite } from "gsap"
// import * as scrollMagic from "scrollmagic"

import Layout from "../components/layout"
import SEO from "../components/seo"

//images
import Wave from "../images/waving.gif"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  let app = useRef(null)
  let image = useRef(null)
  let contents = useRef(null)
  let overlay = useRef(null)
  let content = useRef(null)

  let tl = new TimelineLite({ delay: 1 })

  useEffect(() => {
    //content Animation
    //Contents Animation
    const line1 = content.children[0]
    const line2 = line1.nextSibling
    const line3 = line2.nextSibling

    //Contents Animation
    const headlineFirst = contents.children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling.children[0]

    tl.staggerFrom(
      [line1, line2, line3],
      0.7,
      {
        y: 50,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.8,
        // height: 100,
      },
      0.15,
      "Start"
    ).to(overlay, {
      duration: 0.7,
      height: 0,
      ease: Power3.inOut,
      stagger: {
        amount: 0.05,
      },
    })

    //For Header
    TweenMax.to(app, 0, {
      css: { visibility: "visible" },
    })

    //Image
    tl.from(image, 1.7, { y: 20, ease: Power3.easeOut }, "Start").from(
      image.firstElementChild,
      2,
      {
        scale: 1.6,
        ease: Power3.easeOut,
      },
      1
    )

    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird],
      1.5,
      {
        y: 50,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 1.8,
      },
      1.8,
      "Start"
    )

    //scroll-magic
    // const controller = new scrollMagic.Controller()
    // const scene = new scrollMagic.Scene({
    //   triggerElement: "#projects",
    //   triggerHook: 0,
    //   reverse: false,
    //   duration: 150,
    // })
    //   .setTween(tl)
    //   .addTo(controller)
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
            Hey there *waves*, my name is Felix Yeboah - Jefferson, UI designer,
            a developer and a traveler.
          </h1>
          <p id="sub-header" className="text-xl leading-normal">
            A design-minded & a full-stack javascript web developer focused on
            building beautiful interfaces & experiences 👨‍💻. I am super
            passionate about design, development, and business. I have been very
            fortunate to be able to do all three as a career. Enough about me,
            how can i help you?
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
