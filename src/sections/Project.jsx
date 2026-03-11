import Section from "../components/Section";
import ProjectCarousel from "../components/ProjectCarousel";

const Project = () => {
  return (
    <>
      <Section name="Projects" title="Projects" leftBottom topRight>
        <div className="my-5 pt-5 px-[15%] max-md:px-0">
          <p className="text-center">
            Built and managed 2 Flutter WebView and 3 enterprise web
            applications for Abank.
          </p>
          <p className="mt-5 text-center text-slate-500">
            Recent Practice Projects:
          </p>
          <div className="px-5 pt-5">
            <ProjectCarousel />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Project;
