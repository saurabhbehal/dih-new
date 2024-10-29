"use client";
import React, { createContext, useContext, useState } from 'react'
const SpaceContext = createContext()

export const SpaceProvider = ({ children }) => {
  const [spaceCounts, setSpaceCounts] = useState({
    'Master Bedroom': 1,
    Bedroom: 1,
    Kitchen: 1,
    Bathroom: 1,
    'Living and Dining': 1,
  })
  return (
    <SpaceContext.Provider value={{ spaceCounts, setSpaceCounts }}>
      {children}
    </SpaceContext.Provider>
  )
}
export const useSpaceContext = () => {
  const context = useContext(SpaceContext)
  if (!context) {
    throw new Error('useSpaceContext must be used within a SpaceProvider')
  }
  return context
}