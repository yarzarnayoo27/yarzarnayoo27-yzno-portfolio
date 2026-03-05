import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import OverlayHeroImage from "../components/OverlayHeroImage";
import HeroContent from "../components/HeroContent";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={clsx(
        "relative z-10 pt-[75px] w-full transition-colors duration-500",
        theme === "dark" ? "bg-dark-modern text-light" : "bg-light text-dark",
      )}
    >
      <div className="glass-premium" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:px-8">
        <div className="flex max-md:flex-col max-sm:gap-7 max-md:gap-10">
          <div className="flex-1 flex justify-center max-md:w-full">
            <OverlayHeroImage exp={3} profession="Front-End Engineer" />
          </div>
          <div className="flex-1 flex flex-col max-md:w-full">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
