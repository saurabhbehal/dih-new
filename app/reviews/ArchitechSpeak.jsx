'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import YouTube from 'react-youtube'
import Link from 'next/link'

const StyledYouTube = ({ videoId, opts }) => (
  <div className="rounded-lg overflow-hidden">
    <YouTube videoId={videoId} opts={opts} />
  </div>
)

const YoutubeCarouselSection = () => {
  // Replace with your YouTube video IDs
  const videoIds = ['V4KvnxjznI4?si=HfQi4SydAA42bXmo', 'jogb2-CeRkg?si=ZqQxxtepjWiqQd2c', 'l1cjBVcLRl4?si=rK3jCCKjKJTvIPE6']

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const youtubeOptions = {
    height: '300', // Adjust the height as needed
    width: '100%', // Take full width
  }

  return (
    <section className="pt-16 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold uppercase text-center mb-8">
          ARCHITECTS SPEAK ABOUT OUR BRAND
        </h2>

        <Carousel responsive={responsive} infinite>
          {videoIds.map((embedUrl, index) => (
            <div key={index} className="p-4">
              <StyledYouTube videoId={embedUrl} opts={youtubeOptions} />
            </div>
          ))}
        </Carousel>
        <div className='flex justify-center'>
    <Link href="https://www.youtube.com/@designindiankitchen/videos" target="_blank" >
  <button className='mt-2 mb-2 bg-green-600 px-2 py-2 text-white rounded-lg '>Load More..</button>
  </Link>
  </div>
      </div>
    </section>
  )
}

export default YoutubeCarouselSection
