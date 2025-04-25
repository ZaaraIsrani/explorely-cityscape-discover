
import React from "react";
import Navbar from "@/components/Navbar";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Explore = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <MapSection />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
