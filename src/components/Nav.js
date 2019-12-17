import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <header className="flex items-center h-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between px-2 lg:px-0">
          <div>
            <Link to="/" className="font-display text-4xl">
              Jeff.
            </Link>
          </div>

          <ul className="flex flex-wrap">
            <li className="nav-item home">
              <Link exact activeClassName="active" to="/">
                feeling me: Jeff
              </Link>
            </li>

            <li className="nav-item about">
              <Link exact activeClassName="active" to="/about">
                about
              </Link>
            </li>

            <li className="nav-item">
              <a href="mailto:gabsco208309@hotmail.com">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav
