'use client'
import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Typed from 'typed.js'
import Image from 'next/image'
const MyForm = () => {
  const el = React.useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    pincode: '',
    agree: '',
    requirements: '',
    file: '',

  })
  const [btnText, setBtnText] = useState('Book A Visit Today')
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
    console.log('Submitting form...')
    setFormSubmitted(true);

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
        "https://www.designindianhomes.com/api/submit-form",
        {
          method: "POST",
          mode: "no-cors",
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

    setFormSubmitted(true);
  };
  const handleClose = () => {
    setFormSubmitted(false);
    // Add any additional logic you want to perform when closing the thank-you page
  };

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'kitchen?',
        'bedroom?',
        'bathroom?',
        'guest room?',
        'living room?',
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className='flex justify-center' id='footerform'>
        <h1 className='text-4xl font-bold uppercase text-center text-black'>Connect with us <span className='text-white underline'>Today</span></h1>
      </div>
      <div className="flex flex-col sm:flex-row lg:mx-16 mt-8">
        {/* Left side with heading and paragraph */}
        <div className="sm:w-1/2 p-4">
          <h1 className="absolute text-2xl sm:text-3xl font-bold mb-4 text-white ml-2 mt-2 lg:w-[50vw] sm:w-[20vw]">
            Looking for expert guidance to<br /> design your<br />
            <span ref={el} className="text-yellow-300" />
          </h1>

          <Image
            src="/images/footer-form.jpg"
            alt='my-form'
            width={1000}
            height={1000}
            className='w-full lg:h-[70vh] sm:h-[20vh] rounded'
          />

          <p className="text-white text-l mt-4">
            Leave your information and we will call you to book your preferred
            consultation slot
          </p>
        </div>

        {/* Right side with the form */}
        <div className="sm:w-1/2 p-4">


          {formSubmitted ? (
            <div className='grid grid-cols-1 justify-items-center' >
              <p className='text-center text-lg'>Thank you for your submission!</p>
              <Image
                alt="thank you image"
                src={'/thank-you.png'}
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
          ) : (<form
            method="post"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-900"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email ID*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-900"
              >
                Mobile Number*
              </label>
              <input
                type="tel"
                id="number"
                onChange={handleChange}
                name="number"
                className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-900"
              >
                Pincode*
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-gray-900"
              >
                Interested In ??
              </label>
              <select
                required
                id="requirements"
                name="requirements"
                className="mt-1 p-2 w-full bg-red-500 border-b border-gray-500 focus:outline-none focus:border-blue-500 "
                onChange={handleChange}
                defaultValue="Architect"
              >
                <option className="text-gray-400" value="" disabled selected>
                  Interested in
                </option>
                <option value="Complete Modular Interiors">
                  Complete Modular Interiors
                </option>
                <option value="End to End Interiors">
                  End to End Interiors
                </option>
                <option value="Architectural Consultancy">
                  Architectural Consultancy
                </option>
                <option value="Modular Kitchens">Modular Kitchens</option>
                <option value="Wardrobes">Wardrobes</option>
                <option value="Living or Bedroom Renovation">
                  Living or Bedroom Renovation
                </option>
                <option value="Bathroom or Balcony Renovation">
                  Bathroom or Balcony Renovation
                </option>
                <option value="Commercial Interiors">
                  Commercial Interiors
                </option>
                <option value="Luxury Interiors">Luxury Interiors</option>

              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-900"
              >
                Attach Your Project
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="mt-1 p-2 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="agree" className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="mr-2"
                  onChange={handleChange}
                />
                <span className="text-sm text-gray-900">
                  Yes, I would like to receive important updates and notifications
                  on WhatsApp
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 bg-green-400 hover:bg-green-600 text-lg py-3 px-6 mb-12 rounded-full hover:text-white flex justify-center items-center "
            >
              {btnText} <ChevronRight className="ml-2" />
            </button>
          </form>
          )}
        </div>
      </div>
    </>
  )
}

export default MyForm
