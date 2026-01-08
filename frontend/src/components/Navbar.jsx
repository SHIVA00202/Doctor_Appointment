import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/");
  };

  const NavItem = ({ to, label }) => (
    <NavLink to={to} onClick={() => setMenuOpen(false)}>
      <li className="py-2 hover:text-primary">{label}</li>
    </NavLink>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50
                    flex items-center justify-between
                    py-4 px-6 md:px-12 lg:px-14
                    border-b border-gray-300
                    backdrop-blur-md bg-white/80">

      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-sm">
        <NavItem to="/" label="HOME" />
        <NavItem to="/doctors" label="ALL DOCTORS" />
        <NavItem to="/about" label="ABOUT" />
        <NavItem to="/contact" label="CONTACT" />
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Admin Button */}
        <a
          href="https://doctor-appointment-admin-sand.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block border border-primary text-primary px-5 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition"
        >
          Admin
        </a>

        {/* User / Login */}
        {token ? (
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2">
              <img className="w-8 rounded-full" src={userData.image} alt="user" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
            </div>

            <div className="absolute right-0 top-10 hidden group-hover:block">
              <div className="bg-stone-100 min-w-48 rounded p-4 flex flex-col gap-3 text-gray-600">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full text-sm"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium">
            <NavItem to="/" label="HOME" />
            <NavItem to="/doctors" label="ALL DOCTORS" />
            <NavItem to="/about" label="ABOUT" />
            <NavItem to="/contact" label="CONTACT" />

            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-6 py-2 rounded-full"
            >
              Admin
            </a>

            {!token && (
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="bg-primary text-white px-6 py-2 rounded-full"
              >
                Create account
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
