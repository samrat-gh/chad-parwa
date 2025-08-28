"use client";

import DashainCounter from "./dashain-counter";
import DhunPlayer from "./dhun-player";
import Dhun from "./dhun-player";
import FlyingKites from "./flying-kites";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566139149-a05e3fef2db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Flying Kites Animation */}
      <FlyingKites />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-red-800 mb-6">
          दशैं
        </h1>
        <h2 className="text-2xl md:text-4xl text-orange-700 mb-4 font-medium">
          Dashain Festival
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          The Greatest Festival of Nepal - Celebrating Victory of Good over Evil
        </p>
        <DashainCounter />
      </div>
      <DhunPlayer />
    </section>
  );
};

export default HeroSection;
