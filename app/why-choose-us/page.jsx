import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Form from './form'
import Image from 'next/image'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-3xl text-2xl font-bold">
        India’s No.1 Interior & Architectural Brand
        </h1>
        <h1 className="sm:text-5xl text-2xl font-bold py-4 text-red-500">
          CHOOSE WISELY
        </h1>
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
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <p className="text-lg text-center mb-16">
        Compare Quotes With us & We assure you 100% Guaranteed prices than any vendor. With over 283+ architects, interior designers and builders partnered with us, we assure you better quotes with better materials than the rest. - OLD CHOOSE WISELY DATA - NEW 
       <br/>
       <p className='mt-2 text-lg'>  There&apos;s not 1 Reason but more than 16+ , the Most Imperative is that you will save on more than 30% of the cost by choosing us over any Trading Brand, since you will get the work directly through the source. 
We Are the Largest Manufactures for Modular Interiors, Top Brand For End to End Interior And Architectural Services, with more than 61+ Certified Architects and more than 100+ Interior Designers working on Projects. 
Visit our Boutique Unit, See the quality and finishes for yourself, Check Our Designs, Our Portfolios on Instagram where we post our Delivered Sites, Our Workmanship, After All Seeing is Believing. Looking Forward to Serve You.</p>
     
        </p>
      </div>
      <Form />
      <div className="my-12">
        <h1 className="text-2xl sm:text-4xl text-center mb-8 font-bold text-red-500">
          WHY US
        </h1>
        <div className="flex justify-center items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/whyus-big.jpg"
            alt=""
          />
        </div>
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
