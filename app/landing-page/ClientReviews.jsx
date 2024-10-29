'use client'
import React, { useState } from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
const YouTubeCard = ({ imgUrl, videoLink, openModal, title, desc }) => {
  return (
    <>
      <div className="relative rounded-lg border-2 border-green-500 m-2 p-4 h-96">
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
            <p className="text-sm bg-green-500 w-fit p-2 rounded-full text-white hover:bg-green-600">
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
  const cardData = [
    {
      imgUrl: '/images/landing/firstThumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/gxuwzE7lnXo?si=xcODceg0jCZHB7GM',
      videoLink: 'https://youtu.be/gxuwzE7lnXo?si=TlacOd21cA2AAQgc',
      title: 'Aman & Astha',
      desc: '"Collaborating with Design Indian Homes was delightful. Their precision and commitment made our renovation effortless. From start to finish, they exceeded expectations."',
    },
    {
      imgUrl: '/images/landing/secondThumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/nv09oOzZiGY?si=Bf4xHq1oLPjxApx3',
      videoLink: 'https://www.youtube.com/watch?v=nv09oOzZiGY',
      title: "Singh's Family",
      desc: '"Design Indian Homes earns my highest recommendation! Professionalism and creativity define them. They understand preferences and deliver spaces."',
    },
    {
      imgUrl: '/images/landing/thirdThumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/3tIEJtHrGtI?si=M_GBs3ADuEK0xBtx',
      videoLink: 'https://www.youtube.com/watch?v=3tIEJtHrGtI',
      title: 'Ajeet & Disha',
      desc: '"Selecting Design Indian Homes was our best decision. Their expertise and dedication shine through every project. We are thrilled and eager to work with them again."',
    },
    {
      imgUrl: '/images/landing/fourthThumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/QQ0pLNSwu7A?si=GSrM6GCUMIcvspze',
      videoLink: 'https://youtu.be/QQ0pLNSwu7A?si=GSrM6GCUMIcvspze',
      title: "Shah's House",
      desc: '"Design Indian Homes transformed our kitchen remarkably. Innovative ideas and meticulous attention yielded a modern masterpiece. Their pride reflects in exceptional results."',
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  // Slick settings for the slider
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
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
      <Carousel responsive={responsive} className="py-4">
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
      </Carousel>
      {/* <iframe
              title="YouTube Video"
              width="100%"
              height="400"
              src={selectedVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              playsInline
              onClick={(e) => e.stopPropagation()}
            ></iframe> */}
      {/* Modal */}
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

const ClientReviewsSection = () => {
  return (
    <>
      <MaxWidthWrapper className="bg-amber-50">
        <div className="flex flex-col bg-amber-50 mt-16 ">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className=" justify-center items-center sm:my-8 mt-8 sm:mt-4 sm:ml-6 ml-4">
              <h2 className="sm:text-3xl text-2xl font-bold text-left">
                We&apos;ll let our clients do the talking
              </h2>
              <p className="sm:text-xl text-left">
                Here’s what they have to say
              </p>
            </div>
            <div className="my-8 justify-center items-center ml-4 sm:ml-0">
              <button className="flex items-center bg-green-500 text-white text-sm px-8 py-4 rounded-full hover:bg-green-700">
                BOOK FREE CONSULTATION
              </button>
            </div>
          </div>
          <div className=" sm:mx-4 mb-8 sm:mb-16 w-full">
            <YouTubeSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default ClientReviewsSection
