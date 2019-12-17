import React, { useEffect, useRef } from "react"
import { TweenMax, Power3, TimelineLite } from "gsap"
import Img from "gatsby-image"

const Projects = ({ title, text, img, link, linkText }) => {
  let app = useRef(null)
  let image = useRef(null)
  let contents = useRef(null)

  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    //For Header
    TweenMax.to(app, 0, {
      css: { visibility: "visible" },
    })

    //Image
    tl.from(image, 1.2, { y: 20, ease: Power3.easeOut }, "Start").from(
      image.firstElementChild,
      2,
      {
        scale: 1.6,
        ease: Power3.easeOut,
      },
      0.2
    )

    //Contents Animation
    const headlineFirst = contents.children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling

    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird],
      1,
      {
        y: 50,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
  }, [tl])

  return (
    <div
      ref={el => (app = el)}
      className="flex flex-wrap my-16 lg:my-20 px-4 lg:px-0"
    >
      <div className="w-full lg:w-3/5">
        <div ref={el => (image = el)} className="image-hover">
          <Img fluid={img} />
        </div>
      </div>

      <div className="w-full lg:w-2/5 lg:pl-10 mt-4 lg:mt-0">
        <div className="h-full flex justify-center items-center">
          <div ref={el => (contents = el)}>
            <h3 className="text-3xl">{title}</h3>
            <p className="text-lg">{text}</p>
            <a className="project-link text-base lg:text-lg" href={link}>
              Visit {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
