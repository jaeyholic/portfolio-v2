import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Paginate = ({ next, previous }) => {
  return (
    <div className="container mx-auto">
      <div className="container-inner mx-auto">
        <div className="flex mt-20">
          <div className="w-1/2 pr-2 md:pr-0 md:w-1/3">
            {previous && (
              <AniLink
                paintDrip
                duration={1}
                hex="#000"
                to={`/blog/${previous.node.slug}`}
              >
                <button className="text-base text-left md:text-xl text-gray-700 hover:text-gray-900 focus:outline-none mb-6">
                  <h5 className="uppercase text-sm font-extrabold text-red-700">
                    Previous
                  </h5>
                  <div className="flex md:items-center mt-2">
                    <span className="text-3xl md:text-6xl mr-2">
                      <svg
                        width="37px"
                        height="26px"
                        viewBox="0 0 37 26"
                        stroke="currentColor"
                        fill="currentColor"
                      >
                        <path
                          class="catalog-43mi0n-leftIcon-leftIcon"
                          d="M12.2925,0.2925 C12.6845,-0.0975 13.3165,-0.0975 13.7085,0.2925 C14.0985,0.6845 14.0985,1.3165 13.7085,1.7085 L3.4145,12.0005 L36.0005,12.0005 C36.5525,12.0005 37.0005,12.4485 37.0005,13.0005 C37.0005,13.5525 36.5525,14.0005 36.0005,14.0005 L3.4145,14.0005 L13.7085,24.2925 C14.0985,24.6845 14.0985,25.3165 13.7085,25.7085 C13.5125,25.9025 13.2565,26.0005 13.0005,26.0005 C12.7445,26.0005 12.4885,25.9025 12.2925,25.7085 L0.2925,13.7085 C-0.0975,13.3165 -0.0975,12.6845 0.2925,12.2925 L12.2925,0.2925 Z"
                        ></path>
                      </svg>
                    </span>
                    <p className="leading-none">{previous.node.title}</p>
                  </div>
                </button>
              </AniLink>
            )}
          </div>

          <div className="md:w-1/3"></div>

          <div className="w-1/2 pl-2 md:pl-0 md:w-1/3">
            {next && (
              <AniLink
                paintDrip
                duration={1}
                hex="#000"
                to={`/blog/${next.node.slug}`}
              >
                <button className="text-base text-left md:text-xl text-gray-700 hover:text-gray-900 focus:outline-none mb-6">
                  <h5 className="uppercase text-sm font-extrabold text-red-700">
                    Next
                  </h5>
                  <div className="flex md:items-center mt-2">
                    <p className="leading-none">{next.node.title}</p>
                    <span className="text-3xl md:text-6xl ml-2">
                      <svg
                        width="37px"
                        height="26px"
                        viewBox="0 0 37 26"
                        stroke="currentColor"
                        fill="currentColor"
                      >
                        <path d="M24.708,0.2925 C24.316,-0.0975 23.684,-0.0975 23.292,0.2925 C22.902,0.6845 22.902,1.3165 23.292,1.7085 L33.586,12.0005 L1,12.0005 C0.448,12.0005 0,12.4485 0,13.0005 C0,13.5525 0.448,14.0005 1,14.0005 L33.586,14.0005 L23.292,24.2925 C22.902,24.6845 22.902,25.3165 23.292,25.7085 C23.488,25.9025 23.744,26.0005 24,26.0005 C24.256,26.0005 24.512,25.9025 24.708,25.7085 L36.708,13.7085 C37.098,13.3165 37.098,12.6845 36.708,12.2925 L24.708,0.2925 Z"></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </AniLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paginate
