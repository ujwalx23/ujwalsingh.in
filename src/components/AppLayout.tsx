import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AIHelperBot } from "@/components/AIHelperBot";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="bg-orb-1 opacity-20 pointer-events-none fixed" />
      <div className="bg-orb-2 opacity-15 pointer-events-none fixed" />
      <div className="bg-orb-3 opacity-15 pointer-events-none fixed" />

      {/* Responsive Navigation Bar */}
      <Navbar />
      
      {/* Main content viewport */}
      <main className="flex-1 flex flex-col min-h-screen relative z-10 w-full pt-20 pb-24 md:pt-28 md:pb-6 px-4 sm:px-6 lg:px-8">
        <div key={location.pathname} className="flex-1 w-full fade-in-up">
          <Outlet />
        </div>
        <Footer />
      </main>
      
      {/* Floating AI Helper */}
      <AIHelperBot />
    </div>
  );
}
