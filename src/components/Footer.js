import React from "react"

const Footer = () => {
  return (
    <div className="container mx-auto mt-24 lg:mt-48">
      <div className="md:flex md:flex-wrap justify-between items">
        <div className="font-display text-2xl">Jeff.</div>
        <div className="text-lg">Have a great day. 😘</div>
        <ul className="flex">
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://github.com/jaeyholic"
            >
              GitHub
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://instagram.com/jaeyholic"
            >
              Instagram
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://medium.com/@jaeyholic"
            >
              Medium
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://dev.to/jaeyholic"
            >
              Dev.to
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://twitter.com/jaeyholic"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
