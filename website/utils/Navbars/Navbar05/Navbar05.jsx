// Navbar04.jsx
import React from "react";

const defaultLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Docs", link: "/docs" },
  { name: "Contact", link: "/contact" },
];

const Navbar05 = ({ links = defaultLinks }) => {
  return (
    <div
      className="absolute top-0 left-1/2 z-30 pointer-events-auto bg-black bg-opacity-80 backdrop-blur-md cursor-default flex items-center justify-center p-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      style={{ transform: "translateX(-50%)", marginTop: "10px" }}
    >
      {links.map((link, i) => (
        <a key={i} href={link.link} className="bg-black text-white px-3 py-1 rounded-full text-xs shadow-md">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar05;
