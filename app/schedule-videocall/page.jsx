import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-4xl text-2xl font-bold bg-black/40 backdrop-blur-lg p-4 rounded">
          SCHEDULE A VIDEO CALL
        </h1>
        {/* You can add more content or customize styling here */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/schedule-call.jpg")',
        }}
      ></div>
    </section>
  )
}



const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">
          SCHEDULE A VIDEO CALL WITH US ANYTIME
        </h1>
        <p className=" text-center mb-16">
        Connect with us Today for a detailed free of cost video consultancy meeting, direct from our Connaught Place, New Delhi Boutique Office. Our Team Members will assist you in how to proceed with the designs, planning, execution, selections and timelines. You can check some of our designs and concepts and then Book a Visit for further assistance. 
Looking forward to Serve YOU.
        </p>
        <Form />
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
