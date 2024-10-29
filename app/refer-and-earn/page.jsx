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
        <h1 className="sm:text-4xl text-2xl font-bold">REFER & EARN</h1>
        {/* You can add more content or customize styling here */}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/getQuote.jpg")',
        }}
      ></div>
    </section>
  )
}



const page = () => {
  return (
    <>
    <head>
    <title>Refer for Rewards | Best Interior Designing & Architect Brand</title>

<meta name="description" content ="refer the top interior designing and architect brand in Delhi, gurgaon, noida & India & get rewards worth 45000. Refer & Earn for interiors." />


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
<link rel="canonical" href="https://designindianhomes.com/refer-and-get-rewards-interior-designers/" />
<meta name="googlebot" content="index, follow" />
<meta name="Yahoobot" content="index, follow" />
<meta name="MSNbot" content="Index, Follow" />
<meta name="allow-search" content="yes" />
<meta name="country" content="India"/>
<meta name="contactNumber" content="+91-98-99-26-49-78"/>
<meta name="dc.language" content="english"/>
<meta name="geo.region" content="IN-DL" />
<meta name="geo.placename" content="Delhi" />
<meta property="og:url" content="https://designindianhomes.com/refer-and-get-rewards-interior-designers/" />
<meta property="og:title" content="Refer for Rewards | Best Interior Designing & Architect Brand" />
<meta property="og:description" content="book a meeting with the largest interior designing and architect brand in Delhi, gurgaon, noida & India. we serve the most affordable modular interiors." />
</head>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">
          WE WILL REWARD YOU WHOLEHEARTEDLY
        </h1>
        <p className=" text-center mb-16">
          At Design Indian Kitchen, we most graciously offer rewards to all our
          interior designer, builder and architect partners. The Monetary value
          per project can be discussed beforehand and we will surely offer the
          best in the Industry, this shall be our assurance. All Our Partners
          are closely working with us and are getting their projects timely
          delivered with our efficient resource networking and well coordinated
          manufacturing units across New Delhi - NCR. All Values of the Refer
          and Earn can be once discussed, so feel free and Call us Today or
          Whats up for All details. Happy Collaborating.
        </p>
        <h1 className="sm:text-3xl text-2xl font-bold text-center my-12">
          REFER US
        </h1>
        <Form />
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
