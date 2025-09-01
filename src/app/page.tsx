import { HeroComponent } from "@/components/ui/hero";
import { FeaturesSection } from "@/components/features-section";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <main>
        <HeroComponent />
        <FeaturesSection />
      </main>
    
    </div>
  );
}
