import React from 'react'
import Image from 'next/image'

const ImageSection = () => {
  const [showDetails, setShowDetails] = React.useState(false)

  const handleToggle = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <section
        className="text-center bg-amber-50 rounded-lg mb-12 border-2 border-gray-300"
        id="second"
      >
        <div className="relative w-full mx-0 h-[60vh] lg:h-[420px]">
          <Image
            width={1636}
            height={1093}
            src="/images/offers/secondOffer.webp"
            alt="Your Image"
            className="w-full h-auto lg:h-[420px]"
          />
          <div className="absolute p-2 px-16 bg-white/60 bottom-0 left-1/2 transform -translate-x-1/2 ">
            <h2 className="text-2xl ">Pocket friendly, Yet Extensive</h2>
            <h2 className="text-3xl font-bold text-red-700">
              Handcrafted for you
            </h2>
            <p className="text-sm">Detailed Works for a 3 Bhk Residence</p>
            <h3 className="text-md">
              OFFER{' '}
              <span className="line-through decoration-red-700 ml-2">
                <span className="text-xl">₹12.16</span>{' '}
                <span className="text-md">LAC</span>
              </span>{' '}
              <span className="text-2xl text-red-700 ml-2">₹9.07</span>{' '}
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
              <div className="lg:w-1/2 lg:pr-4 sm:p-4 text-left ">
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    FOYER AREA DÉCOR
                  </h2>
                  <p className="text-sm">
                    Shoe rack/With Sitting – 1200*800 mm
                  </p>
                  <p>Wall Panelling – 2340*2340 mm</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">LIVING ROOM</h2>
                  <p className="text-sm">
                    LCD unit with storage & Light and shutter in glass profile
                    with plain glass – 1800*1600 mm
                  </p>
                  <p>Mini Bar Unit or Mandir Unit – 900 * 600 mm</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">DINING ROOM</h2>
                  <p className="text-sm">
                    Dining table with 4 seater – 1500*1200 mm
                  </p>
                  <p>Dining chair (4 Nos)</p>
                  <p>Dining Area Cabinets – 2400 mm by 720 mm</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    MODULAR KITCHEN WITH JAPANESE FITTINGS
                  </h2>
                  <p className="text-sm">Top cabinet – 3500*700 mm</p>
                  <p>Bottom cabinet – 3500*860mm</p>
                  <p>
                    Imported accessories – 5 drawers, Bowl Cutlery tray, BPO,
                    Dish Rack, Dustbin, Detergent holder, Wicker basket, Pantry
                    Satin, Corner Fitting with Basic Lights, Japanese handles.
                  </p>
                  <p>Fittings of Lamp Germany or Equivalent</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-4 sm:p-4 text-left ">
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">MASTER BEDROOM</h2>
                  <p className="text-sm">
                    4 door Hinged wardrobe with loft storage in soft close.
                  </p>
                  <p>
                    3 drawers, and long profiled handles in black matt/multi
                    colour options, with Basic Lights.
                  </p>
                  <p>Dressing Unit 1950*650 mm with Storage</p>
                  <p>Bed with storage – 1770*2060 mm</p>
                  <p>Bed side table – 500*450*450 mm (W*D*H)</p>
                  <p>TV Unit with Storage – 2150*2100 mm</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    KIDS ROOM/PARENTS ROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    3 Door hinged Wardrobe with Designer Shutters with lofts
                    also with 3 drawers and handles in silver, with Basic Lights
                  </p>
                  <p>Study table 520*750 mm</p>
                  <p>Booshelves 1200*800 mm</p>
                  <p>Study – 900*400*700 for Kids</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    GUEST BEDROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    2 door hinged wardrobe with soft close & designer shutters
                    and 3 drawers with Basic Lights.
                  </p>
                  <p>Bed site table (1 No) 450*450*450 mm (W*D*H)</p>
                  <p>
                    Shutter in Premium Finish. Thick 21mm shutters with 1.4 mm
                    covering sheets.
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
