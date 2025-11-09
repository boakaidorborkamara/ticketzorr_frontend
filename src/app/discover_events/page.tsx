"use client";
import { useState } from "react";
import { EventCardComponent } from "@/components/ui/event-card";
// import { ArrowRightCircle } from "lucide-react";
// import Link from "next/link";
import { DiscoverEventFilter } from "@/components/discover-event-filter";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const allEvents = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `Event ${i + 1}`,
  date: `Sunday, January ${i + 1}, 2023 - 06:00 PM`,
  location: "Central Park, Paynesville, Liberia",
  createdBy: "Life Nation",
  image: "/event-placeholder.png",
  category:
    i % 4 === 0
      ? "Music"
      : i % 4 === 1
        ? "Sports"
        : i % 4 === 2
          ? "Arts"
          : "Food",
}));

export default function DiscoveryEventSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleDateChange = (value: string) => {
    setDate(value);
    setCurrentPage(1);
  };

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = category ? event.category === category : true;
    // Date filtering logic would be more complex, this is a simple placeholder
    const matchesDate = date ? true : true;
    return matchesSearch && matchesCategory && matchesDate;
  });

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="w-full h-full lg:min-h-[954px] bg-primary-foreground m-auto">
      <div className="wrapper p-6 md:p-10 lg:p-28 flex flex-col">
        {/* heading title */}
        <div className="heading-row flex flex-row justify-between items-center mb-8">
          <h1 className="headin-title font-bold text-3xl md:text-5xl">
            Discover <span className="text-primary">Popular Events</span>
          </h1>
        </div>

        <DiscoverEventFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          category={category}
          handleCategoryChange={handleCategoryChange}
          date={date}
          handleDateChange={handleDateChange}
        />

        <EventListComponent events={currentEvents} />

        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={i + 1 === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

const EventListComponent = ({ events }: { events: [] }) => {
  return (
    <div className="w-full overflow-auto mt-8">
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {events.map((event, i) => (
          <EventCardComponent key={i} event={event} />
        ))}
      </div>
    </div>
  );
};
