'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactFormSection = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    requirement: '',
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
  return (
    <section className="py-12 bg-gray-100 md:px-28">
      <div className="container mx-auto flex sm:flex-row flex-col items-center justify-center">
        {/* Left Image */}
        <div className="sm:pr-8 pb-4 sm:pb-0">
          <Image
            width={1000}
            height={1000}
            src="/images/why-choose-us-form-removebg-preview.png" // Replace with the path to your image
            alt="Contact Form"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Right Form */}

        {formSubmitted ? (
          <div className='grid grid-cols-1 justify-items-center' >
            <p className='text-center text-lg'>Thank you for your submission!</p>
            <Image
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
        ) : (<form method="post" onSubmit={handleSubmit} className=" sm:pl-8">
          <div className="">
            <h2 className="text-3xl text-red-500 font-bold mb-6 uppercase">
              Contact Us
            </h2>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Number
                </label>
                <input
                onChange={handleChange}
                  id="number"
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Select a Date
                </label>
                <input
                  id="date"
                  onChange={handleChange}
                  type="date"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Second Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  onChange={handleChange}
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  I am Interested in
                </label>
                <select
                onChange={handleChange}
                  id="requirement"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="1"
                  onChange={handleChange}
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-500 text-white w-full hover:bg-green-600 rounded-full focus:outline-none focus:ring focus:border-green-300"
              >
                Submit
              </button>
            </div>

            {/* Submit Button */}
          </div>
        </form>
        )}
      </div>
    </section>
  )
}

export default ContactFormSection
