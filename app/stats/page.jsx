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
      </div>
    </div>
  );
};

export default StatsPage;