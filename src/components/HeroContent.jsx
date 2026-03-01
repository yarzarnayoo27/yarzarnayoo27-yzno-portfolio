import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import TypingLoop from "./TypingLoop";

const HeroContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="max-md:text-center">
        <h2 className="text-2xl max-sm:text-[20px]">Hi there, I'm</h2>
        <TypingLoop />
      </div>

      <div className="mt-8 ml-10 mb-5 max-sm:mt-5 max-sm:mx-5 max-md:mx-10 flex flex-col gap-5">
        <p>
          Front-End Engineer at{" "}
          <a href="https://www.abank.com.mm/" className="relative group">
            <span className="text-yellow-500 underline">A Bank</span>
            <span
              className={clsx(
                "absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-sm shadow-md",
                theme === "dark" ? "bg-neutral-800" : "bg-light",
              )}
            >
              Visit the official A Bank website
            </span>
          </a>
          , specializing in React, Next.js, Redux, and modern web technologies.
        </p>
        <p>
          Designing modern, responsive, interactive, and accessible UIs using
          MVC, MVVM, and Clean Architecture patterns.
        </p>
        <p>
          Building Scalable and Maintainable Backend Architectures with RESTful
          API Design and Microservices.
        </p>
      </div>
    </>
  );
};

export default HeroContent;
