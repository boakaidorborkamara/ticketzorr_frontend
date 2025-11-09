import { Calendar, FacebookIcon, MapPin, Share, Share2, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button-component";

export default function EventDetail() {
  return (
    <div className="w-full h-full bg-amber-50 flex flex-col space-y-[54px] pb-12 items-center">
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
    <div
      className="w-full h-[548px] bg-black text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backdrop.jpg')" }}
    >
      <div className="flex sm:flex-row items-center justify-center bvg-yellow-200 h-full bg-black/95">
        <div className="flex flex-col items-center md:flex-row gap-x-16">
          <div className="w-[345px] h-[318px] bg-black overflow-hidden rounded-2xl">
            <Image
              src="/flyer.png"
              alt="Event Image"
              width={345}
              height={318}
            />
          </div>
          <div className="flex flex-col space-y-6 w-[639px]">
            <div className="space-y-4.5">
              <h2 className="text-2xl font-bold wrap-break-word w-">
                2025 TIPS FOR MARKETING YOUR FOOD BUSINESS ONLINE
              </h2>
              <div className="flex items-center justify-center bg-white w-[106px] h-[27px] text-[16px] font-semibold text-black p-[10px] rounded-[5px]">
                <span>Upcoming</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex h-fit w-fit gap-2 items-center justify-center">
                <Calendar color="#FC4100" />{" "}
                <span>Sat, Mar 15. 11AM - 1PM</span>
              </div>
              <div className="flex h-fit w-fit gap-2 items-center justify-center">
                <MapPin color="#FC4100" /> <span>Crescendo Foods, Accra</span>
              </div>

              <div className="flex justify-between flex-row gap-4 w-fit">
                <Share2 color="#FC4100" />
                <div className="flex justify-between flex-row gap-4 w-fit">
                  <Share />
                  <FacebookIcon />
                  <X />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDetailTicketInfo = () => {
  return (
    <div className="w-[1304px]  h-[671px] bg-white px-[83px] py-[41px] flex flex-col justify-center rounded-[10px]">
      <h1 className="text-2xl font-bold text-[#FC4100]">Ticket Information</h1>

      {/*table*/}
      <table className="w-full flex flex-col bg-red-4f00 my-12 mx-auto">
        <thead>
          <tr className="px-4 py-2 flex w-full justify-between gbg-green-500">
            <th className="">Ticket</th>

            <th className="">Quantity</th>
          </tr>
        </thead>

        <tbody>
          <tr className="px-4 py-4 fbg-orange-400 border-t-1 border-t-gray-300  flex w-full items-center justify-between">
            <td className="">
              <div>
                <h4>VIP</h4>
                <p className="text-primary font-medium">LRD106.00</p>
              </div>
            </td>

            <td className="border p-0">
              <input
                //value="10"
                type="number"
                name="quantity"
                min="1"
                max="10"
              />
            </td>
          </tr>
          <tr className="px-4 py-4 fbg-orange-400 border-t-1 border-t-gray-300   flex w-full items-center justify-between">
            <td className="">
              <div>
                <h4>VIP</h4>
                <p className="text-primary font-medium">LRD106.00</p>
              </div>
            </td>

            <td className="border p-0">
              <input
                //value="10"
                type="number"
                name="quantity"
                min="1"
                max="10"
              />
            </td>
          </tr>

          <tr className="px-4 py-4 ebg-orange-400 border-t-1 border-t-gray-300   flex w-full items-center justify-between">
            <td className="">
              <div>
                <h4>VIP</h4>
                <p className="text-primary font-medium">LRD106.00</p>
              </div>
            </td>

            <td className="border p-0">
              <input
                //value="10"
                type="number"
                name="quantity"
                min="1"
                max="10"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Button
        name="Request"
        variant="primary"
        className="ml-auto"
        width={300}
      />
    </div>
  );
};

const EventDetails = () => {
  return (
    <div className="w-[1304px]  h-[771px] mt-[27px] bg-white px-[83px] py-[41px] ">
      <h1 className="text-3xl font-bold text-[#FC4100]">Event Details</h1>

      <div className="wrapper for <p> mt-[28px] font-normal text-lg space-y-12">
        <p>
          Join top content marketing experts and leading food influencers for an
          immersive workshop designed to help you create compelling content that
          drives engagement, builds community, and increases sales. 
        </p>
        <div>
          <strong>What You’ll Learn:</strong>
          <p>✅ The secrets to crafting viral food content</p>
          <p>✅ How to tell irresistible brand stories that sell</p>
          <p>
            ✅ Strategies to collaborate with influencers and grow your audience
          </p>
          <p>✅ Practical content creation tips for social media success</p>
        </div>

        <div>
          <strong>🔹 Who Should Attend?</strong>
          <p>
            Food business owners, marketers, influencers, and creatives eager to
            transform their content strategy and build a loyal customer base.
          </p>
        </div>

        <p>
          Don’t miss this opportunity to gain insider knowledge, hands-on
          experience, and industry connections that will take your food brand to
          the next level!
        </p>

        <p>🚀 Reserve your spot today!</p>
      </div>
    </div>
  );
};

const EventDetailVenue = () => {
  return (
    <div className="w-[1304px]  h-[771px] mt-[27px] bg-white px-[83px] py-[41px] ">
      <h1 className="text-2xl font-bold text-[#FC4100]">Event Details</h1>
    </div>
  );
};
const EventDetailGallery = () => {
  return (
    <div className="w-[1304px]  h-[771px] mt-[27px] bg-white px-[83px] py-[41px] ">
      <h1 className="text-2xl font-bold text-[#FC4100]">Event Details</h1>
    </div>
  );
};
