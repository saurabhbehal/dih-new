import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'

import ColorSwitch from '../../components/ColorSwitch/page'
import { SocialIcon } from 'react-social-icons'
import PopupForm from '../popupform/page'
import {
  faPhone,
  faHome,
  faHomeUser,
  faDiagramProject,
  faProjectDiagram,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import {
  faPalette,
  faPencil,
  faNewspaper,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const MobileHeader = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const handleMouseOverImage = (item) => {
    console.log('mouse hovered')
    setHoveredItem(item)
  }

  const handleMouseLeaveImage = () => {
    setHoveredItem(null)
  }
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    )
  }
  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevState) => !prevState)
  }

  useEffect(() => {
    const body = document.body

    if (mobileMenuVisible) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }

    // Cleanup the style when the component unmounts or the menu is closed
    return () => {
      body.style.overflow = 'auto'
    }
  }, [mobileMenuVisible])

  const handleMouseOver = (category) => {
    setActiveCategory(category)
    setMegaMenuVisible(true)
  }

  const handleMouseLeave = () => {
    setActiveCategory(null)
    setMegaMenuVisible(false)
  }

  const [showPopup, setShowPopup] = useState(false)
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div className="">
      <div className="relative lg:hidden w-auto " style={{ zIndex: '8000000' }}>
        {/* Your existing content */}

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 w-full">
          <div
            className={`bg-white  text-black w-full h-16 pb-2 flex items-center justify-around`}
          >
            <button className="flex flex-col items-center text-xs font-bold">
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                style={{ height: '20px', width: '20px' }}
              />
              <Link href="/"> Home</Link>
            </button>
            <Link href="/modular-interior-design-ideas">
              <button className="flex flex-col items-center text-xs font-bold ml-2">
                <FontAwesomeIcon
                  icon={faPalette}
                  size="2x"
                  style={{ height: '20px', width: '20px' }}
                />
                Design
              </button>
            </Link>
            <button
              className="flex flex-col items-center text-xs font-bold relative "
              onClick={togglePopup}
            >
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div
                  className="animated-bg backdrop-blur-sm bg-white/30 rounded-full p-1 "
                  style={{ marginBottom: '70px' }}
                >
                  <Image
                    src="/designImages/booknowanimation.gif"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <span className="mt-5">Connect</span>
            </button>
            <Link href="/homes-by-design-indian-homes">
              <button className="flex flex-col items-center text-xs font-bold">
                <FontAwesomeIcon
                  icon={faBuilding}
                  size="2x"
                  style={{ height: '20px', width: '20px' }}
                />
                Projects
              </button>
            </Link>
            <button
              className="flex flex-col items-center text-xs font-bold"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon
                icon={faEllipsisH}
                size="2x"
                style={{ height: '20px', width: '20px' }}
              />
              More
            </button>
          </div>
        </div>
      </div>

      {/* {mobiler logo} */}

      <div
        className="lg:hidden flex justify-between items-center px-0 py-0 bg-white drop-shadow-lg mt-6 fixed top-0 w-full"
        style={{ zIndex: '190' }}
      >
        <div>
          <Link href="/">
            <Image
              src="/images/Logo.gif"
              alt="left logo"
              width={1000}
              height={1000}
              priority={true}
              className=" absolute xs:relative md:relative w-[6rem] xs:max-w-[14vw] md:max-w-[10vw] h-10 xs:h-7 md:h-[10vh] ml-3 xs:mt-2 sm:mt-2 mt-[-15px] "
            />
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="mt-4 hidden md:flex justify-end gap-2 md:space-x-2 font-bold mx-2">
            <Link href="/homes-by-design-indian-homes">
              <button>Our Homes</button>
            </Link>
            <Link href="/modular-interior-design-ideas">
              <button>Design Ideas</button>
            </Link>
            <Link href="/book-a-interior-design-visit">
              <button>Contact Us</button>
            </Link>
          </div>
          <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
            <button className="bg-black text-white text-[12px] whitespace-nowrap px-4 py-6 mt-2">
              Get Estimates
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Header */}

      <div className="lg:hidden sticky top-6 z-40">
        {mobileMenuVisible && (
          <div className="" style={{ zIndex: '5600' }}>
            <div style={{ zIndex: '1200' }}>
              <animated.div
                className="bg-white bg-gradient-to-t from-green-400 text-black fixed top-16 left-0  h-full overflow-y-scroll ${mobileMenuVisible ? 'block' : "
                style={{
                  transition: 'opacity 0.3s ease-in-out',
                  marginTop: '35px',
                }}
              >
                <div className="absolute mt-[-40px]">
                  <Image
                    src="/images/eye.gif"
                    width={1000}
                    height={1000}
                    className="h-[100px] w-[200px] "
                  />
                </div>

                <div className="flex justify-end p-4">
                  <div className="flex" style={{ marginLeft: '-40px' }}></div>

                  <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-4 z-40">
                  <div className="flex gap-3"></div>
                  <Link href="/modular-interior-design-ideas">
                    <AccordionSection
                      title="Design Ideas"
                      isActive={activeSection === 'designIdeas'}
                      onClick={() => toggleSection('designIdeas')}
                    >
                      <div>
                        <div
                          className="bg-white shadow-2xl rounded-lg p-4 justify-center  w-full  h-fit text-black"
                          onMouseLeave={handleMouseLeave}
                        >
                          <div>
                            <ul className="text-xs">
                              <Link href="/modular-interior-design-ideas">
                                <h3 className="text-lg font-bold  border-b-4 border-red-500">
                                  Modular Interior Designs
                                </h3>
                              </Link>
                              <div className="text-sm">
                                <Link href="/modular-kitchen-top-brand-india">
                                  <li>Modular Kitchens</li>
                                </Link>
                                <Link href="/wardrobe-designs">
                                  <li>Wardrobes</li>
                                </Link>
                                <Link href="/types-of-wardrobe">
                                  <li>Types of Wardrobes</li>
                                </Link>
                                <Link href="/vanity-designs">
                                  {' '}
                                  <li>Vanities </li>
                                </Link>
                                <Link href="/dressers-designs">
                                  <li>Dressers</li>
                                </Link>
                                <Link href="/tv-unit-designs">
                                  <li>TV Units</li>
                                </Link>
                                <Link href="/crockery-unit-designs">
                                  {' '}
                                  <li>Crockery Units</li>
                                </Link>
                                <Link href="/glass-partition-designs">
                                  <li>Glass Partitions</li>
                                </Link>
                                <Link href="/lacquer-glass-wardrobe-designs">
                                  <li>Lacquer Glass Wardrobe Designs</li>
                                </Link>
                                <Link href="/mandir-designs">
                                  <li>Mandir</li>
                                </Link>
                                <Link href="/bar-unit-designs">
                                  <li>Bar</li>
                                </Link>
                                <Link href="/side-table-designs">
                                  <li>Side Tables</li>
                                </Link>

                                <Link href="/home-interior-designs/residential-Offices-designs">
                                  <li>Home Office</li>
                                </Link>
                                <Link href="/foyer-area-designs">
                                  <li>Foyer Cabinets</li>
                                </Link>
                                <Link href="/before-after/before-after-wardrobe">
                                  <li>Wardrobe Before After</li>
                                </Link>
                                <Link href="/before-after/before-after-interior">
                                  <li>Interior Before After</li>
                                </Link>
                                <Link href="/before-after-/before-after-kitchen">
                                  <li>Kitchen Before After</li>
                                </Link>
                                <Link href="/homes-by-design-indian-homes">
                                  <li>Homes by Design Indian Homes</li>
                                </Link>
                              </div>
                            </ul>
                          </div>

                          <div>
                            <ul className="text-sm">
                              <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-2">
                                Interior Design Solutions
                              </h3>

                              <div className="text-sm text-black">
                                <Link href="/1bhk-apartment-interior-designs">
                                  <li>1BHK residence interior designs</li>
                                </Link>
                                <Link href="/2bhk-apartment-interior-designs">
                                  {' '}
                                  <li>2BHK Residence interior designs</li>
                                </Link>
                                <Link href="/3bhk-apartment-interior-designs">
                                  {' '}
                                  <li>3BHK Residence interior designs</li>
                                </Link>
                                <Link href="/4bhk-apartment-interior-designs">
                                  <li>4BHK Residence interior designs</li>
                                </Link>
                                <Link href="/villa-interior-designs">
                                  {' '}
                                  <li>Villa interior designs</li>
                                </Link>
                                <Link href="/farmhouse-interior-designs">
                                  <li>Farmhouse interior designs</li>
                                </Link>
                                <Link href="/penthouse-interior-designs">
                                  <li>Penthouse interior designs</li>
                                </Link>
                                <Link href="/studio-apartment-interior-designs">
                                  <li>studio apartment interior designs</li>
                                </Link>
                                <Link href="/bungalow-interior-designs">
                                  {' '}
                                  <li>Bunglow interior designs</li>
                                </Link>
                                <Link href="/duplex-interior-designs">
                                  {' '}
                                  <li>Duplex Residence interior designs</li>
                                </Link>
                                <Link href="/cottage-interior-designs">
                                  <li>Cottage interior designs</li>
                                </Link>
                              </div>
                              <div>
                                <Link href="/luxury-residence-designs-delhi-india">
                                  <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-2">
                                    Luxury Residence
                                  </h3>
                                </Link>
                                <Link href="/luxury-residence-designs-delhi-india/luxury-interior/">
                                  <li>Luxury Interior</li>
                                </Link>

                                <Link href="/luxury-residence-designs-delhi-india/luxury-kitchen">
                                  <li>Luxury Kitchen</li>
                                </Link>

                                <Link href="/luxury-residence-designs-delhi-india/luxury-wardrobe">
                                  <li>Luxury Wardrobe</li>
                                </Link>
                                <Link href="/luxury-residence-designs-delhi-india/luxury-structural">
                                  <li>Luxury Structural design</li>
                                </Link>
                              </div>
                            </ul>
                          </div>

                          <div>
                            <ul className="text-xs">
                              <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-2">
                                Interior Design Ideas
                              </h3>

                              <div className="text-sm text-black">
                                <Link href="/wooden-polishing-designs">
                                  <li>Wooden Polishing</li>
                                </Link>
                                <Link href="/wooden-flooring-designs-designs">
                                  {' '}
                                  <li>Wooden Flooring</li>
                                </Link>
                                <Link href="/vertical-garden-designs">
                                  {' '}
                                  <li>Vertical Gardens</li>
                                </Link>
                                <Link href="/upvc-window-designs">
                                  {' '}
                                  <li>UPVC Windows</li>
                                </Link>
                                <Link href="/tiling-design-ideas">
                                  {' '}
                                  <li>Tiling Designs</li>
                                </Link>
                                <Link href="/sofa-designs-ideas">
                                  {' '}
                                  <li>Sofa Designs</li>
                                </Link>
                                <Link href="/kitchen-lightening-inspiration-ideas-india-designs">
                                  {' '}
                                  <li>Kitchen Lightening</li>
                                </Link>
                                <Link href="/plumbing-works-interiors">
                                  {' '}
                                  <li>Plumbings</li>
                                </Link>
                                <Link href="/glass-partition-designs">
                                  {' '}
                                  <li>Glass Partitions</li>
                                </Link>
                                <Link href="/ceiling-designs">
                                  {' '}
                                  <li>ceilings</li>
                                </Link>
                                <Link href="/wall-panelling-designs">
                                  {' '}
                                  <li> Wall Panelling</li>
                                </Link>
                                <Link href="/exterior-cladding-design-ideas-designs">
                                  {' '}
                                  <li>Exterior Cladding</li>
                                </Link>
                                <Link href="/wood-door-designs">
                                  {' '}
                                  <li>Doors</li>
                                </Link>
                                <Link href="/home-electric-works-services-interiors">
                                  {' '}
                                  <li>Electric Works</li>
                                </Link>
                                <Link href="/bed-designs-dealers-manufacturers-india-designs">
                                  {' '}
                                  <li>Beds</li>
                                </Link>
                                <Link href="/paint-works-interiors">
                                  <li>Paints</li>
                                </Link>
                                <Link href="/complete-end-to-end-interior-works">
                                  {' '}
                                  <li>End to End Interiors</li>
                                </Link>
                                <Link href="/commercial-interior-works-interiors">
                                  {' '}
                                  <li>Commercial Interiors</li>
                                </Link>
                              </div>
                            </ul>
                          </div>

                          <div>
                            <ul className="text-xs">
                              <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-2">
                                Architectural Designs{' '}
                              </h3>
                              <div className="text-sm text-black">
                                <Link href="/architectural-consultancy">
                                  <li>Architectural Consultancy</li>
                                </Link>
                                <Link href="/top-architects-in-india">
                                  <li>End to End Architectural Services</li>
                                </Link>
                                <Link href="/architectural-brand-in-india">
                                  <li>Architectural Designing and Planning</li>
                                </Link>
                                <Link href="/commercial-architectural-delhi-india">
                                  <li>Commercial Architectural Services</li>
                                </Link>
                              </div>
                              <Link href="/selected-homes-exclusive-interior-designs-india">
                                <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-2">
                                  Selected Homes
                                </h3>
                              </Link>
                              <div className="text-sm text-black">
                                <Link href="/astounding-lobby-area-designs">
                                  <li>Astounding Lobby Areas</li>
                                </Link>

                                <Link href="/artistic-bedroom-designs">
                                  <li>Artistic Bedroom</li>
                                </Link>

                                <Link href="/comforting-balcony-area-designs">
                                  <li>Comfort balcony Area</li>
                                </Link>

                                <Link href="/soulful-kids-room-designs">
                                  <li>Soulful kids Room</li>
                                </Link>

                                <Link href="/relaxed-walk-in-wardrobe-designs">
                                  <li>Relaxed Walk in Wardrobe</li>
                                </Link>

                                <Link href="/handsome-modular-wardrobe-designs">
                                  <li>Handsome Modular Wardrobe</li>
                                </Link>

                                <Link href="/exquisite-bathroom-remodel-designs">
                                  <li>Exquisite Bathroom</li>
                                </Link>

                                <Link href="/chilled-party-bar-unit-designs">
                                  <li>Chilled Out Bar & Party Areas</li>
                                </Link>
                                <Link href="/blissful-parents-room-designs-ideas">
                                  <li>Blissful Parents Rooms</li>
                                </Link>
                                <Link href="/spellbinding-living-room-designs">
                                  <li>Spellbinding Living Rooms</li>
                                </Link>
                                <Link href="/delicious-modular-kitchen-designs">
                                  <li>Delicious Kitchens</li>
                                </Link>
                                <Link href="/mesmerizing-modern-home-interiors">
                                  <li>Mesmerising Modern Interiors</li>
                                </Link>
                              </div>
                            </ul>
                          </div>

                          <div>
                            <ul className="text-xs">
                              <h3 className="text-lg font-bold  border-b-4 border-red-500 mt-4">
                                Home Renovation Services
                              </h3>
                              <div className="text-sm text-black">
                                <Link href="/structural-renovation-services">
                                  <li>Structural Renovation</li>
                                </Link>
                                <Link href="/home-interior-designs-renovation-services">
                                  <li>Interior Renovation</li>
                                </Link>
                                <Link href="/bedroom-renovation-services">
                                  <li>Bedroom Renovation</li>
                                </Link>
                                <Link href="/lounge-renovation-services">
                                  <li>Lounge Renovation</li>
                                </Link>
                                <Link href="/bathroom-renovation-services">
                                  <li>Bathroom Renovation</li>
                                </Link>
                                <Link href="/terrace-renovation-services">
                                  <li>Terrace Renovation</li>
                                </Link>
                                <Link href="/living-room-renovation-services">
                                  <li>Living room Renovation</li>
                                </Link>
                                <Link href="/modular-kitchen-top-brand-india-renovation-services">
                                  <li>Modular kitchen Renovation</li>
                                </Link>
                                <Link href="/wardrobe-renovation-services">
                                  <li>Wardrobe Renovation</li>
                                </Link>
                                <Link href="/mandir-renovation-services">
                                  <li>Mandir Renovation</li>
                                </Link>
                                <Link href="/gym-spa-renovation-services">
                                  <li>GYM & Spas Renovation</li>
                                </Link>
                                <Link href="/hotel-renovation-services">
                                  <li>Hotel Renovation</li>
                                </Link>
                                <Link href="/farmhouse-renovation-services">
                                  <li>Farmhouse Renovation</li>
                                </Link>
                                <Link href="/banquet-renovation-services">
                                  <li>Banquet Renovation</li>
                                </Link>
                                <Link href="/villa-renovation-services">
                                  <li>Villa Renovation</li>
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="flex flex-col gap-2 pt-4 pr-4">
                            {' '}
                            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                              <Link href="/refer-and-get-rewards-interior-designers">
                                Refer for Rewards
                              </Link>
                            </button>
                            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                              <Link href="/homes-by-design-indian-homes">
                                Homes By DIH
                              </Link>
                            </button>
                            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                              <Link href="/selected-homes-exclusive-interior-designs-india">
                                Selected Homes
                              </Link>
                            </button>
                            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                              <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                Get Free Estimate
                              </Link>
                            </button>
                            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                              <Link href="/luxury-residence-designs-delhi-india">
                                Luxury Interiors
                              </Link>
                            </button>{' '}
                          </div>
                        </div>
                      </div>
                    </AccordionSection>
                  </Link>

                  <Link href="/home-interior-services-india">
                    <AccordionSection
                      title="Interiors"
                      isActive={activeSection === 'Interiors'}
                      onClick={() => toggleSection('Interiors')}
                    >
                      <div
                        className="bg-white shadow-2xl rounded-lg    h-fit text-black"
                        onMouseLeave={handleMouseLeave}
                      >
                        <div>
                          <div className="p-2">
                            <ul className="text-sm">
                              <Link href="/home-interior-services-india">
                                <h3 className="text-lg font-bold  border-b-4 border-red-500 ">
                                  Types of Interior Design
                                </h3>
                              </Link>

                              <div className="text-sm text-black mt-2">
                                <Link href="/1bhk-apartment-interior-designs">
                                  {' '}
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('1bhk')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    1bhk residence interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/2bhk-apartment-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('2bhk')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    2bhk residence interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/3bhk-apartment-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('3bhk')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    3bhk residence interior designs{' '}
                                  </li>{' '}
                                </Link>
                                <Link href="/4bhk-apartment-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('4bhk')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    4bhk residence interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/villa-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('villa')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Villa interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/farmhouse-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('farmhouse')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    farmhouse interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/penthouse-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('pent')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Penthouse interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/studio-apartment-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('office')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Studio apartment interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/bungalow-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('bunglow')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Bungalow interior designs
                                  </li>{' '}
                                </Link>
                                <Link href="/duplex-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('duplex')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Duplex Residence interior Designs
                                  </li>{' '}
                                </Link>
                                <Link href="/cottage-interior-designs">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('cottage')
                                    }
                                    onMouseLeave={handleMouseLeaveImage}
                                  >
                                    Cottage Interior Designs
                                  </li>{' '}
                                </Link>
                              </div>
                            </ul>
                          </div>

                          <div className="p-2">
                            <ul className="text-sm">
                              <h3 className="text-lg font-bold  border-b-4 border-red-500">
                                Renovation Services
                              </h3>

                              <div className="text-sm text-black">
                                <Link href="/structural-renovation-services">
                                  <li
                                    onMouseOver={() => handleMouseOverImage('')}
                                  >
                                    Structural Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/home-interior-designs-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('interiorRenovation')
                                    }
                                  >
                                    Interior Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/bedroom-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('bedroom')
                                    }
                                  >
                                    Bedroom Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/lounge-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('loungRenovation')
                                    }
                                  >
                                    Lounge Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/bathroom-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('bathroom')
                                    }
                                  >
                                    Bathroom Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/terrace-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('terrace')
                                    }
                                  >
                                    Terrace Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/living-room-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('livingroom')
                                    }
                                  >
                                    Living room Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/modular-kitchen-top-brand-india-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('modularKitchen')
                                    }
                                  >
                                    Modular kitchen Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/wardrobe-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('wardrobeRenovation')
                                    }
                                  >
                                    Wardrobe Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/mandir-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('mandir')
                                    }
                                  >
                                    Mandir Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/gym-spa-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('gym')
                                    }
                                  >
                                    GYM & Spas Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/hotel-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('hotel')
                                    }
                                  >
                                    Hotel Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/farmhouse-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage(
                                        'farmhouseRenovation'
                                      )
                                    }
                                  >
                                    Farmhouse Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/banquet-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('banquet')
                                    }
                                  >
                                    Banquet Renovation
                                  </li>{' '}
                                </Link>
                                <Link href="/villa-renovation-services">
                                  <li
                                    onMouseOver={() =>
                                      handleMouseOverImage('villaRenovation')
                                    }
                                  >
                                    Villa Renovation
                                  </li>{' '}
                                </Link>
                              </div>
                            </ul>
                            <div className="flex flex-col gap-2 pt-4 pr-4">
                              {' '}
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/refer-and-get-rewards-interior-designers">
                                  Refer for Rewards
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/homes-by-design-indian-homes">
                                  Homes By DIH
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/selected-homes-exclusive-interior-designs-india">
                                  Selected Homes
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                  Get Free Estimate
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/luxury-residence-designs-delhi-india">
                                  Luxury Interiors
                                </Link>
                              </button>{' '}
                            </div>
                          </div>
                          <div className=" mt-12 center">
                            {/* <button className='mt-4 bg-green-700 p-3 ml-28 rounded-full text-white font-bold text-sm'>Book an End To End Interior Consultancy </button> */}
                          </div>
                        </div>

                        <Image
                          src={
                            hoveredItem
                              ? getImageForItem(hoveredItem)
                              : '/images/top4.jpeg'
                          }
                          alt=""
                          className="shadow-sm  border-2"
                          width={550}
                          height={250} // Set your desired width and height
                          style={{ width: '550px', height: '250px' }}
                        />
                      </div>
                    </AccordionSection>
                  </Link>

                  <Link href="/architectural-designs-services-india">
                    <AccordionSection
                      title="Architectural"
                      isActive={activeSection === 'Architectural'}
                      onClick={() => toggleSection('Architectural')}
                    >
                      <div
                        className="bg-white shadow-2xl rounded-lg  p-4 w-full   h-fit text-black"
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="">
                          <div className="">
                            <Link href="/architectural-designs-services-india">
                              <h1 className="font-bold">
                                Architectural Décor Advice
                              </h1>
                            </Link>

                            <p className="text-black text-sm">
                              Architectural tips, tricks, ideas and advice from
                              experts
                            </p>
                            {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                          </div>

                          <div className="">
                            <ul className="">
                              {/* { Starting, this is the sub-category} */}
                              <div className="flex gap-2">
                                <Image
                                  src="/images/consultancy/short_image/Consultancy - in delhi - gurgaon - noida - faridabad.jpeg"
                                  alt=""
                                  width={100}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/architectural-consultancy">
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                      onMouseOver={() =>
                                        handleMouseOverImage('consultant')
                                      }
                                    >
                                      Consultancy
                                    </h3>
                                  </Link>
                                  <p className="text-xs text-black text-left">
                                    Connect with the Top Architectural Brand
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 mt-3 ">
                                <Image
                                  src="/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpeg"
                                  alt=""
                                  width={100}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/architectural-brand-in-india">
                                    {' '}
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                      onMouseOver={() =>
                                        handleMouseOverImage('design')
                                      }
                                    >
                                      Designing & Planning
                                    </h3>
                                  </Link>
                                  <p className="text-xs text-black text-left">
                                    Connect with the Best Architects in the Town
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 mt-3">
                                <Image
                                  src="/images/consultancy/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg"
                                  alt=""
                                  width={140}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/top-architects-in-india">
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white  p-2 text-xs"
                                      onMouseOver={() =>
                                        handleMouseOverImage('project')
                                      }
                                    >
                                      Structural Projects
                                    </h3>
                                  </Link>

                                  <p className="text-xs text-left">
                                    Connect with Most Experienced Architects &
                                    Interior Consultants
                                  </p>
                                </div>
                              </div>
                              {/* 
              ---- */}
                              <div className="flex gap-2 mt-3">
                                <Image
                                  src="/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg"
                                  alt=""
                                  width={100}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/commercial-architectural-delhi-india">
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                      onMouseOver={() =>
                                        handleMouseOverImage('luxury')
                                      }
                                    >
                                      Luxury Residences
                                    </h3>
                                  </Link>

                                  <p className="text-xs">
                                    Connect with the Largest Luxury Interior
                                    Brand
                                  </p>
                                </div>
                              </div>
                              {/* ---- */}
                              <div className="flex gap-2 mt-3">
                                <Image
                                  src="/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg"
                                  alt=""
                                  width={100}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/home-renovation-services">
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                      onMouseOver={() =>
                                        handleMouseOverImage('renovation')
                                      }
                                    >
                                      Renovations
                                    </h3>
                                  </Link>
                                  <p className="text-xs">
                                    Connect with the Top Renovators across Delhi
                                    -NCR
                                  </p>
                                </div>
                              </div>
                            </ul>
                            <div className="flex flex-col gap-2 pt-4 pr-4">
                              {' '}
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/refer-and-get-rewards-interior-designers">
                                  Refer for Rewards
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/homes-by-design-indian-homes">
                                  Homes By DIH
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/selected-homes-exclusive-interior-designs-india">
                                  Selected Homes
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                  Get Free Estimate
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/luxury-residence-designs-delhi-india">
                                  Luxury Interiors
                                </Link>
                              </button>{' '}
                            </div>
                          </div>
                          <div className="mt-4">
                            <Image
                              src={
                                hoveredItem
                                  ? getImageForItem(hoveredItem)
                                  : '/images/top4.jpeg'
                              }
                              alt=""
                              className="shadow-sm  border-2"
                              width={550}
                              height={250}
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionSection>
                  </Link>

                  <Link href="/modular-kitchen-top-brand-india">
                    <AccordionSection
                      title="Modular Kitchen"
                      isActive={activeSection === 'Modular Kitchen'}
                      onClick={() => toggleSection('Modular Kitchen')}
                    >
                      <div
                        className="bg-white shadow-2xl rounded-lg  w-full  p-4 h-fit text-black"
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className=" ">
                          <div className="">
                            <div className="">
                              <Link href="/modular-kitchen-top-brand-india">
                                <h1 className="font-bold">
                                  Modular Kitchen Décor Advice
                                </h1>
                              </Link>
                              <p className="text-black text-xs">
                                Home décor tips, tricks, ideas and advice from
                                experts
                              </p>
                              {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                            </div>
                          </div>
                          <div className="">
                            <div className="">
                              <ul className="">
                                {/* { Starting, this is the sub-category} */}
                                <div className="flex gap-2">
                                  <Image
                                    src="/images/modular_kitchen/short/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (5).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className=" rounded-lg"
                                  />
                                  <div>
                                    <Link href="/modular-kitchen-top-brand-india/types-of-modular-kitchens">
                                      <h3
                                        className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                        onMouseOver={() =>
                                          handleMouseOverImage('type')
                                        }
                                      >
                                        Types of Modular Kitchen
                                      </h3>
                                    </Link>

                                    <p className="text-xs text-black">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 mt-3">
                                  <Image
                                    src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (1).png"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className=" rounded-lg"
                                  />
                                  <div>
                                    <Link href="/modular-kitchen-top-brand-india/modular-kitchen-designs">
                                      {' '}
                                      <h3
                                        className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                        onMouseOver={() =>
                                          handleMouseOverImage('modular')
                                        }
                                      >
                                        Modular Kitchen Designs
                                      </h3>
                                    </Link>

                                    <p className="text-xs text-black">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 mt-3">
                                  <Image
                                    src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (7).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className=" rounded-lg"
                                  />
                                  <div>
                                    <Link href="/modular-kitchen-top-brand-india/luxury-modular-kitchens">
                                      <h3
                                        className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                        onMouseOver={() =>
                                          handleMouseOverImage('luxury_modular')
                                        }
                                      >
                                        Luxury Modular Kitchen
                                      </h3>
                                    </Link>

                                    <p className="text-xs text-black ">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2 mt-3 ">
                                  <Image
                                    src="/images/modular_kitchen/short/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (5).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className=" rounded-lg"
                                  />

                                  <div>
                                    <Link href="/modular-kitchen-top-brand-india/kitchen-renovations">
                                      <h3
                                        className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                        onMouseOver={() =>
                                          handleMouseOverImage(
                                            'kitchen_renovation'
                                          )
                                        }
                                      >
                                        Kitchen Renovation
                                      </h3>
                                    </Link>

                                    <p className="text-xs text-black">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>
                                {/* <div className="flex gap-2 mt-3">
                                <Image
                                  src="/images/modular_kitchen/short/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (7).jpg"
                                  alt="top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india"
                                  width={100}
                                  height={70}
                                  className=" rounded-lg"
                                />

                                <div>
                                  <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                    <h3
                                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                                      onMouseOver={() => handleMouseOverImage('renovations')}
                                    >
                                      Get Estimate
                                    </h3>
                                  </Link>
                                  <p className="text-xs text-black">
                                    Connect with the top end to end interior Brand
                                  </p>
                                </div>
                              </div> */}
                              </ul>
                            </div>

                            <div className="mt-4">
                              <div className="flex gap-2 ">
                                <Image
                                  src="/images/modular_kitchen/short/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (5).jpg"
                                  alt=""
                                  width={100}
                                  height={50}
                                  className="rounded-lg"
                                />

                                <div>
                                  <Link href="/modular-kitchen-top-brand-india/kitchen-renovations">
                                    <h3
                                      className="text-sm text-white bg-black absolute  p-1"
                                      onMouseOver={() =>
                                        handleMouseOverImage(
                                          'kitchen_renovation'
                                        )
                                      }
                                    >
                                      Kitchen Renovation
                                    </h3>
                                  </Link>

                                  <p className="text-xs mt-8">
                                    Connect with the top end to end interior
                                    Brand
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 mt-4">
                                <Image
                                  src="/images/modular_kitchen/short/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (7).jpg"
                                  alt=""
                                  width={100}
                                  height={50}
                                  className="rounded-lg"
                                />

                                <div>
                                  <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                    <h3
                                      className="text-sm text-white bg-black absolute  p-1"
                                      onMouseOver={() =>
                                        handleMouseOverImage('renovationss')
                                      }
                                    >
                                      Renovations
                                    </h3>
                                  </Link>

                                  <p className="text-xs mt-8">
                                    Connect with the top end to end interior
                                    Brand
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 pt-4 pr-4">
                                {' '}
                                <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                  <Link href="/refer-and-get-rewards-interior-designers">
                                    Refer for Rewards
                                  </Link>
                                </button>
                                <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                  <Link href="/homes-by-design-indian-homes">
                                    Homes By DIH
                                  </Link>
                                </button>
                                <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                  <Link href="/selected-homes-exclusive-interior-designs-india">
                                    Selected Homes
                                  </Link>
                                </button>
                                <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                  <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                    Get Free Estimate
                                  </Link>
                                </button>
                                <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                  <Link href="/luxury-residence-designs-delhi-india">
                                    Luxury Interiors
                                  </Link>
                                </button>{' '}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <Image
                              src={
                                hoveredItem
                                  ? getImageForItem(hoveredItem)
                                  : '/images/top3.jpeg'
                              }
                              alt=""
                              className="shadow-sm rounded border-2"
                              width={550}
                              height={250}
                              style={{ width: '550px', height: '250px' }}
                            />
                            {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}
                          </div>
                        </div>
                      </div>
                    </AccordionSection>
                  </Link>

                  <Link href="/wardrobe-design-gallery-india">
                    <AccordionSection
                      title="Wardrobes"
                      isActive={activeSection === 'Wardrobes'}
                      onClick={() => toggleSection('Wardrobes')}
                    >
                      <div
                        className="bg-white shadow-2xl rounded-lg   w-full p-2  h-fit text-black"
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="">
                          <div className="">
                            <div className="">
                              <Link href="/wardrobe-design-gallery-india">
                                <h1 className="font-bold">
                                  Wardrobes Décor Advice
                                </h1>
                              </Link>
                              <p className="text-black text-left">
                                Home décor tips, tricks, ideas and advice from
                                experts
                              </p>
                              {/* <button className='bg-green-500 text-white text-sm py-2 px-3 rounded-full'>explore Now</button> */}
                            </div>
                          </div>
                          <div className="">
                            <div className="">
                              <ul className="">
                                {/* { Starting, this is the sub-category} */}
                                <div className="flex gap-2">
                                  <Image
                                    src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (1).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    style={{
                                      width: '100px',
                                      height: '50px',
                                      borderRadius: '4px',
                                    }}
                                  />
                                  <div>
                                    <h3
                                      className="text-white text-xs text-nowrap p-[2px] bg-black"
                                      onMouseOver={() =>
                                        handleMouseOverImage('types_wardrobe')
                                      }
                                    >
                                      Types of Wardrobes
                                    </h3>
                                    <p className="text-xs text-black  text-left">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 mt-2">
                                  <Image
                                    src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (2).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    style={{
                                      width: '100px',
                                      height: '50px',
                                      borderRadius: '4px',
                                    }}
                                  />
                                  <div>
                                    <h3
                                      className="text-white text-xs text-nowrap p-[2px] bg-black"
                                      onMouseOver={() =>
                                        handleMouseOverImage('luxury_wardrobe')
                                      }
                                    >
                                      Luxury Wardrobes
                                    </h3>
                                    <p className="text-xs text-black text-left">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-2 mt-2">
                                  <Image
                                    src="/images/wardrobe/largest-collection-of-modular-kitchens-wardrobes-designs-in-delhi-gurgaon-noida-india (5).jpg"
                                    alt=""
                                    width={100}
                                    height={50}
                                    style={{
                                      width: '100px',
                                      height: '50px',
                                      borderRadius: '4px',
                                    }}
                                  />
                                  <div>
                                    <h3
                                      className="text-white text-xs text-nowrap p-[2px] bg-black"
                                      onMouseOver={() =>
                                        handleMouseOverImage('wardrobe_design')
                                      }
                                    >
                                      Wardrobe Designs
                                    </h3>
                                    <p className="text-xs text-left">
                                      Connect with the top end to end interior
                                      Brand
                                    </p>
                                  </div>
                                </div>
                              </ul>
                            </div>

                            <div className="">
                              <div className="flex gap-2 mt-2">
                                <Image
                                  src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg"
                                  alt=""
                                  width={100}
                                  height={50}
                                  style={{
                                    width: '100px',
                                    height: '50px',
                                    borderRadius: '4px',
                                  }}
                                />

                                <div>
                                  <h3
                                    className="text-white text-xs text-nowrap p-[2px] bg-black "
                                    onMouseOver={() =>
                                      handleMouseOverImage('glass_wardrobe')
                                    }
                                  >
                                    Lacquer Glass Wardrobe
                                  </h3>
                                  <p className="text-xs text-left">
                                    Connect with the top end to end interior
                                    Brand
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 mt-4">
                                <Image
                                  src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg"
                                  alt=""
                                  width={100}
                                  height={50}
                                  style={{
                                    width: '100px',
                                    height: '50px',
                                    borderRadius: '4px',
                                  }}
                                />

                                <div>
                                  <h3
                                    className=" text-white text-xs text-nowrap p-[2px] bg-black"
                                    onMouseOver={() =>
                                      handleMouseOverImage(
                                        'wardrobe_renovation'
                                      )
                                    }
                                  >
                                    Wardrobe Renovation Services
                                  </h3>
                                  <p className="text-xs text-left">
                                    Connect with the top end to end interior
                                    Brand
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 pt-4 pr-4">
                              {' '}
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/refer-and-get-rewards-interior-designers">
                                  Refer for Rewards
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/homes-by-design-indian-homes">
                                  Homes By DIH
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/selected-homes-exclusive-interior-designs-india">
                                  Selected Homes
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                                  Get Free Estimate
                                </Link>
                              </button>
                              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                                <Link href="/luxury-residence-designs-delhi-india">
                                  Luxury Interiors
                                </Link>
                              </button>{' '}
                            </div>
                          </div>
                          <div className="">
                            <Image
                              src={
                                hoveredItem
                                  ? getImageForItem(hoveredItem)
                                  : '/images/top4.jpeg'
                              }
                              alt=""
                              className="shadow-sm border-2 mt-4"
                              width={550}
                              height={250}
                            />
                            {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}
                          </div>
                        </div>
                      </div>
                    </AccordionSection>
                  </Link>

                  <AccordionSection
                    title="More.."
                    isActive={activeSection === 'More'}
                    onClick={() => toggleSection('More')}
                  >
                    <div
                      className="bg-white shadow-2xl rounded-lg p-4 h-fit text-black"
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="">
                        <div class>
                          <ol className="text-sm">
                            <Link href="/home-renovation-services">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Renovation
                              </h3>
                            </Link>
                            <Link href="/virtual-interior-designing-meeting">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                {' '}
                                Book a Virtual Meeting
                              </h3>
                            </Link>
                            <Link href="/about-best-interior-designers-architects">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                {' '}
                                About Us
                              </h3>
                            </Link>
                            {/* <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                              The Team
                            </h3> */}
                            <Link href="/collaborate-with-architects-interior-designers">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Collaborate with Us
                              </h3>
                            </Link>
                          </ol>
                        </div>
                        <div>
                          <ul className="text-sm">
                            <Link href="/customer-reviews-interior-designs">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Reviews
                              </h3>
                            </Link>
                            <Link href="/home-interior-designs-designing-plans-for-residences">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Our Package
                              </h3>
                            </Link>

                            <Link href="/why-choose-the-best-interior-designers">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Why Choose Us
                              </h3>
                            </Link>
                            <Link href="/join-the-largest-interior-designing-brand">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Join As a Designer
                              </h3>
                            </Link>

                            <Link href="/book-with-top-interior-designers-architects">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Book a Design Visit
                              </h3>
                            </Link>
                            <Link href="/nri-interior-architectural-services-delhi-gurgaon-noida-india">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                NRI - Sr Citizens Friendly
                              </h3>
                            </Link>
                            <Link href="/interior-digest-magazine-india">
                              <h3 className="text-base font-bold bg-black text-white mt-2 text-center">
                                Magazine
                              </h3>
                            </Link>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2 pt-4 pr-4">
                          {' '}
                          <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                            <Link href="/refer-and-get-rewards-interior-designers">
                              Refer for Rewards
                            </Link>
                          </button>
                          <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                            <Link href="/homes-by-design-indian-homes">
                              Homes By DIH
                            </Link>
                          </button>
                          <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                            <Link href="/selected-homes-exclusive-interior-designs-india">
                              Selected Homes
                            </Link>
                          </button>
                          <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                            <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                              Get Free Estimate
                            </Link>
                          </button>
                          <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                            <Link href="/luxury-residence-designs-delhi-india">
                              Luxury Interiors
                            </Link>
                          </button>{' '}
                        </div>
                      </div>
                      <Image
                        src="/design-Indian-home-about-us.jpg"
                        alt=""
                        className="shadow-sm  border-2 max-w-42 mt-4 "
                        width={550}
                        height={250}
                        style={{ width: '550px', height: '150px' }}
                      />
                    </div>
                  </AccordionSection>
                  <div className="m-4">
                    <ColorSwitch />{' '}
                  </div>
                  <div>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: 'auto', padding: '20px' }}
                    >
                      <source
                        src="/video/video-interior-designer-company-in-delhi-gurgaon-noida-india.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div style={{ paddingBottom: '0px' }}>
                    <div
                      className=""
                      style={{
                        display: 'flex',
                        gap: '1px',
                        marginTop: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      <SocialIcon
                        href="https://www.instagram.com/designindiankitchen/?hl=en"
                        network="instagram"
                        style={{ width: '10rem', height: '10rem' }}
                      />

                      <SocialIcon
                        href="https://www.facebook.com/designindiankitchen/"
                        network="facebook"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: '1px',
                        marginTop: '10px',
                        justifyContent: 'center',
                      }}
                    >
                      <SocialIcon
                        href="https://twitter.com/indiankitchens"
                        network="twitter"
                        style={{ width: '10rem', height: '10rem' }}
                      />

                      <SocialIcon
                        href="https://www.youtube.com/channel/UCqkIRwI6EL9QmaTZHYm6Hug"
                        network="youtube"
                        style={{ width: '10rem', height: '10rem' }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-center m-4">
                      Welcome to the Official Site of The{' '}
                      <strong>Design Indian Homes Brand</strong>, We offer End
                      to End Interiors, Modular Interiors & Complete
                      Architectural Services across Delhi - NCR - India. Connect
                      with us TODAY for guaranteed quotes, or Share your Quotes
                      & Get Flat 7% off by any vendor across Delhi - NCR.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/images/monkey.gif"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div
                    className="font-bold "
                    style={{
                      marginTop: '-50px',
                      paddingBottom: '220px',
                      textAlign: 'center',
                      fontSize: '60px',
                    }}
                  >
                    <h1>DESIGN INDIAN HOMES</h1>
                  </div>
                </div>
              </animated.div>
            </div>
          </div>
        )}
      </div>
      <PopupForm showPopup={showPopup} togglePopup={togglePopup} />
    </div>
  )
}

const AccordionSection = ({ title, isActive, onClick, children }) => {
  const sectionRef = useRef(null)

  const handleClick = () => {
    onClick()
  }

  useEffect(() => {
    if (isActive && sectionRef.current) {
      // If the section is being opened and there's a ref, scroll to it after the closing animation completes
      const scrollToOpenedSection = () => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      // Ensure that the closing animation completes before scrolling to the opened section
      const waitForClosingAnimation = new Promise((resolve) => {
        setTimeout(resolve, 300) // Adjust the duration according to your closing animation duration
      })

      waitForClosingAnimation.then(scrollToOpenedSection)
    }
  }, [isActive])

  return (
    <div className="flex flex-col" ref={sectionRef}>
      <div className="flex justify-between items-center py-2 px-4 cursor-pointer border-b-1 border-black">
        <p className="text-xl font-semibold text-left">{title}</p>
        <button
          onClick={handleClick}
          className="text-red-400 focus:outline-none"
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </button>
      </div>
      {isActive && (
        <div className="px-4 py-2 border-t border-gray-300">{children}</div>
      )}
    </div>
  )
}

export default MobileHeader
