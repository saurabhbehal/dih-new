'use client'
import React, { useState } from 'react'
import { Tabs, Tab, Box, Container, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

// Sample data for images and links
const tabData = [
  // Data for Tab 1
  {
    images: ['/exterior/beautiful-luxury-structure-designs-architectural-gallery-in-delhi-gurgaon-noida-india (1).jpg', '/exterior/beautiful-luxury-structure-designs-architectural-gallery-in-delhi-gurgaon-noida-india (11).jpg', '/exterior/beautiful-luxury-structure-designs-architectural-gallery-in-delhi-gurgaon-noida-india (12).jpg', '/exterior/beautiful-luxury-structure-designs-architectural-gallery-in-delhi-gurgaon-noida-india (13).jpg'],
    links: ['/modular-interiors', '/modular-interiors', '/modular-interiors', '/modular-interiors']
  },
  {
    images: ['/images/e.png', '/images/f.png', '/images/g.png', '/images/h.png'],
    links: ['/home-interior-services-india', '/home-interior-services-india', '/home-interior-services-india', '/home-interior-services-india']
  },
  {
    images: ['/exterior/beautiful-luxury-structure-designs-architectural-gallery-in-delhi-gurgaon-noida-india (15).jpg', '/exterior/largest-designs-for-luxury-residences-structures-interior-exterior-designs-ideas-inspiration-in-delhi-gurgaon-noida-india (2).jpg', '/exterior/largest-designs-for-luxury-residences-structures-interior-exterior-designs-ideas-inspiration-in-delhi-gurgaon-noida-india (4).jpg', '/exterior/largest-designs-for-luxury-residences-structures-interior-exterior-designs-ideas-inspiration-in-delhi-gurgaon-noida-india (11).jpg'],
    links: ['/structural-renovation-services', '/structural-renovation-services', '/structural-renovation-services', '/structural-renovation-services']
  },
  // Data for Tab 2 (and so on...)
  // ...
]

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
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 24,
    marginRight: theme.spacing(1),
    color: '#4B5563', // Change this to the desired font color
    fontFamily: 'inherit', // Use BioRhyme font family
    '&.Mui-selected': {
      color: '#68D391', // Change this to the desired font color when tab is selected
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0)
  const [currentLink, setCurrentLink] = useState(tabData[0].links[0])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setCurrentLink(tabData[newValue].links[0])
  }

  const containerStyle = {
    position: 'relative',
    height: 'fit-content', // Adjust as needed
    width: 'fit-content', // Adjust as needed
    display: 'inline-block', // Ensure the container only takes the size of its content
  }

  const textContainerStyle = {
    zIndex: '1', // Ensure text is above the background image
    textAlign: 'center', // Center the text
    position: 'relative', // Position the text within the container
  }

  const backgroundImageStyle = {
    position: 'absolute', // Position the image behind the text
    top: '0',
    left: '0',
    width: '100%', // Set the width to 100%
    height: '100%', // Set the height to 100%
    objectFit: 'cover', // Ensure the image covers the container
    opacity: '1', // Adjust the opacity as needed
  }

  return (
    <>
      <div className="div">
        <section className="bordered bordersec"></section>
        <div className="mt-16">
          <div className="flex justify-center items-center sm:my-8">
            <div style={containerStyle}>
              <div style={textContainerStyle} className="flex justify-center ">
                <h1 className="sm:text-4xl text-xl font-bold text-center">
                  End-to-End Interior Solutions
                </h1>
              </div>
              <img
                src="/images/simple-gold-brush-stroke-banner-5.png"
                alt="Paint Brush"
                style={backgroundImageStyle}
              />
            </div>
          </div>
          <h3 className="font-bold text-center">Our Interior services </h3>
        </div>
        <Container maxWidth="md" className="mt-8">
          <Box className=" flex justify-center sm:px-8 py-4 sm:py-8">
            <StyledTabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="styled tabs example"
              className="flex justify-center"
            >
              <StyledTab label="Exterior" />
              <StyledTab label="Interior" />
              <StyledTab label="Structural" />
            </StyledTabs>
          </Box>

          {/* Display the images based on the selected tab */}
          {tabData.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 justify-center">
                {tab.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-60 h-48 rounded-lg"
                  />
                ))}
              </div>
            </TabPanel>
          ))}
          <div className="flex justify-center">
            <Button variant="outlined" color="primary" href={currentLink}  rel="noopener noreferrer">
              View More
            </Button>
          </div>
        </Container>
      </div>{' '}
    </>
  )
}

// Custom TabPanel component to conditionally render content
const TabPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </Box>
  )
}

export default ResponsiveTabs
