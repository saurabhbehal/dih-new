import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ContactForm from '../../components/ContactForm/page'
import Image from 'next/image'
import ScheduleChatSection from '../../components/schedule-chat/page'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'


const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <div className=" mt-[140px] lg:mt-36 mb-16">
        <div>
          <Image
          src=""
          />
        </div>
        <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center ">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-4xl text-2xl font-bold bg-black/30 backdrop-blur-sm p-2 rounded"> A Comfort Work Experience for NRI&apos;s & Sr Citizens </h1>
        {/* You can add more content or customize styling here */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/nri.jpg")',
        }}
      ></div>
    </section>
    <MaxWidthWrapper>
      <div className='flex justify-center'>
        <p className="text-lg font-bold mb-16 mt-8 text-center">
        At The Design Indian Homes Brand, we make sure to provide a smooth, Hassle-free experience for our Clients residing abroad or those who are seniors. We make sure to give them daily based site reports, video calls and all approvals are taken beforehand for smooth transition of materials. All Our sites have dedicated supervisors, who are very proficient in their works and work with clients on a Hands-On Approach. 
        A Carefree and Reliable Work Experience .. ! Isn&apos;t.....
        </p>
        </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-amber-50">
        <Form />
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
