import { mojitoCocktails, xoraSaas } from "../../constants";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const Project = () => {
  return (
    <>
      <Section name="Projects" title="Projects" leftBottom topRight>
        <div className="my-5 py-5 px-[15%] max-md:px-0">
          <p className="text-center">
            Built and managed 2 Flutter WebView and 3 enterprise web
            applications for Abank.
          </p>
          <p className="mt-5 text-center text-slate-500">
            Recent Practice Projects:
          </p>
          <div className="p-5 flex flex-wrap gap-5">
            <ProjectCard project={mojitoCocktails} />
            <ProjectCard project={xoraSaas} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Project;
