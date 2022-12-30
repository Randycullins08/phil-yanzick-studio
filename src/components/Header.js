import { Link, NavLink } from "react-router-dom";

export default function Header() {
  let activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "0.5em",
  };
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>
          <Link to="/">Phillip Yanzick</Link>
        </h2>
      </div>

      <div className="header-links">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/studio"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Studio
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
