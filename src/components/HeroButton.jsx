import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";

const HeroButton = ({ children, href, variant = "outline", icon }) => {
  const { theme } = useContext(ThemeContext);

  const outline = clsx(
    "bg-transparent",
    theme === "dark"
      ? "hover:text-dark border-yellow-500 text-yellow-500 hover:bg-yellow-500"
      : "hover:text-light border-violet-600 text-violet-600 hover:bg-violet-600",
  );

  const filled = clsx(
    "hover:bg-transparent",
    theme === "dark"
      ? "text-dark border-yellow-500 bg-yellow-500 hover:text-yellow-500"
      : "text-light border-violet-600 bg-violet-600 hover:text-violet-600",
  );

  return (
    <a
      className={clsx(
        "px-4 py-2 flex items-center gap-2 border-3 rounded font-bold cursor-pointer",
        variant === "outline" ? outline : filled,
      )}
      href={href}
    >
      {icon && icon}
      {children}
    </a>
  );
};

export default HeroButton;
