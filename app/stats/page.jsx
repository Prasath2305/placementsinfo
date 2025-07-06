"use client";

import { statsData } from './data/statsData';

const StatsPage = () => {
  const { highestPayingJobs, topHiringCompanies, placementTrends } = statsData;

  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl pb-2 text-center md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Placements Statistics
        </h1>
      <div className="max-w-7xl mx-auto">
        <div className='pb-10'>
          <h1 className='text-2xl md:text-3xl text-center md:text-center pb-6 md:pb-8'>
            I thought the Stats would be good but I didn't expect this too. lol we are <span className='font-extrabold'>COOKED</span> 😭😭😭
          </h1>
          <h2 className='text-lg md:text-xl text-center md:text-center'>
            The Offers includes both UG and PG. I was not able to differentiate between UG and PG as the file doesn't have category based on that. I do believe the actual numbers can get higher or lower based on performance!!! So obviously if we perform well the numbers could go up 🤞
          </h2>
        </div>

        {/* Highest Paying Jobs Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-300 border-b border-gray-700 pb-2">
            Highest Paying Jobs
          </h2>
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-750">
                <tr>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Company</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Position</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">CTC</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider hidden sm:table-cell">Location</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {highestPayingJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base font-medium">{job.company}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base">{job.position}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.type === 'Full time' ? 'bg-green-900 text-green-300' : 
                        'bg-blue-900 text-blue-300'
                      }`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base font-semibold text-green-300">{job.ctc}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base text-gray-400 hidden sm:table-cell">{job.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Hiring Companies Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-300 border-b border-gray-700 pb-2">
            Top Hiring Companies
          </h2>
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-750">
                <tr>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Company</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Offers</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider">Avg CTC</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs md:text-sm font-medium text-blue-300 uppercase tracking-wider hidden md:table-cell">Locations</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {topHiringCompanies.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base font-medium">{company.company}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                      <span className="bg-blue-900 text-blue-300 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        {company.offers} {company.offers === 1 ? 'offer' : 'offers'}
                      </span>
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base font-semibold text-purple-300">{company.avgCtc}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-base text-gray-400 hidden md:table-cell">
                      {company.locations.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsPage;