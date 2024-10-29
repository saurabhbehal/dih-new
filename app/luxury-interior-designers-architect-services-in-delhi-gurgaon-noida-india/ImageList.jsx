'use client'
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from '../luxury-residence-designs-delhi-india/Tabs'
const ImageCards = ({ categoryDataArray, categoryFolderMapping }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-7 mt-16">
      {categoryDataArray.map((categoryData) => (
        <div
          key={categoryData.id}
          className="bg-white rounded-md shadow-md p-6"
        >
          {categoryData.image && (
            <Link
              href={`/luxury-residence-designs-delhi-india/${
                categoryFolderMapping[categoryData.id]
              }`}
            >
              <Image
                width={1000}
                height={1000}
                src={`https://api.designindianwardrobe.com/uploads/${categoryData.image.filename}`}
                alt={categoryData.image.filename}
                style={{
                  width: '450px',
                  height: '230px',
                  borderRadius: '10px',
                }}
              />
            </Link>
          )}
          <h2 className="text-xl font-semibold mb-4">{categoryData.name}</h2>
          <p className="text-gray-700 mb-4">{categoryData.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function TitlebarBelowMasonryImageList() {
  const [categoryDataArray, setCategoryDataArray] = useState([])
  const categoryFolderMapping = {
    137: 'luxury-interior',
    95: 'luxury-wardrobe',
    138: 'luxury-kitchen',
    139: 'luxury-structural',
    // Add more mappings as needed
  }
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [137, 95, 138, 139] // Add the category IDs you want to fetch

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

        const fetchedCategoryDataArray = await Promise.all(categoryPromises)

        // Fetch image data for each category
        const imageDataPromises = fetchedCategoryDataArray.map(
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
        const mergedDataArray = fetchedCategoryDataArray.map(
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
  }, []) // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="mt-52">
        <h1 className="text-4xl text-center mb-12">
          Design Indian Homes{' '}
          <span className="text-[#95805a] italic">Offerings</span>
        </h1>
        <ImageCards
          categoryDataArray={categoryDataArray}
          categoryFolderMapping={categoryFolderMapping}
        />
        <div>
          {/* <h1 className='text-center'>Luxury Homes</h1> */}
          {/* 
        <Tabs/> */}
        </div>
      </div>
    </>
  )
}
