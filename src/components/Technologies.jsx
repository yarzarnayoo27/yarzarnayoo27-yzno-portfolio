import Technology from "./Technology";

const Technologies = ({ technologies }) => {
  return (
    <div className="my-4 flex flex-wrap gap-4">
      {technologies.map((technology) => (
        <div
          key={technology.label}
          className={
            "px-2 py-1.5 flex items-center border border-slate-400/40 hover:border-slate-400/70 rounded-md bg-slate-400/10 text-slate-500 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-slate-400/30 transition-all duration-200"
          }
        >
          <Technology
            Icon={technology.icon}
            label={technology.label}
            color={technology.color}
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
