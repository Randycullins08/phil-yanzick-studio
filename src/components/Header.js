import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>
          <Link to="/">Phil Yanzick</Link>
        </h2>
      </div>

      <div className="header-links">
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
