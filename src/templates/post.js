import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Paginate from "../components/Paginate"

const Post = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  console.log("previous", previous)

  return (
    <Layout>
      <div className="container mx-auto mt-20">
        <div className="container-inner mx-auto">
          <div className="w-full md:w-125 mx-auto mb-16">
            <h2
              className="font-post text-2xl md:text-5xl mb-4"
              dangerouslySetInnerHTML={{ __html: data.post.title }}
            />
            <span className="text-gray-700">{data.post.date}</span>
          </div>

          <div className="w-full shadow-2xl">
            <img src={data.post.thumbnail} alt="" />
          </div>
          <p
            className="w-full md:w-125 mt-20 mx-auto"
            dangerouslySetInnerHTML={{ __html: data.post.content }}
          />

          <Paginate next={next} previous={previous} />
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
    post: mediumFeed(id: { eq: $id }) {
      author
      content
      date(formatString: "Do, MMMM YYYY")
      id
      slug
      title
      thumbnail
    }
  }
`
