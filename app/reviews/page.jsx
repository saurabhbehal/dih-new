"use client"
import React, { useState } from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Customer from './Customer'
import CustomerVideos from './CustomerVideos'
import ArchitectSpeak from './ArchitechSpeak'
import Link from 'next/link'
import Image from 'next/image';
import ScheduleChatSection from '../../components/schedule-chat/page'
import PopupForm from '../../components/popupform/page'




const SectionWithImage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

 
  return (
    <div className="p-4 sm:p-16 bg-gray-300">
      <section className="flex flex-col md:flex-row items-center">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">
            JOIN US - FREELANCE WITH US- REFER & EARNS WITH US- BE AN ASSOCIATE
            PARTNER WITH US
          </h2>
          <p className="text-gray-700 mb-4 text-center sm:text-left mx-auto">
            We&apos;re thrilled to know our customers loved the Design indian Homes
            experience. This truly keeps us going!
          </p>
          <div className='mb-12 flex justify-center'>

            <button className="bg-green-500 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full shadow-lg" onClick={togglePopup}>
              CONNECT TODAY
            </button>
           <PopupForm
           showPopup={showPopup}
           togglePopup={togglePopup}
           />
          </div>
        </div>
        <div className="lg:w-1/2">
          <Link href="https://www.mouthshut.com/product-reviews/Design-Indian-Kitchen-reviews-925732060" target='_blank'>
          <Image
            width={1000}
            height={1000}
            src="/images/reviews-mouthshut.jpg"
            alt="Description of your image"
            className="w-full rounded"
          />
          </Link>
        </div>
      </section>
    </div>
  )
}

const SocialReviews = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">SOCIAL REVIEWS</h2>
      </section>

      <div className="flex flex-wrap justify-evenly">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/justDail.jpg"
            alt="Description for Image 1"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.justdial.com/Delhi/Design-Indian-Kitchen-Near-Dwarka-Sector-10-Metro-Station-Palam/011PXX11-XX11-141108151600-E1L5_BZDET/reviews"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/Sulekha.jpg"
            alt="Description for Image 2"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.sulekha.com/design-indian-kitchen-connaught-place-delhi-contact-address"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/facebookReview.jpg"
            alt="Description for Image 3"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.facebook.com/designindiankitchen"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <div className=" mt-[130px] lg:mt-36 mb-16 sm:mx-8">
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto uppercase">
          Design Indian kitchen reviews
        </h1>
        <p className=" text-md font-bold text-center mb-16">
          Welcome to Our Review Page, Our Brand is the Most Loved Brand Across New Delhi - NCR, we are the most referred brand across the Town, check out reviews of our Parent Brand Design Indian Kitchen and check the Love Our Clients Shower on Us. We are trying harder each day to become more better than we were Today, and thus serve you in the most professional manner. Keep the Trust and BIG LOVE ❤️
        </p>
      </div>
      <CustomerVideos />
      <SectionWithImage />
      <SocialReviews />
      <ArchitectSpeak />
      <Customer />
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
