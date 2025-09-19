import Image from "next/image";
import { Heart } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "./card";

// Define interface with required fields and proper typing
interface EventType {
  image?: string;
  title: string;
  date: string;
  location: string;
  createdBy: string;
  category?: string;
}

// Add proper props typing with explicit Props interface
interface EventCardProps {
  event: EventType;
}

export const EventCardComponent = ({ event }: EventCardProps) => {
  return (
    <Card className="p-2 sm:p-3 w-full max-w-sm mx-auto flex flex-col gap-3 h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={event.image ?? "/event-placeholder.png"}
          alt={`${event.title} image`}
          fill
          className="rounded-md object-cover"
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5">
          <Heart className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <CardDescription className="bg-orange-100 text-xs sm:text-sm text-orange-500 px-2 py-1 w-fit rounded-md font-medium">
        {/*{event.category ?? */ "Dance & Music"}
      </CardDescription>

      <CardTitle className="font-bold text-base sm:text-lg  line-clamp-2 leading-tight">
        {event.title}
      </CardTitle>

      <CardContent className="p-0 text-xs flex flex-col gap-2 sm:gap-3 flex-grow">
        <div className="flex gap-2 items-start">
          <Image
            width={16}
            height={16}
            className="mt-0.5 flex-shrink-0"
            src="/assets/lets-icons_date-fill.png"
            alt="Date icon"
          />
          <p className="leading-relaxed">{event.date}</p>
        </div>
        <div className="flex gap-2 items-start">
          <Image
            width={16}
            height={16}
            className="mt-0.5 flex-shrink-0"
            src="/assets/carbon_location.png"
            alt="Location icon"
          />
          <p className="leading-relaxed line-clamp-2">{event.location}</p>
        </div>
        <div className="flex gap-2 items-start">
          <Image
            width={16}
            height={16}
            className="mt-0.5 flex-shrink-0"
            src="/assets/ph_sparkle-bold.png"
            alt="Created by icon"
          />
          <p className="leading-relaxed">By {event.createdBy}</p>
        </div>
      </CardContent>

      <div className="flex justify-end mt-auto pt-2">
        <CardAction className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-bold text-xs sm:text-sm transition-colors duration-200 touch-target">
          RSVP
        </CardAction>
      </div>
    </Card>
  );
};
