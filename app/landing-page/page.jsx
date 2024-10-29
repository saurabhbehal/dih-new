'use client'
import React, { useEffect, useState, useRef } from 'react'
// import CountUp from 'react-countup'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import Image from 'next/image'
import { Download, MessageCircle, Phone } from 'lucide-react'
import { Tabs, Tab, Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import ClientReviewsSection from './ClientReviews'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'
import Omsairam from '../../components/Navbar/Omsairam'

const ContactSection = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      property: document.getElementById('property-name').value,
      updates: document.getElementById('whatsappUpdates').value,
    }

    try {
      // Send an API request to handle form submission
      const response = await axios.post(
        'https://m.designindianhomes.com/submitForm',
        formData
      )

      // Assuming the server responds with a success message
      console.log(response.data)

      // Optionally, you can perform additional actions after form submission
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle form submission error
    }
  }
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen mt-16 lg:mt-36 xl:mt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/landing/landing-bg.jpg")' }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-white w-full">
        {/* Text on the Left Side (for medium screens and up) */}
        <div className="max-w-md mx-4 text-left mb-8 md:mb-0 md:mr-4">
          <h1 className="text-4xl font-bold mb-4">
            Bring home beautiful interiors{' '}
            <span className="text-red-500"> that fit your budget</span>
          </h1>
          <p className="text-lg">
            Experience unmatched quality & timely delivery with DIH.
          </p>
        </div>

        {/* Form Below the Texts */}
        <div className="max-w-sm mx-4 flex-shrink-0 rounded-lg bg-white text-black p-4 sm:p-8 w-full md:w-auto">
          <form method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 mb-8 border rounded"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 mb-8 border rounded"
              placeholder="Email"
            />

            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full p-2 mb-8 border rounded"
              placeholder="Phone Number"
            />

            <input
              type="text"
              name="property-name"
              id="property-name"
              className="w-full p-2 mb-8 border rounded"
              placeholder="Property Name"
            />

            <label className="flex items-center mb-4 text-sm">
              <input
                type="checkbox"
                name="whatsappUpdates"
                id="whatsappUpdates"
                className="mr-2"
              />
              Send me updates on WhatsApp
            </label>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
            >
              GET FREE QUOTE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

const ThreeColumnSection = () => {
  return (
    <section className="flex flex-col items-center justify-center my-12">
      <div className="max-w-6xl flex justify-around sm:gap-16 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/landing/personalised-design-60x60-1657526074-fzE3H.avif"
            alt="Image 1"
            className="w-12 h-12 object-cover  mb-4"
          />
          <p className="text-center">Personalised designs</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/landing/10-year-warranty-desktop-1646210954-fh1K8.avif"
            alt="Image 2"
            className="w-12 h-12 object-cover  mb-4"
          />
          <p className="text-center">Flat 10-year warranty¹</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/landing/transparent-pricing-desktop-1646210957-nGL2T.avif"
            alt="Image 3"
            className="w-12 h-12 object-cover mb-4"
          />
          <p className="text-center">Transparent pricing</p>
        </div>
      </div>
    </section>
  )
}

const TextSection = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 p-8 bg-gray-100">
      <div className="max-w-md text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">The home design you crave</h1>

        {/* Paragraph Text */}
        <p className="text-sm mb-8">
          When you give your home the DIH touch, you get both beauty and
          functionality. We employ state-of-the-art technology to ensure your
          home features a flawless look that lasts a very long time.
        </p>

        {/* Button */}
        <Link
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
          href="/home-interior-designs-designing-estimates-pricing"
        >
          GET QUOTE
        </Link>
      </div>
    </section>
  )
}

