import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//components
import Project from "./Project"

const Projects = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
      completeFarmer: file(relativePath: { eq: "complete-farmer.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onepager: file(relativePath: { eq: "onepager.png" }) {
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
      chow: file(relativePath: { eq: "dang.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      number: file(relativePath: { eq: "number12.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teachforjoy: file(relativePath: { eq: "teachforjoy.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      legend: file(relativePath: { eq: "legendframes.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hulu: file(relativePath: { eq: "hulu.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ecowas: file(relativePath: { eq: "ecowas.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      signup: file(relativePath: { eq: "signup.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dev: file(relativePath: { eq: "dev-signup.png" }) {
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
      {limit ? (
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
            title="Complete Farmer Maintenance Mode"
            text="This One pager was developed to replace the current website as I was developing their new website to be launched soon!."
            img={data.onepager.childImageSharp.fluid}
            link="https://completefarmer.com"
            linkText="Complete Farmer Maintenance"
          />

          <Project
            title="Bee and Bloom Digital"
            text="They clients thrive online and offline with products, services and platforms that lead to sustainable growth between their unique brands and targeted markets."
            img={data.beeandbloom.childImageSharp.fluid}
            link="#"
            linkText="Bee & Bloom"
          />
        </div>
      ) : (
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
            title="Complete Farmer Maintenance Mode"
            text="This One pager was developed to replace the current website as I was developing their new website to be launched soon!."
            img={data.onepager.childImageSharp.fluid}
            link="https://completefarmer.com"
            linkText="Complete Farmer Maintenance"
          />

          <Project
            title="Bee and Bloom Digital"
            text="They help clients thrive online and offline with products, services and platforms that lead to sustainable growth between their unique brands and targeted markets."
            img={data.beeandbloom.childImageSharp.fluid}
            link="#"
            linkText="Bee & Bloom"
          />

          <Project
            title="The Number 12 Film"
            text="The Number 12 Film is a project built for a client to showcase their biggest projects worked on."
            img={data.number.childImageSharp.fluid}
            link="https://number12film.com/"
            linkText="The Number 12 Film"
          />

          <Project
            title="Teach For Joy"
            text="Teach for Joy is a project i helped a colleague with the frontend UI Design and Development. It's a website where people post lectures or meet tutors who are willing to teach on their free time for free."
            img={data.teachforjoy.childImageSharp.fluid}
            link="https://www.teachforjoy.com/"
            linkText="Teach For Joy"
          />

          <Project
            title="Legend Frames"
            text="Legend Frames is an online shop which is dedicated to providing first grade designer frames for all gender and age at an affordable price through the most convenient means."
            img={data.legend.childImageSharp.fluid}
            link="https://legendframes.netlify.com/"
            linkText="Legend Frames"
          />

          <Project
            title="Dang That's Delicious"
            text="A restaurant review app built to help customers review a restaurant meal. Project was developed mainly for reviewing meals and restaurants visited by customers."
            img={data.chow.childImageSharp.fluid}
            link="https://chowcourt.herokuapp.com/"
            linkText="Dang That's Delicious"
          />

          <Project
            title="Ecowas Shop"
            text="Full Stack e-commerce project developed with NextJS, a ReactJS framework and ExpressJS, a NodeJS lightweight Framework with Authentication and stripe payment."
            img={data.ecowas.childImageSharp.fluid}
            link="https://ecowasstore-gules-sigma.now.sh/"
            linkText="Ecowas Shop"
          />

          <Project
            title="Hulu Wind"
            text="UI of Hulu.com built with TailwindCSS and Gulp"
            img={data.hulu.childImageSharp.fluid}
            link="https://huluwind.netlify.com/"
            linkText="Hulu Wind"
          />

          <Project
            title="SignUp with Pricing Component"
            text="Signup with pricing UI I built for reusability sake and also shared them in a community where people will like to use them for their projects."
            img={data.signup.childImageSharp.fluid}
            link="https://huluwind.netlify.com/"
            linkText="Signup with Pricing"
          />

          <Project
            title="SignUp & SignIn Component"
            text="Signup UI I built for reusability sake and also shared them in a community where people will like to use them for their projects."
            img={data.dev.childImageSharp.fluid}
            link="https://huluwind.netlify.com/"
            linkText="SignUp & SignIn"
          />
        </div>
      )}
    </div>
  )
}

export default Projects
