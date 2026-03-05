import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={clsx(
        `relative
        overflow-hidden
        group
        w-11 h-11
        rounded-full
        flex items-center justify-center`,
        theme === "dark" ? `bg-zinc-900` : `bg-gray-100`,
      )}
    >
      <span
        className={clsx(
          `absolute inset-0
          scale-0
          group-hover:scale-100
          transition-transform duration-500 ease-out
          origin-center
          rounded-full`,
          theme === "dark" ? "bg-dark" : "bg-gray-200",
        )}
      />
      <Sun
        className={`
          absolute
          w-6 h-6
          text-dark
          transition-opacity duration-300
          ${theme === "light" ? "opacity-100" : "opacity-0"}
        `}
      />

      <Moon
        className={`
          absolute
          w-6 h-6
          text-light
          transition-opacity duration-300
          ${theme === "dark" ? "opacity-100" : "opacity-0"}
        `}
      />
    </button>
  );
}
