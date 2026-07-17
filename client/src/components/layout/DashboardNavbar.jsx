import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ui/ThemeToggle";

import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="dashboard-navbar">

      {/* Logo */}
      <div className="logo">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/dashboard">
          <span className="logo-box">RC</span>
          <span>ResumeCraft</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "active" : ""}>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>

        <Link to="/my-resumes" onClick={() => setMenuOpen(false)}>
          My Resumes
        </Link>

        <Link to="/templates" onClick={() => setMenuOpen(false)}>
          Templates
        </Link>

        {/* Mobile Logout */}
        <button
          className="mobile-logout"
          onClick={logout}
        >
          Logout
        </button>
      </nav>

      {/* Right Side */}
      <div className="navbar-right">

        <ThemeToggle />

        <div className="user-profile">

          <div className="avatar">
            {user?.fullName?.charAt(0).toUpperCase()}
          </div>

          <span className="username">
            {user?.fullName}
          </span>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;