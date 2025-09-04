import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button-component'


// navbar item type
type navbarType = {
    name: string,
    url: string
}


//navbat item list
const navbarListitem: navbarType[] = [
    {
        name: "Discover Envents",
        url: "/home"
    },
    {
        name: "Organisers",
        url: "#"
    },
    {
        name: "Spaces",
        url: "#"
    },
    {
        name: "Pricing",
        url: "#"
    },

]

//navbar component
export const Navbar = () => {
    return (
        <div className='w-full sticky top-0 bg-white z-50 shadow-md '>
            <div className="flex  justify-between items-center py-[15px] px-[50px]">
                <Link href={'#'}>
                 <Image width={150} height={150} src="/Logo.png" alt="logo"  />
                </Link>
               


                <ul className='flex gap-x-8 font-semibold text-balance '>
                    {navbarListitem.map((item, i) => {
                        return <li key={i} className=' hover:text-slate-600 transition-colors delay-200'>
                            <Link href={item.url}>
                                {item.name}
                            </Link>

                        </li>
                    })}
                </ul>

                <div className="flex gap-x-4 items-center font-bold">
                    <Search />
                    <Button name='Create Event' />
                    <Button name='Sign in' />
                </div>

            </div>
        </div>
    )
}

