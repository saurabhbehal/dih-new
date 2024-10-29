'use client'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const EndToEndImageGrid = () => {
  const imageList = [
    {
      src: '/images/end/banquet_renovation-removebg-preview.png',
      text: 'Banquets Renovation',
      slug: '/banquet-renovation-services',
    },
    {
      src: '/images/end/bathroom_renovation1-removebg-preview.png',
      text: 'Bathroom Renovation',
      slug: '/bathroom-renovation-services',
    },
    {
      src: '/images/end/Bedroom_Renovation-removebg-preview.png',
      text: 'Bedroom Renovation',
      slug: '/bedroom-renovation-services',
    },
    {
      src: '/images/end/Farmhouse_Renovation-removebg-preview.png',
      text: 'Farmhouse Renovation',
      slug: '/farmhouse-renovation-services',
    },
    {
      src: '/images/end/GYM___SPA_renovation-removebg-preview.png',
      text: 'GYM & SPA Renovation',
      slug: '/gym-spa-renovation-services',
    },
    {
      src: '/images/end/Hotel_Renovation-removebg-preview.png',
      text: 'Hotel Renovation',
      slug: '/hotel-renovation-services',
    },
    {
      src: '/images/end/Interior_Renovation-removebg-preview.png',
      text: 'Interior Renovation',
      slug: '/home-interior-designs-renovation-services',
    },
    {
      src: '/images/end/Living_Room_Renovation-removebg-preview.png',
      text: 'Living Room Renovation',
      slug: '/living-room-renovation-services',
    },
    {
      src: '/images/end/Lounge_Renovation-removebg-preview.png',
      text: 'Lounge Renovation',
      slug: '/lounge-renovation-services',
    },
    {
      src: '/images/end/mandir_renovation-removebg-preview.png',
      text: 'Mandir Room Renovation',
      slug: '/mandir-renovation-services',
    },
    {
      src: '/images/end/SPA_renovation-removebg-preview.png',
      text: 'Kitchen Renovation',
      slug: '/modular-kitchen-top-brand-india/kitchen-renovations',
    },
    {
      src: '/images/end/Structural_Renovation-removebg-preview.png',
      text: 'Structural Renovation',
      slug: '/structural-renovation-services',
    },
    {
      src: '/images/end/terrace_renovation-removebg-preview.png',
      text: 'Terrace Renovation',
      slug: '/terrace-renovation-services',
    },
    {
      src: '/images/end/Villa_renovation-removebg-preview.png',
      text: 'Villa Renovation',
      slug: '/villa-renovation-services',
    },

    // Add more images as needed
  ]

  const textVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  }

  const imagesVariant = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

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
      <div className="py-2 mb-12 sm:mt-28 mt-16 flex flex-col items-center justify-center text-center">
        <div
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          className="container mx-auto text-center"
        >
          {/* <motion.h2
              variants={textVariant}
              className="text-4xl font-bold mb-4"
            >
              End To End Structural
            </motion.h2> */}
          <div
            variants={textVariant}
            className="flex justify-center items-center sm:my-8"
          >
            <div style={containerStyle} className="mb-4">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                With us, Feel Relaxed for any Renovation Works
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
          <p variants={textVariant} className="text-gray-600">
            End To End We Undertake Including Complete Renovations
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <div
            variants={imagesVariant}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 gap-4"
          >
            {imageList.map((item, index) => (
              <div
                variants={imagesVariant}
                key={index}
                className="text-center md:w-full sm:w-4/5  flex flex-col justify-center items-center"
              >
                {/* <div className="mb-4 sm:ml-8">
                    <Image
                      height={100}
                      width={200}
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                    <p className="text-sm mt-2">{item.text}</p>
                  </div> */}
                <Link href={item.slug}>
                  <div className="mb-4 sm:w-[200px] w-[150px]">
                    <Image
                      width={1000}
                      height={1000}
                      src={item.src}
                      alt={item.text}
                      className="w-full object-cover mr-4"
                    />
                    <p className="text-sm mt-2">{item.text}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EndToEndImageGrid
