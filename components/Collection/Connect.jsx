'use client'
import Image from 'next/image'

import 'react-before-after-slider-component/dist/build.css'
import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const containerStyle = {
  position: 'relative',
  height: 'fit-content', // Adjust as needed
  width: 'fit-content', // Adjust as needed
  display: 'inline-block', // Ensure the container only takes the size of its content
}

const textContainerStyle = {
  zIndex: '1', // Ensure text is above the background image
  textAlign: 'center', // Center the text
  position: 'relative', // Position the text within the container
}

const backgroundImageStyle = {
  position: 'absolute', // Position the image behind the text
  top: '0',
  left: '0',
  width: '100%', // Set the width to 100%
  height: '100%', // Set the height to 100%
  objectFit: 'cover', // Ensure the image covers the container
  opacity: '1', // Adjust the opacity as needed
}

const Connect = () => {
  const imagesVariants = {
    initial: {
      y: 10,
      x: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div>
      <div className="z-10 text-center text-2xl sm:text-4xl sm:pt-16 py-12 font-bold">
        <div className="flex justify-center items-center sm:mt-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Connect With Us
              </h1>
            </div>
            <Image
              width={1000}
              height={1000}
              src="/images/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
      </div>

      <div className="section1 relative">
        {/*------------------------------------------ */}
        {/* <Svg /> */}
        <div className="main1">
          <svg
            id="rotatingText1"
            viewBox="0 0 200 200"
            width={200}
            height={200}
            className="relative"
          >
            <defs>
              <path
                id="circle"
                d="M 100, 100
           m -75, 0
           a 75, 75 0 1, 0 150, 0
           a 75, 75 0 1, 0 -150, 0"
              ></path>
            </defs>
            {/* Place the image at the center of the circle */}
            <image
              href="/images/left.gif"
              width={50}
              height={50}
              class="main1-img"
              x="75"
              y="75"
            />
            <text width={400}>
              <textPath
                alignmentBaseline="top"
                xlinkHref="#circle"
                className="text text-black-800"
              >
                The BestHome Interior Brand of India -
              </textPath>
            </text>
          </svg>
        </div>

        {/* ------------------------------- */}
        <section
          variants={imagesVariants}
          initial="initial"
          whileInView="animate"
        >
          <div className="card" variants={imagesVariants}>
            <a
              href="https://wa.me/9899264978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grin">
                <article className="mainz">
                  <h2>Connect on</h2>
                  <h1>Whatsapp</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/whatsapp-icon.svg" width={0} height={0} />
                </section>
              </div>
            </a>
          </div>

          <div className="card" variants={imagesVariants}>
            <Link href="/book-visit">
              <div className="grin">
                <article className="mainz ">
                  <h2>Book An</h2>
                  <h1>Appointment</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/marker-icon.svg" width={0} height={0} />
                </section>
              </div>
            </Link>
          </div>

          <div className="card" variants={imagesVariants}>
            <Link href="/schedule-videocall">
              <div className="grin">
                <article className="mainz ">
                  <h2>Schedule A</h2>
                  <h1>Video Call</h1>
                </article>
                <section className="sidez">
                  <Image src="/images/video-icon.svg" width={0} height={0} />
                </section>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Connect
