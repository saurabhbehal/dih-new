import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import ScheduleChatSection from '../../components/schedule-chat/page'


const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <MaxWidthWrapper>
      <div className=" mt-[140px] lg:mt-36 mb-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 mx-auto">
        Join The Largest Interior And Architectural Brand - Delhi - NCR - India 
        </h1>
        <p className="text-md font-bold text-center mb-16">
        We Invite freshers and Proficient Architects, Interior Designers & Supervisors to Associate with us on multi-varied ways. Join The Top Modular Interiors, Architectural & End to End Interiors Brand and Be a Part of the Largest Growing Community. You can join our Team ( As per Vacancy ) or on Freelance basis as per current requirements & Openings. You can also join us for any joint project venture or just on consultancy basis as well. 
        Refer us and Get Rewarded.
        </p>
      </div>
      <div className="bg-amber-50">
        <Form />
      </div>
      </MaxWidthWrapper>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
