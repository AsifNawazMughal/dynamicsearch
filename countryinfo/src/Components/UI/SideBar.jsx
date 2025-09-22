import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <ul className="space-y-4 md:space-y-0 md:flex md:space-x-4 text-white text-sm">
      <li className="hover:text-blue-500 transition-all duration-300 ease-in-out">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-blue-500 transition-all duration-300 ease-in-out">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="hover:text-blue-500 transition-all duration-300 ease-in-out">
        <NavLink to="/country">Country</NavLink>
      </li>
      <li className="hover:text-blue-500 transition-all duration-300 ease-in-out">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      {/* Desktop Nav */}
      <nav className="hidden md:block">{navLinks}</nav>

      {/* Toggle Button (only mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-2xl text-white  absolute top-2 right-4 z-50 md:hidden"
      >
        {isOpen ? <RxCross2 /> : <IoMenu />}
      </button>

      {/* Sidebar (Mobile) */}
      <div
        className={`w-64 h-screen bg-gray-800 text-white top-0 right-0 fixed z-40 p-6 border-l border-gray-600
          transform transition-transform duration-700 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        {navLinks}
      </div>
    </div>
  );
};

export default SideBar;
