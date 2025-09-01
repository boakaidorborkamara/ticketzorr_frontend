import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full bg-orange-50x0 font-bold  '>
        <div className="flex  justify-between items-center py-[15px] px-[50px]">
                    
                        <Image width={150} height={150} src="/Logo.png" alt="logo" />
                    
                    
                        <ul className='flex gap-x-8 '>
                            <li>Discover Envents</li>
                            <li>Organisers</li>
                            <li>Spaces</li>
                            <li>Pricing</li>
                        </ul>

                        <div className="flex gap-x-4 items-center">
                            <Search/>
                            <Button name='Create Event'/>
                             <Button name='Sign in'/>
                        </div>
                    
        </div>
    </div>
  )
}

type props = {
    name: string,
}


export const Button = ( {name}:props) => {
  return (
    <button className='bg-black text-white p-3 rounded-2xl'>{name}</button>
  )
}
