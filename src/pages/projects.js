import React from "react"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

const portfolio = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="mt-20">
        <div className="px-4 md:px-0">
          <h2 className="font-header text-3xl lg:text-5xl lg:w-120">
            Projects I've worked on and some I have contributed to.
          </h2>
        </div>

        <div>
          <Projects />
        </div>
      </div>
    </Layout>
  )
}

export default portfolio
