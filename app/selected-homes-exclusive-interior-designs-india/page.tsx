'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import Head from 'next/head'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
const Page = ({}) => {
  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])
  const categoryFolderMapping: Record<number, string> = {
    118: 'astounding-lobby-area-designs',
    115: 'artistic-bedroom-designs',
    117: 'comforting-balcony-area-designs',
    119: 'soulful-kids-room-designs',
    120: 'relaxed-walk-in-wardrobe-designs',
    121: 'handsome-modular-wardrobe-designs',
    122: 'exquisite-bathroom-remodel-designs',
    123: 'chilled-party-bar-unit-designs',
    124: 'blissful-parents-room-designs-ideas',
    113: 'spellbinding-living-room-designs',
    114: 'delicious-modular-kitchen-designs',
    116: 'mesmerizing-modern-home-interiors',
    // Add more mappings as needed
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [
          118, 115, 117, 119, 120, 121, 122, 123, 124, 113, 114, 116,
        ] // Add the category IDs you want to fetch

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
  const [title, setTitle] = useState(
    'Interior Design Ideas | Top Interior Design Company in India'
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <head>
        <title>Best Designed Homes - Interior Designs in Delhi - India</title>

<meta name="description" content ="check out some of our most premium designed residences, we are the top interior designing brand across new delhi, india. Connect with us today." />


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
<link rel="canonical" href="https://designindianhomes.com/selected-homes-exclusive-interior-designs-india/" />
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
<meta property="og:title" content="Best Designed Homes - Interior Designs in Delhi - India" />
<meta property="og:description" content="check out some of our most premium designed residences, we are the top interior designing brand across new delhi, india. Connect with us today.." />

        </head>
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">selected-homes</span>
        </div>

        <div className="flex items-center p-4">
          <div className="w-1 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold border-l-4 border-green-500 pl-2">Selected Homes</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated Artistic design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 ">
          {categoryDataArray.map((categoryData) => (
            <div
              key={categoryData.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              {categoryData.image && (
                <Link
                  href={`/selected-homes-exclusive-interior-designs-india/${
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
