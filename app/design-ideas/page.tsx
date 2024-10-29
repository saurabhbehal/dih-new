// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import Link from "next/link";
import ProgressBar from "../../components/Progressbar";
import MyForm from "../../components/MyForm";
import Omsairam from "../../components/Navbar/Omsairam";

import Image from "next/image";

const Card = ({ image, heading, description, link }) => (
  <Link href={link}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      {" "}
      {/* Added 'h-full' to set a fixed height */}
      <Image
        className="w-full h-40 object-cover"
        src={image}
        width={200}
        height={100}
        alt="Card Image"
        priority={true}
      />
      {/* Set a fixed height for the image */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  </Link>
);
const cardsData = [
  {
    image:
      "https://api.designindianwardrobe.com/uploads/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india%20(7).jpg",
    heading: "Modular Interior Designs",
    description:
      "Best Modular Interior Designer in Delhi, Gurgaon, Noida India",
    link: "/modular-interiors",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/3-bhk-flat-interior-apartment-design-in-delhi-gurgaon-noida-india%20(5).jpg",
    heading: "Interior Design Solutions",
    description: "Best Interior Designer in Delhi, Gurgaon, Noida India",
    link: "/home-interior-designs",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/sofa-manufacturers-in-delhi-gurgaon-noida-india%20(1).jpg",
    heading: "End to End Interior",
    description:
      "Best End to End Interior Solutions in Delhi, Gurgaon, Noida India",
    link: "/home-interior-services-india",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/top-architects-in-delhi-noida-gurgaon%20(3).jpg",
    heading: "Architectural Designs",
    description:
      "Best Architectural Designers Designer in Delhi, Gurgaon, Noida India",
    link: "/architectural-designs-services-india",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/beautiful-lobby-area-design-ideas-in-delhi-gurgaon-noida-india%20(3).jpg",
    heading: "Selected Homes",
    description: "Best home designer in Delhi, Gurgaon, Noida India",
    link: "/selected-homes-exclusive-interior-designs-india",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes%20(1).jpg",
    heading: "Home Renovation Services",
    description: "Best Home Renovation Services in Delhi, Gurgaon, Noida India",
    link: "/home-renovation-service",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/bespoke-custom-modular-kitchen-designs-in-delhi-gurgaon-noida-india%20(3).jpg",
    heading: "Modular Kitchen",
    description: "Best Modular Kitchen Services in Delhi, Gurgaon, Noida India",
    link: "/modular-kitchen-top-brand-india",
  },
  {
    image:
      "https://api.designindianwardrobe.com/uploads/2-door-sliding-wardrobe-designs-in-delhi-gurgaon-noida-india%20(2).jpg",
    heading: "Wardrobes",
    description: "Best Wardrobes Services in Delhi, Gurgaon, Noida India",
    link: "/wardrobe-design-gallery-india",
  },
];

const Page = ({}) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <Omsairam />
      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        <Head>
          <title>
            Modular Interiors | Modular Kitchens & Wardrobe Brand India
          </title>
          <meta
            name="description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India."
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="canonical"
            href="https://designindianhomes.com/modular-interior-design-ideas/
"
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
            content="https://designindianhomes.com/modular-interior-design-ideas/"
          />
          <meta
            property="og:title"
            content="Modular Interiors | Modular Kitchens & Wardrobe Brand India"
          />
          <meta
            property="og:description"
            content="Our brand is the largest manufacturers of modular interiors, we are top dealers for modular kitchens, wardrobes across Delhi, gurgaon, noida & India"
          />
        </Head>
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>
          / <span className="text-gray-600 text-sm">Design ideas</span>
        </div>

        <div className="flex items-center  p-4">
          <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
          <h1 className="text-3xl font-bold">Home Interior Design</h1>
        </div>
        <p className="text-gray-700 text-sm px-7">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Page;
