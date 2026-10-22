import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`clay-sm clay-press relative flex h-11 w-11 items-center justify-center
        text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${className}`}
    >
      <FiSun
        className={`absolute h-5 w-5 transition-all duration-300 ${
          darkMode
            ? "scale-0 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <FiMoon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          darkMode
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
