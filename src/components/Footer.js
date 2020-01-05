import React from "react"
import {
  FaGithub,
  FaInstagram,
  FaMedium,
  FaDev,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="container mx-auto mt-24 lg:mt-48 mb-8 px-2 md:px-0">
      <div className="flex flex-wrap justify-between items">
        <div className="font-display text-2xl">Jeff.son</div>
        <div className="text-lg hidden lg:flex">
          Have a great day.{" "}
          <span role="img" aria-label="kiss emoji">
            😘
          </span>
        </div>
        <ul className="hidden md:flex">
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://github.com/jaeyholic"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://instagram.com/jaeyholic"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://medium.com/@jaeyholic"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://dev.to/jaeyholic"
              rel="noopener noreferrer"
            >
              Dev.to
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://twitter.com/jaeyholic"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>

        <ul className="md:hidden flex">
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://github.com/jaeyholic"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://instagram.com/jaeyholic"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://medium.com/@jaeyholic"
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://dev.to/jaeyholic"
              rel="noopener noreferrer"
            >
              <FaDev />
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:border-b-2 border-black pb-1 transition-easy"
              href="https://twitter.com/jaeyholic"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
