import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const OverlayHeroImage = ({ exp, profession }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative h-fit">
      <img
        src="/images/heroImage.png"
        alt="hero image"
        className="w-[300px] h-auto object-contain"
      />
      <div className="mt-8 px-8 py-1 absolute -top-0.5 -right-2 bg-light text-dark rounded-xl shadow-lg text-sm font-semibold">
        <p className="relative pl-5 before:absolute before:top-1.5 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-green-600">
          {exp}+ Years Experience
        </p>

        <div
          className="absolute bottom-0 left-4
               w-0 h-0
               border-l-[8px] border-l-transparent
               border-r-[8px] border-r-transparent
               border-t-[10px] border-t-white
               translate-y-full"
        />
      </div>

      <div
        className={clsx(
          "absolute bottom-0 left-1/2 p-2 transform -translate-x-1/2 rounded-lg shadow-lg w-[280px] text-center bg-linear-to-br",
          theme === "dark"
            ? "text-dark from-primary via-yellow-500 to-yellow-700"
            : "text-light from-violet-500 via-violet-600 to-violet-800",
        )}
      >
        <p
          className={clsx(
            "font-bold",
            theme === "dark" ? "text-dark" : "text-light",
          )}
        >
          {profession}
        </p>
      </div>
    </div>
  );
};

export default OverlayHeroImage;
