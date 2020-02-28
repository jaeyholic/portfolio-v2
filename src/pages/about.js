import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import Values from "../components/Values"

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

  return (
    <Layout>
      <SEO title="About" />
      <div ref={el => (app = el)} className="mt-20 lg:mt-40 px-4 lg:px-0">
        <div ref={el => (contents = el)}>
          <h2 className="font-header text-3xl lg:text-5xl lg:w-120">
            <div>I Design and,</div>
            <div>Develop for the web.</div>
          </h2>
        </div>

        <div
          ref={el => (image = el)}
          className="w-full overflow-hidden mx-auto mt-20"
        >
          <Img fluid={data.me.childImageSharp.fluid} />
        </div>

        <div className="text-xl lg:text-2xl lg:w-135 mt-12 lg:mt-20 leading-snug">
          <p>
            A self-taught Full-Stack Javascript Web Developer and UI/UX Designer
            from Accra, Ghana. I am super passionate about design, development,
            traveling, and a fanatic of all things digital. I have been very
            fortunate to be able to do all as a career.
          </p>
          <p className="font-bold">
            I consider myself as a learner, a life-long learner.
          </p>
          <p>
            I <span className="line-through">drink</span> coffee, and I eat
            pizza. I listen to a lot of music. I write code and improve my
            design and skills every day: a fast learner and a person who's
            always humble to learn and grow in all areas. I feel honored to have
            worked with extraordinary people, startups, and companies that
            helped to improve not only my skills but also my life.
          </p>

          <p>
            I <span className="font-bold">currently</span> work with{" "}
            <a
              className="text-gray-800 underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
              href="https://beeandbloom.digital"
            >
              Bee &amp; Bloom Digital
            </a>{" "}
            as a Frontend Developer &amp; UI/UX Designer &amp;{" "}
            <a
              className="text-gray-800 underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
              href="https://completefarmer.com"
            >
              Complete Farmer Limited
            </a>{" "}
            as a freelance Frontend Developer.
          </p>
        </div>

        <div className="flex flex-wrap mt-20">
          <div className="w-full lg:w-1/2">
            <Skills />
          </div>
          <div className="w-full lg:w-1/2">
            <Values />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
