"use client";

import { FeatureCard } from "./feature-card";
import { CalendarPlus } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button-component";
import { motion } from "framer-motion";

export function FeaturesSection() {
  // feature type
  type featuresType = {
    title: string;
    description: string;
    icon: ReactNode;
  };

  // feature list
  const featuresList: featuresType[] = [
    {
      icon: <CalendarPlus />,
      title: "Event Management",
      description: "Set up and manage your events easily.",
    },
    {
      icon: <CalendarPlus />,
      title: "Online Ticket Sales",
      description: "Accept Mobile Money & card payments.",
    },
    {
      icon: <CalendarPlus />,
      title: "Real-time Analytics",
      description: "Track sales and attendance in real-time.",
    },
    {
      icon: <CalendarPlus />,
      title: "Custom Branding",
      description: "Customize tickets with your brand identity.",
    },
    {
      icon: <CalendarPlus />,
      title: "Multi-language Support",
      description: "Reach audiences in multiple languages.",
    },
  ];

  return (
    <motion.div
      className="py-responsive container-responsive flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-center max-w-4xl mx-auto">
        <h1 className="text-responsive-4xl font-bold">
          Everything You Need in a Simple Platform!
        </h1>
        <p className="text-responsive-lg text-gray-600 leading-relaxed">
          No setup fees. No hidden costs. Just better ticketing for events of
          all sizes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-responsive-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 xl:mt-24 w-full max-w-6xl">
        {featuresList.map((feature, i) => {
          return (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
        <Button
          className="border-2 btn-responsive font-medium"
          name="Host An Event"
        />
      </div>
    </motion.div>
  );
}
