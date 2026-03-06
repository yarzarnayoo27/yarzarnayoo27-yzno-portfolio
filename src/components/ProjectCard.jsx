import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { SiVercel, SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Technologies from "./Technologies";

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="p-5 border border-slate-400/40 bg-slate-400/10 overflow-hidden rounded-lg shadow-lg">
      <img
        src={project.imgPath}
        alt="project screenshot"
        className="w-full h-auto object-cover"
      />
      <Technologies technologies={project.technologies} />
      <div className="flex justify-center gap-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 max-[450px]:px-3 max-[450px]:py-1 flex items-center gap-2 text-sm max-[450px]:text-[9px] font-medium rounded-md border border-slate-700 bg-slate-400/10 hover:bg-slate-900/10 transition-colors duration-400"
        >
          <SiVercel size={16} />
          Live Demo
          <ExternalLink size={14} />
        </a>

        <a
          href={project.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "px-4 py-2 max-[450px]:px-3 max-[450px]:py-1 flex items-center gap-2 text-sm max-[450px]:text-[9px] font-medium rounded-md border border-slate-700 hover:bg-slate-800 transition-colors duration-400",
            theme === "dark" ? "text-slate-300 hover:text-light" : "text-dark hover:text-light",
          )}
        >
          <SiGithub size={16} />
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
