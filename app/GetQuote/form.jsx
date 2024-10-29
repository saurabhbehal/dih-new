'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    number: '',
    date: '',
    FloorPlan: '',
    message: '',
    purpose: '',
    requirements: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false);


  //   const handleFileChange = (event) => {
  //     setFormData({
  //       ...formData,
  //       file: event.target.files[0],
  //     })
  //   }
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
    event.preventDefault();
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
  }
  const handleClose = () => {
    setFormSubmitted(false);
    // Add any additional logic you want to perform when closing the thank-you page
  };

  return (
    <>
      <MaxWidthWrapper className="">
        <div className="mx-auto p-8 bg-amber-50 rounded-lg mb-8 sm:mb-16 sm:mx-16">
        
        
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
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
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
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
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
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>
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
                    className="form-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 rounded-md block w-full appearance-none leading-5 transition duration-150 ease-in-out"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 ">
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-600 mb-1 mt-4"
                  >
                    Select File:
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="form-input bg-white text-green-500 border border-green-500 py-2 px-4 rounded-md shadow-sm tracking-wide block w-full appearance-none leading-5 transition duration-150 ease-in-out mt-3"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    When would you like the project to start?
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full form-input-date  border border-gray-300 py-2 px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="FloorPlan"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Your Floor Plan
                  </label>
                  <select
                    required
                    id="FloorPlan"
                    name="FloorPlan"
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="1 BHK"
                  >
                    <option value="1 BHK" selected>
                      1 BHK
                    </option>
                    <option value="2 BHK">2 BHK</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Purpose
                  </label>
                  <select
                    required
                    id="purpose"
                    name="purpose"
                    
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="Move In"
                  >
                    <option value="Move In" selected>
                      Move In
                    </option>
                    <option value="Rent">Rent Out</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Your requirements *
                  </label>
                  <select
                    required
                    id="requirements"
                    name="requirements"
                    
                    className="w-full form-input-select border border-gray-300 py-[6px] px-4 rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline focus:border-blue-500"
                    onChange={handleChange}
                    defaultValue="Bedroom"
                  >
                    <option value="Bedroom" selected>
                      Bedroom
                    </option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                   Any Particular Requirements?
                  </label>
                
                  <textarea
                  rows="1"
                  id="message"
                  name='message'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
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
      </MaxWidthWrapper>
    </>
  )
}

export default FileUploadForm
