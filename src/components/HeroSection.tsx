
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* NYC Skyline background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=2071")',
          filter: 'brightness(0.6) saturate(0.8) contrast(0.9)'
        }}
      >
        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center">
            <span className="text-primary">Explore</span>
            <span className="text-black">ly</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/90 mb-8 font-medium drop-shadow-md text-center">
            Discover local events and micro-career experiences—all around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
              Explore Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg">
              How It Works
            </Button>
          </div>
          
          {/* Scroll indicator - now directly below buttons */}
          <div className="flex flex-col items-center mx-auto text-center w-full">
            <span className="text-black text-sm mb-2 font-medium">Scroll to discover</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-black mx-auto"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

