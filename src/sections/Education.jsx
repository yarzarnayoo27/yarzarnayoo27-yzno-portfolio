import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { educationData } from "../../constants";
import EducationCard from "../components/EducationCard";
import Section from "../components/Section";

const Education = () => {
  const educationRef = useRef(null);

  useGSAP(() => {
    gsap.from(educationRef.current.children, {
      x: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#education",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <>
      <Section
        id="education"
        name="Education"
        title="Education"
        topRight
        breakPoint={false}
      >
        <div className="my-5 py-5 px-[15%] max-md:px-0">
          <div ref={educationRef} className="p-5 flex flex-wrap gap-5">
            {educationData.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Education;
