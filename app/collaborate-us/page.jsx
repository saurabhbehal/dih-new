import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
MaxWidthWrapper
import ScheduleChatSection from '../../components/schedule-chat/page'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'

const page = () => {
  return (
    <>
    <head>
    <title>Collaborate with Us | Architects & Interior Designers in India</title>

<meta name="description" content ="collaborate with the largest interiors, modular interiors and architect brand in Delhi, gurgaon, noida & India." />


<meta name="Author" content="Design Indian Homes" />
<meta name="Generator" content="www.designindianhomes.com" />
<meta name="Language" content="en" />
<meta name="robots" content="index, follow" />
<meta name="Copyright" content="©www.designindianhomes.com" />
<meta name="Designer" content="Design Indian Homes Unit" />
<meta name="Publisher" content="www.designindianhomes.com" />
<meta name="Distribution" content="Global" />
<meta name="Rating" content="general" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="canonical" href="https://designindianhomes.com/collaborate-with-architects-interior-designers/" />
<meta name="googlebot" content="index, follow" />
<meta name="Yahoobot" content="index, follow" />
<meta name="MSNbot" content="Index, Follow" />
<meta name="allow-search" content="yes" />
<meta name="country" content="India"/>
<meta name="contactNumber" content="+91-98-99-26-49-78"/>
<meta name="dc.language" content="english"/>
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Delhi" />
<meta property="og:url" content="https://designindianhomes.com/collaborate-with-architects-interior-designers/" />
<meta property="og:title" content="Collaborate with Us | Architects & Interior Designers in India" />
<meta property="og:description" content="collaborate with the largest interiors, modular interiors and architect brand in delhi, gurgaon, noida & India." />
    </head>
      <Omsairam />
      <Header />
    
      <div className=" mt-[140px] lg:mt-36 mb-16">
      <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center bg-black/40 px-8 py-6 rounded backdrop-blur-sm">
        <h1 className="sm:text-4xl text-2xl font-bold "> <span className='text-red-700'>Collaborate </span> With Us</h1>
        {/* You can add more content or customize styling here */}
      </div>
     
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/collab.jpg")',
        }}
      >
        
      </div>
    </section>
    <MaxWidthWrapper>
    <div className='flex justify-center'>
    <p className="text-lg font-bold text-center mt-8 ">
        Collaborate with the Top End To End Interior, Modular Interior Manufacturing, & Architectural Services Brand Across New Delhi - NCR - India, Join us and Be A Part of Our Growing Team/Community.
        We Invite Certified Architects, Professional Interior Designers, Builders to Collaborate with Our Brand and Work Together to ensure smooth coordinations and deliveries in Our Projects.
        </p>
    </div>
      
    </MaxWidthWrapper>
        
      </div>
      <div className="bg-amber-50">
        <Form />
      </div>
      
      {/* <ContactForm /> */}
      
      <ScheduleChatSection />
      <Footer />
    </>
  )
}

export default page
