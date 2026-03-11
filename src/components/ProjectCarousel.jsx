import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { projects } from "../../constants";
import ProjectCard from "../components/ProjectCard";

const ProjectCarousel = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="custom-pagination z-50 mx-auto h-20 flex gap-1 justify-center items-center"
        style={{
          "--bullet": theme === "dark" ? "#64748B" : "#64748B",
          "--bullet-active": theme === "dark" ? "#fee202" : "#8b5cf6",
        }}
      />
      <button
        className={clsx(
          "custom-prev z-50 absolute bottom-5 left-[20%] -translate-y-1/2 p-3 rounded-full hover:scale-110 transition-all duration-300",
          theme === "dark" ? "text-primary" : "text-violet-500",
        )}
      >
        <FiChevronLeft size={48} />
      </button>
      <button
        className={clsx(
          "custom-next z-50 absolute bottom-5 right-[20%] -translate-y-1/2 p-3 rounded-full hover:scale-110 transition-all duration-300",
          theme === "dark" ? "text-primary" : "text-violet-500",
        )}
      >
        <FiChevronRight size={48} />
      </button>
    </>
  );
};

export default ProjectCarousel;
