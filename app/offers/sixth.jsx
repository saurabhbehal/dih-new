import React from 'react';
import Image from 'next/image';

const ImageSection = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <section
        className="text-center bg-amber-50 rounded-lg mb-12 border-2 border-gray-300"
        id="sixth"
      >
        <div className="relative w-full mx-0 h-[60vh] lg:h-[420px]">
          <Image
            width={1636}
            height={1093}
            src="/images/offers/sixthOffer.webp"
            alt="Your Image"
            className="w-full h-auto lg:h-[420px]"
          />
          <div className="absolute p-2 px-16 bg-white/60 bottom-0 left-1/2 transform -translate-x-1/2 ">
            <h2 className="text-2xl ">
              TOP NOTCH LUXURY, WITH TOP NOTCH PRICING
            </h2>
            <h2 className="text-3xl font-bold text-red-700">REDEFINE LUXURY</h2>
            <p className="text-sm">
              Detailed Modular Interiors & Complete Makeovers for a 4 Bhk
              Residence/Bunglow/5 Bhk/Duplex/Farmhouse
            </p>
            <h3 className="text-md">
              Offer{' '}
              <span className="line-through decoration-red-700 ml-2">
                <span className="text-xl">₹43.81</span>{' '}
                <span className="text-md">LAC</span>
              </span>{' '}
              <span className="text-2xl text-red-700 ml-2">₹36.52</span>{' '}
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
                    Shoe rack/With Sitting – 1400*900 mm with Premium Louverts
                  </p>
                  <p>Wall Panelling Exclusive – 2740*2740 mm Fluted Designs</p>
                  <p>Glass & Lights Works in Entrance Foyer with Partition</p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">LIVING ROOM</h2>
                  <p className="text-sm">
                    LCD Lounge unit with Storages & Lights with shutter in slim
                    lacquer glass profile with choice of Glass – 3500*2800 mm
                  </p>
                  <p>Bar Unit 2100 * 600 mm – Custom</p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                  <p>
                    Corian/ Teak Mandir Unit with types of shutters –
                    900*450*750
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">DINING ROOM</h2>
                  <p className="text-sm">
                    Dining table with 8 seater – 2600*1200 mm
                  </p>
                  <p>Dining chair in Teak (8 Nos)</p>
                  <p>Dining Area Cabinets – 2800 mm by 720 mm</p>
                  <p>
                    Shutter in German Fluted Materials or equivalent. Thick 22mm
                    shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                  <p>Wall Panellings/Wallpaper in Dining Room</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    BATHROOM VANITIES
                  </h2>
                  <p className="text-sm">
                    4 Bathroom Vanities in LTW Materials – ( L 1200 * W 720 mm )
                  </p>
                  <p>Mirror Storage in Bathroom with Lights – 1200 by 650 mm</p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    4th BEDROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    4 door Slimline Sliding Wardrobe with Double soft close and
                    3 quadro hydraulic drawers with locker provisions and locks
                    with complete lights. With 10mm BP & Long Profiles handles.
                  </p>
                  <p>Dresser Unit with Wardrobe</p>
                  <p>2 no Bed side table 450*450*450 mm (W*D*H)</p>
                  <p>
                    German Wall Panelling/ Louverts on any Single Side Wall/ or
                    Wallpapers
                  </p>
                  <p>Study Table with Storage & Lights</p>
                  <p>
                    King Size Bed with storage & Back Cladding – 1770*2060 mm
                    with Sofas
                  </p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-4 sm:p-4 text-left ">
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    MASTER BEDROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    6 door Sliding wardrobe with End to End Shutters in Lacquer
                    Glass with Double soft close & 9 mm BP, depth 710 mm.
                  </p>
                  <p>
                    6 drawers, and handles in black matt/ or equivalent in
                    slimline russian.
                  </p>
                  <p>5 Custom Accessories with End to End Sensor Lights</p>
                  <p>
                    Dressing Unit 2350*650 mm with Internal Storage & Seating
                  </p>
                  <p>Study in MB included as Home Office.</p>
                  <p>
                    Queen Size Bed with storage & Velvet Back Cladding –
                    1770*2060 mm
                  </p>
                  <p>
                    2 * Bed side table with Premium German Shutters –
                    500*450*450 mm (W*D*H)
                  </p>
                  <p>
                    TV Unit with Storage with Louverts and Glass Panels/Verticle
                    Garden, Brass Louverts – 2150*2100 mm
                  </p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials or Lacquer
                    Glass. Thick 22mm shutters with 1.8 mm covering sheets with
                    1.8 mm EB.
                  </p>
                  <p>Premium Belgium Wooden Floorings & Wallpapers Included.</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    KIDS ROOM/PARENTS ROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    4 door sliding wardrobe with loft with Italian fittings,
                    Double Soft Close & with 4 drawers and long handles in multi
                    choice of profile handles or long handles, with 9 mm BP,
                    Lights included. Closet in LTW/BWP Materials.
                  </p>
                  <p>
                    German Wall Panelling/ Louverts on any Single Side Wall/ or
                    Wallpapers
                  </p>
                  <p>
                    Queen Size Bed with storage & Back Cladding – 1770*2060 mm
                  </p>
                  <p>Dressing Unit included</p>
                  <p>Study table 720*650 mm</p>
                  <p>Booshelves 1200*800 mm</p>
                  <p>Study – 1200*500*800 for Kids/Parents</p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="text-md font-semibold mb-1">
                    GUEST BEDROOM WARDROBE & MODULAR INTERIORS
                  </h2>
                  <p className="text-sm">
                    4 door Slimline Sliding Wardrobe with Double soft close and
                    3 quadro hydraulic drawers with locker provisions and locks
                    with complete lights. With 10mm BP & Long Profiles handles.
                  </p>
                  <p>Dresser Unit with Wardrobe</p>
                  <p>2 no Bed side table 450*450*450 mm (W*D*H)</p>
                  <p>
                    German Wall Panelling/ Louverts on any Single Side Wall/ or
                    Wallpapers
                  </p>
                  <p>Study Table with Storage & Lights</p>
                  <p>
                    King Size Bed with storage & Back Cladding – 1770*2060 mm
                    with Sofas
                  </p>
                  <p>
                    Shutter in Spanish Fluted/Matt Acrylics Materials. Thick
                    22mm shutters with 1.8 mm covering sheets with 1.8 mm EB.
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
};

export default ImageSection;
