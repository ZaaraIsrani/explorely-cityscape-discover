
import React from "react";
import { EventData } from "@/types/events";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface EventListProps {
  selectedEvent: EventData | null;
}

const EventList: React.FC<EventListProps> = ({ selectedEvent }) => {
  return (
    <div className="mt-6">
      {selectedEvent && (
        <div className="p-4 bg-card rounded-lg shadow-md">
          <h4 className="font-semibold text-lg">{selectedEvent.title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{selectedEvent.location}</p>
          <div className="flex items-center gap-2 text-xs text-accent mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{selectedEvent.date}</span>
          </div>
          <Link to={`/event/${selectedEvent.id}`}>
            <Button variant="default" size="sm" className="w-full">Learn More</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventList;
