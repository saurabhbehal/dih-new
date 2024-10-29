'use client'
import React, { useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image from 'next/image'

const AccordionSection = () => {
  const accordionData = [
    {
      id: 1,
      heading:
        'What are the Types of Wardrobes that you make and how do you design them ?',
      content:
        'We are manufacturing mostly all types of wardrobes, be it normal hinged, sliding 2 doors or 3 or 4, slide and fold closets, exclusive lacquer glass, designed shutters, polished closets, teak closets, vennered closets, slide sliding, walk-ins, metal walk ins, fitted closets, niche wardrobes, white shiny wardrobes, glass wardrobes, mirrored wardrobes, open closets, custom bespoke wardrobes. We design it as per specifications after a Site Visit is Booked across New Delhi - NCR. Book a Site Visit Today.',
    },
    {
      id: 2,
      heading:
        'Do you Guys visit the residences across Delhi - NCR for wardrobe requirements? or is it restricted to some specific areas.',
      content:
        'Yes, we do as that is a prerequisite, without a basic site visit it is not possible to understand requirements and give any solutions. Our Team members can visit across Delhi - NCR, and we are also doing PAN - India, but that depends on the project requirements. Connect with us to Know More.',
    },
    {
      id: 3,
      heading:
        'What are the other services that you do apart from wardrobes, as we do need other interior services as well. ?',
      content:
        'We are doing Modular Kitchens, TV Units, Partitions, Shoeracks, Bar Units, Storage units like chest of drawers, side tables, crockery units, bar units, wall niche units, Mandirs, Glass Partitions, Complete End to End Interiors including any Structural Engineering Works apart from architectural changes. We have a team of 27 architects, interior designers working round the clock on projects across Delhi - NCR. Apart from that we are associated with more than 450+ architects, interior designers, builders, decor vendors across North India.',
    },
    {
      id: 4,
      heading:
        'Can we know what all brands are associated with you ( for hardware etc ) , or are you doing everything using a single brand.',
      content:
        'The Below are the Exclusive Brands you will find in our Kitchens, Wardrobes and other items we manufacture.',
    },
    {
      id: 5,
      heading:
        'How can we understand that the quality and pricing you offer is correct with the market prices?',
      content:
        'It has been more than 14 years we have been in the market and since more than 11 years we have been running a policy that, BRING us any quotes across North India and we assure you FLAT 7% less on that. This is the price commitment we offer, henceforth our quotes offered have 100% written guarantee across the Town. This is all due to our extensively spread manufacturing units, controlled production planning, bulk purchases, being distributors of multiple top brands and our organized structure of turnkey planning and delivering materials enables us to give you better prices than any vendor across the City.',
    },
    {
      id: 6,
      heading:
        'Do you have your own manufacturing unit, installation team, design center, supervisory teams, project managers or its all outsourced from 90% of companies nowadays?',
      content:
        'Everything is In-House, right from production units, to design team, to installation team, to project managers to supervisors. We do not indulge in any 3rd party services or outsourcing any type of services.',
    },
    {
      id: 7,
      heading:
        'Is it better to get a custom built wardrobe for my residence or order something online due to very cheap prices available?',
      content:
        'This is a important point, where we must understand difference between the materials used by online sales company and material used by our Brand. This plays a major role, if the purpose of usage is very short than we can offer better price than any online source. But if looking for a permanent fixture, for that we suggest you to understand the materials and then make a call.',
    },
    {
      id: 8,
      heading:
        'How can we trust that what you design is what you will deliver?',
      content:
        'Well, Life is all about trusting and being trusted. Our Customer deliveries speak volumes, we are a brand based on integrity and hard work, right from our quotes till the date of delivery, everything will be clean and transparent. Whatever is promised will be delivered, rather something extra. We are God Fearing Bunch of Folks, just trying to make your life Clutter Free. haha',
    },
    {
      id: 9,
      heading:
        'How can we check your reviews or see your Live projects online, where its not 3d pictures but Live installation and final handover goin on?',
      content:
        'Regarding that, we request you visit our LIVE reels on instagram, facebook, youtube as per below links and also visit our boutique office in Connaught Place. We have Live sites going on along with final handovers. Or Book a Site Visit with Us.',
    },
    {
      id: 10,
      heading:
        'What are the Price ranges of wardrobes in Delhi - NCR, right from the basic to the most luxurious product.',
      content:
        'We have wardrobes starting from Rs 1150 - Rs 9500 per sqft. It all depends on the material specification and selections. Just Connect with us to know more.',
    },
    {
      id: 11,
      heading:
        'Have you worked for any Corporate in Past or are currently working on any projects?',
      content:
        'Since past years we have been associated with multiple Corporate and worked on their projects as mentioned.',
    },
    // Add more tabs as needed
  ]

  const [expanded, setExpanded] = useState(null)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
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
    <div className="m-4 sm:m-16">
      {/* <h2 className="text-3xl mb-4">
        FAQs About <span className="font-extrabold">Design Indian Homes</span>
      </h2> */}
      <div className="flex justify-center items-center sm:my-24 my-8">
        <div style={containerStyle}>
          <div style={textContainerStyle} className="flex justify-center ">
            <h1 className="sm:text-4xl text-xl font-bold text-center">
              FAQs About{' '}
              <span className="font-extrabold">Design Indian Homes</span>
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

      {accordionData.map((tab) => (
        <Accordion
          className="shadow-md my-4"
          key={tab.id}
          expanded={expanded === tab.id}
          onChange={handleChange(tab.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // Apply conditional color based on the expanded state
            className={expanded === tab.id ? 'text-green-500' : ''}
          >
            <h4 className="text-md font-bold p-2 text-green-500">{tab.id}</h4>
            <h6 className="text-sm font-bold p-2">{tab.heading}</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p className="px-8 text-sm -pt-4">{tab.content}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionSection
