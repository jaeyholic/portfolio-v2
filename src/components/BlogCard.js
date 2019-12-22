import React from "react"
import gsap from "gsap"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BlogCard = ({ img, title, summary, slug, date }) => {
  return (
    <div className="w-full md:w-1/3 mb-16 px-4">
      <Link to={`/blog/${slug}`} className="font-sans">
        <div className="blog-picture">
          <div className="blog-overlay">&nbsp;</div>
          <div className="blog-img shadow-2xl">
            <Img fluid={img} />
          </div>
        </div>

        <div>
          <h4
            className="mt-20 md:mt-4 md:mb-2 text-2xl font-display hover:text-yellow-600"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="leading-tight mb-2 text-gray-800 text-lg"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <span className="text-gray-700 text-sm">{date}</span>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
