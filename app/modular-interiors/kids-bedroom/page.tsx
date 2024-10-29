'use client'
import React from 'react'
import Header from '../../../components/Navbar/Header'
import Footer from '../../../components/Footer/Footer'

import Link from 'next/link'
import ProgressBar from '../../../components/Progressbar'
import Tabs from '../Tabs'
import Nav from 'react-bootstrap/Nav'
import Omsairam from '../../../components/Navbar/Omsairam'

const page = () => {
  return (
    <>
      <ProgressBar />
      <Omsairam />
      <Header />

      <div className="mt-24 lg:mt-36 mb-16 mx-auto sm:mx-16">
        {/* breadcrumb */}
        <div className="p-4  ">
          <span className="text-green-500 text-sm">
            <Link href="/">Home</Link>
          </span>{' '}
          /{' '}
          <span className="text-green-500 text-sm">
          <Link href="/modular-interiors">Modular Interiors</Link>
          </span>{' '}
          / <span className="text-gray-600 text-sm">Kids bedroom</span>
        </div>

        {/* tabs */}
        <Tabs id={8} />
      </div>
      <Footer />
    </>
  )
}

export default page
