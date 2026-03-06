import { Element } from "react-scroll";

const Section = ({ children, name, title }) => {
  return (
    <>
      <Element name={name}>
        <section className="py-3 relative z-10 w-full transition-colors duration-500 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:px-8">
            <h1 className="text-center font-bold text-2xl max-md:text-xl bg-linear-to-r from-primary via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              {title}
            </h1>

            <div className="mt-3 w-24 max-md:w-20 h-0.5 mx-auto rounded-full bg-linear-to-r from-primary via-yellow-500 to-yellow-700" />
            {children}
            <div className="w-20 h-px mx-auto bg-linear-to-r from-transparent via-primary to-transparent" />
          </div>
        </section>
      </Element>
    </>
  );
};

export default Section;
