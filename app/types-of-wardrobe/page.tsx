'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    126: '2-door-sliding-wardrobe-designs',
    127: '3-door-sliding-wardrobe-designs',
    128: 'acrylic-wardrobe-designs',
    129: 'hinged-wardrobe-designs',
    130: 'lacquer-glass-wardrobe-designs',
    131: 'laminated-wardrobe-designs',
    132: 'membrane-wardrobe-designs',
    133: 'polished-wardrobe-designs',
    134:  'teak-wardrobe-designs',
    135: 'veener-wardrobe-designs',
    136: 'walk-in-wardrobe-designs',
    145: 'cane-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india',
    146: 'cnc-designer-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india',
    147: 'leatherite-designer-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india'





  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [126, 127,128,129,130,131,132,133,134,135,136,145,146,147 ] // Add the category IDs you want to fetch

        // Fetch category data
        const categoryPromises = categoryIds.map(async (categoryId) => {
          const response = await fetch(
            `https://api.designindianwardrobe.com/api/categories/${categoryId}?timestamp=${timestamp}`
          )
          if (response.ok) {
            const data = await response.json()
            return data
          } else {
            console.error(
              `Error fetching data for category ${categoryId}:`,
              response.statusText
            )
            return {}
          }
        })

        const categoryDataArray = await Promise.all(categoryPromises)

        // Fetch image data for each category
        const imageDataPromises = categoryDataArray.map(
          async (categoryData) => {
            const imageResponse = await fetch(
              `https://api.designindianwardrobe.com/api/images/${categoryData.id}?timestamp=${timestamp}`
            )
            if (imageResponse.ok) {
              const imageData = await imageResponse.json()
              // Assuming you want only one image per category
              const selectedImage = imageData[0]
              return selectedImage
            } else {
              console.error(
                `Error fetching image for category ${categoryData.id}:`,
                imageResponse.statusText
              )
              return {}
            }
          }
        )

        const imageDataArray = await Promise.all(imageDataPromises)

        // Combine category data with corresponding image data
        const mergedDataArray = categoryDataArray.map(
          (categoryData, index) => ({
            ...categoryData,
            image: imageDataArray[index],
          })
        )

        setCategoryDataArray(mergedDataArray)
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchCategoryData()
  }, [])
  const handleImageLoad = () => {
    // After the image is loaded, scroll back to the top of the page
    window.scrollTo(0, 0);
  };


  return (
    <>
    <head>
    <title>Types of Wardrobes | Top Wardrobe Designs in Delhi - India</title>

<meta name="description" content ="We have some of the top wardrobe designs across delhi, gurgaon, noida and India, we have some of the largest collection of modular wardrobes across Delhi - India." />


<meta name="Author" content="Design Indian Homes" />
<meta name="Generator" content="www.designindianhomes.com" />
<meta name="Language" content="en" />
<meta name="robots" content="index, follow" />
<meta name="Copyright" content="©www.designindianhomes.com" />
<meta name="Designer" content="Design Indian Homes Unit" />
<meta name="Publisher" content="www.designindianhomes.com" />
<meta name="Distribution" content="Global" />
<meta name="Rating" content="general" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="canonical" href="https://designindianhomes.com/types-of-wardrobe/" />
<meta name="googlebot" content="index, follow" />
<meta name="Yahoobot" content="index, follow" />
<meta name="MSNbot" content="Index, Follow" />
<meta name="allow-search" content="yes" />
<meta name="country" content="India"/>
<meta name="contactNumber" content="+91-98-99-26-49-78"/>
<meta name="dc.language" content="english"/>
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Delhi" />
<meta property="og:url" content="https://designindianhomes.com/" />
<meta property="og:title" content="Types of Wardrobes | Top Wardrobe Designs in Delhi - India" />
<meta property="og:description" content="We have some of the top wardrobe designs across delhi, gurgaon, noida and India, we have some of the largest collection of modular wardrobes across Delhi - India." />
  
    </head>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Modular Interiors</span>
        </div>

        <div className="flex items-center bg- p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Types of Wardrobe</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
        With Our Brand, you will find some of the top variety for Modular Wardrobes, Custom wardrobes, Teak wardrobes and just any type of wardrobe one can think of. In Our Facility, we are manufacturing high end, affordable and bespoke wardrobes. Connect with us today & get a cool wardrobe for your residence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <div
              key={categoryData.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              {categoryData.image && (
                <Link
                  href={`/types-of-wardrobe/${
                    categoryFolderMapping[categoryData.id]
                  }`}
                >
                  <Image
                    width={1000}
                    height={1000}
                    onLoad={handleImageLoad}
                    src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                    alt={categoryData.image.filename}
                    style={{
                      width: '450px',
                      height: '200px',
                      borderRadius: '10px',
                    }}
                  />
                </Link>
              )}
              <h2 className="text-base font-semibold mt-4">
                {categoryData.name}
              </h2>
              <p className="text-gray-700 mb-4">{categoryData.description}</p>
            </div>
          ))}
        </div>
      </div>

      

      <Footer />
    </>
  )
}
export default Page
