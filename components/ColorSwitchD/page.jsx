'use client'
import React, { useState } from 'react'
import { useTheme } from '../../app/themeContext'

const Page = () => {
  const { theme, toggleTheme } = useTheme()
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#fff')

  const openDropdown = () => {
    setShowDropdown(true)
  }
  const closeDropdown = () => {
    setShowDropdown(false)
  }

  const handleColorSelect = (color) => {
    toggleTheme({ color })
    setSelectedColor(color)
    setShowDropdown(false)
  }

  return (
    <div
      className="flex flex-row gap-2 relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className="w-4 h-4 border-2 border-black rounded-full"
        style={{ backgroundColor: selectedColor }}
      ></button>
      {showDropdown && (
        <div
          className="absolute z-50 flex flex-col gap-1 -top-6 -left-2 justify-center items-center bg-white border-2 border-black p-2 rounded-full"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out', // Transition multiple properties
          }}
        >
          <button
            className={`w-4 h-4 border-2 border-black rounded-full bg-white ${
              selectedColor === '#fff' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#fff' }}
            onClick={() => handleColorSelect('#fff')}
          ></button>
          <button
            className={`w-4 h-4 border-2 border-black rounded-full bg-white ${
              selectedColor === '#ffe855' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#ffe855' }}
            onClick={() => handleColorSelect('#ffe855')}
          ></button>
          <button
            className={`w-4 h-4 border-2 border-black rounded-full bg-white ${
              selectedColor === '#f54e07' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#f54e07' }}
            onClick={() => handleColorSelect('#f54e07')}
          ></button>
          <button
            className={`w-4 h-4 border-2 border-black rounded-full bg-white ${
              selectedColor === '#151617' ? 'border-green-500' : ''
            }`}
            style={{ backgroundColor: '#151617' }}
            onClick={() => handleColorSelect('#151617')}
          ></button>
        </div>
      )}
    </div>
  )
}

export default Page
