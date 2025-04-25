
import React from "react";
import EventDetails from "./EventDetails";
import { EventData } from "@/types/events";

interface EventListProps {
  selectedEvent: EventData | null;
}

const EventList: React.FC<EventListProps> = ({ selectedEvent }) => {
  return (
    <div className="mt-6">
      {selectedEvent && <EventDetails event={selectedEvent} />}
    </div>
  );
};

export default EventList;

