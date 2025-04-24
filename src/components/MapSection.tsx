
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

// Define mock event data for the map pins
interface EventData {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  date: string;
  x: number;
  y: number;
}

const MapSection: React.FC = () => {
  const categories = ["All", "Tech", "Creative", "Business", "Social Impact", "Wellness"];
  const [activeCategory, setActiveCategory] = useState("All");

  const mockEvents: EventData[] = [
    { 
      id: 1, 
      title: "Tech Meetup @ Google", 
      description: "Network with Google engineers and learn about their work.", 
      location: "Chelsea Market", 
      category: "Tech", 
      date: "Tomorrow, 6-8pm",
      x: 30,
      y: 40
    },
    { 
      id: 2, 
      title: "Design Workshop", 
      description: "Hands-on UI/UX workshop with industry professionals.", 
      location: "NYU Tisch", 
      category: "Creative", 
      date: "Sat, 2-4pm",
      x: 65,
      y: 60 
    },
    { 
      id: 3, 
      title: "Startup Pitch Night", 
      description: "Watch NYU entrepreneurs pitch their startups.", 
      location: "Stern School of Business", 
      category: "Business", 
      date: "Next Wed, 7pm",
      x: 80,
      y: 25 
    },
    { 
      id: 4, 
      title: "Community Garden Volunteer", 
      description: "Help maintain a local community garden.", 
      location: "Washington Square Park", 
      category: "Social Impact", 
      date: "Sun, 10am-1pm",
      x: 45,
      y: 70 
    },
    { 
      id: 5, 
      title: "Meditation Session", 
      description: "Guided meditation for stress relief.", 
      location: "NYU Global Center", 
      category: "Wellness", 
      date: "Every Tue, 12pm",
      x: 20,
      y: 55 
    },
  ];
  
  // Filter events based on active category
  const filteredEvents = activeCategory === "All" 
    ? mockEvents 
    : mockEvents.filter(event => event.category === activeCategory);
  
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  
  return (
    <section id="features" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Opportunities Around You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorely maps out events, workshops, and experiences that match your interests—all across NYC.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            {selectedEvent && (
              <div className="mt-8 p-4 bg-card rounded-lg shadow-md">
                <h4 className="font-semibold text-lg">{selectedEvent.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{selectedEvent.location}</p>
                <p className="text-sm mb-3">{selectedEvent.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>{selectedEvent.date}</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:w-3/4 relative">
            {/* Map mockup */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3] relative">
              {/* Mock map background */}
              <div className="absolute inset-0 bg-[#e8f0f7]" style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0d4e4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}>
                {/* Major streets on the map */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  <div className="border-b border-blue-200/50 col-span-6"></div>
                  <div className="border-b border-blue-200/50 col-span-6"></div>
                  <div className="border-b border-blue-200/50 col-span-6"></div>
                  <div className="border-b border-blue-200/50 col-span-6"></div>
                  <div className="border-b border-blue-200/50 col-span-6"></div>
                </div>
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  <div className="border-r border-blue-200/50 row-span-6"></div>
                  <div className="border-r border-blue-200/50 row-span-6"></div>
                  <div className="border-r border-blue-200/50 row-span-6"></div>
                  <div className="border-r border-blue-200/50 row-span-6"></div>
                  <div className="border-r border-blue-200/50 row-span-6"></div>
                </div>
              </div>
              
              {/* Event pins */}
              {filteredEvents.map((event) => (
                <button
                  key={event.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all ${
                    selectedEvent?.id === event.id ? "scale-125 z-20" : "hover:scale-110"
                  }`}
                  style={{ left: `${event.x}%`, top: `${event.y}%` }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className={`
                        ${event.category === "Tech" ? "text-blue-500" : ""}
                        ${event.category === "Creative" ? "text-purple-500" : ""}
                        ${event.category === "Business" ? "text-amber-500" : ""}
                        ${event.category === "Social Impact" ? "text-green-500" : ""}
                        ${event.category === "Wellness" ? "text-rose-400" : ""}
                      `}
                    >
                      <path
                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                        fill="currentColor"
                        stroke="white"
                        strokeWidth="2"
                      ></path>
                      <circle cx="12" cy="10" r="3" fill="white"></circle>
                    </svg>
                    <div className={`
                      absolute top-[-40px] left-1/2 transform -translate-x-1/2 min-w-[150px] max-w-[200px]
                      bg-white p-2 rounded shadow-lg text-start
                      transition-opacity duration-200
                      ${selectedEvent?.id === event.id ? "opacity-100" : "opacity-0 pointer-events-none"}
                    `}>
                      <p className="font-medium text-sm truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                </button>
              ))}
              
              {/* Map controls mockup */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="bg-white rounded-md p-1 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
                <button className="bg-white rounded-md p-1 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
              </div>
              
              {/* Location marker */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs font-medium">Your Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
