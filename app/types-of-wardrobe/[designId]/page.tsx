'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '../../../components/Navbar/Header'
import SimpleImageSlider from 'react-simple-image-slider'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Omsairam from '../../../components/Navbar/Omsairam'
interface PageProps {
  params: {
    designId: string
  }
}

const Page = ({ params }: PageProps) => {
  const [screenSize, setScreenSize] = useState('')
  const [screenWidth, setScreenWidth] = useState<number>(648)
  const updateScreenSize = () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setScreenSize('lg')
    } else if (window.matchMedia('(min-width: 460px)').matches) {
      setScreenSize('md')
    } else {
      setScreenSize('sm')
    }
  }

  useEffect(() => {
    // Initial screen size determination
    updateScreenSize()

    // Watch for changes in screen size using matchMedia
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleMediaQueryChange = (event: { matches: any }) => {
      updateScreenSize() // Update screen size when media query changes
      console.log('Screen Width:', window.innerWidth)
      setScreenWidth(window.innerWidth)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  let wd = 355
  let h1 = 300

  console.log(screenSize)
  if (screenSize === 'sm') {
    wd = 395
    h1 = 300
  }
  if (screenSize === 'md') {
    wd = 698
    h1 = 465
  }
  if (screenSize === 'lg') {
    wd = 698
    h1 = 465
  }

  const { designId } = params
  const decodedDesignId = decodeURIComponent(designId)
  const images1 = [
    { url: '/designImages/75-1702272255-v3H68.avif' },
    { url: '/designImages/751-1702272254-3pVcQ.avif' },
  ]

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit clicked')

    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('mobile') as HTMLInputElement).value,
      pincode: (document.getElementById('pincode') as HTMLInputElement).value,
    }

    const recipientEmail = 'saurabhbehal@gmail.com'
    const emailData = `
        Name: ${formData.name},
        Email: ${formData.email},
        Mobile: ${formData.phone},
        Pincode: ${formData.pincode}
    `
    const mailtoLink = `mailto:${recipientEmail}?subject=New Design Session Enquiry&body=${encodeURIComponent(
      emailData ?? null
    )}`
    // window.location.href = mailtoLink
    window.open(mailtoLink, '_blank')
  }

  return (
    <>
      <Omsairam />
      <Header />
      <div className="mt-32 lg:mt-64 md:p-4 flex flex-col lg:flex-row h-screen">
        {/* Image Section (60%) */}
        <div className=" relative ">
   
          <SimpleImageSlider
            width={wd} // Adjust width as needed
            height={h1} // Adjust height as needed
            images={images1}
            showBullets={false}
            showNavs={true}
            autoPlay={false}
            style={{ margin: '0 auto' }}
          />
       
        </div>

        {/* Form Section (40%) */}
        <div
          className=" p-8 flex flex-col items-center justify-center bg-gray-100 "
          style={{ height: '465px', width: 'auto' }}
        >
          <form
            className="w-full max-w-md py-2"
            method="post"
            onSubmit={handleSubmit}
          >
            <h2 className="text-md font-bold py-2">
              Our designer will call you to help with your interior
              requirements.
            </h2>

            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border rounded-md text-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border rounded-md text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mt-1 p-3 w-full border rounded-md text-sm"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="mt-1 p-3 w-full border rounded-md text-sm"
                placeholder="Enter your pincode"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded-3xl hover:bg-green-500 w-full "
            >
              Book Design Session
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page
