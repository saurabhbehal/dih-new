'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import 'react-multi-carousel/lib/styles.css'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
    arrows: false,
  }
  const images = [
    '/images/52.png',
    '/images/74.png',
    '/images/kitchen1.jpg',
    '/images/50.png',
    // Add more image URLs as needed
  ]
  return (
    <Slider {...settings} className="mx-auto w-full sm:w-[400px] rounded-lg   ">
      {images.map((image, index) => (
        <div
          key={index}
          className="outline-none focus:outline-none rounded-lg "
        >
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={`Slide ${index + 1}`}
            className="rounded-lg"
          />
        </div>
      ))}
    </Slider>
  )
}

const Display = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const imagesVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
      },
    },
  }
  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, [])

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

  return (
    <>
      {/* 
      <div className="main">
      <Image width={1000} height={1000} src="/images/left.gif" width={50} height={50} />
  
 <svg id="rotatingText" viewBox="0 0 200 200" width={200} height={200}>
   <defs>
     <path
       id="circle"
       d="M 100, 100
         m -75, 0
         a 75, 75 0 1, 0 150, 0
         a 75, 75 0 1, 0 -150, 0
         "
     ></path>
   </defs>
   <text width={400}>
     <textPath alignmentBaseline="top" xlinkHref="#circle" className="text">
     Get Your Home Interior Quote    </textPath>
   </text>
 </svg>
</div> */}

      <div className="my-16">
        {/* <h1>Exquisite Designs</h1> */}
        <div className="flex justify-center items-center sm:my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Exquisite Designs - Exquisite Makeovers
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

      <div className="wrapper">
        <motion.div
          variants={imagesVariant}
          initial="initial"
          whileInView="animate"
          className="img-areai "
        >
          {/* 1 */}
          <motion.div variants={imagesVariant} className="single-imgi">
            <Link href="/architectural-designs-services-india">
              <Image
                src="/images/bannernew.png"
                alt=""
                width={600}
                height={600}
                className="rounded shadow-md"
              />
            </Link>
          </motion.div>
          {/* 2 */}
          <motion.div variants={imagesVariant} className="single-imgi">
            <Link href="/modular-interior-design-ideas">
              <video
                loop
                autoPlay
                muted
                controls={isPlaying}
                src="video/vid21.mp4"
                alt=""
                width={600}
                height={600}
                playsInline
                className="rounded shadow-md"
              />
            </Link>
          </motion.div>
          {/* 3 */}
          <motion.div variants={imagesVariant} className="single-imgi">
            <Link href="/homes-by-design-indian-homes">
              <video
                loop
                autoPlay
                controls={isPlaying}
                src="video/vid1.mp4"
                alt=""
                width={600}
                height={600}
                playsInline
                className="rounded shadow-md"
                muted
              />
            </Link>
          </motion.div>
          {/* 4 */}
          <motion.div variants={imagesVariant} className="single-imgi">
            <Link href="/selected-homes-exclusive-interior-designs-india">
              <Image
                src="/images/banner2.png"
                alt=""
                width={600}
                height={600}
                className='rounded shadow-md'
              />
            </Link>
          </motion.div>
          {/* ----- */}
        </motion.div>
      </div>

      <section class="bordered bordersec"></section>
      <div className="gridz mt-12">
        <article className="mainz rounded-lg">
          <h1>ABOUT US</h1>
          <div className="text-left">
            <p>
              <span className="text-4xl font-bold">D</span>esign Indian Homes is
              India&apos;s top Interior, Architectural & Modular Interior Brand
              serving across Delhi, Gurgaon, Noida & NCR. It is the most sought
              out by Homemakers, Architects, Interior Designers, Developers &
              just anyone who needs an Affordable Interior Makeover, Renovation
              Services, Architectural Services, Modular Kitchen, Wardrobe,
              Vanities, TV Units, Living works, Bathroom Or Just a peaceful
              Turnkey Work by Our Team. We are serving End to End Interiors &
              Modular Interiors across Delhi, Gurgaon, Noida, Faridabad & across
              NCR.
            </p>
            <Link href="/about-best-interior-designers-architects">
              <button className="mt-4">Read More..</button>
            </Link>
          </div>
        </article>
        {/* sidezi */}
        <section className="w-full ">
          <Link href="/book-a-interior-design-visit">
          <Carousel />
          </Link>
        </section>
      </div>
      <section class="bordered bordersec"></section>
    </>
  )
}

export default Display
