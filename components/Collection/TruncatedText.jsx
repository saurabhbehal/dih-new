import React, { useState,  useRef } from 'react'
const TruncatedText = () => {
  const [showFullText, setShowFullText] = useState(false);
  const textRef = useRef(null);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
    // Scroll to the top of the text content when toggling
    if (textRef.current) {
      textRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div   className=" text-center z-[1000]">
      <div  className={` ${showFullText ? 'my-8' : 'my-2'}`}>
        {showFullText ? (
          <div  className="mb-6 text-left sm:mx-12 mx-4 z-10" ref={textRef}>
            <div className="mb-2 text-left z-10">
              <p >
                <span  className="text-4xl font-bold">D</span>esign Indian Homes
                is India&apos;s top Interior, Architectural & Modular Interior
                Brand serving across Delhi, Gurgaon, Noida & NCR. It is the most
                sought out by Homemakers, Architects, Interior Designers,
                Developers & just anyone who needs an Affordable Interior
                Makeover, Renovation Services, Architectural Services, Modular
                Kitchen, Wardrobe, Vanities, TV Units, Living works, Bathroom Or
                Just a peaceful Turnkey Work by Our Team. We are serving End to
                End Interiors & Modular Interiors across Delhi, Gurgaon, Noida,
                Faridabad & across NCR.
              </p>
            </div>
            Our Brand Design Indian Homes was established in 2007, we are a
            professional team of certified architects, interior remodelers, and
            also happen to be Largest manufacturers of Modular Kitchens,
            Wardrobes, Tv units, Crockery units, Bookshelves, and just anything
            residential or commercial. We are delivering affordable top-quality
            Interiors, Architectural Solutions, Modular Kitchens, Wardrobes, Tv
            Units, Bookshelves, Shoeracks, Crockery Units, etc & executing end
            to end projects for our Clients. We are the Largest Manufacturers of
            Modular Kitchens, Wardrobes & TV Units across New Delhi - Gurgaon -
            Noida NCR; we have multiple modular manufacturing facilities across
            North India and are associated with more than 900+ Architects,
            Interior Designers, developers and Builders along with our thousands
            of direct clients across New Delhi - NCR. <br />
            We have over 5000+ interior designs and can cater to any custom
            requirements for our clients and associates. Delivering the most
            Affordable Luxury is our Principle, and we work with utmost
            integrity and complete transparency. <br />
            Due to the Goodwill built by the brand and faith of our clients, we
            are the most referred to modular interior Brand in Delhi - Gurgaon -
            Noida and across India. All our interior designs, architectural
            concepts, modular kitchen designs, wardrobe designs, tv units
            designs, or any modular kitchens are planned to perfection as per
            the design requirements. We create smooth, crisp, and meticulous
            designs for your residence & also are top modular kitchen & modular
            wardrobe manufacturers with a precision timing in delivery,
            extensive warranty and a lifelong relation with our Brand. <br />
            Our Modular Interior brand is also the top Modular brand in Delhi -
            NCR India, and we are honored with the prestigious award of the Top
            Modular brand in India by the Timber Wood Society of India. <br />
            This is all due to the Hard work put in by our architectural
            designers, our installers, our supervisors, our management and our
            entire Team which works tirelessly 24/7 in delivering top-notch
            modular kitchen designs to our clients across New Delhi - India.{' '}
            <br />
            <div className="my-8 text-left">
              <p className="mb-2">
                We have the largest Modular Interior facilities and are serving
                extensively with the most affordable solutions for the following
                services:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>Modular Kitchens</li>
                <li>Wardrobes</li>
                <li>TV Units</li>
                <li>Vanities</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Crockery Units</li>
                <li>Shoe Racks</li>
                <li>Bookshelves</li>
                <li>Partitions</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Studies & Bar Units</li>
                <li>Mandir Units</li>
                <li>End To End Interiors</li>
                <li>Complete Structures</li>
              </ul>

              <ul className="list-disc pl-6 mb-4">
                <li>Luxury Interiors & Residences</li>
                <li>Luxury Kitchens And Wardrobes</li>
                <li>
                  Italian - German - Swedish - Danish - Spanish Modular Kitchens
                  & Wardrobes
                </li>
              </ul>
            </div>
            <br />
            We assure you 100% Guaranteed Quotes across New Delhi - NCR for any
            type of Interior Works, Architectural Works, renovation works,
            Modular Kitchens, Wardrobes, TV units, or just any Modular Works,
            custom interior works, or architectural consultancy works. We have
            the most affordable modular interiors and serve all clients with
            perfect understanding of the requirements. <br />
            We also assure you to bring us any quotes and assure you flat 7%
            less on any offerings by any vendor across New Delhi - NCR. <br />
            Connect with the Largest Interior, Architectural, Modular Kitchens &
            Wardrobes Brand Across New Delhi - NCR - India. <br />
            We are the Top Awarded Largest manufacturers for Modular Kitchens &
            Wardrobes across Delhi - NCR & have been rated as the TOP Interior &
            Architectural Brand by The Architectural Congress India and Real
            Wood Societies since 2016. <br />
          </div>
        ) : (
          <div  className="mb-2 text-left sm:mx-12 mx-4 z-10" ref={textRef}>
            <p className="text-left z-10">
              <span   className="text-4xl font-bold z-10">D</span>esign Indian Homes is
              India&apos;s top Interior, Architectural & Modular Interior Brand
              serving across Delhi, Gurgaon, Noida & NCR. It is the most sought
              out by Homemakers, Architects, Interior Designers, Developers &
              just anyone who needs an Affordable Interior Makeover, Renovation
              Services, Architectural Services, Modular Kitchen, Wardrobe,
              Vanities, TV Units, Living works, Bathroom Or Just a peaceful
              Turnkey Work by Our Team. We are serving End to End Interiors &
              Modular Interiors across Delhi, Gurgaon, Noida, Faridabad & across
              NCR.
            </p>
          </div>
        )}
      </div>

      {/* Read More / Read Less button */}
      <div className='z-10'> 
      <button
        className={`z-10 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition duration-300 ${
          showFullText ? 'text-blue-500 cursor-pointer' : ''
        }`}
        onClick={toggleFullText}
      
      >
        {showFullText ? 'Read Less' : 'Read More'}
      </button>
      </div>
     
    </div>
  )
}

export default TruncatedText
