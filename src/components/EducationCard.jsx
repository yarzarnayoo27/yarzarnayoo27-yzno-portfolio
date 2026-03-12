import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { gsap } from "gsap";
import { EducationIcon } from "../../constants";

const EducationCard = ({ education }) => {
  const { theme } = useContext(ThemeContext);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    const hoverIn = () => {
      gsap.to(el, { scale: 1.02, duration: 0.3, ease: "power1.out" });
    };
    const hoverOut = () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power1.out" });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="py-3 px-6 rounded-xl w-full shadow-md flex gap-10 border border-slate-400/40 bg-slate-400/10 hover:scale-[1.02]"
    >
      <EducationIcon
        className={clsx(
          "w-10 h-10",
          theme === "dark" ? "text-primary" : "text-violet-500",
        )}
      />
      <div>
        <span
          className={clsx(
            "text-sm font-semibold",
            theme === "dark" ? "text-primary" : "text-violet-500",
          )}
        >
          {education.year}
        </span>
        <h3 className="text-lg font-bold mt-1">{education.description}</h3>
        <p className="text-sm text-slate-500 mt-2">{education.institution}</p>
      </div>
    </div>
  );
};

export default EducationCard;
