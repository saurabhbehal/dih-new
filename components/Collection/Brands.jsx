'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import 'react-before-after-slider-component/dist/build.css'
import React from 'react'
const BrandImageSlider = dynamic(() => import('./BrandsCarousel'))
const Svg = dynamic(() => import('./Svg'))
const brand = [
  {
    id: 1,
    img: '/images/brands-nobg/b1.png',
  },
  {
    id: 2,
    img: '/images/brands-nobg/b2.png',
  },
  {
    id: 3,
    img: '/images/brands-nobg/b3.png',
  },
  {
    id: 4,
    img: '/images/brands-nobg/b4.png',
  },
  // {
  //   id: 5,
  //   img: '/images/brands-nobg/b5.png',
  // },
  {
    id: 6,
    img: '/images/brands-nobg/b6.png',
  },
  {
    id: 7,
    img: '/images/brands-nobg/b7.png',
  },
  {
    id: 8,
    img: '/images/brands-nobg/b8.png',
  },
  {
    id: 9,
    img: '/images/brands-nobg/b9.png',
  },
  {
    id: 10,
    img: '/images/brands-nobg/b10.png',
  },
  {
    id: 11,
    img: '/images/brands-nobg/b1.png',
  },
  {
    id: 12,
    img: '/images/brands-nobg/b2.png',
  },

  {
    id: 13,
    img: '/images/brands-nobg/b3.png',
  },
  {
    id: 14,
    img: '/images/brands-nobg/b4.png',
  },
]

const data = [
  {
    id: 1,
    img: '/images/brands-nobg/c1.png',
  },
  {
    id: 2,
    img: '/images/brands-nobg/c2.png',
  },
  {
    id: 3,
    img: '/images/brands-nobg/c3.png',
  },
  {
    id: 4,
    img: '/images/brands-nobg/c4.png',
  },
  {
    id: 5,
    img: '/images/brands-nobg/c5.png',
  },
  {
    id: 6,
    img: '/images/brands-nobg/c6.png',
  },
  {
    id: 7,
    img: '/images/brands-nobg/c7.png',
  },
  {
    id: 8,
    img: '/images/brands-nobg/c8.png',
  },
  {
    id: 9,
    img: '/images/brands-nobg/c9.png',
  },
  {
    id: 10,
    img: '/images/brands-nobg/c10.png',
  },
  {
    id: 11,
    img: '/images/brands-nobg/c1.png',
  },
  {
    id: 12,
    img: '/images/brands-nobg/c2.png',
  },

  {
    id: 13,
    img: '/images/brands-nobg/c3.png',
  },
  {
    id: 14,
    img: '/images/brands-nobg/c4.png',
  },
]

const containerStyle = {
  marginTop: '40px',
  marginBottom: '40px',
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

const Brands = () => {
  return (
    <div>
      <div>
        {/* <h1>Brands you will find in our products</h1> */}
        <div className="flex justify-center items-center sm:my-8 sm:mb-24 mb-20">
          <div style={containerStyle} className="mt-16">
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Brands you will find in our products
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

      <div className="brands">
        <BrandImageSlider brandImages={brand} />
      </div>

      <div className="flex items-center justify-c">
        

        <div className="w-full ">
          <div className="flex justify-center items-center">
            <div style={containerStyle} className="mr-[15%]">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center  mx-auto my-[40px]">
                  Our Corporate Presence
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
      </div>

      <div className="brands">
        <BrandImageSlider brandImages={data} />
      </div>
    </div>
  )
}

export default Brands
