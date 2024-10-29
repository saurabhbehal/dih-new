import React from 'react'
import ContactForm from '../../components/ContactForm/page'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import Footer from '../../components/Footer/Footer'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="sm:text-4xl text-2xl font-bold uppercase">
          THE MOST SPOKEN ABOUT BRAND
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



const GoogleMapSection = () => {
  const googleMapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8268185257616!2d77.21762081047119!3d28.63495207556185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3780f93e25%3A0x384de3872f5403d1!2s25%2C%20Middle%20Cir%2C%20near%20Punjab%20%26%20Sind%20Bank%2C%20Block%20C%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1683998047227!5m2!1sen!2sin'

  return (
    <section className="w-full">
      <div
        className="relative h-0 overflow-hidden"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          title="Google Map"
          className="absolute top-0 left-0 w-full h-full"
          src={googleMapEmbedUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 px-16">
        <h1 className="sm:text-4xl text-2xl  font-bold text-center mb-16 uppercase">
          THE MOST SPOKEN ABOUT BRAND
        </h1>
        <p className=" text-center mb-8">
          We are in the news since 2007, Our Brand has been loved by masses and
          our presence has proven so. We have been featured in Delhi Metro,
          Interior Design Magazine, The Hindu, Times of India, Hindustan Times &
          Also on Food Food Channel where our studio kitchens are catered.
        </p>
        <p className=" text-center mb-16">
          For all Media Enquiries, write to us on -
          enquires@designindiankitchen.com
        </p>
      </div>
      <GoogleMapSection />
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
