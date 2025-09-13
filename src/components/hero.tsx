// import Image from 'next/image'
"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button-component";
import { motion } from "framer-motion";

export const HeroComponent = () => {
  return (
    <div className="w-full">
      <div
        className="img-wrapper w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* backdrop */}
        <div className="flex justify-center items-center w-full h-full bg-black/60 px-4 sm:px-6 lg:px-8">
          {/* inner text wrapper */}
          <div className="hero-txt flex flex-col text-white items-center max-w-6xl mx-auto text-center">
            {/* small heading title */}
            <motion.h3
              className="mb-6 sm:mb-8 lg:mb-11 font-bold text-xs sm:text-sm lg:text-base"
              initial={{ opacity: 0, fontSize: 0 }}
              animate={{ opacity: 1, fontSize: "inherit" }}
              transition={{ duration: 0.5 }}
            >
              BIG or small, Online or Offline. We&apos;ll ticket it!
            </motion.h3>
            {/* main text title */}
            <motion.div
              className="main-txt-wrap flex flex-col items-center space-y-2 sm:space-y-4"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-responsive-4xl font-extrabold leading-tight">
                Discover, Host, and Sell Event
              </h1>
              <h1 className="text-responsive-4xl font-extrabold leading-tight">
                Tickets in Liberia with{" "}
                <span className="text-primary block sm:inline">
                  <Typewriter
                    words={["Confidence", "Ease", "Security", "Speed"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
            </motion.div>
            {/*sub text title */}
            <motion.p
              className="w-full sm:w-5/6 lg:w-2/3 text-center text-slate-300 mt-4 sm:mt-6 lg:mt-8 text-responsive-base leading-relaxed"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Liberia&apos;s leading ticketing platform for events of all sizes.
              Plan with ease, reach your audience, and sell tickets online—fast,
              secure, and reliable.
            </motion.p>

            <motion.div
              className="btn-row flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 w-full sm:w-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                name="Start Your Event Now"
                className="w-full sm:w-auto whitespace-nowrap btn-responsive"
              />
              <Button
                name="Find Events Near You"
                variant="primary"
                className="w-full sm:w-auto whitespace-nowrap btn-responsive"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
