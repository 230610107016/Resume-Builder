import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <Sun size={18} className="sun-icon" />

      <div className="toggle-thumb" />

      <Moon size={18} className="moon-icon" />
    </button>
  );
};

export default ThemeToggle;