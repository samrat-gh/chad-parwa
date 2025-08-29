"use client";

import DashainCounter from "./dashain-counter";
import DhunPlayer from "./dhun-player";

import FlyingKites from "./flying-kites";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/26612880/pexels-photo-26612880.jpeg')",
        }}
      />

      {/* Flying Kites Animation */}
      <FlyingKites />

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold text-red-800 md:text-8xl">
          दशैं
        </h1>
        <h2 className="mb-4 text-2xl font-medium text-orange-700 md:text-4xl">
          Dashain Festival
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
          The Greatest Festival of Nepal - Celebrating Victory of Good over Evil
        </p>
        <DashainCounter />
      </div>
      <DhunPlayer />
    </section>
  );
};

export default HeroSection;
