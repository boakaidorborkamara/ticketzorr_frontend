import { Navbar } from '@/components/navbar';
import React from 'react'

export default function HomeLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* navbar */}
        <Navbar/>
        {children}
        {/* footer */}
    </div>
  )
}
