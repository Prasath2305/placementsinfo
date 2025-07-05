import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-8 my-8 mt-20">
      <h1 className="text-2xl md:text-5xl font-bold text-yellow-400 mb-4">⚠️ Unofficial Disclaimer</h1>
      <p className="text-gray-300 mb-3 md:text-4xl text-2xl">
        This website is <strong className="text-white">completely unofficial</strong> and is created by students, for students.
      </p>
      <p className="text-gray-300 mb-3 md:text-4xl text-2xl">
        All the information shared here is based on <strong className="text-white">previous year's placement data</strong>, senior inputs, and publicly available sources.
      </p>
      <p className="text-gray-300 mb-3 md:text-4xl text-2xl">
        While most processes and patterns usually stay the same, <strong className="text-white">some details may differ</strong> depending on the company or year.
      </p>
      <p className="text-gray-300 mb-6 md:text-4xl text-2xl">
        Always double-check with official sources or placement cells before making decisions.
      </p>
      <p className="text-gray-200 mb-6 font-semibold italic">
        This is just a <span className="text-yellow-400">helping hand</span>, not the rulebook. Stay sharp and all the best! 💪
      </p>
      <p className="text-gray-300 md:text-4xl text-2xl">
        Scroll to know more
      </p>
    </div>
  );
};

export default Disclaimer;