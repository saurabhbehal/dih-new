"use client"
import { useEffect, useRef } from 'react';
import Header from '../components/Navbar/Header';
import Omsairam from '../components/Navbar/Omsairam';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link'
const NotFoundPage = () => {


  return (
    <>
      <Omsairam />
      <Header />
      <div className='flex  justify-center' style={{ textAlign: 'center', paddingTop: '50px' }}>
        <Image
          src="/4041.svg"
          alt="404-page"
          width={1000}
          height={1000}
          className='w-[600px] mt-8'
        />

      </div>
      <div className='flex justify-center'> <Link href="/"><button className='bg-green-600 px-8 py-4 rounded mb-4 text-white font-bold'>Go to Homepage</button></Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
