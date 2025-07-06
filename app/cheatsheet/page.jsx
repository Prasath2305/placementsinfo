import { FiExternalLink, FiGithub, FiFileText, FiDatabase, FiCode, FiBookmark } from 'react-icons/fi';

const CheatsheetPage = () => {
  // Sample data - replace with your actual data
  const categories = [
    {
      name: 'Websites',
      icon: <FiExternalLink className="text-blue-400" size={24} />,
      items: [
        { name: 'TUF - Take You Forward', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', description: 'DSA Course Sheet' },
        { name: 'CSES Problem Set', url: 'https://cses.fi/problemset/', description: 'Numerous Problem on All Topics' },
        { name: 'Hackerrank', url: 'https://www.hackerrank.com/', description: 'Versatile Language Problems Solving Platform' },
      ],
    },
    {
      name: 'Excel',
      icon: <FiFileText className="text-green-400" size={24} />,
      items: [
        { name: 'DSA Sheet', url: 'https://docs.google.com/spreadsheets/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/edit#gid=0', description: 'Easy to Hard Cheat Sheet' },
        { name: 'Curious Freaks Coing Sheet', url: 'https://docs.google.com/spreadsheets/u/0/d/1P3RXgZju_2OzZyJaRtu6D3Kx-Eks38X09_zJ8aj2zy8/htmlview#gid=0', description: 'Cheatsheet for Begginer to Pro' },
      ],
    },
    {
      name: 'Notion',
      icon: <FiDatabase className="text-purple-400" size={24} />,
      items: [
        { name: 'DSA Full Topics', url: 'https://utkarsh575.notion.site/utkarsh575/DSA-full-topics-02a52bd172204069bfa021309961e1e0', description: 'Collection of DSA Topics' },
      ],
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="text-gray-300" size={24} />,
      items: [
        { name: 'DSA in CPP', url: 'https://shivamkachhadiya.github.io/DSA_IN_CPP/', description: '90+ DSA Problems Solved' },
      ],
    },
    {
      name: 'Programming',
      icon: <FiCode className="text-red-400" size={24} />,
      items: [
        { name: 'Java', url: 'https://www.w3schools.com/java/', description: 'Learn Java' },
        { name: 'Python', url: 'https://www.w3schools.com/python/', description: 'Python Guide From Basics' },
        { name: 'SQL', url: 'https://www.w3schools.com/sql/', description: 'Master SQL' },
      ],
    },
    {
      name: 'Miscellaneous',
      icon: <FiBookmark className="text-yellow-400" size={24} />,
      items: [
        { name: 'Figma Design Resources', url: 'https://www.figma.com/community/design-templates', description: 'Level Up Your Designing Skills' },
        { name: 'Staying Fun', url: 'https://staying.fun/en', description: 'Visualize Your Code For Better Understanding' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">The Ultimate Cheatsheet Collection</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          All the resources organized in one place. Quickly access websites, tools, and references.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-800">
            <div className="p-5">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-xl font-semibold ml-3 text-white">{category.name}</h2>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="group">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                          {item.name}
                          <FiExternalLink className="inline ml-1 text-gray-500" size={14} />
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mt-1">Bookmark this page for quick access to all your resources</p>
      </footer>
    </div>
  );
};

export default CheatsheetPage;