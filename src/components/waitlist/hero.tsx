"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="pt-36 pb-36 h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i0.wp.com/gustoentertainment.ng/wp-content/uploads/2017/12/4B9A1076.jpg?resize=1080%2C675&ssl=1')",
      }}
    >
      <div className="max-w-4xl">
        <small className="text-orange-500 font-bold">DO IT ALL IN ONE PLACE</small>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Plan Events, Book Venues, Find Vendors
          {/* <span className="text-orange-500">All in One Place</span> */}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
          The easiest way to organize events, discover experiences, and connect
          with trusted vendors across Liberia. Coming soon!
        </p>
        <Button size="lg" asChild>
          <a href="#waitlist" onClick={scrollToWaitlist}>
            Get Early Access
          </a>
        </Button>
      </div>
    </section>
  )
}
