import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

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
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div ref={el => (app = el)} className="mt-20 invisible">
        <div ref={el => (contents = el)} className="px-4 md:px-0">
          <h2 className="font-header text-3xl lg:text-5xl lg:w-125">
            <div>Projects I completed, projects I</div>
            <div>contributed to and projects I </div>
            <div>got featured on.</div>
          </h2>
        </div>

        <div>
          <Projects />
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
