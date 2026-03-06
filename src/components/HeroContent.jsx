import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import TypingLoop from "./TypingLoop";
import { Mail } from "lucide-react";
import HeroButton from "./HeroButton";
import Technologies from "./Technologies";
import { technologies } from "../../constants";

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
            <span
              className={clsx(
                "underline",
                theme === "dark" ? "text-yellow-500" : "text-violet-600",
              )}
            >
              A Bank
            </span>
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

      <div className="w-full mt-4 flex gap-5 justify-center md:justify-start items-center">
        <HeroButton href="mailto:yarzarnayoo27@gmail.com">Hire me</HeroButton>
        <HeroButton
          variant="filled"
          icon={<Mail size={18} />}
          href="/yznoResume.pdf"
        >
          Resume
        </HeroButton>
      </div>

      <div className="w-full flex justify-center my-6">
        <div className="w-full max-md:w-[75%] h-[0.1px] opacity-20 bg-slate-500"></div>
      </div>

      <div>
        <p>Core Technologies:</p>
        <Technologies technologies={technologies} />
      </div>
    </>
  );
};

export default HeroContent;
