import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

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
  const categories = [
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
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");

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
  
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  
  const filteredEvents = activeCategory === "All" 
    ? mockEvents 
    : mockEvents.filter(event => event.category === activeCategory);
  
  return (
    <section id="features" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Discover Opportunities Around You</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Find hyper-specific events and experiences that match your interests—across every NYC neighborhood.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-primary">Filter by Category</h3>
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden aspect-[4/3] relative">
              <div className="absolute inset-0" style={{ 
                backgroundColor: '#f8f9fa',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23f1f3f5'/%3E%3Cpath d='M10 10h80v80H10z' fill='%23e9ecef'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px',
              }}>
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF]/20 via-[#FDE1D3]/20 to-[#D3E4FD]/20"></div>
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="border-b border-[#d1e8f5]/40"></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="border-r border-[#d1e8f5]/40"></div>
                    ))}
                  </div>
                </div>
              </div>
              
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
                        ${event.category === "Software Engineering" ? "text-blue-500" : ""}
                        ${event.category === "Finance" ? "text-green-500" : ""}
                        ${event.category === "Marketing" ? "text-purple-500" : ""}
                        ${event.category === "Music Business" ? "text-pink-500" : ""}
                        ${event.category === "Venture Capital" ? "text-amber-500" : ""}
                        ${event.category === "Fashion Tech" ? "text-rose-500" : ""}
                        ${event.category === "Beauty & Cosmetics" ? "text-violet-500" : ""}
                        ${event.category === "Biotech" ? "text-emerald-500" : ""}
                        ${event.category === "Digital Health" ? "text-cyan-500" : ""}
                        ${event.category === "FinTech" ? "text-orange-500" : ""}
                        ${event.category === "EdTech" ? "text-indigo-500" : ""}
                        ${event.category === "Sustainability" ? "text-teal-500" : ""}
                        ${event.category === "Food Innovation" ? "text-yellow-500" : ""}
                        ${event.category === "Media & Entertainment" ? "text-fuchsia-500" : ""}
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
