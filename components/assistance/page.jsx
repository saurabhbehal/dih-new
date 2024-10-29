import React, { useState, useEffect } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call'
import Image from 'next/image'
import './style.css'
const Assistance = () => {
  const [isShowing, setIsShowing] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  useEffect(() => {
    const hideTextTimeout = setTimeout(() => {
      setIsShowing(false)
    }, 5000)

    const showTextTimeout = setTimeout(() => {
      setIsShowing(true)
    }, 10000)

    return () => {
      clearTimeout(hideTextTimeout)
      clearTimeout(showTextTimeout)
    }
  }, [isShowing])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
    setIsRotated(!isRotated)
  }

  return (
    <div className="fixed bottom-0 right-4 flex flex-col items-center mb-[55px] z-50">
      <div className="flex flex-row justify-center items-start">
        <div>
          {isShowing && (
            <h1 className="text-center bg-white px-4 py-2 rounded-full mt-2">
              Get interior Assistance?
            </h1>
          )}
        </div>
        <div
          onClick={toggleVisibility}
          className={`relative border-2 bg-white cursor-pointer border-black w-12 h-12  rounded-full mb-4 flex justify-center items-center transform ${
            isRotated ? 'rotate-180' : ''
          } transition-transform`}
        >
          {isVisible ? (
            <CloseRoundedIcon sx={{ fontSize: 40 }} />
          ) : (
            <ForumRoundedIcon sx={{ fontSize: 40 }} />
          )}
          <span className="tooltip absolute bg-black text-white px-2 py-1 rounded text-xs bottom-full -left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
            Toggle Assistance
          </span>
        </div>
      </div>

      {isVisible && (
        <div className="absolute bottom-12 right-[-17px] rounded-lg p-4">
          <div className="border-2 bg-white cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center relative">
            <a href="https://wa.me/9899264978">
              <WhatsAppIcon sx={{ fontSize: 40 }} />
              <span className="tooltip absolute bg-black text-white px-2 py-1 rounded text-xs bottom-full -left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                WhatsApp
              </span>
            </a>
          </div>
          <div className="border-2 bg-white cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center relative">
            <a href="https://www.instagram.com/designindiankitchen/">
              <InstagramIcon sx={{ fontSize: 40 }} />
              <span className="tooltip absolute bg-black text-white px-2 py-1 rounded text-xs bottom-full -left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                Instagram
              </span>
            </a>
          </div>
          <div className="border-2 bg-white cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center relative">
            <a href="tel:+91 9899264978">
              <CallIcon sx={{ fontSize: 40 }} />
              <span className="tooltip absolute bg-black text-white px-2 py-1 rounded text-xs bottom-full -left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                Call
              </span>
            </a>
          </div>
          <div className="border-2 bg-white cursor-pointer border-black w-12 h-12 rounded-full mb-4 flex justify-center items-center relative">
            <a href="https://www.houzz.in/pro/webuser-436395657" target='_blank'>
              <Image
              src="/images/houzz.webp"
              width={1000}
              height={1000}
              className='w-[30px] h-[30px]'

              />
              <span className="tooltip absolute bg-black text-white px-2 py-1 rounded text-xs bottom-full -left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                Call
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Assistance
