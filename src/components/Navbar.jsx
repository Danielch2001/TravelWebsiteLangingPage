import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase = "text-white opacity-70 hover:opacity-100 transition duration-200";
  const linkActive = "opacity-100 border-b-2 border-white";
  const signUpStyle = "text-white font-bold hover:opacity-100 transition duration-200";

  const menuItems = ["Home", "Stays", "Flights", "Packages"];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/40 to-transparent z-50">
      
      {/* 🔹 Logo */}
      <h1 className="text-white font-bold" style={{ fontFamily: "Helvetica, sans-serif", fontSize: "28px" }}>
        trxvl.
      </h1>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex gap-8" style={{ fontFamily: "Helvetica, sans-serif", fontSize: "17.7px" }}>
        {menuItems.map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => `${signUpStyle} ${isActive ? "border-b-2 border-white" : ""}`}
            style={{ fontFamily: "Helvetica, sans-serif", fontSize: "17.7px" }}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>

      {/* BOTÓN HAMBURGUESA SOLO EN MÓVIL */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes className="text-white" size={26} /> : <FaBars className="text-white" size={26} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 p-6 flex flex-col items-center space-y-5 md:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => `${linkBase} text-lg ${isActive ? linkActive : ""}`}
              onClick={() => setOpen(false)} //Cierra el menú al hacer clic
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to="/signup"
            className={({ isActive }) => `${signUpStyle} text-lg ${isActive ? "border-b-2 border-white" : ""}`}
            onClick={() => setOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
}
