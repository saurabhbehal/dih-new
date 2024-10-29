import React from 'react'

const Svg = () => {
  return (
    <div className="w-1/6 main2">
      <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
        <defs>
          <path
            id="circle"
            d="M 100, 100
           m -75, 0
           a 75, 75 0 1, 0 150, 0
           a 75, 75 0 1, 0 -150, 0"
          ></path>
        </defs>
        {/* Group for the image (static) */}
        <g>
          <image href="/images/left.gif" width={50} height={50} x="75" y="75" />
        </g>
        {/* Group for the text (rotating along the circle) */}
        <g transform="rotate(-90, 100, 100)">
          <text width={400}>
            <textPath
              alignmentBaseline="top"
              xlinkHref="#circle"
              className="text text-black"
            >
              No.1 Architectural Brand in India
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  )
}

export default Svg