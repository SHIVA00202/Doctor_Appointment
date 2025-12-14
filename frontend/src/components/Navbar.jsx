import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
    >
      <div className="flex items-center justify-between text-sm py-4 px-6 md:px-10 border-b border-gray-200">
        
        {/* Logo */}
        <img
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 font-medium">
          {[
            { name: "HOME", path: "/" },
            { name: "ALL DOCTORS", path: "/doctors" },
            { name: "ABOUT", path: "/about" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-1 ${
                  isActive ? "text-primary" : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <li>{item.name}</li>
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 w-3/5 h-[2px] bg-primary -translate-x-1/2" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Button */}
        <button
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:opacity-90 transition"
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 0);
          }}
        >
          Create account
        </button>
      </div>
    </header>
  );
};

export default Navbar;
