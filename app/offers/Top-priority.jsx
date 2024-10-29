import React from 'react'
import Image from 'next/image'

const ImageSection = () => {
  const [showDetails, setShowDetails] = React.useState(false)

  const handleToggle = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <section className="text-center bg-amber-50 rounded-lg mb-12 border-2 border-gray-300">
        <div className="relative w-full mx-0 h-[60vh] lg:h-[420px]">
          <Image
            width={1636}
            height={1093}
            src="/images/offers/firstoffer.webp"
            alt="Your Image"
            className="w-full h-auto lg:h-[420px]"
          />
          <div className="absolute p-2 px-16 bg-white/60 bottom-0 left-1/2 transform -translate-x-1/2 ">
            <h2 className="text-2xl ">AFFORDABLE</h2>
            <h2 className="text-3xl font-bold text-red-700">
              YET WHOLESOME ON TOP PRIORITY
            </h2>
            <p className="text-sm">Essentials for a 2 Bhk Residence </p>
            <h3 className="text-md">
              OFFER{' '}
              <span className="line-through decoration-red-700 ml-2">
                <span className="text-xl">₹8.8</span>{' '}
                <span className="text-md">LAC</span>
              </span>{' '}
              <span className="text-2xl text-red-700 ml-2">₹6.01</span>{' '}
              <span className="text-red-700">LAC*</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold my-4 py-2 px-4 rounded-full shadow-md hover:shadow-xl focus:outline-none focus:shadow-outline"
            onClick={handleToggle}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <>
            <div className="flex flex-col lg:flex-row justify-around px-8 pb-8 sm:gap-8">
              <div className="lg:w-1/2 sm:p-4 text-left ">
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    FOYER AREA DÉCOR
                  </h2>
                  <p className="text-sm">Shoe rack – 900*800 mm</p>
                  <p>Finish will be in Imported Laminates 1.2 mm</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">LIVING ROOM</h2>
                  <p className="text-sm">
                    Premium LCD display unit – 180 * 120 cm
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">DINING ROOM</h2>
                  <p className="text-sm">
                    Medley black finish dining table 6 Seater - (L 210*W 110 cm)
                    Briano dining chair (3 Nos) 3 Seater dining bench – (1 No)
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    MODULAR KITCHEN
                  </h2>
                  <p className="text-sm">
                    Bottom cabinet – 304*85 cm Top cabinet – 304*60 cm Hettich
                    (German Made – 15 years warranty) Accessories – 6 Nos* Hood
                    and Hob – Faber
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:block hidden sm:p-4 text-left ">
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">MASTER BEDROOM</h2>
                  <p className="text-sm">
                    Soft close 3 door hinged wardrobe with grey wooden handle
                    Queen size bed without bottom Storage – 158*206.4 cm Bed
                    side table (1 No) – 50*40*35 cm (W*D*H)
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">KIDS ROOM</h2>
                  <p className="text-sm">
                    Soft close 3 door hinged wardrobe with white wooden handles
                    Queen size bed without bottom storage – 158*206.4 cm Bed
                    side table (1 No)– 50*40*35 cm (W*D*H)
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">GUEST BEDROOM</h2>
                  <p className="text-sm">
                    Soft close 3 door hinged wardrobe with grey wooden handles
                    Queen size bed without bottom storage – 158*206.4 cm Bed
                    side table (1 No) – 50*40*35 cm (W*D*H)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <p>
                Connect with us Today & Book with the{' '}
                <a
                  href="https://designindiankitchen.com"
                  className="text-blue-500 hover:underline"
                >
                  Top Modular Interior Manufacturing Brand
                </a>
                , Save more than 30% cost, dismiss the middleman and get works
                directly from the{' '}
                <a
                  href="https://designindianwardrobe.com"
                  className="text-blue-500 hover:underline"
                >
                  Largest Modular Kitchens
                </a>{' '}
                –{' '}
                <a
                  href="https://designindianwardrobe.com"
                  className="text-blue-500 hover:underline"
                >
                  Wardrobes
                </a>{' '}
                –{' '}
                <a
                  href="https://modularkitchenmanufacturer.com/"
                  className="text-blue-500 hover:underline"
                >
                  Interiors Manufacturing Brand
                </a>
                . <br />
                **quotes valid for customers residing in Delhi – NCR only & GST
                Excluded, civil works excluded, for Detailed Quotes Book a Site
                Visit Today. <br />
                ***We give you 100% Assurance, bring us any vendor’s quote & we
                will assure you a Flat 7 % off, No Questions asked. <br />
                ****These are Tentative Estimates, Kindly Get A Sketch Up for a
                Detailed Precise Estimation by Paying an Adjustable Amount.
              </p>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default ImageSection
