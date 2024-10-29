'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const CustomerReviewSection = () => {
  const MAX_CHARACTERS = 120 // Maximum characters to display before truncating

  //   const [expandedReviews, setExpandedReviews] = useState([])
  const [expandedReviews, setExpandedReviews] = useState(null)
  const handleReadMoreToggle = (customerId) => {
    setExpandedReviews((prevExpanded) =>
      prevExpanded === customerId ? null : customerId
    )
  }
  const customerData = [
    {
      id: 1,
      name: 'Reena Batra',
      photo: '/images/customers/customer1.jpg', // Replace with the actual path to customer photo
      comment:
        'Design Indian Kitchen made my beautiful bathroom Vanities, extensively elegant wardrobes and the Kitchen which actually tastes good, my guests always compliment us for the beautiful decor of home which is represented by the designs and ideas from the highly efficient team. Perfect job !',
    },
    {
      id: 2,
      name: 'Sandeep Verma',
      photo: '/images/customers/customer2.jpg', // Replace with the actual path to customer photo
      comment:
        'You come up with the beautiful ideas and designs, it really amazes me how you could completely meet my expectations and everything has been done within such a short time span, I am grateful to have chosen you to work in my house. Loved your suggestions too.',
    },
    {
      id: 3,
      name: 'Kavita Bajaj',
      photo: '/images/customers/customer3.jpg', // Replace with the actual path to customer photo
      comment:
        'I loved the way the team works with full enthusiasm. Highly professional and skilled labour, their work made my kitchen like "a dream come true" and its like "Oh wow!". Design Indian Kitchen, having you in my house really made a huge difference.',
    },
    {
      id: 4,
      name: 'Sheeba Bhatia ',
      photo: '/images/customers/customer4.jpg', // Replace with the actual path to customer photo
      comment:
        'Praise to Design Indian Kitchen for handling all my stress !! I earlier felt that it would be so difficult and time consuming to get my interiors done however I thankfully contacted Mr Saurabh through their website who assured me timely delivery of Kitchen and wardrobes with the beautiful designs which could match my criteria, and yes the best quality. My wife and I love it.',
    },
    {
      id: 5,
      name: 'Gurpreet Kaur ',
      photo: '/images/customers/ku6.jpg', // Replace with the actual path to customer photo
      comment:
        'You have a great Choice ! - is the exact compliment I often get from every guest who visits my home and I pass on the same to Design Indian Kitchen for showing extra efforts in handling my project on making it from a house to the home sweet home. I owe you my big thanks for the modular kitchen, wardrobes and the wooden tiles that you suggested to me and then applied the same.',
    },
    {
      id: 6,
      name: 'Kanvi Rawat',
      photo: '/images/customers/ku7.jpg', // Replace with the actual path to customer photo
      comment:
        'I am so fortunate to have a young talented man working for my house to help in making it a big dream project and your well behaved team who is working with complete focus. I had no idea my kitchen could look this good!',
    },
    {
      id: 7,
      name: 'Gayatri Chopra',
      photo: '/images/customers/ku8.jpg', // Replace with the actual path to customer photo
      comment:
        ' Design Indian Kitchen is a leading modular kitchen brand in Delhi and Gurgaon and they are providing the timely delivery of materials with the beautiful finishings. Good job !',
    },
    {
      id: 8,
      name: 'Karan Arora',
      photo: '/images/customers/ku9.jpg',
      comment:
        ' I just wanted to let you know that its been a great experience to have you working for my home, with the modular Kitchen and Vanities that you have installed in my house, it now looks like a miracle which could have not been completed without the best efforts of Design Indian Kitchen.',
    },
    {
      id: 9,
      name: 'Adhiti Sen ',
      photo: '/images/customers/ku10.jpg',
      comment:
        'Well done for installing your ideas in my kitchen , everything is completed within the perfect time frame and in a perfect manner. I appreciate your quality, service and best efforts. I will look forward to have you working for my house in future.',
    },
    {
      id: 10,
      name: 'Renu Singh',
      photo: '/images/customers/ku11.jpg',
      comment:
        ' I am so fortunate to have a young talented man working for my house to help in making it a big dream project and your well behaved team who is working with complete focus. I had no idea my kitchen could look this good!',
    },
    {
      id: 11,
      name: 'Rita Malhotra ',
      photo: '/images/customers/ku12.jpg',
      comment:
        'Thank you for pulling everyone/everything together on such short notice. I got my wardrobes manufactured and installed within such a short time-span. Also, it was so elegant and budget-friendly.',
    },
    {
      id: 12,
      name: 'Pooja Gabba  ',
      photo: '/images/customers/ku13.jpg',
      comment:
        'I got my "Modular Wardrobes" done and LOVE IT. The size and length are perfect. The design is amazing and looks exactly what I wanted. Thankyou for such amazing work.',
    },
    {
      id: 13,
      name: 'Pradeep Singh',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku34.jpg',
      comment: "It’s amazing how you've come up with the unique ideas for my wardrobes and kitchen and It’s so obvious how you pay attention to each detail. My work has been incredibly beautiful above and beyond my expectations. My house looks like a beautifully designed villa now. I loved the way you designed and installed the exact output more professionally than I could imagine."
    },
    {
      id: 14,
      name: 'Sumit Gill',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku35.jpg',
      comment: "Loved the quality of products, work quality, and timely installation of my kitchen and wardrobes. All the work has been performed within the perfect time frame as discussed. Also, I am glad that I could get so much of my interiors done within the budget. Highly recommendable. Thank you Design Indian Kitchen."
    },
    {
      id: 15,
      name: 'Gautam Oberio',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku36.jpg',
      comment: "We are so happy to get our kitchen work done by Design Indian Kitchen, very fine work has been installed and the team has worked with all the dedication. The best part is that you keep the environment happy and clean until the last installation. Go on the team. I wish you success."
    },
    {
      id: 16,
      name: 'Kanvi Rawat',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku41.jpg',
      comment: "I am so fortunate to have a young talented man working for my house to help in making it a big dream project and your well behaved team who is working with complete focus. I had no idea my kitchen could look this good!"
    },
    {
      id: 17,
      name: 'Rita Malhotra',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku61.jpg',
      comment: "Thank you for pulling everyone/everything together on such short notice. I got my wardrobes manufactured and installed within such a short time-span. Also, it was so elegant and budget-friendly."
    },
    {
      id: 18,
      name: 'Shanker V Mittal',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku46.jpg',
      comment: "Design Indian Kitchen made the modular Wardrobes and modular Kitchen for my new house. It's so great and budget-friendly. Well done—and ahead of the deadline too!"
    },
    {
      id: 19,
      name: 'Gargi Manchanda',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku71.jpg',
      comment: "Beautiful fittings, lowest prices and accurate finishings. Every task has been handled with complete dedication and sincerity and been handed over within the specified time. Much appreciation to entire team of Design Indian Kitchen. Great job!"
    },
    {
      id: 20,
      name: 'Aarti Kanwar',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku70.jpg',
      comment: "I wished something like this only which Mr Saurabh and your team could actually understood my requirements and installed exactly what I have been looking for in my Kitchen and rooms."
    },
    {
      id: 21,
      name: 'Shubhanker Prasher',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku68.jpg',
      comment: "It's been a great experience to have interacted with Design Indian Kitchen for my Modular Kitchen and modular wardrobes."
    },
    {
      id: 22,
      name: 'Sahil Tiwari',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku66.jpg',
      comment: "I just wanted to say thank you for all the energy and unique thoughts you have put into my house to make it this elegant. Design Indian Kitchen- You got brilliant ideas."
    },
    {
      id: 23,
      name: 'Uma Kashyap',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku69.jpg',
      comment: "My husband tells me how great my Modular Kitchen now looks like. It looks really clean and fresh by the designs that have been suggested by you."
    },
    {
      id: 24,
      name: 'Chandana Bhattacharya',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku67.jpg',
      comment: "Having you working for my house was so pleasant. You installed and manufactured the wardrobes. vanities and modular Kitchen in my house. You have been so helpful, your choices and designs are so different and pleasing."
    },
    {
      id: 25,
      name: 'Himanshu Rai',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku65.jpg',
      comment: "I can't believe how beautiful my modular kitchen and my modular wardrobes in my rooms look after I got the renovations done by Design Indian Kitchen. You are the best."
    },
    {
      id: 26,
      name: 'Raghav Chaudhary',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku63.jpg',
      comment: "I wanted to get some renovations done into my kitchen and wardrobes and thankfully I came across www.designindiankitchen.com. DIK team, you saved a lot of my time and money and took over my pressure and stress by giving your best effort."
    },
    {
      id: 27,
      name: 'Gaurav Dhaiya',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku60.jpg',
      comment: "I absolutely loved how you handled all my stress and confusions relating to my modular Kitchen. I could really rely on your choices and suggestions and now my kitchen looks Oh! so wonderful and classy."
    },
    {
      id: 28,
      name: 'Kamlesh Aggarwal',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku62.jpg',
      comment: "Outstanding work! This is exactly how I wanted my Kitchen to look. It's truly above and beyond."
    },
    {
      id: 29,
      name: 'Anjana Srivastva',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku59.jpg',
      comment: "My washroom Vanity and my daughter's wardrobe has been installed by Design Indian Kitchen, it's so perfect and my daughter is in awe of her pretty walk-in wardrobe as it's been designed in a way that looks so neat. Good Going."
    },
    {
      id: 30,
      name: 'Varun Gupta',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku55.jpg',
      comment: "Mr Saurabh - You are so creative—I loved getting your perspective on things to bring such extraordinary updates into my house. I wonder how you could just take over all my concerns regarding modular kitchen and wardrobes and made it easy for me."
    },
    {
      id: 31,
      name: 'Jay Sharma',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku54.jpg',
      comment: "It's our pleasure to have you with us. My modular kitchen looks much clean and perfect. I am sending my heartfelt appreciation to you, without your support and guidance I would not have been able to see the actual and attractive changes in my home."
    },
    {
      id: 32,
      name: 'Rohit Jain',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku52.jpg',
      comment: "I really enjoyed the excellent service and timely installation of modular kitchen, wardrobe and vanities at my place. My family loves it. My house looks delicious and attractive. I would always recommend Design Indian Kitchen to my knowns."
    },
    {
      id: 33,
      name: 'Rahul Bansal',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku50.jpg',
      comment: "Perfect.. I loved the cool environment you create while on work and 'DIK' surely feels like none other than my family is working for me to make my home looks like a one I could ever image and that too within my budget."
    },
    {
      id: 34,
      name: 'Prem Mathur',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku49.jpg',
      comment: "After getting my kitchen and wardrobes designed, created and installed by Design Indian Kitchen, I feel so much confident that Yes this is the quality service I have always wanted for my home. Excellent service."
    },
    {
      id: 35,
      name: 'Konica Sen',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku48.jpg',
      comment: "It was the best choice to have Design Indian Kitchen completing my modular kitchen, wardrobes and vanities. I am blown away. Thanks for being so awesome. High fives!"
    },
    {
      id: 36,
      name: 'Konica Sen',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku38.jpg',
      comment: "It was the best choice to have Design Indian Kitchen completing my modular kitchen, wardrobes and vanities. I am blown away. Thanks for being so awesome. High fives!"
    },
    {
      id: 37,
      name: 'Parveen Ahuja',
      photo: 'https://www.designindiankitchen.com/wp-content/themes/dkiblogs/assets/images/client/ku18.jpg',
      comment: "It was the best choice to have Design Indian Kitchen completing my modular kitchen, wardrobes and vanities. I am blown away. Thanks for being so awesome. High fives!"
    }
  ];
    // Add more customer data as needed
  

  return (
    <section className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto">
        <h2 className="sm:text-sm text-3xl  uppercase font-bold text-center mb-8 overflow-hidden">
          CUSTOMERS RECOMMENDATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className={`bg-white p-6 rounded-lg shadow-md ${
                expandedReviews === customer.id
                  ? 'h-auto'
                  : 'h-auto md:h-[350px]'
              }`}
            >
              <Image
                width={1000}
                height={1000}
                src={customer.photo} // Replace with the actual path to customer photo
                alt={customer.name}
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 text-center font-semibold">
                {customer.name}
              </p>
              <p className="text-gray-600 text-center">
                {expandedReviews === customer.id
                  ? customer.comment
                  : `${customer.comment.slice(0, MAX_CHARACTERS)}${
                      customer.comment.length > MAX_CHARACTERS ? '...' : ''
                    }`}
              </p>
              {customer.comment.length > MAX_CHARACTERS && (
                <div className="flex justify-center items-center">
                  <button
                    className="text-green-500 hover:bg-green-500 hover:text-white border border-green-500 px-3 py-1 rounded mt-2 transition-all duration-300 ease-in-out"
                    onClick={() => handleReadMoreToggle(customer.id)}
                  >
                    {expandedReviews === customer.id
                      ? 'Read Less'
                      : 'Read More'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviewSection
