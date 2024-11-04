"use client";
import {
  BookImage,
  CircleUserRound,
  Headphones,
  Mail,
  Phone,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React, { FormEvent, useState, useEffect } from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import emailjs from "emailjs-com";
import Omsairam from "../../components/Navbar/Omsairam";
import ScheduleChatSection from "../../components/schedule-chat/page";
import PopupForm from "../../components/popupform/page";


const TopFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [btnText, setBtnText] = useState("Submit");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    setFormSubmitted(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      console.log(
        "Form Data to Send:",
        Object.fromEntries(formDataToSend.entries())
      );
      console.log("Uploading data...");
      const response = await fetch(
        // "/api/submit-form",
        "https://www.designindianhomes.com/api/submit-form",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );
      console.log("response: ", response);
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      console.log("Response body:", await response.text());

      if (response.ok) {
        console.log("Form data submitted successfully!");
        console.log(
          "Form Data to Send:",
          Object.fromEntries(formDataToSend.entries())
        );
        setBtnText("Done");
      } else {
        console.error("Form data submission failed. Response:", response);
        setBtnText("Something Went Wrong");
      }
    } catch (error) {
      console.error("Error during form data submission:", error);
      setBtnText("Something Went Wrong");
    }

    setFormSubmitted(true);
  };
  const handleClose = () => {
    setFormSubmitted(false);
    // Add any additional logic you want to perform when closing the thank-you page
  };
  const [title, setTitle] = useState(
    "Book a Visit | Top Interior Designing Brand in India"
  );

  useEffect(() => {
    // Update the document title on mount
    document.title = title;
  }, [title]);



  return (
    <div className="flex flex-col md:flex-row my-12">
      <Head>
        <title>Book a Visit | Top Interior Designing Brand in India</title>

        <meta
          name="description"
          content="book a meeting with the largest interior designing and architect brand in Delhi, gurgaon, noida & India. we serve most affordable modular interiors."
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
          href="https://designindianhomes.com/book-a-interior-design-visit/"
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
          content="https://designindianhomes.com/book-a-interior-design-visit/"
        />
        <meta
          property="og:title"
          content="Book a Visit | Top Interior Designing Brand in India"
        />
        <meta
          property="og:description"
          content="book a meeting with the largest interior designing and architect brand in Delhi, gurgaon, noida & India. we serve the most affordable modular interiors."
        />
      </Head>
      {/* Left side content */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">LET&apos;S START</h1>
        <Image
          width={300}
          height={300}
          src="/images/cani.gif"
          alt="Sample Image"
          className=" h-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">SOMETHING TOGETHER</h1>
        <p className="text-gray-600 text-xs mt-8">
          Connect with India&apos;s Largest Modular Interior & Architectural
          Brand. We assure you 100% Guaranteed Quotes across The Town. With Our
          16 years Expertise & a dedicated Team of Professionals, We are the
          Most Reliable and Referred Brand favoured by Top Architects, Interior
          Designers, Leading Township Developers, Trading Brands, Retailers and
          Our Clients.
        </p>
      </div>
      {/* Right side form */}
      <div className="md:w-1/2 p-4 border-t-4 sm:border-0 sm:border-l-4 border-black">
        <h1 className="text-lg font-bold mb-4">
          For All Enquiries Write to Us on contact@designindianhomes.com
        </h1>

        {formSubmitted ? (
          <div className="grid grid-cols-1 justify-items-center">
            <p className="text-center text-lg">
              Thank you for your submission!
            </p>
            <Image
              src={
                "https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg"
              }
              width={400}
              height={300}
            />
            <h1 className="text-center font-bold">
              {" "}
              FOR ANY PRIORITY BOOKING OF DESIGN/PLANNING MEETING, DO CALL US OR
              WHATSAPP US ON 9899264978, 9582827928
            </h1>

            <button
              onClick={handleClose}
              className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-700 hover:shadow"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mb-4" method="post" onSubmit={handleSubmit}>
            {/* Your form elements go here */}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 ml-2 my-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-full w-full"
              required
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 ml-2 mt-4 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-full w-full"
              required
            />
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700 ml-2 mt-4 mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-full w-full"
              required
            />
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 ml-2 mt-4 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-full w-full text-sm"
              required
            ></textarea>

            {/* Add other form fields similarly */}

            <button
              type="submit"
              className="bg-gray-900 text-white py-2 px-4 mt-4 rounded-full w-full hover:bg-gray-700 hover:shadow"
            >
              {btnText}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const MiddleInfoSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="container mx-auto mt-8 p-2">
      {/* Big Heading */}
      <h1 className="text-4xl font-extrabold mb-6 text-center border-b-4 border-b-black p-2">
        OUR LOCATIONS & CONTACT DETAILS
      </h1>

      {/* Three Columns - Responsive Layout */}
      <div className="flex flex-col sm:flex-row p-2">
        {/* First Column */}
        <div className="w-full sm:w-1/3 p-4 mb-4 sm:mb-0">
          <h2 className="text-xl font-semibold mb-2 capitalize">WRITE TO US</h2>
          <p className="text-gray-700 my-4 text-sm">
            For Order Related Enquiry order@designindianhomes.com
          </p>
          <p className="text-gray-700 my-4 text-sm">
            For Franchise/Collaborate Collaborate@designindianhomes.com
          </p>
          <p className="text-gray-700 my-4 text-sm">
            For Grievances/Complains/Support support@designindianhomes.com
          </p>
          <div className="bg-yellow-400 rounded-full w-full my-8 h-24 flex items-center justify-center">
            <button onClick={togglePopup} className="text-2xl font-bold">
              Plan a Visit Today
            </button>
            <PopupForm showPopup={showPopup} togglePopup={togglePopup} />
          </div>
        </div>

        {/* Second Column with Card */}
        <div className="w-full sm:w-1/3 p-4 mb-4 sm:mb-0 sm:border-l-4 sm:border-r-4 sm:border-l-black sm:border-r-black">
          <h2 className="text-xl font-semibold mb-4 capitalize">CALL US ON</h2>
          {/* card1 */}
          <div className="rounded-lg shadow-md overflow-hidden h-48">
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-white text-md font-semibold">
                Here to Serve - Hi.. !
              </h2>
            </div>
            <div className="bg-yellow-400 h-1/2 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">
                +91 - 0 9899264978 <br /> OR <br /> +91 - 0 9582827928
              </h2>
            </div>
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-sm text-white">
                Hello@designindianhomes.com
              </h2>
            </div>
          </div>
          {/* card2 */}
          <div className="rounded-lg shadow-md overflow-hidden h-48 my-4">
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-white text-md font-semibold">
                Someone From Boutique Office
              </h2>
            </div>
            <div className="bg-yellow-400 h-1/2 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">
                +91 - 0 11 - 44127897 <br /> OR <br /> +91 - 0 9899239097
              </h2>
            </div>
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-sm text-white">
                cpoffice@designindianhomes.com
              </h2>
            </div>
          </div>
          {/* card3 */}
          <div className="rounded-lg shadow-md overflow-hidden h-48 my-4">
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-white text-md font-semibold">
                Someone from Industrial Office
              </h2>
            </div>
            <div className="bg-yellow-400 h-1/2 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">
                +91 - 0 9110075640 <br /> OR <br /> +91 - 0 9582827928
              </h2>
            </div>
            <div className="bg-gray-900 h-1/4 flex items-center justify-center">
              <h2 className="text-sm text-white">
                office@designindianhomes.com
              </h2>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="w-full sm:w-1/3 p-4">
          <h2 className="text-xl font-semibold mb-2">OTHER BUSINESS SITES</h2>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://designindiankitchen.com" target="_blank">
              Design Indian Kitchen
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://designindianwardrobe.com" target="_blank">
              Design Indian Wardrobe
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://modularkitchenindelhi.com/" target="_blank">
              Modular Kitchen in Delhi
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://modular-kitchen-gurgaon.com">
              Modular Kitchen in Gurgaon
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://modularkitcheninnoida.com/" target="_blank">
              Modular Kitchen in Noida
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://thedesignerlounge.com/" target="_blank">
              The Designer Lounge
            </Link>
          </p>

          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://devotionalindia.com/" target="_blank">
              Devotional India
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://indianlawcompany.com/" target="_blank">
              Indian Law Company
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link
              href="https://modularkitchenmanufacturer.com/"
              target="_blank"
            >
              Modular Kitchen Manufacturer
            </Link>
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            <Link href="https://tallysolution.net/" target="_blank">
              Tally Solution
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const OfficeAddressSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-2xl font-semibold mt-6">OUR OFFICES</h1>
        <div className=" w-64 h-1 bg-yellow-300 mb-6"></div>

        <p>
          Headquarters / Corporate Office <br />
          25/42, A Block, Middle Circle <br />
          Connaught Place, <br />
          New Delhi - 110001 <br />
          cpoffice@designindianhomes.com
        </p>
        {/*  className="mt-4 w-full h-64 lg:h-auto" */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8268185257616!2d77.21762081047119!3d28.63495207556185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3780f93e25%3A0x384de3872f5403d1!2s25%2C%20Middle%20Cir%2C%20near%20Punjab%20%26%20Sind%20Bank%2C%20Block%20C%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1683998047227!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* second map */}
        <h1 className="text-2xl font-semibold mt-6">UPCOMING OFFICES</h1>
        <div className=" w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          * M3M Complex, <br /> Golf Estate, Sector 65, Golf Course Extn Road,{" "}
          <br /> Gurgaon
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56147.82427909851!2d76.99624289132949!3d28.412043862652634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226dd3fc23b1%3A0x2a1cde44e39691d2!2sM3M!5e0!3m2!1sen!2sin!4v1683999355132!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* third map */}
        <div className=" w-64 h-1 bg-yellow-300 my-6"></div>
        <p>
          * Near Sector 15 Metro Station, <br /> Sector 15, Noida
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4682609409533!2d77.30846171046908!3d28.585725975588936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f8d71f68d%3A0x912d71f5680fe6cc!2sSector%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1683999432844!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* fourth map */}
        <div className=" w-64 h-1 bg-yellow-300 my-6"></div>
        <p>
          * Shop No 61, <br /> Golf Links Market,
          <br /> Golf Links,
          <br /> New Delhi - 110003
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.21068384676!2d77.21717496302787!3d28.598196660773564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e66a6456b1%3A0x9d0c2ff400dcb471!2sGolf%20Links%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683999542115!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* fifth map */}
        <div className=" w-64 h-1 bg-yellow-300 my-6"></div>
        <p>
          61, Panchkuian Marg <br /> New Delhi - 110001
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.724814406409!2d77.20850431047131!3d28.63800857556016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4424d40c9b%3A0xe7f037c0b4a81ffa!2s61%2C%20Panchkuian%20Marg%2C%20Sidarth%20Basti%2C%20Bharat%20Nagar%2C%20Paharganj%2C%20New%20Delhi%2C%20Delhi%20110055!5e0!3m2!1sen!2sin!4v1683998989675!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-2xl font-semibold mt-6">
          CORPORATE INDUSTRIAL OFFICE
        </h1>
        <div className="w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          G - 984, Narela DSIIDC <br /> Industrial Area, <br /> New Delhi -
          110040
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56147.82427909851!2d76.99624289132949!3d28.412043862652634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226dd3fc23b1%3A0x2a1cde44e39691d2!2sM3M!5e0!3m2!1sen!2sin!4v1683999355132!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* second map */}
        <h1 className="text-2xl font-semibold mt-6">INDUSTRIAL UNITS</h1>
        <div className="w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          * A-195, Kirti Nagar <br /> * Sector 4, IMT Manesar <br /> * Sector
          57, HSIDC Industrial, Kundli <br /> * Plt No16, Near NIT, Faridabad
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14042.695651740563!2d76.8927951119836!3d28.36870666799087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e7cbde05b15%3A0x18e074fc5bdca807!2sSector%204%2C%20Imt%20Manesar%2C%20Gurugram%2C%20Haryana%20122052!5e0!3m2!1sen!2sin!4v1683998786682!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* third map */}
        <h1 className="text-2xl font-semibold mt-6">
          HARDWARE & IMPORT OUTLET
        </h1>
        <div className="w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          1/44, Shop No - 3, <br /> WHS, Kirti Nagar <br /> New Delhi - 110015
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8744202341645!2d77.12727194296615!3d28.633525613107604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034f97a2b32b%3A0x5b478ac9035fab2a!2sShop%20No%203!5e0!3m2!1sen!2sin!4v1683998840421!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* fourth map */}
        <h1 className="text-2xl font-semibold mt-6">
          ASSOCIATE APPLIANCES & EXPERIENCE CENTER
        </h1>
        <div className="w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          1/1, Tilak Nagar, <br /> New Delhi - 110058
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8136501589465!2d77.09444231047118!3d28.635346675561685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049f5239ea93%3A0x33448156f82f0d49!2s26%2F1%2C%20Tilak%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110018!5e0!3m2!1sen!2sin!4v1683998903891!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* fifth map */}
        <h1 className="text-2xl font-semibold mt-6">
          ASSOCIATE EXPERIENCE CENTER
        </h1>
        <div className="w-64 h-1 bg-yellow-300 mb-6"></div>
        <p>
          D-89, Okhla <br /> Phase 1, New Delhi - 110020
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.640595567786!2d77.27814881046626!3d28.520459075624892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce17ec6cb8813%3A0x5e4e39df17896f71!2sd%2C%20D-89%2C%20Pocket%20D%2C%20Okhla%20Phase%20I%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1683998956915!5m2!1sen!2sin"
          className="mt-4 w-full h-64 lg:h-auto"
          title="Office Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
