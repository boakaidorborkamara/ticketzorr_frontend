"use client"
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

export const TrustedBrandSection = () => {
    const brandIcon = [
      "/download (2).png",
      "/download (3).png",
      "/download (5).png",
      "/yW3hv952_400x400.png"
    ]

  return (
    <motion.div
      className='bg-black w-full h-full lg:h-[800px] p-16  flex flex-col items-center justify-center'>

      <div className="flex flex-col justify-center items-center">
        <div className=" text-white lg:w-2/4 text-center wrap-break-word flex flex-col gap-1.5">
          <h1 className='text-6xl'>Trusted by brands and creators your love.</h1>
          <p className='text-lg text-gray-400'>From concerts and sports to conferences and parties, we make event ticketing easy—online or offline.</p>
        </div>

        <div className="box w-[1154px] h-[246px] bg-white rounded-2xl mt-[54px]">
              <div className="grid grid-cols-4 w-full h-full grid-rows-1 place-content-center place-items-center ">
                {brandIcon.map((brand,i)=>{
                  return <Image 
                  width={100}
                  height={100}
                   key={i} src={brand} alt={'brand'} />
                })}
              </div>
        </div>
      </div>

    </motion.div>
  )
}
