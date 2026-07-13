import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ui/ThemeToggle";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="dashboard-navbar">
      <div className="logo">
        <Link to="/dashboard">
          <span className="logo-box">RC</span>
          <span>ResumeCraft</span>
        </Link>
      </div>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/my-resumes">My Resumes</Link>
        <Link to="/templates">Templates</Link>
      </nav>

      <div className="navbar-right">
        <ThemeToggle />

        <div className="user-profile">
          <div className="avatar">
            {user?.fullName?.charAt(0).toUpperCase()}
          </div>

          <span>{user?.fullName}</span>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
