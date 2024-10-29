'use client'
// Import necessary modules and components
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import Image from 'next/image'

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

const CarouselBefore = () => {
  const [idx, setIdx] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const totalImages = 4

  const handleImageLoad = () => {
    console.log('Image loaded')
  }

  const preloadImages = () => {
    const imagePromises = []
    for (let i = 1; i <= totalImages; i++) {
      // Create Image elements with the onLoad event handler
      const image1 = (
        <Image
          key={`after${i}`}
          src={`/images/beforeafter/after${i}.jpg`}
          alt={`After ${i}`}
          width={1}
          height={1}
          onLoad={handleImageLoad}
        />
      )
      const image2 = (
        <Image
          key={`before${i}`}
          src={`/images/beforeafter/before${i}.jpg`}
          alt={`Before ${i}`}
          width={1}
          height={1}
          onLoad={handleImageLoad}
        />
      )

      // Add both images to the array
      imagePromises.push(image1, image2)
    }

    // Resolve the promise once all images are loaded
    Promise.all(imagePromises).then(() => setImagesLoaded(true))
  }

  // Call the preloadImages function when the component mounts
  useEffect(() => {
    preloadImages()
  }, [])

  const handleBack = () => {
    setIdx(((idx - 2 + totalImages) % totalImages) + 1)
  }

  const handleNext = () => {
    setIdx((idx % totalImages) + 1)
  }

  const FIRST_IMAGE1 = {
    imageUrl: `/images/beforeafter/after${idx}.jpg`,
  }
  const SECOND_IMAGE1 = {
    imageUrl: `/images/beforeafter/before${idx}.jpg`,
  }

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      {/* Your existing content */}
      <hr className="border-t-[1px] border-red-500 w-full mb-8 my-16" />

      <div className="sm:px-16 " id="">
        {/* ... existing content ... */}
        <div className="mt-16 sm:mt-0">
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle} className="mb-4">
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                  Before And After
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
          <h3 className="font-bold text-center z-10">Affordable Luxury</h3>
          <p className="px-6 text-sm py-4 text-center z-10">
            Transforming spaces into dreams waiting to unfold, our skilled team
            revives the ordinary into extraordinary.
          </p>
        </div>
      </div>

      {/* Carousel */}
      {imagesLoaded && (
        <>
          <div className="hidden sm:block mb-16 w-full max-h-[90%] z-10">
            <div className="flex items-center justify-center">
              <button
                className={`ml-auto border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                onClick={handleBack}
              >
                <ChevronLeft />
              </button>
              <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE1}
                secondImage={SECOND_IMAGE1}
                className="mx-4 w-full" // Adjust margin as needed
              />
              <button
                className={`ml-auto border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                onClick={handleNext}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          {/* for small screen */}
          <div className="block sm:hidden mb-16 w-full max-h-[90%]">
            <div className="flex flex-col items-center justify-center gap-4">
              <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE1}
                secondImage={SECOND_IMAGE1}
                className="mx-4 w-full" // Adjust margin as needed
              />
              <div>
                <button
                  className={`ml-auto mr-2 border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                  onClick={handleBack}
                >
                  <ChevronLeft />
                </button>
                <button
                  className={`mr-auto ml-2 border-2 border-blue-500 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white `}
                  onClick={handleNext}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CarouselBefore
