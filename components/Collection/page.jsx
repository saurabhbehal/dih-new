'use client'
import Image from 'next/image'

import dynamic from 'next/dynamic'
import 'react-before-after-slider-component/dist/build.css'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import useMedia from 'use-media'

const CarouselBeforeAfter = dynamic(() => import('./CarouselBefore'))

const BestCarousels = dynamic(() => import('./BestCarousels'))

const Brands = dynamic(() => import('./Brands'))
const Connect = dynamic(() => import('./Connect'))
const WaveDivider = dynamic(() => import('../../components/WaveDivider'))

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

const Collection = () => {
  const isLargeScreen = useMedia({ minWidth: '768px' })
  console.log(isLargeScreen)

  const aniRef = useRef()
  const { scrollYProgress } = useScroll({
    target: aniRef,
  })

  const translateXright = useTransform(scrollYProgress, [1, 0], [200, -200])
  const translateXleft = useTransform(scrollYProgress, [1, 0], [-200, 200])

  const translateXrightMob = useTransform(scrollYProgress, [1, 0], [400, -400])
  const translateXleftMob = useTransform(scrollYProgress, [1, 0], [-400, 400])

  const translateXrightWithSpring = useSpring(translateXright, {
    stiffness: 200,
    damping: 40,
  })
  const translateXleftWithSpring = useSpring(translateXleft, {
    stiffness: 200,
    damping: 40,
  })

  const translateXrightWithSpringMob = useSpring(translateXrightMob, {
    stiffness: 10,
    damping: 10,
  })
  const translateXleftWithSpringMob = useSpring(translateXleftMob, {
    stiffness: 10,
    damping: 10,
  })

  const videoVariants = {
    initial: {
      y: 30,
      x: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  }

  const imagesVariants = {
    initial: {
      y: 30,
      x: 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    video.addEventListener('load', () => {
      setIsPlaying(true)
    })
  }, [])

  return (
    <>
      <div className="hero"></div>
      <div
        className="w-full overflow-hidden mx-auto text-center my-8 z-10"
        ref={aniRef}
      >
        <motion.h2
          className="md:text-[76px] text-xl  text-center uppercase sm:my-8 mt-8 whitespace-nowrap"
          style={
            isLargeScreen
              ? {
                  x: translateXleftWithSpringMob,
                  fontFamily: 'Roboto, sans-serif',
                }
              : {
                  x: translateXleftWithSpring,
                  fontFamily: 'Roboto, sans-serif',
                }
          }
        >
          <span className="font-[50]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>
        </motion.h2>
        <motion.h2
          className="md:text-[76px] text-xl  text-center uppercase pr-2 sm:my-8 mb-8 whitespace-nowrap"
          style={
            isLargeScreen
              ? {
                  x: translateXrightWithSpringMob,
                  fontFamily: 'Roboto, sans-serif',
                }
              : {
                  x: translateXrightWithSpring,
                  fontFamily: 'Roboto, sans-serif',
                }
          }
        >
          <span className="font-[50]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>

          <span className="font-[100]"> welcome to </span>
          <span
            style={{
              fontWeight: 900,

              letterSpacing: '2px',
            }}
          >
            affordable luxury
          </span>
        </motion.h2>
      </div>

      <div className="container mx-auto ">
        <section className="newz">
          <div className="flex flex-wrap">
            <div className=" mb-4" id="news">
              <Link href="/luxury-interior-designers-architect-services-in-delhi-gurgaon-noida-india">
                <video
                  loop
                  autoPlay
                  playsInline
                  muted
                  controls={isPlaying}
                  src="video/lux.mp4"
                  alt=""
                  height={10}
                  width={1500}
                  className="rounded shadow-md my-6 max-[600px]:mb-10"
                  id="seek"
                  variants={videoVariants}
                  initial="initial"
                  whileInView="animate"
                />
              </Link>

              <section class="bordered bordersec"></section>
              {/* <WaveDivider /> */}

              <div className="flex justify-center items-center sm:my-16 my-8">
                <div style={containerStyle}>
                  <div
                    style={textContainerStyle}
                    className="flex justify-center "
                  >
                    <h1 className="sm:text-4xl text-xl font-bold text-center">
                      Our Exclusive Content
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

              <video
                loop
                autoPlay
                muted
                controls={isPlaying}
                width={1500}
                height={550}
                playsInline
                className="rounded shadow-md"
                style={{}}
                variants={videoVariants}
                initial="initial"
                whileInView="animate"
              >
                <source src="/video/dkivid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div
              className="imagesContainer flex flex-wrap justify-center"
              variants={imagesVariants}
              initial="initial"
              whileInView="animate"
            >
              {/* Image 1 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/modular-interior-design-ideas">
                  <Image
                    height={350}
                    width={700}
                    className="rounded shadow-md"
                    src="/images/qwer.png"
                    alt=""
                  />
                </Link>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/luxury-interior-designers-architect-services-in-delhi-gurgaon-noida-india">
                  <Image
                    height={350}
                    width={700}
                    className="rounded shadow-md"
                    src="/images/qwert.png"
                    alt=""
                  />
                </Link>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/luxury-residence-designs-delhi-india/luxury-interior">
                  <Image
                    height={350}
                    width={700}
                    className="rounded shadow-md"
                    src="/images/qwerty.png"
                    alt=""
                  />
                </Link>
              </motion.div>

              {/* Image 4 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/homes-by-design-indian-homes">
                  <Image
                    height={350}
                    width={700}
                    className="rounded shadow-md"
                    src="/images/asd.png"
                    alt=""
                  />
                </Link>
              </motion.div>

              {/* Image 5 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/selected-homes-exclusive-interior-designs-india">
                <Image
                  height={350}
                  width={700}
                  className="rounded shadow-md"
                  src="/images/Selected.png"
                  alt=""
                />
                </Link>
              </motion.div>

              {/* Image 6 */}
              <motion.div
                className="md:w-1/2 lg:w-1/3 mb-4 z-10"
                variants={imagesVariants}
                id="news"
              >
                <Link href="/foyer-area-designs">
                  <Image
                    height={350}
                    width={700}
                    className="rounded shadow-md"
                    src="/images/talk.png"
                    alt=""
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* before and after */}

        <CarouselBeforeAfter />
        {/* ------------ */}
      </div>

      <div className="container mx-auto sm:my-16 my-8 bg-[#d8f1c7] p-8 z-10">
        <h1 className="text-3xl font-bold sm:mb-16 mb-8 text-center">
          Why Design Indian Homes?
        </h1>
        <div
          id=""
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 z-10"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-on-time-delivery-53.png"
            />
            <p>On time Delivery</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-home-50.png"
            />
            <p>1609+ Happy Homes</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-structure-26.png"
            />
            <p>81+ Inhouse Architects & Interior Pro</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-construction-building-96.png"
            />
            <p>End To End Interiors & Structure Building</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-warranty-64.png"
            />
            <p>Warranty Direct from Source</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-engineer-50.png"
            />
            <p>Professional Personnel</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image width={100} height={100} src="/images/icon/modular.png" />
            <p>In-House Modular Manufacturing</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              width={100}
              height={100}
              src="/images/icon/icons8-check-50.png"
            />
            <p>Multiple Quality Checks</p>
          </div>
        </div>
      </div>

      <section class="bordered bordersec pt-16"></section>

      {/* ------------------------------------------------ */}
      <div className="connect">
        <Connect />
      </div>
      {/* ------------------------------------------ */}
      <div className="best carousels">
        <BestCarousels />
      </div>

      <div
        className="flex flex-col items-center md:flex-row justify-center p-10 gap-6 mt-10"
        id="bg"
      >
        <h1 className="font-bold text-2xl">Stay safe. Design virtually.</h1>
        <br />
        <div className="text-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '40%', height: 'auto' }}
            src="/images/icon/working.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Contactless Experience</h1>
          <p className="text-sm">
            No stepping out. Design your home interiors from the safety and
            comfort of your home.
          </p>
        </div>

        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
            src="/images/icon/interior-design.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Live 3D Design</h1>
          <p className="text-sm">
            Explore life-like 3D designs online that are made for your floor
            plan.
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
            src="/images/icon/badge.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Online Expertise</h1>
          <p className="text-sm">
            Connect with our 600+ designers virtually and explore designs
            online.
          </p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '65%', height: 'auto' }}
            src="/images/icon/payment.png"
            alt=""
            className="w-60 h-70 mx-auto"
          />
          <h1 className="font-bold text-center">Instant Pricing</h1>
          <p className="text-sm">
            Enjoy complete price transparency and stay within budget.
          </p>
        </div>
      </div>

      <section class="bordered bordersec"></section>

      <div className="brands-carousel">
        <Brands />
      </div>
    </>
  )
}

Collection.ssr = false
export default Collection
