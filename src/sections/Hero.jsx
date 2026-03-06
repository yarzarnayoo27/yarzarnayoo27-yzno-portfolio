import { Element } from "react-scroll";
import OverlayHeroImage from "../components/OverlayHeroImage";
import HeroContent from "../components/HeroContent";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="Home">
      <section className="relative z-10 pt-[75px] w-full transition-colors duration-500 overflow-hidden">
        <div className="glass-premium" />
        <div className="absolute w-96 h-96 max-md:w-64 max-md:h-64 -left-40 -bottom-40 max-md:-left-70 max-md:-bottom-70 rounded-full pointer-events-none bg-[#6366F1]/30 blur-[170px]" />
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

        <div
          className={clsx(
            "w-20 h-px mx-auto bg-gradient-to-r",
            theme === "dark"
              ? "from-transparent via-primary to-transparent"
              : "from-transparent via-violet-500 to-transparent",
          )}
        />
      </section>
    </Element>
  );
};

export default Hero;