const CountingSection = () => {
  const countup1Ref = useRef(null)
  const countup2Ref = useRef(null)
  const countup3Ref = useRef(null)
  let countUp1Anim
  let countUp2Anim
  let countUp3Anim
  const options = {
    prefix: '+',
  }
  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp()
  }, [])

  async function initCountUp() {
    const countUpModule = await import('countup.js')
    countUp1Anim = new countUpModule.CountUp(countup1Ref.current, 550, options)
    if (!countUp1Anim.error) {
      countUp1Anim.start()
    } else {
      console.error(countUp1Anim.error)
    }
    countUp2Anim = new countUpModule.CountUp(countup2Ref.current, 35, options)
    if (!countUp2Anim.error) {
      countUp2Anim.start()
    } else {
      console.error(countUp2Anim.error)
    }
    countUp3Anim = new countUpModule.CountUp(countup3Ref.current, 4, options)
    if (!countUp3Anim.error) {
      countUp3Anim.start()
    } else {
      console.error(countUp3Anim.error)
    }
  }

  return (
    <section className="flex flex-col items-center bg-emerald-600 justify-center p-12">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Let our numbers do the talking!
      </h1>

      {/* Use CountUp component with start and end values */}
      <div className="flex flex-row gap-16">
        <div>
          <div className="sm:text-4xl text-2xl font-bold text-white mt-8">
            <span ref={countup1Ref}>0</span>
          </div>
          <div>
            <p className="text-white text-center">Homes</p>
          </div>
        </div>
        <div>
          <div className="sm:text-4xl text-2xl font-bold text-white mt-8">
            <span ref={countup2Ref}>0</span>
          </div>
          <div>
            <p className="text-white text-center">Designers</p>
          </div>
        </div>
        <div>
          <div className="sm:text-4xl text-2xl font-bold text-white mt-8">
            <span ref={countup3Ref}>0</span>
          </div>
          <div>
            <p className="text-white text-center">Cities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Card1 = ({ img, heading, desc, slug }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg h-80">
      {/* Image */}
      <Image
        width={1000}
        height={1000}
        className="object-cover w-full h-32 md:h-48"
        src={img} // Replace with the actual path to your image
        alt="Card Image"
      />

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between min-h-32">
        {/* Heading */}
        <div className="">
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        </div>

        {/* Flex Container for Paragraph Text and Button */}
        <div className="flex items-center justify-between mb-2">
          {/* Small Paragraph Text */}
          <p className="text-xxs mr-2">{desc}</p>

          {/* Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 whitespace-nowrap text-sm">
            <Link href={`/offers/${slug}`}>GET FREE QUOTE</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

const CardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="mx-4 my-12 py-4">
      <Carousel responsive={responsive} className="py-4">
        {/* Repeat this card structure for each card in your carousel */}
        <Card1
          key={1}
          img={'/images/brands/slides1.jpeg'}
          heading={'AFFORDABLE, YET WHOLESOME'}
          desc={'On Top Priority'}
          slug={'#top-priority'}
        />
        <Card1
          key={2}
          img={'/images/brands/slides2.jpeg'}
          heading={'POCKET FRIENDLY, YET WELCOMING'}
          desc={'Handcrafted for You'}
          slug={'#second'}
        />
        <Card1
          key={3}
          img={'/images/brands/slides3.jpeg'}
          heading={'MINIMAL, YET OVERALL COVERAGE'}
          desc={'Be Carefree & Happy'}
          slug={'#third'}
        />
        <Card1
          key={4}
          img={'/images/brands/slides4.jpeg'}
          heading={'LUXURY, YET AFFORDABLE'}
          desc={'Over the Top'}
          slug={'#fourth'}
        />
        <Card1
          key={5}
          img={'/images/brands/slides5.jpeg'}
          heading={'HIGH QUALITY WITH TOTAL COMMITMENT'}
          desc={'Premier Plus '}
          slug={'#fifth'}
        />
      </Carousel>
    </div>
  )
}

