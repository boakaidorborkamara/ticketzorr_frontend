"use client"

import { ArrowRightCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from './ui/tabs'
import { ReactNode, useState } from 'react'
import { EventCardComponent } from './ui/event-card'

export const DiscoveryEventSection = () => {
  const [isSelected, setIsSelected] = useState("All Events");
  const filterTag: string[] = ["Popular", "Upcoming", "Recent"];
  const sortingTag: string[] = ["All Events", "Nightlife & Party", "Movie & Cinema","Art & Theatre","Food & Drinks","Networking"];

  return (
    <motion.div className='w-full h-full lg:h-[954px] bg-primary-foreground m-auto'>
      <div className="wrapper p-28 flex flex-col">
        {/* heading title */}
        <div className="heading-row flex flex-row justify-between items-center">
          <div className="headin-title font-bold text-5xl">
            <h1>Discover <span className='text-primary'>Popular Events</span></h1>
          </div>
          <button className='inline-flex gap-2 text-primary'>See All <ArrowRightCircle /></button>
        </div>


        <Tabs defaultValue='Popular' className=' mt-16'>

          <TabsList className='bg-transparent'>
            {filterTag.map((filter,i)=>{
              return <TabsTrigger key={i} value={filter}>{filter}</TabsTrigger>
            })}
            
          </TabsList>

        {/* sorting button */}
       <div className={`border-b-2 z-10 -mt-2.5 `}></div> 
            <div className="flex flex-row gap-4 my-12 ">
                {sortingTag.map((filter,i)=>{
              return<FilterBtnComponent key={i}>{filter}</FilterBtnComponent>
            })}
       </div>
        
         

          
          <TabsContent value={'Popular'}>
           <PopularComponent/>
          </TabsContent>
          <TabsContent value={'Upcoming'}>
            upcoming
          </TabsContent>
          <TabsContent value={'Recent'}>
            recent
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}


const PopularComponent = () => {
  return <div className="w-full  ">
    <div className="wrapper">
      <EventCardComponent/>
    </div>
  </div>
}

const FilterBtnComponent = ({ children }: Readonly<{ children: ReactNode }>) => (<motion.button animate={{x:2}} className="rounded-4xl bg-primary/30 border-primary border-2 p-2 w-[150px] max-w-[250px]"> {children}</motion.button>);




