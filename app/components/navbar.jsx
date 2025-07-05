// navbar.jsx
import GooeyNav from "../ui components/gooeynav";

const items = [
  { label: "Home", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Stats", href: "#" },
  { label: "prep", href: "#" },
];

const Navbar = () => {
  return (
    <div style={{ height: '0px', position: 'relative'}} className="top-5 justify-items-center">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default Navbar;
