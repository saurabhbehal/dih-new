'use client'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
const ImageGrid = () => {
  const imageList = [
    {
      src: '/images/top-picks/bathroom_renovation-removebg-preview.png',
      text: 'Bathroom Renovation',
      slug: '/bathroom-renovation-services',
    },
    {
      src: '/images/top-picks/bedroomrenovation-removebg-preview.png',
      text: 'Bedroom Renovation',
      slug: '/bedroom-renovation-services',
    },
    {
      src: '/images/top-picks/beds-removebg-preview.png',
      text: 'Beds',
      slug: '/bed-designs-dealers-manufacturers-india-designs',
    },
    {
      src: '/images/top-picks/door-removebg-preview.png',
      text: 'Doors',
      slug: '/wood-door-designs',
    },
    {
      src: '/images/top-picks/electric-removebg-preview.png',
      text: 'Electric',
      slug: '/home-electric-works-services-interiors',
    },
    {
      src: '/images/top-picks/exterior_cladding-removebg-preview.png',
      text: 'Exterior Cladding',
      slug: '/exterior-cladding-design-ideas-designs',
    },
    {
      src: '/images/top-picks/glass_partition-removebg-preview.png',
      text: 'Glass Partitions',
      slug: '/glass-partition-designs',
    },
    {
      src: '/images/top-picks/Interior_Lightening-removebg-preview.png',
      text: 'Kitchen Lightening',
      slug: '/kitchen-lightening-inspiration-ideas-india-designs',
    },
    {
      src: '/images/top-picks/kitchen_renovation-removebg-preview.png',
      text: 'Kitchen Renovation',
      slug: '/modular-kitchen-top-brand-india/kitchen-renovations',
    },
    {
      src: '/images/top-picks/plumbing-removebg-preview.png',
      text: 'Plumbing',
      slug: '/plumbing-works-interiors',
    },
    {
      src: '/images/top-picks/pop-removebg-preview.png',
      text: 'Ceiling Designs',
      slug: '/ceiling-designs',
    },
    {
      src: '/images/top-picks/sofa-removebg-preview.png',
      text: 'Sofa',
      slug: '/sofa-designs-ideas',
    },
    {
      src: '/images/top-picks/tiling-removebg-preview.png',
      text: 'Tiling',
      slug: '/tiling-design-ideas',
    },
    {
      src: '/images/top-picks/upvc_window-removebg-preview.png',
      text: 'UPVC Windows',
      slug: '/upvc-window-designs',
    },
    {
      src: '/images/top-picks/Vertical_Garden-removebg-preview.png',
      text: 'Vertical Gardens',
      slug: '/vertical-garden-designs',
    },
    {
      src: '/images/top-picks/wall_pannaling-removebg-preview.png',
      text: 'Wall Panneling',
      slug: '/wall-panelling-designs',
    },
    {
      src: '/images/top-picks/wooden_flooring-removebg-preview.png',
      text: 'Wooden Flooring',
      slug: '/wooden-flooring-designs-designs',
    },
    {
      src: '/images/top-picks/wooden_polishing-removebg-preview.png',
      text: 'Wooden Polishing',
      slug: '/wooden-flooring-designs-designs',
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
        <hr className="border-t-[1px] border-red-500 w-full mb-8 my-16" />
      
     
          {/* <motion.h2
              variants={textVariant}
              className="text-4xl font-bold mb-4"
            >
              End To End Structural
            </motion.h2> */}

        
          
            <div style={containerStyle} className="">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                Check Us Out for Interiors & Architectural Works
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
         
          <p variants={textVariant} className="text-gray-600">
          Some of the Most Affordable Interiors and Architectural works are here....
          </p>
        

        <div className="container mx-auto mt-8">
          <div
            variants={imagesVariant}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-4"
          >
            {imageList.map((item, index) => (
              <div
                variants={imagesVariant}
                key={index}
                className="text-center md:w-full sm:w-4/5 flex flex-col justify-center items-center"
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

export default ImageGrid
