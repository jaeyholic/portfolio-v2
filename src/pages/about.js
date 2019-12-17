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
  let image = useRef(null)

  const [tl] = useState(gsap.timeline({ delay: 1 }))

  useEffect(() => {
    tl.from(image, 1.2, { y: 20, ease: "power3.easeOut" }, "Start").from(
      image.firstElementChild,
      1,
      {
        scale: 1.6,
        ease: "power3.easeOut",
      },
      1
    )

    tl.staggerFrom(
      app,
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
  }, [])

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
      <div className="mt-20 lg:mt-40 px-4 lg:px-0">
        <div>
          <h2
            ref={el => (app = el)}
            className="font-header text-3xl lg:text-5xl lg:w-120"
          >
            Developing, Designing, Traveling &amp; Music
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
            I'm Felix Nana Yaw Yeboah - Jefferson, a full-stack javascript web
            developer and UI/UX designer from Accra, Ghana. I am super
            passionate about design, development, and business. I have been very
            fortunate to be able to do all three as a career.
          </p>
          <p>
            From a technical standpoint, I spend most of my time working with
            JavaScript, CSS3, HTML5. New and open source web technologies make
            me super excited and I can’t wait to see what is to come of the web
            in the next few years. I learn from the community and loves to share
            what I have learnt back.
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
