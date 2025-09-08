
import { FeaturesSection } from "@/components/features-section";
import { TrustedBrandSection } from "@/components/trusted-brand-section";
import { DiscoveryEventSection } from "@/components/discover-event-section";
import { HeroComponent } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <main>
        <HeroComponent />
        <FeaturesSection />
        <TrustedBrandSection/>
        <DiscoveryEventSection/>
      </main>
    
    </div>
  );
}
