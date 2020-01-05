import React from "react"
import { Link } from "gatsby"

const Paginate = ({ next, previous }) => {
  return (
    <div className="flex mt-20">
      {next && (
        <Link to={`/blog/${next.node.slug}`} className="text-left">
          <button className="text-xl text-gray-800 hover:text-gray-900">
            ⇽ {next.node.title}
          </button>
        </Link>
      )}

      <div className="flex-grow"></div>

      {previous && (
        <Link to={`/blog/${previous.node.slug}`} className="text-right">
          <button className="text-xl text-gray-800 hover:text-gray-900">
            {previous.node.title} ⇾
          </button>
        </Link>
      )}
    </div>
  )
}

export default Paginate
