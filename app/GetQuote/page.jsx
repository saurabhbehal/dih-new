import React from 'react'
import Form from './form'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import ScheduleChatSection from '../../components/schedule-chat/page'
import Script from 'next/script'
const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Get Quote</h1>
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Interior Design Services',
    provider: {
      '@type': 'Organization',
      name: 'Design Indian Homes',
      url: 'https://www.designindianhomes.com/',
      logo: 'https://www.designindianhomes.com/images/Logo.gif',
      description:
        'Design Indian Homes offers professional home interior design services with detailed estimates and pricing. Tailor-made solutions for residential interiors across India.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9899264978',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Design Street',
        addressLocality: 'New Delhi',
        addressRegion: 'DL',
        postalCode: '110001',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.designindianhomes.com/home-interior-designs-designing-estimates-pricing',
      priceCurrency: 'INR',
      price: 'Contact for pricing',
      availability: 'http://schema.org/InStock',
      validFrom: '2024-09-21',
    },
    areaServed: {
      '@type': 'Place',
      name: 'India',
    },
    category: 'Home Interior Design',
    potentialAction: {
      '@type': 'Action',
      name: 'Request a Design Estimate',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.designindianhomes.com/request-design-estimate',
      },
    },
  }

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold text-center">
          100% Guaranteed Quotes
        </h1>
        <p className=" text-center mb-8">Get Quotes</p>
        <Form />
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
