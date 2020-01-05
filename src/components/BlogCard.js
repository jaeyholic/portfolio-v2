import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ img, title, slug, date }) => {
  return (
    <div className="md:w-120">
      <Link to={`/blog/${slug}`} className="font-sans">
        <div>
          <h4
            className="mt-10 md:mt-4 md:mb-2 text-2xl font-display hover:text-yellow-600"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <span className="text-gray-700 text-sm">{date}</span>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
