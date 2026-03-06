import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";

const AboutContent = ({ icon: Icon, color, text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="group flex items-start gap-5">
        <div
          className="mt-1 w-8 h-8 flex shrink-0 justify-center items-center border border-slate-400/40 bg-slate-400/10 rounded-[5px] transition-all duration-300
          group-hover:scale-110 group-hover:bg-slate-400/20"
        >
          <Icon
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-px"
            style={{ color }}
          />
        </div>
        <p className="transition-transform duration-500 md:group-hover:translate-x-4">
          {text}
        </p>
      </div>
      <div
        className={clsx(
          "my-5 mx-auto w-[50%] h-px bg-linear-to-r",
          theme === "dark"
            ? "from-transparent via-primary/20 to-transparent"
            : "from-transparent via-violet-500/40 to-transparent",
        )}
      />
    </>
  );
};

export default AboutContent;
