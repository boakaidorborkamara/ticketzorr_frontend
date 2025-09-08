"use client";

import { ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ReactNode, useState } from "react";
import { EventCardComponent } from "./ui/event-card";
import Link from "next/link";

export const DiscoveryEventSection = () => {
  const [isSelected, setIsSelected] = useState("All Events");
  const filterTag: string[] = ["Popular", "Upcoming", "Recent"];
  const sortingTag: string[] = [
    "All Events",
    "Nightlife & Party",
    "Movie & Cinema",
    "Art & Theatre",
    "Food & Drinks",
    "Networking",
  ];

  return (
    <motion.div
      className="w-full min-h-screen bg-primary-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.2 }}
    >
      <div className="container-responsive py-responsive flex flex-col">
        {/* heading title */}
        <div className="heading-row flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
          <div className="headin-title font-bold text-responsive-4xl">
            <h1>
              Discover <span className="text-primary">Popular Events</span>
            </h1>
          </div>
          <Link
            href={"/discover_events"}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-responsive-base font-medium"
          >
            See All
            <ArrowRightCircle size={20} />
          </Link>
        </div>

        <Tabs defaultValue="Popular" className="mt-8 sm:mt-12 lg:mt-16">
          <TabsList className="bg-transparent w-full sm:w-auto justify-start">
            {filterTag.map((filter, i) => {
              return (
                <TabsTrigger
                  key={i}
                  value={filter}
                  className="text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
                >
                  {filter}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* sorting button */}
          <div className="border-b-2 z-10 -mt-2.5"></div>
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 my-6 sm:my-8 lg:my-12">
            {sortingTag.map((filter, i) => {
              return <FilterBtnComponent key={i}>{filter}</FilterBtnComponent>;
            })}
          </div>

          <TabsContent value={"Popular"}>
            <PopularListComponent />
          </TabsContent>
          <TabsContent value={"Upcoming"}>
            <div className="flex items-center justify-center py-16 text-responsive-lg text-gray-600">
              Upcoming events coming soon...
            </div>
          </TabsContent>
          <TabsContent value={"Recent"}>
            <div className="flex items-center justify-center py-16 text-responsive-lg text-gray-600">
              Recent events coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

const PopularListComponent = () => {
  return (
    <div className="w-full">
      <div className="grid grid-responsive-4 gap-4 sm:gap-6 lg:gap-8">
        {Array.from({ length: 8 }, (_, i) => (
          <EventCardComponent
            key={i}
            event={{
              title: "All Women's Business Conference",
              date: "Sunday, January 01, 2025 - 06:00 PM",
              location: "Central Park, Paynesville, Liberia",
              createdBy: "Life Nation",
              image: "/event-placeholder.png",
              category: "Business & Professional",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FilterBtnComponent = ({
  children,
}: Readonly<{ children: ReactNode }>) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="rounded-full bg-primary/30 border-primary border-2 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm lg:text-base font-medium hover:bg-primary/40 transition-colors duration-200 whitespace-nowrap"
  >
    {children}
  </motion.button>
);
