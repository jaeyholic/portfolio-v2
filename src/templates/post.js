import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

const Post = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = ""
        const url = ""
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <div className="container-inner mx-auto">
          <div className="w-full md:w-125 mx-auto mb-16">
            <h2
              className="font-post text-2xl md:text-5xl mb-4"
              dangerouslySetInnerHTML={{ __html: data.post.title }}
            />
            <span className="text-gray-700">{data.post.createdAt}</span>
          </div>

          <div className="w-full shadow-2xl">
            <Img fluid={data.post.featuredImage.fluid} />
          </div>
          <div className="w-full md:w-125 mt-20 mx-auto">
            {documentToReactComponents(data.post.body.json, options)}
          </div>

          <div className="flex mt-20">
            {previous && (
              <Link to={`/blog/${previous.node.slug}`} className="text-left">
                <button className="text-xl text-gray-800 hover:text-gray-900">
                  ⇽ <span className="text-4xl font-post font-bold">Prev</span>{" "}
                  story
                </button>
              </Link>
            )}

            <div className="flex-grow"></div>

            {next && (
              <Link to={`/blog/${next.node.slug}`} className="text-right">
                <button className="text-xl text-gray-800 hover:text-gray-900">
                  <span className="text-4xl font-post font-bold">Next</span>{" "}
                  story ⇾
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
  query($id: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      title
      slug
      createdAt(formatString: "Do MMMM YYYY")
      body {
        json
      }
      featuredImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
