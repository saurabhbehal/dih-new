'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'react-before-after-slider-component/dist/build.css'
import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

const StructureImageUrl = [
  //First image url
  {
    url: '/images/structural/str1.jpg',
  },
  {
    url: '/images/structural/str2.jpg',
  },
  {
    url: '/images/structural/str3.jpg',
  },
  {
    url: '/images/structural/str4.jpg',
  },
  {
    url: '/images/structural/str5.jpg',
  },
  {
    url: '/images/structural/str6.jpg',
  },
]

const KitchenImageUrl = [
  //First image url
  {
    url: '/images/kitchen/k1.avif',
  },
  {
    url: '/images/kitchen/k2.avif',
  },
  {
    url: '/images/kitchen/k3.avif',
  },
  {
    url: '/images/kitchen/k4.avif',
  },
  {
    url: '/images/kitchen/k5.avif',
  },
  {
    url: '/images/kitchen/k6.avif',
  },
]

const InteriorImageUrl = [
  //First image url
  {
    url: '/images/interior/int1.avif',
  },
  {
    url: '/images/interior/int2.avif',
  },
  {
    url: '/images/interior/int3.avif',
  },
  {
    url: '/images/interior/int4.avif',
  },
  {
    url: '/images/interior/int5.avif',
  },
  {
    url: '/images/interior/int6.avif',
  },
]

const WardrobeImageUrl = [
  //First image url
  {
    url: '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (3).jpg',
  },
  {
    url: '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (4).jpg',
  },
  //Second image url
  {
    url: '/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (7).jpg',
  },
  //Third image url
  {
    url: '/images/wardrobe/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (2).jpg',
  },

  //Fourth image url

  {
    url: '/images/wardrobe/larg/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (1).jpg',
  },

  {
    url: '/images/wardrobe/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (2).jpg',
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 264 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const BestCarousels = () => {
  return (
    <div>
      <div className="mt-24">
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        {/* <h1>Best Trending Kitchens</h1> */}
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Kitchens
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

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {KitchenImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <Image
                  width={1000}
                  height={1000}
                  src={imageUrl.url}
                  alt="movie"
                />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <Link href="/types-of-modular-kitchens">
            <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
              Check Out Our Collections
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-24">
        {/* <h1>Best Trending Wardrobes</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Wardrobes
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

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {WardrobeImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <Image
                  width={1000}
                  height={1000}
                  src={imageUrl.url}
                  alt="kitchen"
                />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <Link href="/modular-kitchen-top-brand-india/modular-kitchen-designs">
            <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
              Check Out Our Collections
            </button>
          </Link>
        </div>
      </div>

      <div className=" mt-24">
        {/* <h1>Best Trending Interiors</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />
        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Interiors
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

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {InteriorImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <Image
                  width={1000}
                  height={1000}
                  src={imageUrl.url}
                  alt="kitchen"
                />
              </div>
            )
          })}
        </Carousel>

        <div className="flex justify-center items-center ">
          <Link href="/luxury-residence-designs-delhi-india/luxury-interior">
            <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
              Check Out Our Collections
            </button>
          </Link>
        </div>
      </div>

      <div className=" mt-24">
        {/* <h1>Best Trending Structures</h1> */}
        <hr className="border-t-[1px] border-red-500 w-full mb-20 my-24" />

        <div className="flex justify-center items-center my-8">
          <div style={containerStyle}>
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Best Trending Structures
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

      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {StructureImageUrl.map((imageUrl, index) => {
            return (
              <div className="slidering" key={index}>
                <Image
                  width={1000}
                  height={1000}
                  src={imageUrl.url}
                  alt="kitchen"
                />
              </div>
            )
          })}
        </Carousel>
        <div className="flex justify-center items-center ">
          <Link href="/luxury-residence-designs-delhi-india/luxury-structural">
            <button className=" bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white  font-bold ">
              Check Out Our Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BestCarousels
