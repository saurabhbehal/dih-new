import dynamic from 'next/dynamic'
import Script from 'next/script'
const Omsairam = dynamic(() => import('../components/Navbar/Omsairam'))
import Header from '../components/Navbar/Header'
const Collection = dynamic(() => import('../components/Collection/page'))
const ImageGrid = dynamic(() => import('../components/ImageGrid/page'))
const Display = dynamic(() => import('../components/Display/page'))
const Stepper = dynamic(() => import('../components/Stepper/page'))
const Brands = dynamic(() => import('../components/Brands/page'))
const TabsSection = dynamic(() => import('../components/TabsSection/page'))
const EndToEndImageGrid = dynamic(() =>
  import('../components/EndToEndImageGrid/page')
)
const FAQ = dynamic(() => import('../components/FAQ/page'))
const Footer = dynamic(() => import('../components/Footer/Footer'))
const ColorSwitch = dynamic(() => import('../components/ColorSwitch/page'))
import Animation from '../app/animation/page'
import '../style/hero.css'
import Head from 'next/head'

const Hero = dynamic(() => import('../components/Collection/Hero'))

// const bioRhyme = BioRhyme({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Design Indian Homes',
    url: 'https://www.designindianhomes.com/',
    logo: 'https://www.designindianhomes.com/images/Logo.gif',
    description:
      'Connect with the best interior and architect brand in Delhi, Gurgaon, Noida & India. We serve the most affordable modular interiors & architectural works.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91- 9899264978',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Design Street',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Saurabh Bahel',
      jobTitle: 'Founder',
      description:
        'Founder of Design Indian Homes, an expert in creative interior design solutions.',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '112',
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }
  return (
    <>
      <Head>
        <title>
          Top Interior Designers & Architects - Delhi - Gurgaon - India
        </title>

        <meta
          name="description"
          content="Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors & architectural works."
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
        <link rel="canonical" href="https://designindianhomes.com/" />
        <meta name="googlebot" content="index, follow" />
        <meta name="Yahoobot" content="index, follow" />
        <meta name="MSNbot" content="Index, Follow" />
        <meta name="allow-search" content="yes" />
        <meta name="country" content="India" />
        <meta name="contactNumber" content="+91-98-99-26-49-78" />
        <meta name="dc.language" content="english" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta property="og:url" content="https://designindianhomes.com/" />
        <meta
          property="og:title"
          content="Top Interior Designers & Architects - Delhi - Gurgaon - India"
        />
        <meta
          property="og:description"
          content="Connect with the best interior and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors & architectural works.."
        />
      </Head>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>
      <main>
        <Omsairam />
        <Header />
        <div>
          <Hero />
        </div>
        <ImageGrid />
        <Brands />
        <EndToEndImageGrid />
        <Collection />

        {/* <ColorSwitch /> */}

        <Display />
        <Stepper />
        <TabsSection />

        <FAQ />

        <Footer />
      </main>
    </>
  )
}
