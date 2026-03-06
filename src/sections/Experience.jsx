import { useContext } from "react";
import Section from "../components/Section";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { timelineData } from "../../constants";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Section name="Experience" title="Experience">
        <div className="my-5 py-5 px-[15%] max-md:px-0">
          <div className="relative max-w-5xl mx-auto px-5">
            {/* timeline axis */}
            <div
              className={clsx(
                "absolute left-4 lg:left-1/2 top-8 bottom-8 w-[2px] lg:-translate-x-1/2",
                theme === "dark" ? "bg-primary" : "bg-violet-500",
              )}
            />
            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className={clsx(
                      "relative flex items-center justify-start",
                      isLeft ? "lg:justify-start" : "lg:justify-end",
                    )}
                  >
                    {/* circle */}
                    <div
                      className={clsx(
                        "absolute -left-2 lg:left-1/2 w-3 h-3 rounded-full lg:-translate-x-1/2",
                        theme === "dark" ? "bg-primary" : "bg-violet-500",
                      )}
                    />

                    {/* card */}
                    <div className="max-lg:ml-5 py-3 px-6 w-[90%] lg:w-[45%] rounded-xl shadow-md border border-slate-400/40 bg-slate-400/10 hover:scale-[1.02] transition-all duration-300">
                      <span
                        className={clsx(
                          "text-sm font-semibold",
                          theme === "dark" ? "text-primary" : "text-violet-500",
                        )}
                      >
                        {item.year}
                      </span>

                      <h3 className="text-lg font-bold mt-1">{item.title}</h3>

                      <p className="text-sm text-slate-500 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Experience;
