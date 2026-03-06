import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { Link as LinkScroll, scrollSpy } from "react-scroll";
import { navLinks } from "../../constants";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const NavLink = ({ navLink }) => {
    const Icon = navLink.icon;
    return (
      <LinkScroll
        to={navLink.title}
        offset={-100}
        spy
        smooth
        activeClass={clsx(
          theme === "dark" ? "text-primary" : "text-violet-500",
        )}
        className={clsx(
          "w-[50px] flex flex-col justify-center items-center gap-1.5 transition-transform duration-400 hover:scale-120",
          theme === "dark" ? "hover:text-primary" : "hover:text-violet-500",
        )}
      >
        <div className="">
          <span className="text-2xl">
            <Icon />
          </span>
        </div>
        <div className="text-[11px]">{navLink.title}</div>
      </LinkScroll>
    );
  };
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 px-[5%] py-[5px] transition-colors duration-500",
        theme === "dark" ? "bg-dark-modern text-light" : "bg-light text-dark",
      )}
    >
      <div className="flex justify-between items-center h-[65px]">
        <LinkScroll
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          className="h-full flex items-center gap-3 font-qurova font-bold text-2xl transition-transform duration-400 hover:scale-110 cursor-pointer"
        >
          <img
            src={clsx(
              theme === "dark"
                ? "/images/yznoYellow.svg"
                : "/images/yznoViolet.svg",
            )}
            alt="logo"
            className="w-[25px] h-[32px]"
          />
          <div className="pt-1">
            <span className="">YZNO</span>
          </div>
        </LinkScroll>

        <div className="flex justify-center min-w-0">
          <nav className="max-md:hidden">
            <ul className="flex gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((navLink) => (
                <NavLink key={navLink.id} navLink={navLink} />
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
