import NextImage from "next/image";
import { FeatureCard } from "./feature-card";
import { CalendarPlus } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button-component";




export function FeaturesSection() {

  // feature type 
  type featuresType = {
    title: string,
    description: string,
    icon: ReactNode,
  }

  // feature list
  const featuresList: featuresType[] = [

    { icon: <CalendarPlus />, title: "Event Management", description: "Set up and manage your events easily." },
    { icon: <CalendarPlus />, title: "Online Ticket Sales", description: "Accept Mobile Money & card payments." },
    { icon: <CalendarPlus />, title: "Online Ticket Sales", description: "Accept Mobile Money & card payments." },
    { icon: <CalendarPlus />, title: "Online Ticket Sales", description: "Accept Mobile Money & card payments." },
    { icon: <CalendarPlus />, title: "Online Ticket Sales", description: "Accept Mobile Money & card payments." },

  ]

  return (
    <div className="p-24 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4.5">
        <h1 className="text-center text-4xl font-bold ">Everything You Need in a Simple Platform!</h1>
        <p className="text-center text-[888484]">No setup fees. No hidden costs. Just better ticketing</p>
      </div>


      {/* Cards  */}
      <div className="flex flex-wrap place-content-center mt-28">

        {featuresList.map((feature, i) => {
          return <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />

        })}
      </div>

      <div className="mt-32 ">
        <Button className="border-2 w-[158px]   text-sm  font-medium" name="Host An Event" />
      </div>

    </div>
  );
}