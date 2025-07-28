import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "text-white opacity-70 hover:opacity-100 transition duration-200";
  const linkActive = "opacity-100 border-b-2 border-white";
  const signUpStyle =
    "text-white font-bold hover:opacity-100 transition duration-200";

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-gradient-to-b from-black/40 to-transparent z-50">
      {/* 🔹 Logo */}
      <h1
        className="text-white font-bold"
        style={{ fontFamily: "Helvetica, sans-serif", fontSize: "35px" }}
      >
        trxvl.
      </h1>

      {/* 🔹 Links */}
      <ul
        className="flex gap-8"
        style={{ fontFamily: "Helvetica, sans-serif", fontSize: "17.7px" }}
      >
        {["Home", "Stays", "Flights", "Packages"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}

        {/* 🔹 Sign Up con Bold */}
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `${signUpStyle} ${isActive ? "border-b-2 border-white" : ""}`
            }
            style={{ fontFamily: "Helvetica, sans-serif", fontSize: "17.7px" }}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
