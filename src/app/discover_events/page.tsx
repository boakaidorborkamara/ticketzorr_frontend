"use client"
import { EventCardComponent } from '@/components/ui/event-card';
import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'

export default function DiscoveryEventSection() {
  return (
    <div className='w-full h-full lg:min-h-[954px] bg-primary-foreground m-auto'>
      <div className="wrapper p-6 md:p-10 lg:p-28 flex flex-col">
        {/* heading title */}
        <div className="heading-row flex flex-row justify-between items-center mb-8">
          <h1 className="headin-title font-bold text-3xl md:text-5xl">
            Discover <span className='text-primary'>Popular Events</span>
          </h1>
          <Link href={'/discover_events'} className='inline-flex gap-2 text-primary items-center'>
            <span>See All</span>
            <ArrowRightCircle />
          </Link>
        </div>

        <EventListComponent />
      </div>
    </div>
  )
}


const EventListComponent = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, i) => (
          <EventCardComponent
            key={i}
            event={{
              title: "All Women’s Business Conference",
              date: "Sunday, January 01, 2023 - 06:00 PM",
              location: "Central Park, Paynesville, Liberia",
              createdBy: "Life Nation",
              image: "/event-placeholder.png",
              category: "Dance & Music"
            }}
          />
        ))}
      </div>
    </div>
  )
}
