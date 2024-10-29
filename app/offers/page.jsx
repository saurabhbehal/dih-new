'use client'
import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Omsairam from '../../components/Navbar/Omsairam'
import TopPriority from './Top-priority'
import Second from './Second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
import BottomText from './BottomText'

const ImageSection = () => {
  const [showDetails, setShowDetails] = React.useState(false)

  const handleToggle = () => {
    setShowDetails(!showDetails)
  }
  return (
    <>
      <Omsairam />
      <Header />
      <MaxWidthWrapper className="mt-32 lg:mt-64">
        <div className="my-4 sm:my-16 mx-auto">
          <h2 className="sm:text-2xl font-bold text-center">
          PACKAGE OFFERS FOR FURNISHING 3BHK IN INDIA - <br/> Choose From Our Exclusive Interior Packages - Tailor Made For YOU
          </h2>
        </div>
        <TopPriority id="top-priority"/>

        {/* second offer */}

        <Second id="second" />
        <Third id="third" />
        <Fourth id="fourth" />
        <Fifth id="fifth" />
        <Sixth id="sixth" />
        {/* bottom text */}
        <BottomText />
      </MaxWidthWrapper>
      <Footer />
    </>
  )
}

export default ImageSection
