"use client";

import Hero from "../components/hero"; 
import Features from "../components/featuresection";

export default function HomePage() {
    return (
      <div className="bg-black">
    <Hero/>
    <Features/>
    </div>
  );
}