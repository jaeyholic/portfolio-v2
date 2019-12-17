import React from "react"

const Skills = () => {
  return (
    <div className="px-4 lg:px-0">
      <h1 className="text-3xl lg:text-5xl font-display">My Skills.</h1>

      <div className="flex flex-wrap mt-10">
        <div className="w-full md:w-1/2">
          <div>
            <h5 className="text-lg lg:text-2xl">User Interface Design (UI)</h5>
            <ul className="text-gray-700 text-base lg:text-xl">
              <li>Sketch</li>
              <li>Adobe XD</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg lg:text-2xl">Designs</h5>
            <ul className="text-gray-700 text-base lg:text-xl">
              <li>InDesign</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg lg:text-2xl">Languages</h5>
            <ul className="text-gray-700 text-base lg:text-xl">
              <li>HTML & CSS</li>
              <li>JavaScript (ES6)</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h5 className="text-lg lg:text-2xl">Web FrameWorks</h5>
            <ul className="text-gray-700 text-base lg:text-xl">
              <li>React</li>
              <li>Vue</li>
              <li>Express</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg lg:text-2xl">Tools</h5>
            <ul className="text-gray-700 text-base lg:text-xl">
              <li>MongoDB</li>
              <li>Git & Github</li>
              <li>Chrome DevTools</li>
              <li>Chrome DevTools</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
