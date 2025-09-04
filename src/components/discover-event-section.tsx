"use client"

import { ArrowRightCircle } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

export const DiscoveryEventSection = () => {
  return (
    <motion.div className='w-full h-full lg:h-[954px] bg-primary-foreground m-auto'>
        <div className="wrapper p-28 flex flex-col">
            {/* heading title */}
            <div className="heading-row flex flex-row justify-between items-center">
                <div className="headin-title font-bold text-5xl">
                     <h1>Discover <span className='text-primary'>Popular Events</span></h1>
                </div>             
               <button className='inline-flex gap-2 text-primary'>See All <ArrowRightCircle/></button>
            </div>


        </div>
    </motion.div>
  )
}
