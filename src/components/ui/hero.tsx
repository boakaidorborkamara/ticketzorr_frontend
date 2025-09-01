// import Image from 'next/image'
"use client"
import React from 'react'
import { Button } from './button-component'
import { Typewriter } from 'react-simple-typewriter'

export const HeroComponent = () => {
    return (
        <div className='w-full'>
            <div
                className="img-wrapper w-full h-[753px] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero.jpg')" }}>
                {/* backdrop */}
                <div className="flex justify-center items-center w-full h-full bg-black/60">
                    {/* inner text wrapper */}
                    <div className="hero-txt flex flex-col text-white items-center">
                        {/* small heading title */}
                        <h3 className='mb-11'>BIG or small, Online or Offline. We&apos;ll ticket it!</h3>
                        {/* main text title */}
                        <div className="main-txt-wrap flex flex-col items-center">
                            <h1 className='text-6xl font-bold'>Discover, Host, and Sell Event</h1>
                            <h1 className='text-6xl font-bold'>
                                Tickets in Liberia with <span className='text-primary'>
                                    <Typewriter
                                        words={['Confidence', 'Ease', 'Security', 'Speed']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                        </div>
                        {/*sub text title */}
                        <h3 className='wrap-break-word w-2/3 text-center text-slate-300 my-2'>Liberia&apos;s leading ticketing platform for events of all sizes. Plan with ease, reach your audience, and sell tickets online—fast, secure, and reliable.</h3>

                        <div className="btn-row flex gap-18 mt-20">
                            <Button name='Start Your Event Now' />
                            <Button name='Find Events Near You' variant='primary' />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
