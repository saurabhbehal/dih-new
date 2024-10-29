'use client'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Image from 'next/image'

const YouTubeCard = ({ imgUrl, videoLink, openModal, title, desc }) => {
  return (
    <>
      <div className="relative rounded-lg border-2 border-[#95805a] m-8 p-4">
        <div
          className="relative overflow-hidden rounded-lg cursor-pointer"
          onClick={openModal}
        >
          <Image
          width={1000}
          height={1000}
            src={imgUrl}
            alt="Thumbnail"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <circle
                opacity="0.75"
                cx="36"
                cy="36"
                r="35.5"
                fill="white"
                fillOpacity="0.25"
                stroke="white"
              ></circle>
              <path
                d="M49.2422 35.2766L29.3524 16.2909C28.8433 15.805 28 16.1658 28 16.8696V55.1304C28 55.8342 28.8433 56.195 29.3524 55.7091L49.2422 36.7234C49.6549 36.3294 49.6549 35.6706 49.2422 35.2766Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>

        {/* Text description */}
        <div className="mt-4">
          <Link href={videoLink} target="_blank" rel="noopener noreferrer">
            <p className="text-sm bg-[#95805a] w-fit p-2 rounded-full text-white hover:bg-[#d6b883]">
              Play on YouTube
            </p>
          </Link>
          <p className="text-gray-600 text-lg font-semibold my-2">{title}</p>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>
    </>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '1rem',
        color: 'black',
      }}
      onClick={onClick}
    />
  )
}

const YouTubeSlider = () => {
  //   <iframe width="560" height="315" src="https://www.youtube.com/embed/6YnryDjEGr8?si=ltpsK58BYHo9x37j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  const cardData = [
    {
      imgUrl: '/images/contemporary.webp',
      videoUrl: 'https://www.youtube.com/embed/aErmAFhwES0?si=P1YkrXJ3zt3ndL0E',
      videoLink: 'https://www.youtube.com/watch?v=aErmAFhwES0',
      title: 'Arvind',
      desc: '“We are a big family with every member having their own taste. HomeLane designed a home where each room tells a different story, yet the design is such that everything looks cohesive - We all LOVE IT!',
    },
    {
      imgUrl: '/images/contemporary.webp',
      videoUrl: 'https://www.youtube.com/watch?v=V-mHKpdUpHU&ab_channel=DesignIndianKitchen-TopModularKitchenBrand',
      videoLink: 'https://www.youtube.com/watch?v=V-mHKpdUpHU&ab_channel=DesignIndianKitchen-TopModularKitchenBrand',
      title: 'Mrs Smita',
      desc: '“Architect Speak about Our Works!',
    },
    {
      imgUrl: '/images/contemporary.webp',
      videoUrl: 'https://www.youtube.com/embed/3tIEJtHrGtI?si=M_GBs3ADuEK0xBtx',
      videoLink: 'https://www.youtube.com/watch?v=3tIEJtHrGtI',
      title: 'Name of Customers',
      desc: '“We are a big family with every member having their own taste. HomeLane designed a home where each room tells a different story, yet the design is such that everything looks cohesive - We all LOVE IT!',
    },
  ]

  // Slick settings for the slider
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')
  const openModal = (videoUrl) => {
    setModalOpen(true)
    setSelectedVideoUrl(videoUrl)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Slider {...settings} className="">
        {cardData.map((card, index) => (
          <div key={index}>
            <YouTubeCard
              imgUrl={card.imgUrl}
              videoUrl={card.videoUrl}
              videoLink={card.videoLink}
              title={card.title}
              desc={card.desc}
              openModal={() => openModal(card.videoUrl)}
            />
          </div>
        ))}
      </Slider>
      {modalOpen && (
        <div className="modalForLuxe" onClick={closeModal}>
          <div
            className="modal-contentForLuxe"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="400"
              id="youtube_video_url"
              src={`${selectedVideoUrl}&autoplay=1`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <button
              className="absolute bg-gray-700 rounded-lg p-2 px-4 text-white top-2 right-2 hover:text-red-400"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const ClientReviewSection = () => {
  return (
    <>
      <MaxWidthWrapper className="bg-amber-50">
        <div className="flex flex-col sm:flex-row bg-amber-50 my-16">
          <div className="w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
            <h2 className="text-4xl font-[200] text-center">
              From Our <span className="italic text-[#95805a]">Clients</span>
            </h2>
          </div>
          <div className=" sm:mx-4 sm:my-16 mb-8 sm:mb-16 w-full sm:w-1/2 ">
            <YouTubeSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default ClientReviewSection
