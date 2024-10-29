// 'use client'
import './try.css'
import React from 'react'
import {
  HeartHandshake,
  Gem,
  MousePointer2,
  Wrench,
  Users,
  Component,
} from 'lucide-react'
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import Link from 'next/link'
import { Tangerine } from 'next/font/google'
const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Steps = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col sm:flex-row justify-between mx-auto p-4 sm:p-16 md:px-20 gap-x-16">
        <div>
          <div className="sticky top-[20%]">
            {' '}
            <div className="h-full w-full">
              <h1
                className={`sm:text-5xl text-3xl text-center mt-8 ${cinzel.className}`}
              >
                Design Indian Homes
              </h1>
              <h1
                className={`text-[7vw] text-gray-900 text-center font-extralight  ${tangerine.className}`}
              >
                Journey
              </h1>
              <div className="flex justify-center items-center sm:my-16">
                <Link
                  href="#footerform"
                  className="sm:px-8 px-4 sm:py-4 py-2 text-gray-200 sm:text-3xl text-xl font-light rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#ba8a35] hover:from-[#f59e0b] hover:to-[#805ad5]"
                >
                  Meet A Designer
                </Link>
              </div>
            </div>{' '}
          </div>
        </div>
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full">
                <div className="">
                  {' '}
                  <HeartHandshake color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 1</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Finally Found Us</h2>
                <p className="text-sm text-gray-600">
                  After long searches, you finally reached the right
                  destination, where all works will be done from Source, right
                  from manufacturing modulars to end to interiors & Structures.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Gem color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 2</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Booking The First Visit</h2>
                <p className="text-sm text-gray-600">
                  You Book a Visit with Our Modular Coordinator or Architect
                  Coordinator, very sorry we dont have field running staff to
                  waste your time and ours ☺. *A nominal Adjustable first Visit
                  Charge shall be taken for Either of the meet.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <MousePointer2 color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 3</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">Understanding Requirements</h2>
                <p className="text-sm text-gray-600">
                  We Show you Concepts, understand requirements, & give our
                  expert advices followed by a thorough evaluation.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card4">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Users color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 4</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl mb-2">Visit Our Boutique Office</h2>
                <p className="text-sm text-gray-600">
                  You Visit Our Boutique Office, we show your the presentation
                  as per understanding of works, show tentative estimates & give
                  further details on design execution.
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card5">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Component color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 5</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl mb-2">
                  Initiating Designing & Planning
                </h2>
                <p className="text-sm text-gray-600">
                  We start your detailed designing & planning incl MEP if
                  required, of course it will be hands on Approach. All
                  designing & planning will be at a affordable quote ( mostly
                  its 10% of tentative estimate ).
                </p>
              </div>
            </div>
          </li>
          <li className="card" id="card6">
            <div className="card-body p-4 relative flex flex-col justify-between items-center">
              <div className="flex justify-between items-start my-2 w-full ">
                <div className="">
                  {' '}
                  <Wrench color="#ba8a35" className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold uppercase">Step 6</div>
              </div>
              <div className="flex flex-col justify-between my-2 w-full">
                <h2 className="text-xl  mb-2">
                  Approvals & Initiating Execution as per Timelines
                </h2>
                <p className="text-sm text-gray-600">
                  We start the Modular, End to End Or Structural Works and
                  Deliver as per Assured Time.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Steps
