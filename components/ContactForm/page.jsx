'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactFormSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    requirement: '',
  })
  const [btnText, setBtnText] = useState('Submit')
  const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (event) => {
      const { name, value } = event.target
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Submitting form...');
      setFormSubmitted(true);

      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      
    
      try {
        console.log('Form Data to Send:', Object.fromEntries(formDataToSend.entries()));
        console.log('Uploading data...');
        const response = await fetch('https://m.designindianhomes.com/submitForm', {
          method: 'POST',
          body: formDataToSend,
        });
    
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        console.log('Response body:', await response.text());
    
        if (response.ok) {
          console.log('Form data submitted successfully!');
          console.log('Form Data to Send:', Object.fromEntries(formDataToSend.entries()));
          setBtnText('Done');
        } else {
          console.error('Form data submission failed. Response:', response);
          setBtnText('Something Went Wrong');
        }
      } catch (error) {
        console.error('Error during form data submission:', error);
        setBtnText('Something Went Wrong');
      }
      setFormSubmitted(true);
    };
    const handleClose = () => {
      setFormSubmitted(false);
      // Add any additional logic you want to perform when closing the thank-you page
    };
    
    
  return (
    <section className="py-12 bg-gray-100 md:px-28 text-center">
  <h2 className="text-3xl font-bold mb-6 uppercase">Connect With Us <span className='text-red-500'>Today</span></h2>
      <div className="container mx-auto flex sm:flex-row flex-col items-center w-2/3">
        
        {/* Left Image */}
        <div className="sm:w-1/2 w-full sm:pr-8 p-2 ">
          <Image
          width={1000} height={1000}
            src="/images/contact-us.jpg" // Replace with the path to your image
            alt="Contact Form"
            className="w-full h-[75vh] rounded"
            style={{width: '800px'}}
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
        ) : (
        <form
          method="post"
          onSubmit={handleSubmit}
          className="sm:w-2/3 w-full  sm:pl-8 p-2"
        >
          <div className="">

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Number
                </label>
                <input
                  id="number"
                  type="text"
                  name='number'
                  onChange={handleChange}
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
                  type="email"
                  name='email'
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  I am Interested in
                </label>
                <select
                  id="requirement"
                  name='requirement'
                  onChange={handleChange}
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
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mt-4">
                Message
              </label>
              <textarea
                rows="3"
                id="message"
                name='message'
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-500 text-white w-full hover:bg-green-600 rounded-full focus:outline-none focus:ring focus:border-green-300"
              >
               
                {btnText}
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
