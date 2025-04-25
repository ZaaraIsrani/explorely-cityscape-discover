
import React from "react";
import CategoryFilter from "./CategoryFilter";
import MapComponent from "./MapComponent";
import EventList from "./EventList";
import { useEvents } from "@/hooks/useEvents";

const MapSection: React.FC = () => {
  const { 
    events, 
    activeCategory, 
    selectedEvent, 
    setActiveCategory, 
    setSelectedEvent,
    categories 
  } = useEvents();
  
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
          <div className="lg:w-1/4 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Filter by Category</h3>
              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            
            <EventList selectedEvent={selectedEvent} />
          </div>
          
          <div className="lg:w-3/4">
            <MapComponent events={events} onEventSelect={setSelectedEvent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

