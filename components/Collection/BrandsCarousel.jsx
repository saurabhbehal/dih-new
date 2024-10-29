'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
const BrandsCarousel = ({ brandImages }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust the speed as needed

    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous autoplay
    cssEase: 'linear',
    pauseOnHover: false,
    variableWidth: true, // Allow variable width for smoother transition
    centerMode: true, // Center the current slide
    draggable: false, // Disable dragging for continuous movement
  }

  return (
    <div className=" mx-auto mt-8 overflow-hidden transform">
      <Slider {...settings}>
        {brandImages.map((brandImage, index) => {
          return (
            <div key={index} className="mr-8 sm:mr-32">
              {/* <img
                src={brandImage.img}
                alt={`Brand ${index + 1}`}
                className="  sm:w-[240px] h-[75px]  rounded-md"
              /> */}
              <Image
                src={brandImage.img}
                width={0}
                height={0}
                sizes="100vw"
                className=" h-[50px] sm:h-[75px] w-[70%]"
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default BrandsCarousel
