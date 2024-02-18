import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1, text: "Home", link: "/home" },
  { id: 2, text: "Profile", link: "/about" },
  { id: 3, text: "Contact", link: "/contacts" },
];

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center h-24 w-[100%] mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">BEAT-MARKET</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <NavLink to={item.link}>
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
