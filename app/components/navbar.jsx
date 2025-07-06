// "use client";

// import { useState, useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const items = [
//   { label: "Home", href: "/" },
//   { label: "Jobs", href: "/job" },
//   { label: "prep", href: "/prep" },
// ];

// export default function Navbar() {
//   const router = useRouter();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [indicatorStyle, setIndicatorStyle] = useState({
//     width: '0px',
//     left: '0px',
//   });
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     if (itemRefs.current[activeIndex]) {
//       const element = itemRefs.current[activeIndex];
//       setIndicatorStyle({
//         width: `${element.offsetWidth + 24}px`, // Increased width
//         left: `${element.offsetLeft - 12}px`, // Centered position
//       });
//     }
//   }, [activeIndex]);

//   const handleClick = (index, href) => {
//     setActiveIndex(index);
//     if (href !== '#') {
//       router.push(href);
//     }
//   };

//   return (
//     <nav className="bg-black p-4 relative">
//       <div className="container mx-auto flex justify-center">
//         <div className="flex space-x-8 relative">
//           {/* Larger moving indicator */}
//           <div 
//             className="absolute h-10 bg-white rounded-lg transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2"
//             style={indicatorStyle}
//           />
          
//           {items.map((item, index) => (
//             <a
//               key={item.label}
//               href={item.href}
//               ref={(el) => itemRefs.current[index] = el}
//               className={`relative z-10 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
//                 activeIndex === index ? 'text-black' : 'text-white hover:text-gray-300'
//               }`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleClick(index, item.href);
//               }}
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const items = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/job" },
  { label: "Cheatsheet", href: "/cheatsheet" },
  { label: "prep", href: "/prep" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: '0px',
    left: '0px',
  });
  const itemRefs = useRef([]);

  // Sync activeIndex with current path
  useEffect(() => {
    const currentPath = pathname;
    const index = items.findIndex(item => item.href === currentPath);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const element = itemRefs.current[activeIndex];
      setIndicatorStyle({
        width: `${element.offsetWidth + 24}px`, // Increased width
        left: `${element.offsetLeft - 12}px`, // Centered position
      });
    }
  }, [activeIndex]);

  const handleClick = (index, href) => {
    setActiveIndex(index);
    if (href !== '#') {
      router.push(href);
    }
  };

  return (
    <nav className="bg-black p-4 relative">
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-8 relative">
          {/* Larger moving indicator */}
          <div 
            className="absolute h-10 bg-white rounded-lg transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2"
            style={indicatorStyle}
          />
          
          {items.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => itemRefs.current[index] = el}
              className={`relative z-10 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                activeIndex === index ? 'text-black' : 'text-white hover:text-gray-300'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index, item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}