
import React from "react";
import Navbar from "@/components/Navbar";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const Explore = () => {
  return (
    <Layout fullWidth>
      <div className="container mx-auto px-4">
        <MapSection />
      </div>
    </Layout>
  );
};

export default Explore;
