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
    148: 'custom-modular-kitchen',
    149: 'g-shape-modular-kitchen',
    150: 'garden-modular-kitchen',
    151: 'island-modular-kitchen',
    152: 'l-shape-modular-kitchen',
    153: 'open-modular-kitchen',
    154: 'parllel-modular-kitchen',
    155: 'peninsula-modular-kitchen',
    156:  'straight-modular-kitchen',
    157: 'studio-modular-kitchen',
    158: 'terrace-modular-kitchen',
    159: 'u-shape-modular-kitchen'
    
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [148, 149,150,151,152,153,154,155,156,157,158,159] // Add the category IDs you want to fetch

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
          <h1 className="text-3xl font-bold">Types of Modular Kitchen</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We make your Modular Interiors look good, just as you dress up to look
          up, we are your modular interiors Makeover Specialist. All Our Modular
          Interiors are very affordable and we have more than 1000+ wardrobe
          designs to showcase, book a site visit with us and see the design
          magic, and we assure you 100% guaranteed quotes across Delhi NCR, we
          stake claim since past 9 years, that you bring us any Quote and we
          offer you Flat 7% off. Check out our designs for best Wardrobe Ideas
          and Inspirations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          {categoryDataArray.map((categoryData) => (
            <div
              key={categoryData.id}
              className="bg-white rounded-md shadow-md p-6"
            >
              {categoryData.image && (
                <Link
                  href={`/types-of-modular-kitchens/${
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
              <h2 className="text-base font-semibold mt-4 capitalize">
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
