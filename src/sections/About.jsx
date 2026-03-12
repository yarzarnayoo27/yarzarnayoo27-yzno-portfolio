import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { aboutContents } from "../../constants";
import AboutContent from "../components/AboutContent";
import Section from "../components/Section";

const About = () => {
  const aboutContainer = useRef();

  useGSAP(() => {
    gsap.from(aboutContainer.current.children, {
      x: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <Section id="about" name="About" title="About Me">
        <div ref={aboutContainer} className="my-5 py-5 px-[15%] max-md:px-0">
          {aboutContents.map((aboutContent, index) => (
            <AboutContent
              key={index}
              icon={aboutContent.icon}
              color={aboutContent.color}
              text={aboutContent.text}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
