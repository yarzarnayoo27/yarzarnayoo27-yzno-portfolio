import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { Element } from "react-scroll";

const Section = ({name}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Element name={name}>
        <section
          className={clsx(
            "py-10 h-[1000px]",
            // theme === "dark"
            //   ? "bg-dark-modern text-light"
            //   : "bg-light text-dark",
          )}
        >
          <h1 className="text-center font-bold text-2xl max-md:text-xl bg-linear-to-r from-primary via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Section Title
          </h1>

          <div className="w-24 max-md:w-20 h-[3px] max-md:h-[2px] mx-auto mt-3 rounded-full bg-gradient-to-r from-primary via-yellow-500 to-yellow-700"></div>
          <br></br>
          <div className="w-20 sm:w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </section>
      </Element>
    </>
  );
};

export default Section;
