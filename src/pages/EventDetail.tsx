
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getEventById } from "@/services/eventService";
import { ArrowRight, Map } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = id ? parseInt(id) : 0;
  
  const { data: event, isLoading, error } = useQuery({
    queryKey: ['event', eventId],
    queryFn: () => getEventById(eventId),
    enabled: !!eventId
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <p>Loading event details...</p>
        </div>
      </Layout>
    );
  }

  if (error || !event) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <Link to="/explore">
            <Button>Back to Explore</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/explore" className="text-primary flex items-center gap-2 hover:underline mb-4">
            <Map size={18} />
            <span>Back to map</span>
          </Link>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-foreground">{event.title}</h1>
            <Badge className="ml-auto">{event.category}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-3">About this event</h2>
              <p className="text-muted-foreground mb-6">{event.description}</p>
              
              <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Hands-on experience with industry professionals</li>
                <li>Networking opportunities with peers and mentors</li>
                <li>Practical skills applicable to real-world scenarios</li>
                <li>Insights into career paths and opportunities</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Location</h3>
                <p className="font-medium">{event.location}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Date & Time</h3>
                <p className="font-medium">{event.date}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Category</h3>
                <p className="font-medium">{event.category}</p>
              </div>
              
              <Button className="w-full mt-4 flex items-center justify-center gap-2">
                <span>Register for Event</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
