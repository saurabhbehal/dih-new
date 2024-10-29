import React from 'react'
import Form from './form'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import Image from 'next/image'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-4xl font-bold uppercase">Careers</h1>
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



const ThreeColumnSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Column 1 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            Run by Good will
          </p>
        </div>

        {/* Column 2 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            183 + Partner Network
          </p>
        </div>

        {/* Column 3 */}
        <div className="sm:w-1/3 p-8">
          <p className="text-gray-800 sm:text-4xl text-center uppercase">
            1600 + Happy Customers
          </p>
        </div>
      </div>
    </section>
  )
}

const ThreeColumnSection2 = () => {
  return (
    <section className="py-16 ">
      <h2 className="text-gray-800 sm:text-4xl text-center font-bold uppercase">
        Synchronizing Hard Work with Happiness
      </h2>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Column 1 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Synchronizing Hard Work with Happiness
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Run on Timelines
          </p>
        </div>

        {/* Column 2 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Taking Expert Inputs
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            Hardworking and Sincere
          </p>
        </div>

        {/* Column 3 */}
        <div className="sm:w-1/3 p-4">
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            We learn where we Lack
          </p>
          <p className="text-gray-800 sm:text-4xl text-center uppercase bg-yellow-300 py-4 px-8">
            We are Team Players
          </p>
        </div>
      </div>
    </section>
  )
}

const SectionWithImage = () => {
  return (
    <div className=" p-4 sm:p-16 bg-gray-300">
      <section className="flex flex-col md:flex-row items-center">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">
            JOIN US - FREELANCE WITH US- REFER & EARNS WITH US- BE AN ASSOCIATE
            PARTNER WITH US
          </h2>
          <p className="text-gray-700 mb-4 text-center sm:text-left mx-auto">
            We’re thrilled to know our customers loved the Design indian kitchen
            experience. This truly keeps us going!
          </p>
          <div className="mb-12 flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full shadow-lg">
              CONNECT TODAY
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            src="/images/reviews-mouthshut.jpg"
            alt="Description of your image"
            className="w-full rounded"
          />
        </div>
      </section>
    </div>
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
          Careers Kitchen Designer
        </h1>
        <p className="text-center mb-8">
          The Work culture with Design Indian Kitchen is chilled up, we listen
          to what you say, we also correct mistakes and realize our going the
          other way humbly. We are always willing to take each and every one is
          experience and analyze our plan and implement it.
        </p>
        <p className="text-center mb-16">
          At The Design Indian Kitchen Units we have different allotted teams as
          per areas, each day their schedules are planned as per the work scope.
          The Management give free hand to coordinators and the Supervisors,
          although diligently, to plan and execute. We understand and trust the
          expertise of our Team and work with esprit de corps.
        </p>
        <Form />
      </div>
      <ThreeColumnSection />
      <ThreeColumnSection2 />
      <SectionWithImage />
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
