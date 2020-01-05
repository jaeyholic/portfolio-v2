import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "./Animations.js"

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1)
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
      staggerReveal(reveal1, reveal2)
      staggerText(line1, line2, line3, line4)
    }
  }, [state])

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={el => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={el => (reveal2 = el)} className="menu-layer">
        <div className="container mx-auto">
          <div className="wrapper">
            <div className="menu-links">
              <nav className="m-0 p-0">
                <ul className="block px-4 md:px-0">
                  <li
                    ref={el => (line1 = el)}
                    className="text-4xl md:text-6xl lg:text-7xl w-full md:w-110 lg:w-125 relative overflow-hidden h-16 md:h-24 text-gray-900 pt-8"
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#000"
                      activeClassName="text-black"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      to="/projects"
                    >
                      see my projects
                    </AniLink>
                  </li>
                  <li
                    ref={el => (line2 = el)}
                    className="text-4xl md:text-6xl lg:text-7xl w-full md:w-110 lg:w-125 relative overflow-hidden h-16 md:h-24 text-gray-900 pt-8"
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#000"
                      activeClassName="text-black"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      to="/about"
                    >
                      more about me
                    </AniLink>
                  </li>
                  <li
                    ref={el => (line3 = el)}
                    className="text-4xl md:text-6xl lg:text-7xl w-full md:w-110 lg:w-125 relative overflow-hidden h-16 md:h-24 text-gray-900 pt-8"
                  >
                    <AniLink
                      paintDrip
                      duration={1}
                      hex="#000"
                      activeClassName="text-black"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      to="/blogs"
                    >
                      my writings
                    </AniLink>
                  </li>
                  <li
                    ref={el => (line4 = el)}
                    className="text-4xl md:text-6xl lg:text-7xl w-full md:w-110 lg:w-125 relative overflow-hidden h-16 md:h-24 text-gray-900 pt-8"
                  >
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      href="mailto:gabsco208309@hotmail.com"
                    >
                      contact me
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