const YouTubeCard = ({ imgUrl, videoLink, title, desc, videoUrl }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')
  const openModal = () => {
    setModalOpen(true)
    setSelectedVideoUrl(videoUrl)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-between gap-4 sm:gap-32 rounded-lg border-2 border-emerald-600 m-8 p-4">
        {/* Image section */}
        <div
          className="relative sm:w-[900px] overflow-hidden rounded-lg cursor-pointer md:order-1"
          onClick={openModal}
        >
          <Image
            width={1000}
            height={1000}
            src={imgUrl}
            alt="Thumbnail"
            className="object-cover sm:w-full sm:h-80"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <circle
                opacity="0.75"
                cx="36"
                cy="36"
                r="35.5"
                fill="white"
                fillOpacity="0.25"
                stroke="white"
              ></circle>
              <path
                d="M49.2422 35.2766L29.3524 16.2909C28.8433 15.805 28 16.1658 28 16.8696V55.1304C28 55.8342 28.8433 56.195 29.3524 55.7091L49.2422 36.7234C49.6549 36.3294 49.6549 35.6706 49.2422 35.2766Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>

        {/* Text description */}
        <div className="mt-4 md:mt-0 flex flex-col justify-center">
          <Link href={videoLink} target="_blank" rel="noopener noreferrer">
            <p className="text-sm bg-green-500 w-fit p-2 rounded-full text-white hover:bg-green-600">
              Play on YouTube
            </p>
          </Link>
          <p className="text-gray-600 text-lg font-semibold my-2">{title}</p>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>

      {modalOpen && (
        <div className="modalForLuxe" onClick={closeModal}>
          <div
            className="modal-contentForLuxe"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="400"
              id="youtube_video_url"
              src={`${selectedVideoUrl}&autoplay=1`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <button
              className="absolute bg-gray-700 rounded-lg p-2 px-4 text-white top-2 right-2 hover:text-red-400"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const Card2 = ({ title, desc }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
      <div className="flex items-center justify-between p-2 px-8">
        <Image
          width={1000}
          height={1000}
          src="/images/landing/full-home-interior-1-1675788036-JKqzI.avif"
          alt="Image 1"
          className="w-16 h-16 object-cover"
        />

        <Image
          width={1000}
          height={1000}
          src="/images/landing/image-4490-1675788035-KbP8s.avif"
          alt="Image 2"
          className="w-16 h-16 object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        <p className="text-sm mb-4">{desc}</p>

        <button className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700">
          CALCULATE
        </button>
      </div>
    </div>
  )
}
const Card2Section = () => {
  return (
    <>
      <div className="text-center my-12 mx-4 py-4">
        <h1 className="text-center text-xl sm:text-3xl font-bold mb-4">
          Interior Price Estimator
        </h1>
        <h4>Calculate the approximate cost of doing up your interiors</h4>
      </div>
      <div className="my-12 mx-4 py-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Card2
          title={'Full Home'}
          desc={'Get an approximate costing for your full home interior.'}
        />
        <Card2
          title={'Full Home'}
          desc={'Get an approximate costing for your full home interior.'}
        />
        <Card2
          title={'Full Home'}
          desc={'Get an approximate costing for your full home interior.'}
        />
      </div>
    </>
  )
}

const Card3 = ({ title, imageSrc, listItems }) => {
  return (
    <div className="w-80 mx-auto overflow-hidden bg-white rounded-lg shadow-lg h-80 p-4">
      {/* Title Section */}
      <div className="py-4 flex items-center">
        {/* Image in the Title */}
        <Image
          width={1000}
          height={1000}
          src={imageSrc}
          alt="Title Image"
          className="w-10 h-10 object-cover rounded-full"
        />

        {/* Text Next to the Image */}
        <p className="ml-2 text-md font-semibold">{title}</p>
      </div>

      {/* Unordered List */}
      <div className="p-0">
        {/* Title */}

        {/* Unordered List */}
        <ul className="list-disc pl-4 text-sm">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Card3Section = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const cardsData = [
    {
      title: 'Our Services',
      imageSrc: '/images/landing/other-services-desktop-1646230232-6UfAT.avif',
      listItems: [
        'Interior and exterior remodeling solutions.',

        'Design and construction of residential properties.',
        'Bespoke kitchen layouts optimized for functionality.',
        'Personalized design consultations to meet client requirements.',
        'Customized wardrobe designs for efficient organization.',
      ],
    },
    {
      title: 'Warranty',
      imageSrc: '/images/landing/warranty-desktop-1646230235-UWz82.avif',
      listItems: [
        'Comprehensive coverage for peace of mind.',
        'Guaranteed quality and durability assurance.',
        'Reliable protection against manufacturing defects.',
        'Prompt resolution of warranty claims.',
        'Extended support for long-term satisfaction.',
      ],
    },
    {
      title: 'Technology & Science',
      imageSrc:
        '/images/landing/technology-science-desktop-1646230234-kSJ7b.avif',
      listItems: [
        'Cutting-edge technology for innovative design solutions.',
        'Scientific principles applied for sustainable architecture.',
        'Advanced software for precise modeling and visualization.',
        'Integration of smart technologies for modern living spaces.',
        'Research-driven approaches to enhance functionality and efficiency.',
      ],
    },
    {
      title: 'Price Benefits',
      imageSrc: '/images/landing/price-benefits-desktop-1646230233-9NKLO.avif',
      listItems: [
        'Competitive pricing without compromising quality.',
        'Transparent cost breakdown for informed decisions.',
        'Cost-effective solutions tailored to budget constraints.',
        'Value-added services at affordable rates.',
        'Flexible payment options for client convenience.',
      ],
    },
    // Add more card data as needed
  ]

  return (
    <section className="bg-gray-100 my-12 p-8">
      <div className="mx-2 flex flex-row justify-between mt-4">
        <h1 className="text-3xl font-bold">What we offer</h1>
        <button className=" bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700">
          GET FREE QUOTE
        </button>
      </div>
      <div className="my-4 py-4">
        <Carousel responsive={responsive} className="py-4">
          {cardsData.map((card, index) => (
            <Card3
              key={index}
              title={card.title}
              imageSrc={card.imageSrc}
              listItems={card.listItems}
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
const BrandsSection = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
        <div className="slide">
          <Image src="/images/vedh.png" height={300} width={300} alt="" />
        </div>
      </div>
    </div>
  )
}

const DownloadSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center m-8 rounded-lg bg-amber-50">
      {/* Image on the left */}
      <Image
        width={1000}
        height={1000}
        src="/images/landing/web-1638167823-6amoZ.avif" // Replace with the actual path to your image
        alt="Left Image"
        className="sm:w-1/2 w-full object-cover rounded-lg"
      />

      {/* Right side content */}
      <div className="sm:w-1/2 w-fullp-2 sm:p-8">
        {/* Centered Heading Text */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Download home interior guide
        </h1>
        <h1 className="text-sm font-bold text-center mb-4">
          Don&apos;t forget to consider these fundamental design guidelines to
          know before you start interior designing!
        </h1>

        {/* Button below the heading text */}
        <div className="flex justify-center">
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700">
            <span className="mr-2">
              <Download className="h-4 w-4" />
            </span>
            Download Now
          </button>
        </div>
      </div>
    </div>
  )
}

const tabData = [
  // Data for Tab 1
  {
    video: '/images/landing/videos/drawer-cyclic.mp4',
    text: {
      title: 'Drawer Cyclic Test',
      description: 'Ensures extended life for your cabinet drawers.',
    },
  },
  {
    video: '/images/landing/videos/drawer-cyclic.mp4',
    text: {
      title: 'Shutter Cyclic Test',
      description: 'Ensures long life for your shutters.',
    },
  },
  {
    video: '/images/landing/videos/drawer-cyclic.mp4',
    text: {
      title: 'Vertical Force Test',
      description: 'Ensures superior hinge quality and avoids accidents.',
    },
  },
  {
    video: '/images/landing/videos/drawer-cyclic.mp4',
    text: {
      title: 'Shelf Load Test',
      description: 'Ensures shelves do not break under considerable load.',
    },
  },
  // Data for Tab 2 (and so on...)
  // ...
]
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 100,
    fontSize: 18,
    marginRight: theme.spacing(1),
    color: '#3d372c',
    '&.Mui-selected': {
      color: '#38a169',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const TabPanel = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </Box>
  )
}
const VideoTabsSection = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="text-center my-12 mx-4 py-4">
        <div className="">
          <h1 className="text-center text-3xl text-gray-700">
            Tested to be the best
          </h1>
          <p className="text-center text-sm text-gray-400">
            A lot of our success in modular strength hinges on testing our
            cabinets.
          </p>
        </div>
        <Container maxWidth="lg" className="mt-8">
          <Box sx={{ bgcolor: '' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              aria-label="styled tabs example"
              className="mb-8"
            >
              <StyledTab label="Drawer Cyclic Test" />
              <StyledTab label="Shutter Cyclic Test" />
              <StyledTab label="Vertical Forest Test" />
              <StyledTab label="Shelf Load Test" />
            </Tabs>
          </Box>

          {/* Display the video and text based on the selected tab */}
          {tabData.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className="grid sm:grid-cols-2 gap-4 sm:mb-8">
                {/* Video on the left */}
                <div>
                  <video
                    className="w-full sm:h-auto rounded-lg"
                    autoPlay
                    playsInline
                    loop
                    muted
                  >
                    <source src={tab.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Text on the right */}
                <div className="text-gray-700 flex flex-col  justify-center">
                  <h2 className="text-2xl text-left font-semibold mb-4">
                    {tab.text.title}
                  </h2>
                  <p className="text-lg text-left mb-4">
                    {tab.text.description}
                  </p>
                </div>
              </div>
            </TabPanel>
          ))}
        </Container>
      </div>
    </>
  )
}

const ConnectSection = () => {
  const handleConsultation = () => {
    console.log('Button clicked!')
  }
  return (
    <section className="flex flex-col items-center justify-center mt-12 p-8 bg-gray-100">
      <div className="max-w-md text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Connect with us</h1>

        {/* Paragraph Text */}
        <p className="text-sm mb-8">
          Reach out on WhatsApp or give us a call for the best home design
          experience.
        </p>

        {/* Button */}
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 flex items-center justify-center">
            <Phone className="mr-2" />
            <a
              href="tel:+919899264978"
              className="flex items-center justify-center"
            >
              CALL NOW
            </a>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 flex items-center justify-center">
            <MessageCircle className="mr-2" />
            <a
              href="whatsapp://send?phone=+919899264978"
              className="flex items-center justify-center"
            >
              WHATSAPP
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

const FIRST_IMAGE_MODERN = {
  imageUrl: '/images/beforeafter/after1.jpg',
}
const SECOND_IMAGE_MODERN = {
  imageUrl: '/images/beforeafter/before1.jpg',
}
const FIRST_IMAGE_CONT = {
  imageUrl: '/images/beforeafter/after2.jpg',
}
const SECOND_IMAGE_CONT = {
  imageUrl: '/images/beforeafter/before2.jpg',
}

const BeforeAfterTabsSection = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="text-center my-12 mx-4 py-4">
        <div className="">
          <h1 className="text-center text-3xl text-gray-700">
            Transforming homes with love
          </h1>
          <p className="text-center text-sm text-gray-400">
            Get a glimpse of our exceptional home designs.
          </p>
        </div>
        <Container maxWidth="lg" className="mt-8">
          <Box sx={{ bgcolor: '' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              aria-label="styled tabs example"
              className="mb-8"
            >
              <StyledTab label="Modern Home" />
              <StyledTab label="Contemporary Home" />
            </Tabs>
          </Box>

          {/* Display the video and text based on the selected tab */}

          <TabPanel key={0} value={value} index={0}>
            <p className="uppercase">Slide to see before and after</p>
            <div className="w-full">
              <ReactBeforeSliderComponent
                key={0}
                firstImage={FIRST_IMAGE_MODERN}
                secondImage={SECOND_IMAGE_MODERN}
              />
            </div>
          </TabPanel>
          <TabPanel key={1} value={value} index={1}>
            <p className="uppercase">Slide to see before and after</p>
            <div className="w-full">
              <ReactBeforeSliderComponent
                key={1}
                firstImage={FIRST_IMAGE_CONT}
                secondImage={SECOND_IMAGE_CONT}
              />
            </div>
          </TabPanel>
        </Container>
      </div>
    </>
  )
}

const NewsCard = ({ logoSrc, title, review }) => {
  return (
    <div className="sm:w-56 w-full sm:h-56 h-auto border border-gray-300 rounded overflow-hidden">
      {/* Logo Image */}
      <Image
        width={1000}
        height={1000}
        src={logoSrc}
        alt="Newspaper Logo"
        className="w-[162px] h-[20px] object-fit my-4 mx-auto"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <p className="text-sm italic">{review}</p>
      </div>
    </div>
  )
}

const NewsCardSection = () => {
  return (
    <div className="text-center my-12 mx-4 py-4">
      <h1 className="text-center text-3xl text-gray-700">In the news</h1>
      <div className="flex flex-wrap justify-center items-center my-8 gap-4">
        <NewsCard
          logoSrc="/images/landing/A&I.jpg"
          review='"Design Indian Homes Emerges as the Best Architectural Firm in Delhi-NCR, Blending Luxury with Affordability"'
        />
        <NewsCard
          logoSrc="/images/landing/the-economic-times.jpg"
          review='"Luxurious Living Made Affordable: Design Indian Homes Sets New Standard in Delhi-NCR"'
        />
        <NewsCard
          logoSrc="/images/landing/mint.jpg"
          review='"Design Indian Homes Sets Benchmark for Customer Support in Delhi-NCR, Making Home Design a Friendly Experience"'
        />
        <NewsCard
          logoSrc="/images/landing/A&I.jpg"
          review='"Experience Luxury with a Friendly Touch: Design Indian Homes Redefines Architectural Excellence in Delhi-NCR"'
        />
      </div>
    </div>
  )
}
const ImageSectionData = [
  {
    img: '/images/landing/landing-step-1.avif',
    bold: 'Meet a designer ',
    text: 'of your choice',
  },
  {
    img: '/images/landing/landing-step-2.avif',
    bold: '(5% payment⁴)',
    text: 'Book a renovation',
  },
  {
    img: '/images/landing/landing-step-3.avif',
    bold: '(50% payment)',
    text: 'Execution begins',
  },
  {
    img: '/images/landing/landing-step-4.avif',
    bold: '(100% payment)',
    text: 'Final installations',
  },
  {
    img: '/images/landing/landing-step-5.avif',
    bold: 'Finally move  ',
    text: 'in and enjoy!',
  },
]
const ImageSection = () => {
  return (
    <div className=" text-center my-12 sm:mx-12 mx-2 py-4">
      <h2 className="text-3xl text-center mb-8">How it works</h2>
      <div className="flex justify-between items-center relative text-center sm:gap-4 gap-2">
        {ImageSectionData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center text-center items-center"
          >
            <div className="sm:w-20 w-12 sm:h-20 h-12 bg-white border-[1px] border-gray-400 rounded-full flex items-center justify-center relative">
              <Image
                width={1000}
                height={1000}
                src={data.img} // Replace with actual image source
                alt="image"
                className="sm:w-12 w-8 sm:h-12 h-8 object-cover rounded-full z-10"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-bold sm:text-sm text-xs">{`Step ${
                index + 1
              }`}</h2>
              <h2 className="sm:text-sm text-xxs">{data.bold}</h2>
              <h2 className="sm:text-sm text-xxs">{data.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <ContactSection />
      <CountingSection />
      <ThreeColumnSection />
      <TextSection />
      <CardCarousel />
      <YouTubeCard
        imgUrl={'/images/landing/thumbnail.avif'}
        videoUrl={
          'https://www.youtube.com/embed/aErmAFhwES0?si=P1YkrXJ3zt3ndL0E'
        }
        videoLink={'https://www.youtube.com/watch?v=aErmAFhwES0'}
        title={'Aman & Astha'}
        desc={
          '“We are a big family with every member having their own taste. HomeLane designed a home where each room tells a different story, yet the design is such that everything looks cohesive - We all LOVE IT!'
        }
      />
      <Card2Section />
      <Card3Section />
      {/* <BrandsSection /> */}
      <DownloadSection />
      <VideoTabsSection />
      <ImageSection />
      <ConnectSection />

      <BeforeAfterTabsSection />
      <ClientReviewsSection />
      <NewsCardSection />
      <Footer />
    </>
  )
}

export default page
