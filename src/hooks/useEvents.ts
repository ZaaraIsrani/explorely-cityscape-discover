import { useState } from "react";
import { EventData } from "@/types/events";

const mockEvents: EventData[] = [
  { 
    id: 1, 
    title: "AI in Fashion Design @ Parsons", 
    description: "Learn how AI is transforming fashion design and production.", 
    location: "Parsons School of Design", 
    category: "Fashion Tech", 
    date: "Tomorrow, 6-8pm",
    x: 30,
    y: 40
  },
  { 
    id: 2, 
    title: "Biotech Lab Tour", 
    description: "Visit NYU Langone's research facilities.", 
    location: "NYU Langone", 
    category: "Biotech", 
    date: "Sat, 2-4pm",
    x: 65,
    y: 60 
  },
  { 
    id: 3, 
    title: "FinTech Innovation Workshop", 
    description: "Blockchain and DeFi workshop with industry experts.", 
    location: "Stern School of Business", 
    category: "FinTech", 
    date: "Next Wed, 7pm",
    x: 80,
    y: 25 
  },
  { 
    id: 4, 
    title: "Digital Health Startup Demo", 
    description: "See the latest in healthcare technology.", 
    location: "NYU Health Hub", 
    category: "Digital Health", 
    date: "Sun, 10am-1pm",
    x: 45,
    y: 70 
  },
  { 
    id: 5, 
    title: "Clean Beauty Workshop", 
    description: "Learn about sustainable cosmetics formulation.", 
    location: "Beauty Labs NYC", 
    category: "Beauty & Cosmetics", 
    date: "Every Tue, 12pm",
    x: 20,
    y: 55 
  },
  { 
    id: 6, 
    title: "Full-Stack Engineering Workshop", 
    description: "Learn modern web development practices.", 
    location: "Google NYC", 
    category: "Software Engineering", 
    date: "Next Mon, 2-5pm",
    x: 55,
    y: 35 
  },
  { 
    id: 7, 
    title: "Venture Capital Pitch Day", 
    description: "Present your startup to top VCs.", 
    location: "Union Square Ventures", 
    category: "Venture Capital", 
    date: "Fri, 1-4pm",
    x: 70,
    y: 45 
  },
  { 
    id: 8, 
    title: "Music Industry Networking", 
    description: "Connect with music industry professionals.", 
    location: "Sony Music HQ", 
    category: "Music Business", 
    date: "Thu, 7-9pm",
    x: 25,
    y: 30 
  },
  { 
    id: 9, 
    title: "Digital Marketing Summit", 
    description: "Latest trends in digital marketing.", 
    location: "Marketing Hub NYC", 
    category: "Marketing", 
    date: "Wed, 10am-2pm",
    x: 40,
    y: 50 
  },
  { 
    id: 10, 
    title: "Investment Banking Forum", 
    description: "Learn about career opportunities in IB.", 
    location: "Goldman Sachs", 
    category: "Finance", 
    date: "Tue, 6-8pm",
    x: 85,
    y: 40 
  },
];

export const useEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const filteredEvents = activeCategory === "All" 
    ? mockEvents 
    : mockEvents.filter(event => event.category === activeCategory);

  return {
    events: filteredEvents,
    activeCategory,
    selectedEvent,
    setActiveCategory,
    setSelectedEvent,
    categories: [
      "All",
      "Software Engineering",
      "Finance",
      "Marketing",
      "Music Business",
      "Venture Capital",
      "Fashion Tech",
      "Beauty & Cosmetics",
      "Biotech",
      "Digital Health",
      "FinTech",
      "EdTech",
      "Sustainability",
      "Food Innovation",
      "Media & Entertainment"
    ]
  };
};
