import clsx from "clsx";
import { useContext } from "react";
import { Element } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

const Section = ({
  children,
  id,
  name,
  title,
  leftBottom = false,
  topRight = false,
  breakPoint = true,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Element name={name}>
        <section
          id={id}
          className="pt-3 relative z-10 w-full transition-colors duration-500 overflow-hidden"
        >
          {topRight && (
            <div className="absolute w-96 h-96 max-md:w-64 max-md:h-64 -right-40 -top-40 max-md:-left-70 max-md:-bottom-70 rounded-full pointer-events-none bg-[#6366F1]/30 blur-[170px]" />
          )}
          {leftBottom && (
            <div className="absolute w-96 h-96 max-md:w-64 max-md:h-64 -left-40 -bottom-40 max-md:-left-70 max-md:-bottom-70 rounded-full pointer-events-none bg-[#6366F1]/30 blur-[170px]" />
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:px-8">
            <h1
              className={clsx(
                "text-center font-bold text-2xl max-md:text-xl bg-linear-to-r bg-clip-text text-transparent",
                theme === "dark"
                  ? "from-primary via-yellow-500 to-yellow-700"
                  : "from-violet-500 via-violet-600 to-violet-800",
              )}
            >
              {title}
            </h1>

            <div
              className={clsx(
                "mt-3 w-24 max-md:w-20 h-0.5 mx-auto rounded-full bg-linear-to-r",
                theme === "dark"
                  ? "from-primary via-yellow-500 to-yellow-700"
                  : "from-violet-500 via-violet-600 to-violet-800",
              )}
            />
            {children}
          </div>
          {breakPoint && (
            <div
              className={clsx(
                "w-20 h-px mx-auto bg-linear-to-r",
                theme === "dark"
                  ? "from-transparent via-primary to-transparent"
                  : "from-transparent via-violet-500 to-transparent",
              )}
            />
          )}
        </section>
      </Element>
    </>
  );
};

export default Section;
