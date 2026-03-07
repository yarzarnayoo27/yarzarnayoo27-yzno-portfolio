import { educationData } from "../../constants";
import EducationCard from "../components/EducationCard";
import Section from "../components/Section";

const Education = () => {
  return (
    <>
      <Section name="Education" title="Education" topRight breakPoint={false}>
        <div className="my-5 py-5 px-[15%] max-md:px-0">
          <div className="p-5 flex flex-wrap gap-5">
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
