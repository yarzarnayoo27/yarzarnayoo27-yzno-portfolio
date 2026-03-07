import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import clsx from "clsx";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Footer from "./sections/Footer";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main
        className={clsx(
          "overflow-hidden",
          theme === "dark" ? "bg-dark-modern text-light" : "bg-light text-dark",
        )}
      >
        <Header />
        <Hero />
        <About />
        <Project />
        <Experience />
        <Education />
        <Footer />
      </main>
    </>
  );
};

export default App;
