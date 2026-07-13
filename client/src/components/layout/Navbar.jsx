import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-box">RC</span>
          <span className="logo-text">ResumeCraft</span>
        </Link>
      </div>

      <div className="navbar-links">

        <ThemeToggle />

        <Link to="/login" className="nav-link">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;