const FullScreenImage = () => {
  return (
    <div className="flex items-center justify-center my-4 sm:-mx-16">
      <Image
        src="/images/new-plane-gif.gif" // Replace with the path to your image
        alt="Full Screen Image"
        width={2000} // Adjust width as needed
        height={1080} // Adjust height as needed
        className="rounded-md"
      />
    </div>
  );
};

const CardComponentSection = () => {
  return (
    <div className="flex flex-wrap">
      {/* card1 */}
      <Link
        href="/book-with-top-interior-designers-architects"
        className="w-full md:w-1/3 p-2"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div className="py-6 px-2">
            <div className="text-center">
              {/* <Mail className="text-5xl text-green-500 mx-auto" /> */}
              <div className="bg-gray-100 w-full p-2 rounded-full">
                <Smile
                  size={48}
                  color="#f24a4a"
                  strokeWidth={2}
                  className=" mx-auto"
                />
              </div>
              <Link href="/book-with-top-interior-designers-architects">
                <h3 className="text-sm font-bold my-2">
                  BOOK A KITCHEN PLANNING MEETING
                </h3>
              </Link>

              <p className="text-gray-700 text-xs">
                We are here to answer all of your questions
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* card2 */}
      <Link
        href="/home-interior-designs-designing-estimates-pricing"
        className="w-full md:w-1/3 p-2"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div className="py-6 px-2">
            <div className="text-center">
              {/* <Mail className="text-5xl text-green-500 mx-auto" /> */}
              <div className="bg-gray-100 w-full p-2 rounded-full">
                <BookImage
                  size={48}
                  color="#f24a4a"
                  strokeWidth={2}
                  className=" mx-auto"
                />
              </div>

              <h3 className="text-sm font-bold my-2">
                GET YOUR KITCHEN QUOTES
              </h3>
              <p className="text-gray-700 text-xs">
                If you’re ready to get started,so are we
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* card3 */}
      <Link
        href="/interior-digest-magazine-india"
        className="w-full md:w-1/3 p-2"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div className="py-6 px-2">
            <div className="text-center">
              {/* <Mail className="text-5xl text-green-500 mx-auto" /> */}
              <div className="bg-gray-100 w-full p-2 rounded-full">
                <Headphones
                  size={48}
                  color="#f24a4a"
                  strokeWidth={2}
                  className=" mx-auto"
                />
              </div>

              <h3 className="text-sm font-bold my-2">
                Visit Our Interior Digest
              </h3>
              <p className="text-gray-700 text-xs">
                Get Inspired with Beautiful Interiors
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const page = () => {
  const handleEmailClick = () => {
    const recipientEmail = "saurabhbehal@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}?subject=New Session Enquiry`;
    // window.location.href = mailtoLink
    window.open(mailtoLink, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };
  return (
    <>
      <Omsairam />
      <Header />
      <div className="mt-20 lg:mt-36 xl:mt-32 mb-16 mx-auto sm:mx-16">
        {/* breadcrumb */}
        <div className="px-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{" "}
          / <span className="text-gray-600 text-sm">Contact Us</span>
        </div>
        <TopFormSection />
        <MiddleInfoSection />
        <OfficeAddressSection />
        <FullScreenImage />
        <ScheduleChatSection />
        <CardComponentSection />

        {/* contact */}
        <div className="container mx-auto p-4 my-4">
          <div className="text-center mx-auto">
            <CircleUserRound
              size={48}
              color="#DC2626"
              strokeWidth={1.75}
              className="mx-auto mb-4"
            />
          </div>
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">CONTACT US</h1>
            <p className="text-lg text-gray-600 mt-2">
              Feel free to reach out to us
            </p>
          </div>

          {/* Description */}
          <div className="mt-6 mx-auto text-center">
            <p className="text-gray-700 text-sm">
              Call us anytime between 11am - 8pm
            </p>
          </div>

          {/* Contact Card */}
          <div className="mt-8 bg-white rounded-lg p-4 shadow-md w-full sm:w-1/4 mx-auto">
            <div className="flex flex-col items-center justify-center">
              {/* Email Button */}
              <div className="flex items-center">
                <button
                  onClick={handleEmailClick}
                  className="w-48 flex justify-center items-center p-2  rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-red-200 text-sm"
                >
                  <Mail color="#EF4444" className="mr-2" />
                  Email us
                </button>
              </div>
              <div className="border-t border-dotted border-gray-700  w-40 mx-2" />

              {/* Phone Button */}
              <div className="flex items-center">
                <button
                  onClick={handlePhoneClick}
                  className="w-48 flex justify-center items-center p-2  rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-red-200 text-sm"
                >
                  <Phone color="#EF4444" className="mr-2" />
                  Call us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
