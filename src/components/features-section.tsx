import NextImage from "next/image";
import { FeatureCard } from "./feature-card"; 




export function FeaturesSection() {

  // feature type 
  type featuresType = {
    title: string,
    description: string,
  }

  // feature list
  const featuresList: featuresType[] = [
    
    {title: "Customizable Event Pages", description: "Create stunning event pages that reflect your brand and captivate your audience."},

  ]

  return (
    <div className="p-24">
        <h1 className="text-center text-4xl font-bold ">Everything You Need in a Simple Platform!</h1>
        <p className="text-center text-[888484]">No setup fees. No hidden costs. Just better ticketing</p>

        {/* Cards  */}
        <div className="grid grid-cols-3 gap-2 mt-10">
          
          {featuresList.map((feature, i)=>{
            console.log(i);
            return <FeatureCard index={4}/>
          })}
        </div>

       
    </div>
  );
}