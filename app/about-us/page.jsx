import React from 'react'
import Header from '../../components/Navbar/Header'
import Omsairam from '../../components/Navbar/Omsairam'
import ContactForm from '../../components/ContactForm/page'
import Footer from '../../components/Footer/Footer'
import ScheduleChatSection from '../../components/schedule-chat/page'

const FullWidthSection = () => {
  return (
    <section className="relative h-[200px] sm:h-[400px] bg-cover bg-center flex items-center justify-center mt-16 lg:mt-36 xl:mt-24">
      {/* Replace 'your-image.jpg' with the actual path to your background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center bg-black/40 px-8 py-6 rounded backdrop-blur-sm">
        <h1 className="sm:text-4xl text-2xl font-bold ">ABOUT US</h1>
        {/* You can add more content or customize styling here */}
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          // Replace 'your-image.jpg' with the actual path to your background image
          backgroundImage: 'url("/images/about-us.jpg")',
        }}
      ></div>
    </section>
  )
}

const page = () => {
  return (
    <>
      <Omsairam />
      <Header />
      <FullWidthSection />
      <div className="bg-amber-50 pt-8 sm:pt-16 pb-8 p-8s sm:p-16">
        <h1 className="sm:text-3xl text-2xl font-bold text-center mb-8">
          India&apos;s No.1 Home Interior Brand
        </h1>
        <h1 className="sm:text-5xl text-3xl font-bold text-center mb-16 ">
          THE{' '}
          <span className="bg-red-700 text-white px-2">
            DESIGN INDIAN HOMES{' '}
          </span>{' '}
          WAY
        </h1>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          More than a Decade and a Half Old
        </h2>
        <p className="mb-4">
          The Design Indian Homes company is a more than a decade old company,
          we were into production of Modular
          kitchens/wardrobe-design-gallery-india/interiors materials since few
          years and initiated into the Architectural/interior segment when we
          felt that average customer was not getting the justified quality,
          professional solutions related to architectural know how and simply to
          avoid the multiple middleman due to which the prices were shooting up
          to the end user, and also these vendors were moving towards
          low-quality products due to multiple agents and thus using
          sub-standard material even by{' '}
          <strong>
            renowned brands which were just trading in the name of delivering
            interiors.
          </strong>
        </p>
        <p className="italic ">
          Just ask them if they have their Own Modular Facility ? If they have
          Certified Architects in their Team, If they have genuinely delivered
          multiple projects in the committed timelines.
        </p>
        <p>
          People generally required our services as we provided them with the
          three basic necessities which they found missing in the prevalent
          markets, namely;{' '}
          <span className="underline">
            {' '}
            Quality, Affordability & Reliability.
          </span>
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Design Indian Homes Today
        </h2>
        <p className="mb-4">
          We today stand as the{' '}
          <strong> Most Trusted Brand in the Modular Industry </strong>,
          producing and supplying over 2000
          Kitchens/wardrobe-design-gallery-india per year as well as the{' '}
          <strong> Most Loved Interior and Architectural Brand</strong> Across
          North India. We accept selected work and are the most referred company
          in Delhi- NCR and India. With Customers across India increasing &
          enquiries from Abroad, we have initiated exports to our neighboring
          countries of some of our Import Line Products.
        </p>
        <p className="italic">
          With dedicated and devoted Team members, Our Motive is to make your
          Residence as Comforting, Harmonious and a Place to Celebrate & Pray in
          Peace. Your Support and Love has made us India&apos;s Largest
          Interior/Architectural Agency since 2023.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Elegance Redefined
        </h2>
        <p className="mb-4">
          We believe in making the Interiors Simple, Sober & Elegant, It should
          be noted that elegance means focussing on the simplified approach to
          Beauty. It is therefore recommended to have a Design that gives you
          more space, makes you feel energetic and also looks new everyday. We
          try to make all our interior designs clutter free, aesthetically
          Balanced and also crisp. We give importance to the basic structure and
          use techniques which are trendy, extremely practical and without which
          an interior makeover is incomplete. Elegant Interiors give positive
          vibrations to the entire residence and also calms the entire
          atmosphere. All our designs carry a distinct look with no 2 similar
          designs and once implemented, they give a complete makeover of your
          Old Interiors to a Brand New Concept.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Quality & Integrity
        </h2>
        <p className="mb-4">
          All designs have to pass through our rigorous testing processes, there
          are multiple approvals in the design team hierarchy. If the structural
          change is to be incurred, a professional certified structural engineer
          with a civil engineer would be working on the project. Once they are
          tested through our Interior Softwares and other techniques, we test
          their strength of the structures through our systemized tensity test.
          Once all tests are passed, the works are approved for further
          implementation. We do not compromise a single bit on our quality
          assurance and the Standard norms. Our Integrity has made us the most
          Reliable Brand for End to End Interiors, Architectural Works, Modular
          Interiors, Kitchens & Wardrobes across New Delhi - NCR and India. Our
          materials during implementations are also doubly supervised, and we
          only use standard equipment which are used worldwide and which have
          been duly approved by thousands of certified architects, civil and
          structural engineers.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Values and Vision
        </h2>
        <p className="mb-4">
          We abide by the dictum of &apos;{' '}
          <span className="text-red-700 font-bold">Love All - Serve All</span>{' '}
          &apos; , whether you go ahead with our Brand or Choose others ; we
          shall suggest to you what we deem fit as per our expertise and advise
          you irrespective of the outcome of the deal. We do make profits nor
          intend to, at the cost of our Integrity, Principles and our Goodwill.
          What you pay, We make sure you get the best for it.
        </p>
        <p>
          We will justify every penny you spend on your Interior or
          Architectural Work. Our Vision is to make Interiors Affordable for the
          Middle Class segment, Not everyone can afford a 10 Lakh 2 Bhk
          Renovation, hence we want the people at the grassroots level to afford
          our Products/Works and get their homes renovated or re-designed. There
          can be no house without a Decent Modular Kitchen or Modular Interiors,
          hence it is necessary to have a decent makeover which is sturdy and
          durable for a good amount of time. Each day millions across our
          Country, spend a lot of their time and energy in Selecting the Right
          Brand for their Interiors, hence to have affordable interior makeovers
          where you get the &apos;feel good factor&apos; is must and duly
          deserved by All Homemakers across Our Country.
        </p>
        <h2 className="sm:text-3xl text-2xl font-bold my-8">
          Environment and Safety
        </h2>
        <p className="mb-4">
          Special Consideration is made regarding the environment, we
          manufacture all our Modular cabinets in mostly all Pure Veneered
          Materials, which is recycled even when discarded, the materials are
          100% environmental friendly. Even the wood particles are not wasted at
          our Industrial Unit, we created hand crafted panels for interiors from
          the wastages. All our Interior Designs are meticulously planned to
          ensure safety to the users esp the Sr Citizens and kids at home. We
          take special care about the sharp bends and the material used to
          provide extra comfort and thus usage is nearly effortless.
        </p>
      </div>
      <ScheduleChatSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default page
