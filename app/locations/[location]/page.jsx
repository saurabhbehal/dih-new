'use client'
import { useState, useEffect } from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'
import Omsairam from '../../../components/Navbar/Omsairam'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Customer from '../../reviews/Customer'
import Head from 'next/head'

const ContactSection = ({ location, text, city }) => {
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
        style={{ backgroundImage: 'url("/images/locations/location-bg.jpg")' }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-white w-full">
        {/* Text on the Left Side (for medium screens and up) */}
        <div className="max-w-md mx-4 text-left mb-8 md:mb-0 md:mr-4">
          <h1 className="text-4xl font-extrabold mb-4">
            Best {text} In{' '}
            <span className="text-red-500 capitalize">
              {location}-{city} that fit your budget
            </span>
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
const SecondSection = ({ location, desc, city }) => {
  return (
    <>
      <div className="p-4 sm:p-8 ">
        <span className="text-green-500 text-lg">
          <Link href="/">Home</Link>
        </span>{' '}
        / <span className="text-green-500 text-lg">Locations</span> /{' '}
        <span className="text-gray-600 text-xl capitalize">
          {location} - {city}
        </span>
      </div>
      <div id="">
        <div className="mt-2">
          <div>
            <h3 className="sm:text-2xl text-xl font-bold text-center uppercase">
              {location}’S NO.1 INTERIOR & ARCHITECTURAL BRAND
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-12 text-xl sm:text-2xl">
        <TypeAnimation
          sequence={[
            'TOP KITCHEN & CLOSET BRAND ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            ' LARGEST KITCHEN DEALERS',
            1000,
            'MODULAR KITCHEN & CLOSET',
            1000,
            'LARGEST ARCHITECTURAL BRAND',
            1000,
            'TOP AWARDED INTERIORS',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <div className="desc text-center p-4 sm:p-8 ">
        <p>
          Beautiful Affordable {desc} Designing and Architect Services are
          delivered by Our team in {location} Locality, we are extensively
          serving in {location} and other neighboring areas. We are the Top
          Manufacturers for {desc} across {location}. We use some of the top
          Brands in our materials and deliver top notch quality at most
          affordable prices. Get Amazing {desc}
          delivered for your residence in {location}. For More Details, Connect
          with Our team today & Book a Site Visit. 100% Guaranteed Quotes across
          {location}.
        </p>
      </div>
    </>
  )
}

const ProjectCard = ({ project }) => {
  if (!project.images || project.images.length === 0) {
    // Render a placeholder or loading state if images are not available
    return <div className="max-w-sm rounded overflow-hidden shadow-lg"></div>
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative cursor-pointer">
      <div className="relative h-56 rounded-lg">
        {' '}
        <Image
          width={1000}
          height={1000}
          className="absolute h-full w-full object-cover"
          src={`https://api.designindianwardrobe.com/uploads/project-upload/${project.images[0].filename}`}
          alt={project.heading}
        />
        <div className="absolute flex gap-2 top-0 left-0 bg-gray-700 px-2 py-1 text-white text-sm font-semibold rounded-tr rounded-bl">
          <Image
            src={'https://cdn-icons-png.flaticon.com/512/11159/11159801.png'}
            height={30}
            width={30}
            alt="project-image"
            className="h-[20] w-[20]"
          />{' '}
          {project.images.length}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{project.name}</div>
        {/* <p className="text-gray-700 text-base">{project.description}</p> */}
      </div>
    </div>
  )
}

const Projects = ({}) => {
  const [projects, setProjects] = useState([])

  // console.log('projects: ', projects)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await axios.get(
          'https://api.designindianwardrobe.com/api/projects'
        )

        if (projectsResponse.status === 200) {
          const projectsData = projectsResponse.data

          // Fetch images for each project using Axios
          const projectsWithImages = await Promise.all(
            projectsData.map(async (project) => {
              try {
                const imagesResponse = await axios.get(
                  `https://api.designindianwardrobe.com/api/projects/images/${project.id}`
                )

                if (imagesResponse.status === 200) {
                  const imagesData = imagesResponse.data
                  return { ...project, images: imagesData }
                } else {
                  console.error(
                    `Error fetching images for project ${project.id}:`,
                    imagesResponse.statusText
                  )
                  return project
                }
              } catch (error) {
                console.error(
                  `Error during image fetch for project ${project.id}:`,
                  error.message
                )
                return project
              }
            })
          )

          // Slice the array to store only 9 projects
          setProjects(projectsWithImages.slice(0, 9))
        } else {
          console.error('Error fetching projects:', projectsResponse.statusText)
        }
      } catch (error) {
        console.error('Error during fetch:', error.message)
      }
    }

    fetchProjects()
  }, [])

  return (
    <>
      <div className="my-24">
        <h1 className="text-center font-extrabold text-3xl">
          Homes by Design Indian Homes
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 my-16">
        {projects.map((project) => (
          <Link key={project.id} href="/design-ideas/our-homes">
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        {' '}
        <Link
          href="/modular-interior-design-ideas"
          className="w-1/2 text-center hover:bg-red-500 bg-white text-red-500 border-red-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 mx-auto mb-16 border-2"
        >
          View all
        </Link>
      </div>
    </>
  )
}

const ThreeColumnSection = ({ location }) => {
  return (
    <section className="flex flex-col items-center justify-center my-12 bg-green-600 p-12">
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
          <p className="text-center capitalize">Best designs in {location}</p>
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
          <p className="text-center">Flat 7-year warranty¹</p>
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

const PackageCard = ({ img, heading, desc, slug }) => {
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
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">OUR PACKAGES</h2>
      </section>
      <Carousel responsive={responsive} className="py-4">
        {/* Repeat this card structure for each card in your carousel */}
        <PackageCard
          key={1}
          img={'/images/brands/slides1.jpeg'}
          heading={'AFFORDABLE, YET WHOLESOME'}
          desc={'On Top Priority'}
          slug={'#top-priority'}
        />
        <PackageCard
          key={2}
          img={'/images/brands/slides2.jpeg'}
          heading={'POCKET FRIENDLY, YET WELCOMING'}
          desc={'Handcrafted for You'}
          slug={'#top-priority'}
        />
        <PackageCard
          key={3}
          img={'/images/brands/slides3.jpeg'}
          heading={'MINIMAL, YET OVERALL COVERAGE'}
          desc={'Be Carefree & Happy'}
          slug={'#top-priority'}
        />
        <PackageCard
          key={4}
          img={'/images/brands/slides4.jpeg'}
          heading={'LUXURY, YET AFFORDABLE'}
          desc={'Over the Top'}
          slug={'#top-priority'}
        />
        <PackageCard
          key={5}
          img={'/images/brands/slides5.jpeg'}
          heading={'HIGH QUALITY WITH TOTAL COMMITMENT'}
          desc={'Premier Plus '}
          slug={'#top-priority'}
        />
      </Carousel>
    </div>
  )
}

const SocialReviews = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">SOCIAL REVIEWS</h2>
      </section>

      <div className="flex flex-wrap justify-evenly">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/justDail.jpg"
            alt="Description for Image 1"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.justdial.com/Delhi/Design-Indian-Kitchen-Near-Dwarka-Sector-10-Metro-Station-Palam/011PXX11-XX11-141108151600-E1L5_BZDET/reviews"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/Sulekha.jpg"
            alt="Description for Image 2"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.sulekha.com/design-indian-kitchen-connaught-place-delhi-contact-address"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex items-center">
          <Image
            width={1000}
            height={1000}
            src="/images/facebookReview.jpg"
            alt="Description for Image 3"
            className="w-2/3 h-auto rounded mr-4"
          />
          <Link
            target="_blank"
            href="https://www.facebook.com/designindiankitchen"
          >
            <button className="bg-green-500 hover:bg-green-600 text-gray-600 hover:text-white px-4 py-2 rounded-full">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const slugToLocation = (slug) => {
  if (!slug) return '' // Return empty string if slug is undefined or null

  // Split the slug by hyphens and capitalize each word
  const words = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  // Join the words back together with spaces
  return words.join(' ')
}

const Page = ({ params }) => {
   let { location } = params
   location = decodeURIComponent(location)
  const locationParts = location.split('-in-')
  const extractedLocation = locationParts[1]
  const type = locationParts[0]
  const typeParts = type.split('-')
  const firstWord = typeParts[0]
  console.log(firstWord)
  let text
  let desc
  if (firstWord === 'wardrobe') {
    text = 'Wardrobe Brand'
    desc = 'Wardrobes'
  }
  if (firstWord === 'modular') {
    text = 'Modular Kitchen Brand'
    desc = 'Modular Kitchens'
  }
  if (firstWord === 'interior') {
    text = 'Home Interior Brand'
    desc = 'Home Interiors'
  }
  const locationOriginal = slugToLocation(extractedLocation)
  function extractCityAndArea(location) {
    var words = location.split(' ')
    var city = words[words.length - 1]
    var area = words.slice(0, -1).join(' ')
    return { area: area, city: city }
  }
  const { area, city } = extractCityAndArea(locationOriginal)
  // console.log('area', area)
  // console.log('city', city)
  const [title, setTitle] = useState(
    `${text} | Top ${desc} Company in India - Design Indian Homes`
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])
  return (
    <>
      <head>
        <meta
          data-n-head="ssr"
          data-hid="og:title"
          property="og:title"
          content={`${text} | Top ${desc} Company in India - Design Indian Homes`}
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="twitter:title"
          name="twitter:title"
          content={`${text} | Top ${desc} Company in India - Design Indian Homes`}
        ></meta>

        <meta
          name="description"
          content={`Our brand is the best manufacturer of ${desc}, Connect with the best interior and architect brand in ${area} - ${city} & India. We serve most affordable modular interiors & architectural works.`}
        />

        <meta name="Author" content="Design Indian Homes" />
        <meta name="Generator" content="www.designindianhomes.com" />
        <meta name="Language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="Copyright" content="©www.designindianhomes.com" />
        <meta name="Designer" content="Design Indian Homes Unit" />
        <meta name="Publisher" content="www.designindianhomes.com" />
        <meta name="Distribution" content="Global" />
        <meta name="Rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href={`https://designindianhomes.com/locations/${location}`}
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="Yahoobot" content="index, follow" />
        <meta name="MSNbot" content="Index, Follow" />
        <meta name="allow-search" content="yes" />
        <meta name="country" content="India" />
        <meta name="contactNumber" content="+91-98-99-26-49-78" />
        <meta name="dc.language" content="english" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta
          property="og:url"
          href={`https://designindianhomes.com/locations/${location}`}
        />
        <meta
          property="og:title"
          content={`${text} | Top ${desc} Company in India - Design Indian Homes`}
        />
        <meta
          property="og:description"
          content={`Our brand is the best manufacturer of ${desc}, Connect with the best interior and architect brand in ${area} - ${city} & India. We serve most affordable modular interiors & architectural works.`}
        />
      </head>
      <Omsairam />
      <Header />
      <ContactSection location={area} city={city} text={text} />
      <SecondSection location={area} city={city} desc={desc} />
      <Projects />
      <ThreeColumnSection location={area} city={city} />
      <CardCarousel />
      <SocialReviews />
      <Customer />
      <div className="pb-24 flex justify-center items-center bg-gray-100">
        <Link
          href="/customer-reviews-interior-designs"
          className="w-1/2 text-center py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow"
        >
          View all Reviews
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Page
