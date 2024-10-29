import React, { useState } from 'react'

const PopupForm =({showPopup, togglePopup })=>{
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
      }
    return(
        <>
         {showPopup && (
              <div className="fixed top-4 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-lg max-w-md w-full mx-4 overflow-y-auto h-[400px]">
                  {formSubmitted ? (
                    <div className="p-4 text-center">
                      <p className="text-lg">Thank you for your submission!</p>
                      <img
                        alt="thank you"
                        src="https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg"
                        className="mx-auto mt-4"
                        width={400}
                        height={300}
                      />
                      <h1 className="text-center font-bold mt-4">
                        FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR WHATSAPP US ON 9899264978, 9582827928
                      </h1>
                      <button onClick={handleClose} className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow">
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="p-4 relative">
                      <h1 className="text-xl font-bold mb-4">Book with Us
                        <button onClick={togglePopup} className="absolute top-0 right-0 mt-2 mr-2 bg-red-700 text-white rounded-full p-2 text-sm">
                          Close
                        </button>
                      </h1>
                      <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email ID*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="number" className="block text-sm font-medium">
                          Mobile Number*
                        </label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="pincode" className="block text-sm font-medium">
                          Pincode*
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          onChange={handleChange}
                          className="w-full p-2 border rounded"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="agree" className="flex items-center">
                          <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-xs">Yes, I would like to receive important updates and notifications on WhatsApp</span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full mt-4"
                      >
                        Book A Visit Today
                      </button>
                    </form>
                  )}
                </div>
              </div>


            )}
        </>
    )
}

export default PopupForm