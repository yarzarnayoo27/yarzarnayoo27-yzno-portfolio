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

  const NavLink = ({ navLink, mobile }) => {
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
          "flex flex-col items-center transition-transform duration-300",
          mobile ? "gap-1 hover:scale-110" : "w-[50px] gap-1.5 hover:scale-120",
          theme === "dark" ? "hover:text-primary" : "hover:text-violet-500",
        )}
      >
        <span className={clsx(mobile ? "text-xl" : "text-2xl")}>
          <Icon />
        </span>
        <span className={clsx(mobile ? "text-[10px]" : "text-[11px]")}>
          {navLink.title}
        </span>
      </LinkScroll>
    );
  };
  return (
    <>
      <header
        className={clsx(
          "w-full fixed top-0 left-0 z-50 px-[5%] py-[5px] transition-colors duration-500 shadow",
          theme === "dark" ? "bg-dark-modern text-light" : "bg-light text-dark",
        )}
      >
        <div className="flex justify-between items-center h-[65px] max-md:h-[50px]">
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
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[1px] glass-line" />
      </header>

      <footer
        className={clsx(
          "w-full fixed bottom-0 left-0 z-50 py-3 md:hidden flex justify-around backdrop-blur-lg transition-colors duration-500 border-t",
          theme === "dark"
            ? "bg-dark-modern border-light/10"
            : "bg-light/80 border-dark/10",
        )}
      >
        {navLinks.map((navLink) => (
          <NavLink key={navLink.id} navLink={navLink} mobile />
        ))}
      </footer>
    </>
  );
};

export default Header;
