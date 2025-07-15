// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import SpotlightCard from "../ui components/Spotlightcard";

// const JobPage = () => {
//   const router = useRouter();

//   const handleCardClick = (path) => {
//     router.push(`/job/${path}`);
//   };

//   return (
//     <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             Details of Jobs
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center">
//             Click the card to see the jobs listed for the specific Degree.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
//           <div 
//             onClick={() => handleCardClick("ug")} 
//             className="cursor-pointer"
//           >
//             <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.65)">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   BCA
//                 </h1>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   General and DS
//                 </h2>
//                 <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
//                   The Companies listed are for both General and Data Science Degree.
//                 </p>
//               </div>
//             </SpotlightCard>
//           </div>

//           <div 
//             onClick={() => handleCardClick("mca")} 
//             className="cursor-pointer"
//           >
//             <SpotlightCard spotlightColor="rgba(34, 211, 238)">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   MCA
//                 </h1>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   General and GenAI
//                 </h2>
//                 <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
//                   The Companies listed are for both General and Generative AI Degree.
//                 </p>
//               </div>
//             </SpotlightCard>
//           </div>

//           <div 
//             onClick={() => handleCardClick("mscads")} 
//             className="cursor-pointer"
//           >
//             <SpotlightCard spotlightColor="rgba(236, 72, 153, 0.75)">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                   MSC ADS
//                 </h1>
//                 <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
//                   The Companies listed are for Data Science.
//                 </p>
//               </div>
//             </SpotlightCard>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobPage;



"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import SpotlightCard from "../ui components/Spotlightcard";

const JobPage = () => {
  const router = useRouter();

  const handleCardClick = (path) => {
    router.push(`/job/${path}`);
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Details of Jobs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center">
            Click the card to see the jobs listed for the specific Degree.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          <div 
            onClick={() => handleCardClick("ug")} 
            className="cursor-pointer h-full"
          >
            <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.65)" className="h-full">
              <div className="p-6 flex flex-col items-center h-full">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  BCA
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  General and DS
                </h2>
                <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
                  The Companies listed are for both General and Data Science Degree.
                </p>
              </div>
            </SpotlightCard>
          </div>

          <div 
            onClick={() => handleCardClick("mca")} 
            className="cursor-pointer h-full"
          >
            <SpotlightCard spotlightColor="rgba(34, 211, 238)" className="h-full">
              <div className="p-6 flex flex-col items-center h-full">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  MCA
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  General and GenAI
                </h2>
                <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
                  The Companies listed are for both General and Generative AI Degree.
                </p>
              </div>
            </SpotlightCard>
          </div>

          <div 
            onClick={() => handleCardClick("mscads")} 
            className="cursor-pointer h-full"
          >
            <SpotlightCard spotlightColor="rgba(236, 72, 153, 0.75)" className="h-full">
              <div className="p-6 flex flex-col items-center h-full">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  MSC ADS
                </h1>
                <p className="text-base sm:text-lg text-gray-300 text-center mt-auto">
                  The Companies listed are for Data Science.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;