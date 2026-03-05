import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";

const HeroButton = ({ children, href, variant = "outline", icon }) => {
  const { theme } = useContext(ThemeContext);

  const outline = clsx(
    "bg-transparent border-yellow-500 text-yellow-500 hover:bg-yellow-500",
    theme === "dark" ? "hover:text-dark" : "hover:text-light",
  );

  const filled = clsx(
    "hover:bg-transparent border-yellow-500 bg-yellow-500 hover:text-yellow-500",
    theme === "dark" ? "text-dark" : "text-light",
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
