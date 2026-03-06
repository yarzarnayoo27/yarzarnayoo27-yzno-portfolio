import { aboutContents } from "../../constants";
import AboutContent from "../components/AboutContent";
import Section from "../components/Section";

const About = () => {
  return (
    <>
      <Section name="About" title="About Me">
        <div className="my-5 py-5 px-[15%] max-md:px-0">
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
