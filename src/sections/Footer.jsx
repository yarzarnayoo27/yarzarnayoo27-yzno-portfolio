import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={clsx(
        "relative w-full p-6",
        theme === "dark" ? "bg-dark-modern" : "bg-light",
      )}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="pointer-events-none absolute top-0 left-0 w-full h-px glass-line" />
      <p className="relative text-center max-md:text-[11px] text-sm text-slate-500">
        Copyright &copy; {new Date().getFullYear()} Yar Zar Nay Oo's Portfolio.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
