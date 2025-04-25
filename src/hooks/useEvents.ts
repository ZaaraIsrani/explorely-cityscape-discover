
import { useState } from "react";
import { EventData } from "@/types/events";
import { getAllEvents, getEventsByCategory } from "@/services/eventService";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events', activeCategory],
    queryFn: () => activeCategory === "All" ? getAllEvents() : getEventsByCategory(activeCategory)
  });

  const categories = [
    "All",
    "Tech",
    "Business",
    "Media",
    "Creativity",
    "Social Impact",
    "Fashion Tech",
    "Beauty & Cosmetics",
    "Biotech",
    "Digital Health",
    "FinTech",
    "Cosmetics",
  ];

  return {
    events,
    activeCategory,
    selectedEvent,
    setActiveCategory,
    setSelectedEvent,
    categories,
    isLoading
  };
};
