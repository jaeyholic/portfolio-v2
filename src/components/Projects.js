import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//components
import Project from "./Project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      completeFarmer: file(relativePath: { eq: "complete-farmer.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beeandbloom: file(relativePath: { eq: "beeandbloom.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Project
        title="Complete Farmer"
        text="They are building a future where everyone can contribute and
              benefit from the shared promise of agriculture in Africa, and
              beyond."
        img={data.completeFarmer.childImageSharp.fluid}
        link="#"
        linkText="Complete Farmer"
      />

      <Project
        title="Bee and Bloom Digital"
        text="They clients thrive online and offline with products, services and platforms that lead to sustainable growth between their unique brands and targeted markets."
        img={data.beeandbloom.childImageSharp.fluid}
        link="#"
        linkText="Bee & Bloom"
      />
    </div>
  )
}

export default Projects
