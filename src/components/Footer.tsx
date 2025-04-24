
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Explore<span className="text-accent">ly</span>
            </h3>
            <p className="text-primary-foreground/80 max-w-md">
              Making NYC your classroom by connecting students with real-world learning experiences and career opportunities all around the city.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Features</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Events</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Categories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">info@explorely.app</li>
              <li className="text-primary-foreground/80">NYU Stern School of Business</li>
              <li className="text-primary-foreground/80">New York, NY</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Explorely. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-primary-foreground/60 mr-2">Proudly affiliated with</span>
            <span className="font-semibold text-accent">NYU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
