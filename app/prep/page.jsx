"use client";

import Link from "next/link";

const PreparationPage = () => {
  const topics = [
    {
      name: "Data Structures",
      resources: [
        "Arrays",
        "Linked Lists",
        "Stacks & Queues",
        "Trees",
        "Graphs",
        "Hash Tables",
      ],
    },
    {
      name: "Algorithms",
      resources: [
        "Sorting",
        "Searching",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Backtracking",
        "Divide & Conquer",
      ],
    },
    {
      name: "System Design",
      resources: [
        "Scalability",
        "Databases",
        "Caching",
        "APIs",
        "Load Balancing",
        "Microservices",
      ],
    },
    {
      name: "Behavioral",
      resources: [
        "STAR Method",
        "Common Questions",
        "Resume Discussion",
        "Project Deep Dives",
        "Company Research",
      ],
    },
  ];

  const companies = [
    {
      name: "FAANG",
      prep: ["Leetcode Hard", "System Design", "Behavioral Interviews"],
    },
    {
      name: "Startups",
      prep: ["Practical Coding", "Product Thinking", "Culture Fit"],
    },
    {
      name: "Finance",
      prep: ["Math Puzzles", "Algorithms", "Low Latency Systems"],
    },
    {
      name: "Consulting",
      prep: ["Case Studies", "Guesstimates", "Business Acumen"],
    },
  ];

  const resources = [
    {
      name: "Leetcode",
      url: "https://leetcode.com",
      category: "Coding Practice",
    },
    {
      name: "Neetcode",
      url: "https://neetcode.io",
      category: "Coding Practice",
    },
    {
      name: "Design Gurus",
      url: "https://www.educative.io",
      category: "System Design",
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org",
      category: "Interview Experiences",
    },
    {
      name: "InterviewBit",
      url: "https://www.interviewbit.com",
      category: "Coding Practice",
    },
    {
      name: "Pramp",
      url: "https://www.pramp.com",
      category: "Mock Interviews",
    },
  ];

  const aptitudeTopics = [
    {
      category: "Quantitative Aptitude",
      topics: [
        "Number Systems",
        "Percentages",
        "Profit & Loss",
        "Ratio & Proportion",
        "Time & Work",
        "Time, Speed & Distance",
      ],
    },
    {
      category: "Logical Reasoning",
      topics: [
        "Blood Relations",
        "Coding-Decoding",
        "Direction Sense",
        "Puzzles",
        "Seating Arrangement",
        "Syllogisms",
      ],
    },
    {
      category: "Verbal Ability",
      topics: [
        "Comprehension",
        "Error Detection",
        "Para Jumbles",
        "Sentence Completion",
        "Synonyms & Antonyms",
        "Word Analogies",
      ],
    },
  ];

  const aptitudeResources = [
    {
      name: "IndiaBIX",
      url: "https://www.indiabix.com",
      description: "Comprehensive aptitude practice",
    },
    {
      name: "Aptitude Test Tricks",
      url: "https://www.aptitudetests.org",
      description: "Shortcut methods",
    },
    {
      name: "GeeksforGeeks Aptitude",
      url: "https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/",
      description: "Company-wise patterns",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Placement Preparation Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to crack your dream job - coding, aptitude,
            system design, and more.
          </p>
        </div>

        {/* Aptitude Section - Added this new section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pink-300 border-b border-gray-700 pb-2">
            Aptitude Preparation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {aptitudeTopics.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-400 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-pink-300">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-pink-400 mr-2">•</span>
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-pink-300">
              Aptitude Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aptitudeResources.map((resource, index) => (
                <Link
                  href={resource.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-pink-400 transition-all group"
                >
                  <h4 className="text-lg font-semibold mb-1 text-pink-300 group-hover:text-pink-400 transition-colors">
                    {resource.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Core Topics Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-300 border-b border-gray-700 pb-2">
            Core Preparation Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  {topic.name}
                </h3>
                <ul className="space-y-2">
                  {topic.resources.map((resource, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Company Specific Prep */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-300 border-b border-gray-700 pb-2">
            Company-Specific Preparation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-3 text-purple-300">
                    {company.name}
                  </h3>
                  <ul className="space-y-2">
                    {company.prep.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">▹</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-300 border-b border-gray-700 pb-2">
            Recommended Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Link
                href={resource.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-green-400 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold mb-2 text-green-300 group-hover:text-green-400 transition-colors">
                    {resource.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    {resource.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{resource.url}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-300 border-b border-gray-700 pb-2">
            Resume & Portfolio Guidance
          </h2>

          {/* Resume Tips */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-10">
            <h3 className="text-xl font-semibold mb-6 text-cyan-300">
              Resume Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-200">Do's</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span>
                      Keep it 1 page (max 2 pages for experienced candidates)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span>Use action verbs ("Built", "Led", "Optimized")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span>
                      Quantify achievements ("Improved performance by 40%")
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span>Tailor for each job application</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-200">
                  Don'ts
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">✗</span>
                    <span>
                      Don't include photos or personal details like age
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">✗</span>
                    <span>
                      Avoid generic objectives ("Seeking challenging position")
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">✗</span>
                    <span>Don't list every technology you've briefly used</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">✗</span>
                    <span>No spelling/grammar mistakes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Portfolio Guidance */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-10">
            <h3 className="text-xl font-semibold mb-6 text-cyan-300">
              Portfolio Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-200">
                  Essential Elements
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">★</span>
                    <span>3-5 best projects (quality over quantity)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">★</span>
                    <span>Live demos or screenshots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">★</span>
                    <span>Clear problem statements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">★</span>
                    <span>Technical challenges overcome</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-200">
                  Platforms
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">→</span>
                    <span>
                      <strong>GitHub:</strong> Clean, documented code with
                      READMEs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">→</span>
                    <span>
                      <strong>Personal Website:</strong> Showcase projects
                      visually
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">→</span>
                    <span>
                      <strong>LinkedIn:</strong> Professional profile with media
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">→</span>
                    <span>
                      <strong>Behance/Dribbble:</strong> For design portfolios
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools & Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-cyan-300">
              Tools & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="https://resume.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-cyan-400 transition-all group"
              >
                <h4 className="text-lg font-semibold mb-1 text-cyan-300 group-hover:text-cyan-400">
                  Resume.io
                </h4>
                <p className="text-gray-400 text-sm">Templates and builder</p>
              </Link>
              <Link
                href="https://standardresume.co"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-cyan-400 transition-all group"
              >
                <h4 className="text-lg font-semibold mb-1 text-cyan-300 group-hover:text-cyan-400">
                  Standard Resume
                </h4>
                <p className="text-gray-400 text-sm">ATS-friendly builder</p>
              </Link>
              <Link
                href="https://readme.so"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-cyan-400 transition-all group"
              >
                <h4 className="text-lg font-semibold mb-1 text-cyan-300 group-hover:text-cyan-400">
                  Readme.so
                </h4>
                <p className="text-gray-400 text-sm">
                  Project documentation tool
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-300 border-b border-gray-700 pb-2">
            Pro Tips from Seniors
          </h2>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                  Interview Process
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      Start with easy problems and gradually move to harder ones
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      Practice explaining your thought process out loud
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      Do mock interviews with friends to get comfortable
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                  During Interviews
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      Always clarify requirements before jumping to solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      Think edge cases and discuss them with interviewer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span>
                      If stuck, talk through what you know and ask for hints
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Group Section */}
        <section className="mb-16 mt-10">
          <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-xl p-6 border border-green-500 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Join the Placements Info Group
                </h2>
                <p className="text-green-100 mb-4 md:mb-0">
                  Get real-time updates, peer support, and exclusive resources
                  in our WhatsApp group
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="https://chat.whatsapp.com/FZbbMUmh58F5CGhbSZ0yV7?mode=ac_t" // Replace with your actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-green-100 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545 1.422 1.656 4.762 1.956 5.658.056.186.112.275.168.275s.112-.028.28-.112c1.29-.658 2.121-1.374 2.828-2.261.224-.28.224-.28.448-.28.112 0 .224 0 .336.14.112.14.616.7.95 1.122.28.364.56.688.616.688.056 0 .112-.056.168-.168.056-.112.28-.7.392-1.006.112-.308.168-.308.28-.308.112 0 .224.028.336.084.112.056.28.252.448.42.392.392.84.868.84 1.258 0 .392-.392.756-.616.98-.28.28-.56.476-.896.7-.336.224-.616.364-.616.476s.168.252.28.364c.112.112.616.616 1.288.616.56 0 1.12-.392 1.652-1.176.476-.7 1.176-2.211 1.176-3.412 0-1.372-1.064-2.607-2.156-3.5-.56-.448-1.232-.812-1.96-1.036-.168-.056-.392-.112-.56-.112-.168 0-.392.028-.504.14-.112.112-.448.448-.616.616-.168.168-.308.252-.448.252-.056 0-.168-.028-.28-.084" />
                  </svg> */}
                  <img src="/whatsapp.svg" alt="icon" className="w-6 h-6 mr-2" />
                  Join WhatsApp Group
                </Link>
              </div>
            </div>

            {/* Group Rules */}
            <div className="mt-6 pt-6 border-t border-green-400">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Group Rules:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-green-100 text-sm">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>No spam or off-topic messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Keep discussions relevant to placements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Be respectful to all members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>No job postings without admin approval</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreparationPage;
