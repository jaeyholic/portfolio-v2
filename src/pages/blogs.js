import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"
import gsap from "gsap"

const Blog = () => {
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
    const headlineFourth = headlineThird.nextSibling

    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird, headlineFourth],
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

  const {
    data: { edges: data },
  } = useStaticQuery(
    graphql`
      query {
        data: allMediumFeed(sort: { order: DESC, fields: date }) {
          edges {
            node {
              author
              content
              date(formatString: "Do, MMMM YYYY")
              id
              slug
              title
              thumbnail
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Blogs" />
      <div
        ref={el => (app = el)}
        className="container mx-auto mt-20 px-4 sm:px-0"
      >
        <div ref={el => (contents = el)}>
          <h2 className="font-header text-3xl lg:text-5xl lg:w-125">
            <div>Personal writings, what</div>
            <div>I've studied, traveling, what's</div>
            <div>going on in the dev world and</div>
            <div>also lifestyles.</div>
          </h2>
        </div>

        <div className="mt-20">
          {data.map(post => (
            <div key={post.node.id}>
              <BlogCard
                title={post.node.title}
                date={post.node.date}
                slug={post.node.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
