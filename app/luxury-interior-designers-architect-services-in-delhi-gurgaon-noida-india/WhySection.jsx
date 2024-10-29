"use client"
import { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Stepper from '../../components/Stepper/page'
import Step from '../../app/luxury-interior-designers-architect-services-in-delhi-gurgaon-noida-india/step/page'
const ThreeColumnSection = () => {
  // const [isAnimating, setIsAnimating] = useState(false);
  // const containerRef = useRef(null);
  // const cardsRef = useRef([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;
  //     if (container) {
  //       const { top, bottom } = container.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;
  //       if (top < windowHeight && bottom > 0) {
  //         setIsAnimating(true);
  //       } else {
  //         setIsAnimating(false);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const cards = cardsRef.current;
  //   if (cards.length > 0) {
  //     const lastCard = cards[cards.length - 1];
  //     if (lastCard) {
  //       const { bottom } = lastCard.getBoundingClientRect();
  //       if (bottom <= window.innerHeight) {
  //         setIsAnimating(false);
  //       }
  //     }
  //   }
  // }, [isAnimating]);

  // useEffect(() => {
  //   cardsRef.current = cardsRef.current.slice(0, cardsRef.current.length - 1);
  //   const cards = document.querySelectorAll('.animate-scroll');
  //   cards.forEach((card, index) => {
  //     cardsRef.current[index] = card;
  //   });
  // }, [isAnimating]); // Update cardsRef.current when isAnimating changes


  return (
    <>
      <div className="mb-12 mt-8 sm:p-4 sm:py-8 text-center">
        <h1 className="text-6xl  mb-8">
          Why{' '}
          <span className="italic text-[#95805a] ">Design Indian Homes</span>
        </h1>

        <div className="flex gap-[100px] flex-col sm:flex-row justify-center items-center sm:m-4 sm:p-4 sm:gap-4">
          {/* Column 1 */}
          <div className="w-full sm:w-1/3">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="68"
                viewBox="0 0 82 72"
                fill="none"
              >
                <path
                  d="M60.244 20.9795L62.6288 25.8135C62.6771 25.9102 62.7657 25.9746 62.8705 25.9907L68.204 26.7642C68.4698 26.8044 68.5746 27.1267 68.3812 27.312L64.5221 31.0745C64.4496 31.147 64.4093 31.2517 64.4254 31.3564L65.3358 36.6658C65.3841 36.9316 65.1022 37.1331 64.8685 37.0041L60.099 34.4985C60.0023 34.4502 59.8895 34.4502 59.8009 34.4985L55.0314 37.0041C54.7977 37.125 54.5157 36.9316 54.5641 36.6658L55.4745 31.3564C55.4906 31.2517 55.4584 31.147 55.3778 31.0745L51.5187 27.312C51.3253 27.1267 51.43 26.8044 51.6959 26.7642L57.0294 25.9907C57.1341 25.9746 57.2228 25.9102 57.2711 25.8135L59.6559 20.9795C59.7767 20.7378 60.1151 20.7378 60.2359 20.9795H60.244Z"
                  fill="url(#paint0_linear_31_500)"
                ></path>
                <path
                  d="M79.6602 62.1409C79.5394 62.1409 79.4105 62.1248 79.2896 62.1006C76.2845 61.4963 68.8563 59.9011 64.8199 58.0803C63.3053 57.3955 61.9276 56.9524 60.6144 56.7107C56.5296 55.9695 48.9806 55.5586 44.2997 61.0693C43.8646 61.5769 43.1073 61.6414 42.5997 61.2063C42.0921 60.7712 42.0277 60.0139 42.4627 59.5063C47.9252 53.0691 56.4491 53.4961 61.0494 54.334C62.556 54.6079 64.119 55.1155 65.8109 55.8809C69.4042 57.5002 76.2523 59.0149 79.1043 59.603V8.67701C74.9793 8.07277 65.7142 5.09987 60.421 3.32741C58.0685 2.54591 55.7723 2.27199 53.589 2.52174C45.2906 3.46437 42.1083 10.6187 41.9794 10.9168L40.9562 13.2854L39.788 10.9812C39.6107 10.6267 35.2762 2.30421 26.0836 2.52979C25.1249 2.55396 24.0856 2.73927 22.9979 3.06959C18.4379 4.47145 7.58557 7.74244 2.88855 8.54005V59.2405C6.08704 58.3865 13.7489 56.3159 16.6009 55.2524C16.7701 55.196 20.3795 53.9231 24.8832 53.7458C31.0143 53.5041 35.8563 55.4136 38.8695 59.2808C39.2804 59.8044 39.1837 60.5698 38.66 60.9807C38.1363 61.3916 37.371 61.2949 36.9681 60.7712C30.829 52.8999 17.5677 57.4761 17.4308 57.5244C14.2565 58.7087 5.4425 61.0613 2.81604 61.7541C2.25207 61.9072 1.66394 61.7864 1.19666 61.4319C0.729373 61.0774 0.463501 60.5295 0.463501 59.9495V8.07277C0.463501 7.1382 1.14026 6.3567 2.06677 6.21974C6.42541 5.59132 18.6312 1.87721 22.2728 0.757336C23.5699 0.354504 24.8268 0.136977 26.0111 0.104751C33.9469 -0.104722 38.7648 5.1482 40.8031 8.04054C42.495 5.39796 46.3622 0.894301 53.307 0.104751C55.8448 -0.185288 58.4955 0.12892 61.1783 1.02321C65.545 2.48146 76.1153 5.91358 79.8536 6.32447C80.7962 6.42921 81.5133 7.22682 81.5133 8.18556V60.2556C81.5133 60.8196 81.2635 61.3513 80.8285 61.7058C80.4901 61.9797 80.0711 62.1328 79.6441 62.1328L79.6602 62.1409Z"
                  fill="#95805A"
                ></path>
                <path
                  d="M41.0046 52.4488C40.3359 52.4488 39.7961 51.909 39.7961 51.2403V10.9249C39.7961 10.2562 40.3359 9.71637 41.0046 9.71637C41.6733 9.71637 42.2131 10.2562 42.2131 10.9249V51.2403C42.2131 51.909 41.6733 52.4488 41.0046 52.4488Z"
                  fill="#95805A"
                ></path>
                <path
                  d="M80.8043 71.5752C80.8043 71.5752 80.7399 71.5752 80.7077 71.5752C76.204 71.2288 62.2177 66.3384 60.9608 65.8953C51.8407 63.8973 46.9262 68.1512 45.6371 69.5047C45.0893 70.0767 44.3158 70.407 43.5102 70.407H39.2401C38.4586 70.407 37.7094 70.1009 37.1776 69.5691C30.5954 62.9305 17.2375 67.273 17.1086 67.3133C9.40642 70.0042 1.51091 71.5027 1.43035 71.5188C0.769704 71.6397 0.141286 71.2127 0.0204365 70.552C-0.100413 69.8995 0.326586 69.263 0.987231 69.1421C1.0678 69.126 8.78606 67.6597 16.3271 65.0252C16.9474 64.8157 31.2721 60.1751 38.8937 67.8692C38.9743 67.9498 39.1032 67.99 39.2401 67.99H43.5102C43.6552 67.99 43.7922 67.9336 43.8808 67.837C45.3954 66.2498 51.1479 61.2386 61.549 63.5508L61.6859 63.5911C61.831 63.6395 76.5827 68.8279 80.8849 69.1583C81.5536 69.2066 82.0451 69.7867 81.9967 70.4554C81.9484 71.0918 81.4166 71.5752 80.7963 71.5752H80.8043Z"
                  fill="#95805A"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_31_500"
                    x1="51.4193"
                    y1="30.7827"
                    x2="68.4806"
                    y2="30.7827"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA8017"></stop>
                    <stop offset="1" stopColor="#7F5501"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl my-4 text-[#95805a]">
              Finest Architects <br /> of The Town
            </h2>
            <p>
              We have some of the top notch certified architects & interior designers on our panel to give you an exquisite wholesome interior design.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/3">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="71"
                viewBox="0 0 54 81"
                fill="none"
              >
                <path
                  d="M27.456 1.06601L30.979 8.20723C31.0504 8.35006 31.1813 8.44527 31.336 8.46908L39.2152 9.61168C39.608 9.67119 39.7627 10.1473 39.477 10.421L33.776 15.9793C33.6688 16.0864 33.6093 16.2411 33.6332 16.3958L34.9781 24.2393C35.0495 24.632 34.6329 24.9296 34.2877 24.7392L27.2417 21.0376C27.0989 20.9662 26.9323 20.9662 26.8014 21.0376L19.7554 24.7392C19.4102 24.9177 18.9936 24.632 19.0651 24.2393L20.41 16.3958C20.4338 16.2411 20.3862 16.0864 20.2672 15.9793L14.5661 10.421C14.2804 10.1473 14.4352 9.67119 14.8279 9.61168L22.7071 8.46908C22.8618 8.44527 22.9927 8.35006 23.0641 8.20723L26.5871 1.06601C26.7657 0.708953 27.2655 0.708953 27.4441 1.06601H27.456Z"
                  fill="url(#paint0_linear_31_511)"
                ></path>
                <path
                  d="M47.0837 80.7908H46.2948C42.4781 80.7908 39.3785 77.6912 39.3785 73.8745V47.9781C39.3785 47.1972 40.0159 46.5597 40.7968 46.5597C41.5777 46.5597 42.2151 47.1972 42.2151 47.9781V73.8745C42.2151 76.1215 44.0478 77.9541 46.2948 77.9541H47.0837C49.3307 77.9541 51.1633 76.1215 51.1633 73.8745V40.0577C51.1633 35.7231 47.4183 32.1932 42.8048 32.1932H11.1952C6.58964 32.1932 2.83665 35.7231 2.83665 40.0577V73.8745C2.83665 76.1215 4.66932 77.9541 6.91634 77.9541C9.16335 77.9541 10.996 76.1215 10.996 73.8745V47.9781C10.996 47.1972 11.6335 46.5597 12.4143 46.5597C13.1952 46.5597 13.8327 47.1972 13.8327 47.9781V73.8745C13.8327 77.6912 10.7331 80.7908 6.91634 80.7908C3.0996 80.7908 0 77.6912 0 73.8745V40.0577C0 34.1534 5.01992 29.3486 11.1952 29.3486H42.8048C48.9801 29.3486 54 34.1534 54 40.0577V73.8745C54 77.6912 50.9004 80.7908 47.0837 80.7908Z"
                  fill="#95805A"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_31_511"
                    x1="14.4193"
                    y1="15.5482"
                    x2="39.6238"
                    y2="15.5482"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA8017"></stop>
                    <stop offset="1" stopColor="#7F5501"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl my-4 text-[#95805a] ">
            More than 160+ <br/> amazing ultra luxury residences delivered
            </h2>
            <p>
            Book with us for an Affordable Luxury service and socialize with our picturesque works.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/3">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="68"
                viewBox="0 0 100 78"
                fill="none"
              >
                <path
                  d="M98.599 77.1421C97.8322 77.1421 97.2054 76.5154 97.2054 75.7485V44.9566C97.2054 38.9324 92.302 34.0364 86.2852 34.0364H71.8183V56.8796C71.8183 61.5323 68.0357 65.315 63.383 65.315C58.7303 65.315 54.9476 61.5323 54.9476 56.8796V44.964C54.9476 37.4061 61.0972 31.2566 68.6551 31.2566H68.9205C68.1463 25.9845 63.5968 21.929 58.1109 21.929H42.4495C36.971 21.929 32.4141 25.9919 31.6399 31.2566H32.1855C39.7434 31.2566 45.8929 37.4061 45.8929 44.964V56.8796C45.8929 61.5323 42.1103 65.315 37.4576 65.315H37.1774C32.5247 65.315 28.7421 61.5323 28.7421 56.8796V34.0364H13.7074C7.68323 34.0364 2.7872 38.9398 2.7872 44.9566V75.7485C2.7872 76.5154 2.16045 77.1421 1.3936 77.1421C0.626751 77.1421 0 76.5154 0 75.7485V44.9566C0 37.3987 6.14953 31.2492 13.7074 31.2492H28.8306C29.6195 24.436 35.4299 19.1345 42.4495 19.1345H58.1109C65.1305 19.1345 70.9335 24.436 71.7298 31.2492H86.2926C93.8505 31.2492 100 37.3987 100 44.9566V75.7485C100 76.5154 99.3733 77.1421 98.6064 77.1421H98.599ZM68.6477 34.029C62.6235 34.029 57.7201 38.9324 57.7201 44.9492V56.8649C57.7201 59.9839 60.2566 62.513 63.3682 62.513C66.4799 62.513 69.0164 59.9765 69.0164 56.8649V34.0216H68.6403L68.6477 34.029ZM31.5145 34.029V56.8723C31.5145 59.9913 34.051 62.5204 37.1627 62.5204H37.4428C40.5619 62.5204 43.091 59.9839 43.091 56.8723V44.9566C43.091 38.9324 38.1876 34.0364 32.1634 34.0364H31.4998L31.5145 34.029Z"
                  fill="#95805A"
                ></path>
                <circle
                  cx="50.5"
                  cy="7.5"
                  r="7.5"
                  fill="url(#paint0_linear_31_1092)"
                ></circle>
                <circle
                  cx="81.5"
                  cy="19.5"
                  r="7.5"
                  fill="url(#paint1_linear_31_1092)"
                ></circle>
                <circle
                  cx="21.5"
                  cy="19.5"
                  r="7.5"
                  fill="url(#paint2_linear_31_1092)"
                ></circle>
                <defs>
                  <linearGradient
                    id="paint0_linear_31_1092"
                    x1="43"
                    y1="9.21875"
                    x2="58"
                    y2="9.21875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA8017"></stop>
                    <stop offset="1" stopColor="#7F5501"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_1092"
                    x1="74"
                    y1="21.2188"
                    x2="89"
                    y2="21.2188"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA8017"></stop>
                    <stop offset="1" stopColor="#7F5501"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_31_1092"
                    x1="14"
                    y1="21.2188"
                    x2="29"
                    y2="21.2188"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA8017"></stop>
                    <stop offset="1" stopColor="#7F5501"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl my-4 text-[#95805a] ">
            Most Loved & Referred <br/>Brand in Delhi - NCR - India </h2>
            <p>
            Design Indian Homes is the most adored Brand serving across Delhi - NCR, with more than 1600+ happy customers referring us due to our organised structure, high quality workmanship & affordability.
            </p>
          </div>
        </div>
      </div>


   <Step/>
       

      
    </>
  )
}

export default ThreeColumnSection
