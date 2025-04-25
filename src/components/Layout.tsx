
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${fullWidth ? '' : 'container mx-auto px-4'} pt-24 pb-12`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
