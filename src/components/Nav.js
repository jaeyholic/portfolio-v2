import React, { useState, useEffect } from "react"
import { globalHistory } from "@reach/router/lib/history"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"

const Nav = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  })

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      })
    }
  }

  //determine if menu btn should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  useEffect(() => {
    globalHistory.listen(() => {
      setState({ clicked: false, menuName: "Menu" })
    })
  })

  return (
    <header className="flex items-center h-24">
      <div className="container mx-auto">
        <div className="absolute z-10 flex flex-wrap items-center justify-between px-4 md:px-0 container mx-auto logo">
          <div>
            <Link to="/" className="font-display text-4xl">
              Jeff.son
            </Link>
          </div>

          <div className="menu">
            <button disabled={disabled} onClick={handleMenu}>
              Menu
            </button>
          </div>
        </div>
      </div>

      <Hamburger state={state} />
    </header>
  )
}

export default Nav
