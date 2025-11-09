import { Navigation } from "@/components/waitlist/navigation"
import { Hero } from "@/components/waitlist/hero"
import { PainPoints } from "@/components/waitlist/pain-points"
import { Features } from "@/components/waitlist/features"
import { WaitlistForm } from "@/components/waitlist/waitlist-form"
import { Contact } from "@/components/waitlist/contact"
import { Footer } from "@/components/waitlist/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <PainPoints />
      <Features />
      <WaitlistForm />
      <Contact />
      <Footer />
    </>
  )
}