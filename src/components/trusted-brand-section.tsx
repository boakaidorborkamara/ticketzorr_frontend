"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const TrustedBrandSection = () => {
  const brandIcon = [
    "/download (2).png",
    "/download (3).png",
    "/download (5).png",
    "/yW3hv952_400x400.png",
  ];

  return (
    <motion.div
      className="bg-black w-full min-h-screen lg:min-h-[800px] py-responsive flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="container-responsive flex flex-col justify-center items-center">
        <div className="text-white text-center max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h1 className="text-responsive-5xl font-bold leading-tight">
            Trusted by brands and creators you love.
          </h1>
          <p className="text-responsive-lg text-gray-400 leading-relaxed">
            From concerts and sports to conferences and parties, we make event
            ticketing easy—online or offline.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-white rounded-2xl mt-8 sm:mt-12 lg:mt-16 p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 place-items-center ">
            {brandIcon.map((brand, i) => {
              return (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    src={brand}
                    alt={`Brand partner ${i + 1}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
