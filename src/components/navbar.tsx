import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


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
        <div className='w-full bg-orange-50x0  '>
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

interface props  {
    name: string,
}


export const Button = ({ name }: props) => {
    return (
        <button className='bg-black text-white p-3 rounded-2xl cursor-grab hover:text-slate-600 transition-colors delay-200'>{name}</button>
    )
}
