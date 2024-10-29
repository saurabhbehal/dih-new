'use client'
import React, { useState } from 'react'
import { Boxes, GraduationCap } from 'lucide-react'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import Image from 'next/image';

const ImageCard = () => {
  return (
    <>
     
        <div className="bg-amber-50 text-center py-8">
          <h1 className="text-4xl mt-[300px]">
            Our Design <span className="text-[#95805a] italic">Stars</span>
          </h1>
        </div>
        <div className="flex mt-[-100px] min-h-screen flex-col md:flex-row gap-[100px] items-center justify-center bg-amber-50">
          {/* card 1 */}
          <div className="group h-48 md:h-96 w-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
              <Image
          width={1000}
          height={1000}
                  src="https://hlwebsite.s3.ap-south-1.amazonaws.com/luxe/testimonial-1.png"
                  alt=""
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col ">
                  <div className="mb-2 text-left">
                    <h2 className="text-sm text-gray-900 mb-2">
                      Hi My Name Is!
                    </h2>
                    <div className="flex items-center">
                      <p className="text-xxs text-gray-700 mr-4 ">
                        5 Years of Experience
                      </p>
                      <div className="flex-1 h-4 border-l border-gray-400"></div>
                      <p className="text-xxs text-gray-700 mr-6">New York</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">100+</span>{' '}
                        <br /> Projects <br /> Completed
                      </p>
                    </div>
                    {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                    <div className="text-left">
                      <GraduationCap
                        size={40}
                        color="#95805a"
                        strokeWidth={1.5}
                      />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">Education</span>{' '}
                        <br /> B.Arch, <br /> ITM University
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="mb-2 text-left">
                    <p className="text-xs font-semibold text-gray-700">
                      Premium Projects
                    </p>
                    <p className="text-xxs  text-gray-700">Projects 1</p>
                    <p className="text-xxs  text-gray-700">Projects 2</p>
                    <p className="text-xxs  text-gray-700">Projects 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card for mobile */}
          <div className="md:hidden h-72 w-64 rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 -mt-4">
            <div className="flex min-h-full flex-col ">
              <div className="mb-2 text-left">
                <h2 className="text-sm text-gray-900 mb-2">Hi My Name Is!</h2>
                <div className="flex items-center">
                  <p className="text-xxs text-gray-700 mr-4 ">
                    5 Years of Experience
                  </p>
                  <div className="flex-1 h-4 border-l border-gray-400"></div>
                  <p className="text-xxs text-gray-700 mr-6">New York</p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">100+</span> <br />{' '}
                    Projects <br /> Completed
                  </p>
                </div>
                {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                <div className="text-left">
                  <GraduationCap size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">Education</span>{' '}
                    <br /> B.Arch, <br /> ITM University
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="mb-2 text-left">
                <p className="text-xs font-semibold text-gray-700">
                  Premium Projects
                </p>
                <p className="text-xxs  text-gray-700">Projects 1</p>
                <p className="text-xxs  text-gray-700">Projects 2</p>
                <p className="text-xxs  text-gray-700">Projects 3</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="group h-48 md:h-96 w-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
              <Image
          width={1000}
          height={1000}
                  src="https://hlwebsite.s3.ap-south-1.amazonaws.com/luxe/testimonial-1.png"
                  alt=""
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col ">
                  <div className="mb-2 text-left">
                    <h2 className="text-sm text-gray-900 mb-2">
                      Hi My Name Is!
                    </h2>
                    <div className="flex items-center">
                      <p className="text-xxs text-gray-700 mr-4 ">
                        5 Years of Experience
                      </p>
                      <div className="flex-1 h-4 border-l border-gray-400"></div>
                      <p className="text-xxs text-gray-700 mr-6">New York</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">100+</span>{' '}
                        <br /> Projects <br /> Completed
                      </p>
                    </div>
                    {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                    <div className="text-left">
                      <GraduationCap
                        size={40}
                        color="#95805a"
                        strokeWidth={1.5}
                      />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">Education</span>{' '}
                        <br /> B.Arch, <br /> ITM University
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="mb-2 text-left">
                    <p className="text-xs font-semibold text-gray-700">
                      Premium Projects
                    </p>
                    <p className="text-xxs  text-gray-700">Projects 1</p>
                    <p className="text-xxs  text-gray-700">Projects 2</p>
                    <p className="text-xxs  text-gray-700">Projects 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile card */}
          <div className="md:hidden h-72 w-64 rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 -mt-4">
            <div className="flex min-h-full flex-col ">
              <div className="mb-2 text-left">
                <h2 className="text-sm text-gray-900 mb-2">Hi My Name Is!</h2>
                <div className="flex items-center">
                  <p className="text-xxs text-gray-700 mr-4 ">
                    5 Years of Experience
                  </p>
                  <div className="flex-1 h-4 border-l border-gray-400"></div>
                  <p className="text-xxs text-gray-700 mr-6">New York</p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">100+</span> <br />{' '}
                    Projects <br /> Completed
                  </p>
                </div>
                {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                <div className="text-left">
                  <GraduationCap size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">Education</span>{' '}
                    <br /> B.Arch, <br /> ITM University
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="mb-2 text-left">
                <p className="text-xs font-semibold text-gray-700">
                  Premium Projects
                </p>
                <p className="text-xxs  text-gray-700">Projects 1</p>
                <p className="text-xxs  text-gray-700">Projects 2</p>
                <p className="text-xxs  text-gray-700">Projects 3</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="group h-48 md:h-96 w-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
              <Image
          width={1000}
          height={1000}
                  src="https://hlwebsite.s3.ap-south-1.amazonaws.com/luxe/testimonial-1.png"
                  alt=""
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col ">
                  <div className="mb-2 text-left">
                    <h2 className="text-sm text-gray-900 mb-2">
                      Hi My Name Is!
                    </h2>
                    <div className="flex items-center">
                      <p className="text-xxs text-gray-700 mr-4 ">
                        5 Years of Experience
                      </p>
                      <div className="flex-1 h-4 border-l border-gray-400"></div>
                      <p className="text-xxs text-gray-700 mr-6">New York</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">100+</span>{' '}
                        <br /> Projects <br /> Completed
                      </p>
                    </div>
                    {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                    <div className="text-left">
                      <GraduationCap
                        size={40}
                        color="#95805a"
                        strokeWidth={1.5}
                      />
                      <p className="text-xxs text-gray-700 mr-4 ">
                        <span className="font-semibold text-xs">Education</span>{' '}
                        <br /> B.Arch, <br /> ITM University
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="h-[1px] rounded-lg w-full bg-gray-400 my-8"></div>
                  {/*  */}
                  <div className="mb-2 text-left">
                    <p className="text-xs font-semibold text-gray-700">
                      Premium Projects
                    </p>
                    <p className="text-xxs  text-gray-700">Projects 1</p>
                    <p className="text-xxs  text-gray-700">Projects 2</p>
                    <p className="text-xxs  text-gray-700">Projects 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobiele card */}
          <div className="md:hidden h-72 w-64 rounded-xl bg-[#f2eada] p-6 text-center text-slate-100 -mt-4">
            <div className="flex min-h-full flex-col ">
              <div className="mb-2 text-left">
                <h2 className="text-sm text-gray-900 mb-2">Hi My Name Is!</h2>
                <div className="flex items-center">
                  <p className="text-xxs text-gray-700 mr-4 ">
                    5 Years of Experience
                  </p>
                  <div className="flex-1 h-4 border-l border-gray-400"></div>
                  <p className="text-xxs text-gray-700 mr-6">New York</p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <Boxes size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">100+</span> <br />{' '}
                    Projects <br /> Completed
                  </p>
                </div>
                {/* <div className="flex-1 h-4 border-l border-gray-400"></div> */}
                <div className="text-left">
                  <GraduationCap size={40} color="#95805a" strokeWidth={1.5} />
                  <p className="text-xxs text-gray-700 mr-4 ">
                    <span className="font-semibold text-xs">Education</span>{' '}
                    <br /> B.Arch, <br /> ITM University
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="h-[1px] rounded-lg w-full bg-gray-400 my-2"></div>
              {/*  */}
              <div className="mb-2 text-left">
                <p className="text-xs font-semibold text-gray-700">
                  Premium Projects
                </p>
                <p className="text-xxs  text-gray-700">Projects 1</p>
                <p className="text-xxs  text-gray-700">Projects 2</p>
                <p className="text-xxs  text-gray-700">Projects 3</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ImageCard
