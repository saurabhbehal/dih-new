'use client'
// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Head from 'next/head'
import Link from 'next/link'
import ProgressBar from '../../components/Progressbar'
// import Card from './Card'
import MyForm from '../../components/MyForm'
import Omsairam from '../../components/Navbar/Omsairam'
import Image from 'next/image'
import Script from 'next/script'
const Page = ({}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Modular Kitchen Design and Installation',
    provider: {
      '@type': 'Organization',
      name: 'Design Indian Homes',
      url: 'https://designindianhomes.com/',
      logo: 'https://www.designindianhomes.com/images/Logo.gif',
      description:
        'Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, Gurgaon, Noida & India.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9899264978',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Design Street',
        addressLocality: 'New Delhi',
        addressRegion: 'DL',
        postalCode: '110001',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'Offer',
      url: 'https://designindianhomes.com/modular-kitchen-top-brand-india',
      priceCurrency: 'INR',
      price: 'Contact for pricing',
      availability: 'http://schema.org/InStock',
      validFrom: '2024-09-21',
    },
    areaServed: {
      '@type': 'Place',
      name: 'India',
    },
    category: 'Modular Kitchen Design',
    potentialAction: {
      '@type': 'Action',
      name: 'Book a Kitchen Design Consultation',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://designindianhomes.com/book-kitchen-consultation',
      },
    },
  }

  const [categoryDataArray, setCategoryDataArray] = useState<any[]>([])

  const categoryFolderMapping: Record<number, string> = {
    // 89: 'types-of-modular-kitchens',
    90: 'modular-kitchen-designs',
    91: 'luxury-modular-kitchens',
    92: 'kitchen-renovations',

    // Add more mappings as needed
  }

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const timestamp = Date.now()
        const categoryIds = [ 90, 91, 92] // Add the category IDs you want to fetch

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
  const [title, setTitle] = useState(
    'Modular Kitchens | Modular Kitchens & Wardrobe Brand India'
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <head>
          <title>
            Modular Kitchens | Modular Kitchens & Wardrobe Brand India
          </title>
          <meta
            name="description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India."
          />

          <meta name="Author" content="Design Indian Homes" />
          <meta name="Generator" content="www.designindianhomes.com" />
          <meta name="Language" content="en" />
          <meta name="robots" content="index, follow" />
          <meta name="Copyright" content="©www.designindianhomes.com" />
          <meta name="Designer" content="Design Indian Homes Unit" />
          <meta name="Publisher" content="www.designindianhomes.com" />
          <meta name="Distribution" content="Global" />
          <meta name="Rating" content="general" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="canonical"
            href="https://designindianhomes.com/modular-interior-design-ideas/
"
          />
          <meta name="googlebot" content="index, follow" />
          <meta name="Yahoobot" content="index, follow" />
          <meta name="MSNbot" content="Index, Follow" />
          <meta name="allow-search" content="yes" />
          <meta name="country" content="India" />
          <meta name="contactNumber" content="+91-98-99-26-49-78" />
          <meta name="dc.language" content="english" />
          <meta name="geo.region" content="IN-DL" />
          <meta name="geo.placename" content="Delhi" />
          <meta
            property="og:url"
            content="https://designindianhomes.com/modular-interior-design-ideas/"
          />
          <meta
            property="og:title"
            content="Modular Interiors | Modular Kitchens & Wardrobe Brand India"
          />
          <meta
            property="og:description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India"
          />
        </head>
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-gray-600 text-sm">
            Modular Kitchens Top Brand
          </span>
        </div>

        <div className="flex items-center bg- p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Modular Kitchens Top Brand</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated Modular Kitchens design ideas, to give
          your home a brand new look. Explore exclusive Modular Kitchen designs
          and trends that are every bit inspirational as they are practical. Our
          team of interior designers have put together ideas across kitchen,
          bedroom, living room and more, to help you pick a design that will
          best suit your Modular Kitchens requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
          <div className="bg-white rounded-md shadow-md p-6">
            <Link href="/types-of-modular-kitchens">
              <Image
                alt="Types of Modular Kitchen"
                height={1000}
                width={1000}
                src="/images/modular_kitchen/larg/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (6).jpg"
                style={{
                  width: '450px',
                  height: '230px',
                  borderRadius: '10px',
                }}
              />

              <h2 className="text-xl font-semibold mb-4">
                Types of Modular Kitchens
              </h2>
              <p className="text-gray-700 mb-4">
                Best Modular Kitchens designs in Delhi, Gurgaon, Noida,
                Faridabad india
              </p>
            </Link>
          </div>
          {categoryDataArray.map((categoryData) => (
            <Link
              key={categoryData.id}
              href={`/modular-kitchen-top-brand-india/${
                categoryFolderMapping[categoryData.id]
              }`}
            >
              <div className="bg-white rounded-md shadow-md p-6">
                {categoryData.image && (
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
                )}
                <h2 className="text-xl font-semibold mb-4">
                  {categoryData.name}
                </h2>
                <p className="text-gray-700 mb-4">{categoryData.description}</p>
              </div>
            </Link>
          ))}
          <div className="bg-white rounded-md shadow-md p-6">
            <Link href="/shutter-finish">
              <Image
                alt="Types of Modular Kitchen"
                height={1000}
                width={1000}
                src="https://api.designindianwardrobe.com/uploads/acrylic-modular-kitchen-dealers-and-manufacturers-in-delhi-gurgaon-noida-india%20(1).jpg"
                style={{
                  width: '450px',
                  height: '230px',
                  borderRadius: '10px',
                }}
              />

              <h2 className="text-xl font-semibold mb-4">Shutter Finish</h2>
              <p className="text-gray-700 mb-4">
                Best Shutter Finish designs in Delhi, Gurgaon, Noida, Faridabad
                india
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Page
