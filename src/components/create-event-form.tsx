"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button-component";
import { Label } from "./ui/label";

export function CreateEventForm() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      eventCategory,
      ticketPrice,
      numberOfTickets,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:w-lg m-auto h-screen">
      <div className="space-y-2">
        <Label htmlFor="event-title">Event Title</Label>
        <Input
          id="event-title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Enter the title of your event"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="event-description">Event Description</Label>
        <textarea
          id="event-description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Describe your event"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="event-date">Event Date</Label>
          <Input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-time">Event Time</Label>
          <Input
            id="event-time"
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="event-location">Event Location</Label>
        <Input
          id="event-location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          placeholder="Enter the location of your event"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="event-category">Event Category</Label>
        <Input
          id="event-category"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value)}
          placeholder="e.g., Music, Sports, Technology"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="ticket-price">Ticket Price</Label>
          <Input
            id="ticket-price"
            type="number"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            placeholder="Enter the price per ticket"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="number-of-tickets">Number of Tickets</Label>
          <Input
            id="number-of-tickets"
            type="number"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(e.target.value)}
            placeholder="Enter the total number of tickets available"
          />
        </div>
      </div>
      <Button
        variant="primary"
        name="Create Event"
        type="submit"
        className="w-full"
      />
    </form>
  );
}
