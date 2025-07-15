"use client";

import { useState, useRef, useEffect } from "react";
import SpotlightCard  from "../ui components/Spotlightcard";

const JobPage = () => {
  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Details of Jobs
        </h1>
        <p className="text-lg text-center md:text-xl text-gray-300 max-w-4xl mx-auto">
          Click the card to see the jobs listed for the specific Degree.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          <SpotlightCard>
            <h1 className="text-6xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent pt-10">
              BCA
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              General and DS
            </h1>
            <p className="text-2xl text-center md:text-xl text-gray-300 max-w-4xl mx-auto pt-10">
              The Comapnies listed are for both General and Data Science Degree.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <h1 className="text-6xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent pt-10">
              MCA
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              General and GenAI
            </h1>
            <p className="text-2xl text-center md:text-xl text-gray-300 max-w-4xl mx-auto pt-10">
              The Comapnies listed are for both General and Generative AI Degree.
            </p>
          </SpotlightCard>

          <SpotlightCard>
            <h1 className="text-6xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent pt-15">
              MSC ADS
            </h1>
            <p className="text-2xl text-center md:text-xl text-gray-300 max-w-4xl mx-auto pt-10">
              The Comapnies listed are for both General and Generative AI Degree.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default JobPage;