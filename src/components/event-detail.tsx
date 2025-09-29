import { Facebook, FacebookIcon, Share, X } from "lucide-react";

export default function EventDetail() {
  return (
    <div className="w-full h-full">
      {/*event detail card*/}
      <EventDetailHeroCard />
      {/*ticket info*/}
      <EventDetailTicketInfo />
      {/*event detail*/}
      <EventDetails />
      {/*event venue*/}
      <EventDetailVenue />
      {/*EventDetailGallery*/}
      <EventDetailGallery />
    </div>
  );
}

const EventDetailHeroCard = () => {
  return (
    <div className="w-full h-[548px] bg-black text-white">
      <div className="flex sm:flex-row items-center justify-center bvg-yellow-200 h-full">
        <div className="flex flex-col items-start md:flex-row gap-x-16">
          <div className="w-[345px] h-[318px] bg-red-800">image</div>
          <div className="">
            <h2 className="text-2xl font-bold">
              2025 TIPS FOR MARKETING YOUR FOOD BUSINESS ONLINE
            </h2>
            <p>Upcoming</p>
            <p>Event Date</p>
            <p>Event Location</p>
            <div className="flex justify-between w-2xs">
              <Share />
              <FacebookIcon />
              <X />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDetailTicketInfo = () => {
  return <div></div>;
};

const EventDetails = () => {
  return <div></div>;
};

const EventDetailVenue = () => {
  return <div></div>;
};
const EventDetailGallery = () => {
  return <div></div>;
};
