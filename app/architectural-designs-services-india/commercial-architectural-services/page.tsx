'use client'

import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Head from 'next/head'
import Omsairam from '../../../components/Navbar/Omsairam'
import Slider from '../../slider/Page'
import Image from 'next/image'
import ContactFormSection from '../../../components/ContactForm/page'
import MaxWidthWrapper from '../../../components/MaxWidthWrapper'
const Page = ({}) => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    number: '',
    qualification: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false);

 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormSubmitted(true);

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    formDataToSend.append('file', selectedFile)

    try {
      setBtnText('Uploading...')
      const response = await fetch('https://m.designindianhomes.com/submitForm', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setBtnText('Done')
        console.log('Form data and file uploaded successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
      } else {
        setBtnText('Something Went Wrong')
        console.error('Form data and file upload failed.')
      }
    } catch (error) {
      setBtnText('Something Went Wrong')
      console.error('Error during form data and file upload:', error)
    }
    setFormSubmitted(true);
  };
  const handleClose = () => {
    setFormSubmitted(false);
  };
  const [photoIndex, setPhotoIndex] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const [images, setImages] = useState<Array<{ id: number; filename: string }>>(
    []
  )
  useEffect(() => {
    const categoryIds = [44] // Add the category IDs you want to fetch
    const fetchImages = async () => {
      try {
        const timestamp = Date.now()
        const response = await fetch(
          `https://api.designindianwardrobe.com/api/images/${categoryIds}?timestamp=${timestamp}`
        )
        if (response.ok) {
          const data = await response.json()
          setImages(data)
        } else {
          console.error('Error fetching images:', response.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchImages()
  }, [])
  const handleImageClick = (index: number) => {
    setPhotoIndex(index)
    setShowSlider(true)
  }

  const handleCloseSlider = () => {
    setShowSlider(false)
  }
  const [title, setTitle] = useState(
    'Commercial Architectural Services | Top Commercial Architects'
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <head>
          <title>
            Commercial Architectural Services | Top Commercial Architects
          </title>

          <meta
            name="description"
            content="We are a top commercial architectural brand, we design and plan commercial spaces at most affordable quotes across Delhi, gurgaon, noida, faridabad - India"
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
            href="https://designindianhomes.com/commercial-architectural-delhi-india/"
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
            content="https://designindianhomes.com/commercial-architectural-delhi-india/"
          />
          <meta
            property="og:title"
            content="Commercial Architectural Services | Top Commercial Architects"
          />
          <meta
            property="og:description"
            content="We are a top commercial architectural brand, we design and plan commercial spaces at most affordable quotes across Delhi, gurgaon, noida, faridabad - India"
          />
        </head>
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
            <Link href="/architectural-designs-services-india">
              Architectural Designs
            </Link>
          </span>{' '}
          /{' '}
          <span className="text-gray-600 text-sm">
            Commercial Architectural Services
          </span>
        </div>

        {/* tabs */}

        <Tabs id={3} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
        
        </div>
      </div>

      <div className='flex justify-center lg:max-w-[90%] max-w-[95%] ml-2'>
      {formSubmitted ? (
          <div className='grid grid-cols-1 justify-items-center' >
            <p className='text-center text-lg'>Thank you for your submission!</p>
            <Image
            alt='thank you'
              src={'https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg'}
              width={400}
              height={300}

            />
   <h1 className='text-center font-bold'> FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR WHATSAPP US ON 9899264978, 9582827928</h1>

            <button
              onClick={handleClose}
              className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
              {/* Left Column */}
              <div className="sm:mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Name:
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Address:
                  </label>
                  <input
                    required
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email:
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Number:
                  </label>
                  <input
                    required
                    type="tel"
                    id="number"
                    name="number"
                    onChange={handleChange}
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Are you
                  </label>
                  <select
                    required
                    id="requirements"
                    name="requirements"
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="Architect"
                  >
                    <option value="Architect" selected>
                      Interested In
                    </option>
                    <option value="Designer">Architectural Consultancy</option>
                    <option value="Builder">Commercial Architectural Service</option>
                    <option value="Company">End to End Architectural Service</option>
                    <option value="Freelancer ">End to End Interior</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Attach Your Project
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="form-input bg-white text-green-500 border border-green-500 py-2 px-4 rounded-md shadow-sm tracking-wide block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 rounded-full text-white p-2 w-1/2"
              >
                {btnText}
              </button>
            </div>
          </form>
            )}
</div>

<div className='mt-8'>
  <Footer />
  </div>
      
    </>
  )
}

export default Page
