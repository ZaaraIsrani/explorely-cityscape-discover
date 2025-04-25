
import { EventData } from "@/types/events";
import { eventsData } from "@/data/eventsData";

export const getAllEvents = (): Promise<EventData[]> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(eventsData);
    }, 300);
  });
};

export const getEventById = (id: number): Promise<EventData | undefined> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const event = eventsData.find(event => event.id === id);
      resolve(event);
    }, 300);
  });
};

export const getEventsByCategory = (category: string): Promise<EventData[]> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      if (category === "All") {
        resolve(eventsData);
      } else {
        const filteredEvents = eventsData.filter(event => event.category === category);
        resolve(filteredEvents);
      }
    }, 300);
  });
};
