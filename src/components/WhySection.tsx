
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WhySection: React.FC = () => {
  const features = [
    {
      title: "Discover Hidden Gems",
      description: "Find opportunities and events that aren't advertised through regular channels.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
    {
      title: "Low-Pressure Exploration",
      description: "Try out different industries without the commitment of a job or internship.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <circle cx="10" cy="13" r="2"></circle>
          <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"></path>
        </svg>
      ),
    },
    {
      title: "Real-time Updates",
      description: "See events as they're happening near you, perfect for spontaneous learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="whyus" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Explorely?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At NYU Stern, the focus is often on investment banking and consulting. Explorely helps students break out of that mold—offering visibility into diverse paths and hands-on experiences across NYC.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Expand Your Horizons</h3>
              <p className="mb-4">
                Traditional university career paths often limit students to a handful of industries. Explorely breaks these boundaries by showing you the full range of possibilities right in your city.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm">Networking Events</span>
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm">Workshops</span>
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm">Guest Lectures</span>
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm">Industry Panels</span>
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm">Hackathons</span>
              </div>
            </div>
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-accent rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Students collaborating" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
