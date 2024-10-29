"use client"

// 'use client' file

import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Box, Container, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 100,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 100,
    fontSize: 22,
    marginRight: theme.spacing(1),
    color: '#3d372c',
    '&.Mui-selected': {
      color: '#95805a',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0)
  const [tabData, setTabData] = useState([])
  const [loadedImages, setLoadedImages] = useState([])
  const [showLoadMore, setShowLoadMore] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const timestamp = Date.now()

        // Fetch initial 4 images for different categories
        const categoryIds = [137, 95, 138, 139] // Category IDs you want to fetch
        const imagePromises = categoryIds.map(async (categoryId) => {
          const response = await fetch(
            `https://api.designindianwardrobe.com/api/images/${categoryId}?timestamp=${timestamp}&limit=4`
          )
          if (response.ok) {
            const data = await response.json()
            return data
          } else {
            console.error('Error fetching images:', response.statusText)
            return []
          }
        })

        // Wait for all image fetch promises to resolve
        const categoryImages = await Promise.all(imagePromises)
        setTabData(categoryImages)
        setLoadedImages(categoryImages.map(images => images.slice(0, 4)))
      } catch (error) {
        console.error('Error during fetch:', error)
      }
    }

    fetchImages()
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleLoadMore = (categoryIndex) => {
    const updatedLoadedImages = [...loadedImages]
    const categoryImages = tabData[categoryIndex]
    const nextBatch = categoryImages.slice(
      loadedImages[categoryIndex].length,
      loadedImages[categoryIndex].length + 4
    )
    updatedLoadedImages[categoryIndex] = [...loadedImages[categoryIndex], ...nextBatch]
    setLoadedImages(updatedLoadedImages)
    setShowLoadMore(nextBatch.length === 4)
  }

  return (
    <>
      <div className="mt-[100px]">
        <h1 className="text-center text-4xl text-gray-700">
          <span className="text-[#95805a] italic">Exclusive Residences</span> by Design Indian
          Homes
        </h1>
      </div>
      <Container maxWidth="md" className="mt-8">
        <Box sx={{ bgcolor: '' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            aria-label="styled tabs example"
          >
            <StyledTab label="Luxury Interior" />
            <StyledTab label="Luxury Wardrobes"/>
            <StyledTab label="Luxury Kitchen" />
            <StyledTab label="Luxury Structural" />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>

        {/* Display the images based on the selected tab */}
        {tabData.map((tabImages, index) => (
          <TabPanel key={index} value={value} index={index} images={loadedImages[index]} onLoadMore={() => handleLoadMore(index)} showLoadMore={showLoadMore} />
        ))}
      </Container>
    </>
  )
}

// Custom TabPanel component to conditionally render content
const TabPanel = ({ children, value, index, images, onLoadMore, showLoadMore }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {images.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                width={1000}
                height={1000}
                src={`https://api.designindianwardrobe.com/uploads/${image.filename}`}
                alt={`Image ${imgIndex + 1}`}
                className="w-full h-96 rounded-lg"
              />
            ))}
          </div>
          {showLoadMore && (
            <div className="flex justify-center">
              <button className='mb-[20px] text-white bg-green-500 hover:bg-yellow-500  px-6 py-2 font-bold text-xl rounded-xl '  onClick={onLoadMore}>Load More..</button>
            </div>
          )}
        </>
      )}
    </Box>
  )
}

export default ResponsiveTabs
