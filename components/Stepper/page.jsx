'use client'
import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, Typography, Button } from '@mui/material'
import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
const steps = [
  {
    label: '',
    heading: 'Finally Found Us',
    content:
      'After long searches, you finally reached the right destination, where all works will be done from Source, right from manufacturing modulars to end to interiors & Structures.',
  },
  {
    label: '',
    heading: 'Booking The First Visit - ',
    content:
      'You Book a Visit with Our Modular Coordinator or Architect Coordinator ( if end to end  or Structural/Architectural Consultation ) , very sorry we dont have field running staff to waste your time and ours ☺. *A nominal Adjustable first Visit Charge shall be taken for Either of the meet . ',
  },
  {
    label: '',
    heading: 'Understanding Requirements - ',
    content:
      'We Show you Concepts, understand requirements, & give our expert advices followed by a thorough evaluation. ',
  },
  {
    label: '',
    heading: ' Visit Our Boutique Office',
    content:
      'You Visit Our Boutique Office, we show your the presentation as per understanding of works, show tentative estimates & give further details on design execution. ',
  },
  {
    label: '',
    heading: 'Initiating Designing & Planning ',
    content:
      'We start your detailed designing & planning incl MEP if required, of course it will be hands on Approach. All designing & planning will be at a affordable quote ( mostly its 10% of tentative estimate ) .',
  },
  {
    label: '',
    heading: 'Approvals & Initiating Execution as per Timelines - ',
    content:
      'We start the Modular, End to End Or Structural Works and Deliver as per Assured Time.',
  },
]

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextStep = (activeStep + 1) % steps.length
      handleStepChange(nextStep)
    }, 5000) // Change step every 5 seconds

    return () => clearInterval(interval)
  }, [activeStep])

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
      <MaxWidthWrapper>
        <div className="flex justify-center items-center sm:my-8">
          <div style={containerStyle} className="my-16">
            <div style={textContainerStyle} className="flex justify-center ">
              <h1 className="sm:text-4xl text-xl font-bold text-center">
                Our Design Process
              </h1>
            </div>
            <Image
              width={1000}
              height={1000}
              src="/images/simple-gold-brush-stroke-banner-5.png"
              alt="Paint Brush"
              style={backgroundImageStyle}
            />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row m-8"
          style={{
            backgroundImage: `url('/images/pinkbg-blob.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.8',
          }}
        >
          {/* Image Section (50% width) */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/steps1.avif"
              width={600}
              height={100}
              alt="Demo Image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Stepper Section (50% width) */}
          <div className="w-full md:w-1/2 mt-4 my-auto flex flex-col justify-between ">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((step, index) => (
                <Step key={index} onClick={() => handleStepChange(index)}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <div className="md:mx-8 my-8 md:mt-16">
              <h2 className="text-xl font-semibold text-red-500 mb-4">
                {steps[activeStep].heading}
              </h2>
              <p className="text-sm">{steps[activeStep].content}</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default StepperComponent
