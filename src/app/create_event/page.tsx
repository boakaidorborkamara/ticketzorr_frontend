import { CreateEventForm } from "@/components/create-event-form";

export default function CreateEventPage() {
  return (
    <div className="container-responsive py-8 w-full">
      <h1 className="flex items-center justify-center text-3xl font-bold mb-8 ">
        Create a New Event
      </h1>
      <CreateEventForm />
    </div>
  );
}
