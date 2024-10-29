'use client'
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Image from 'next/image'

interface MyFormProps { }
const images = [
  '/luxe/best-home-designer-in-delhi-gurgaon-noida-india-1.jpg',
  '/luxe/best-home-designer-in-delhi-gurgaon-noida-india-2.jpg',
  '/luxe/best-home-designer-in-delhi-gurgaon-noida-india.jpg',
]; // Replace these URLs with your image URLs

const MyForm: React.FC<MyFormProps> = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    pincode: '',
    agree: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Submitting form...')
    setFormSubmitted(true)

    const formDataToSend = new FormData()
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    try {
      console.log(
        'Form Data to Send:',
        Object.fromEntries(formDataToSend.entries())
      )
      console.log('Uploading data...')
      const response = await fetch(
        'https://m.designindianhomes.com/submitForm',
        {
          method: 'POST',
          body: formDataToSend,
        }
      )

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      console.log('Response body:', await response.text())

      if (response.ok) {
        console.log('Form data submitted successfully!')
        console.log(
          'Form Data to Send:',
          Object.fromEntries(formDataToSend.entries())
        )
        setBtnText('Done')
      } else {
        console.error('Form data submission failed. Response:', response)
        setBtnText('Something Went Wrong')
      }
    } catch (error) {
      console.error('Error during form data submission:', error)
      setBtnText('Something Went Wrong')
    }

    setFormSubmitted(true)
  }
  const handleClose = () => {
    setFormSubmitted(false)
    // Add any additional logic you want to perform when closing the thank-you page
  }


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="mb-12 mt-8 sm:mt-[150px] p-8 text-center">
        <h1 className="text-6xl font-semibold mb-4 text-gray-700 mt-[100px]">
        The Finest Luxury 
        </h1>
        <h3 className="text-xl text-gray-700">
        Now Get some of the most affordable luxurious interiors,
        curated exclusively for YOU. Connect with us TODAY.
        </h3>
      </div>
      <div className="relative w-full lg:h-screen sm:h-[60vh] overflow-hidden">
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            width={10000}
            height={10000}
            className={`absolute z-[-1000] top-0 left-0 w-[100vw] h-[100vh]  transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <div className=' p-8 flex align-middle flex-col sm:flex-row'>
        
        <div className='sm:w-1/2'>

        </div>
         
          <div className='sm:w-1/2'>
           <div className='bg-white rounded-lg w-[350px] lg:ml-[200px]'>
          {formSubmitted ? (
          <div className="grid grid-cols-1 justify-items-center">
            <p className="text-center text-lg">
              Thank you for your submission!
            </p>
            <Image
            alt='thank you'
              src={
                'https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg'
              }
              width={400}
              height={300}
            />
            <h1 className="text-center font-bold">
              {' '}
              FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR
              WHATSAPP US ON 9899264978, 9582827928
            </h1>

            <button
              onClick={handleClose}
              className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
            >
              Close
            </button>
          </div>
        ) : ( <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg lg:mt-[50px]">
              <h1 className='pb-4 text-left text-2xl font-bold'>Book with <span className='text-red-600'> Us</span></h1>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email ID*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  onChange={handleChange}
                  name="pincode"
                  className="mt-1 p-2 w-full bg-amber-50 border-b border-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="agree" className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    onChange={handleChange}
                    name="agree"
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">
                    Yes, I would like to receive important updates and
                    notifications on WhatsApp
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-3xl flex items-center justify-center hover:bg-blue-600 mt-4 sm:mt-0"
              >
                Book A Visit Today <ChevronRight className="ml-2" />
              </button>
            </form>
             )}
             </div>
          </div>
        </div>

      </div>
   
    </>
  )
}

export default MyForm
