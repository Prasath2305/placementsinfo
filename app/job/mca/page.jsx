"use client";

import { useState, useRef, useEffect } from "react";
import { companiesData } from "../data/MCAcompaniesData";

const mca = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleViewDetails = (company) => {
    setSelectedCompany(company);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDetails = () => {
    setSelectedCompany(null);
    document.body.style.overflow = "auto";
  };

  const jobTypes = [
    "All",
    "Full time",
    "Intern",
    "Intern + Full time",
    "Intern leads to Full time",
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Full time":
        return "text-green-300";
      case "Intern + Full time":
        return "text-blue-300";
      case "Intern":
        return "text-purple-300";
      case "Intern leads to Full time":
        return "text-yellow-300";
      default:
        return "text-gray-100";
    }
  };

  const getTypeBgColor = (type) => {
    switch (type) {
      case "Full time":
        return "bg-green-900";
      case "Intern + Full time":
        return "bg-blue-900";
      case "Intern":
        return "bg-purple-900";
      case "Intern leads to Full time":
        return "bg-yellow-900";
      default:
        return "bg-gray-800";
    }
  };

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch =
      company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ctc.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "All" || company.type === selectedType;

    return matchesSearch && matchesType;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-6 sm:pt-2">
        <h1 className="text-3xl pb-2 text-center md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Placements Information - MCA
        </h1>

        {/* Search and Filter Bar */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search companies, positions, types, or CTC..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full sm:w-60" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex justify-between items-center bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedType !== "All"
                    ? getTypeColor(selectedType)
                    : "text-gray-100"
                }`}
              >
                {selectedType}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${
                        type === selectedType ? getTypeBgColor(type) : ""
                      } ${getTypeColor(type)}`}
                      onClick={() => {
                        setSelectedType(type);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-4">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-gray-800 rounded-lg border border-gray-700 p-4 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-blue-300">
                    {company.company}
                  </h3>
                  <p className="text-sm text-gray-300">{company.title}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    company.type === "Full time"
                      ? "bg-green-900 text-green-300"
                      : company.type === "Intern + Full time"
                      ? "bg-blue-900 text-blue-300"
                      : company.type === "Intern"
                      ? "bg-purple-900 text-purple-300"
                      : company.type === "Intern leads to Full time"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-blue-900 text-blue-300"
                  }`}
                >
                  {company.type}
                </span>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-semibold text-blue-300 text-sm sm:text-base">
                  {company.ctc}
                </span>
                <button
                  onClick={() => handleViewDetails(company)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-md transition-colors shadow-md"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-700 shadow-2xl">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="w-12 px-2 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  #
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="w-40 px-4 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="w-32 px-4 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  CTC
                </th>
                <th className="w-32 px-4 py-4 text-left text-sm font-medium text-blue-300 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredCompanies.map((company, index) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-750 transition-colors"
                >
                  <td className="px-2 py-4 whitespace-nowrap text-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap font-medium max-w-xs truncate">
                    {company.company}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap max-w-xs truncate">
                    {company.title}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        company.type === "Full time"
                          ? "bg-green-900 text-green-300"
                          : company.type === "Intern + Full time"
                          ? "bg-blue-900 text-blue-300"
                          : company.type === "Intern"
                          ? "bg-purple-900 text-purple-300"
                          : company.type === "Intern leads to Full time"
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-blue-900 text-blue-300"
                      }`}
                    >
                      {company.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap font-semibold text-blue-300">
                    {company.ctc}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewDetails(company)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-md transition-colors shadow-md text-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Company Details Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300">
                {selectedCompany.company}
              </h2>
              <button
                onClick={handleCloseDetails}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    Position
                  </h3>
                  <p className="text-sm sm:text-base">
                    {selectedCompany.title}
                  </p>
                </div>
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    Job Type
                  </h3>
                  <p className="text-sm sm:text-base">{selectedCompany.type}</p>
                </div>
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    CTC Package
                  </h3>
                  <p className="text-sm sm:text-base">{selectedCompany.ctc}</p>
                </div>
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    Eligibility
                  </h3>
                  <p className="text-sm sm:text-base">
                    {selectedCompany.eligibility || "Not specified"}
                  </p>
                </div>
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    Company Website
                  </h3>
                  {selectedCompany.website ? (
                    <a
                      href={selectedCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-400 underline"
                    >
                      {selectedCompany.website}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base">Not specified</p>
                  )}
                </div>
                <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                    Hiring Process
                  </h3>
                  <p className="text-sm sm:text-base">
                    {selectedCompany.process || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="bg-gray-750 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-1 sm:mb-2">
                  Job Details
                </h3>
                <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">
                  {selectedCompany.details}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={handleCloseDetails}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors shadow-md text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default mca;