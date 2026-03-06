import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiSpring,
  SiOpenjdk,
  SiVite,
  SiGreensock,
} from "react-icons/si";
import { Code2, Rocket, Users, Palette } from "lucide-react";

const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"1em"}
    height={"1em"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const AboutIcon = (props) => (
  <svg
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z" />
  </svg>
);

const ProjectIcon = (props) => (
  <svg
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    id="folder"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <path
      id="primary"
      d="M21,8V19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H9.59a1,1,0,0,1,.7.29l2.42,2.42a1,1,0,0,0,.7.29H20A1,1,0,0,1,21,8Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);

const ExperienceIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    width="1em"
    height="1em"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M315,85.001h-75V40c0-8.284-6.716-15-15-15H105c-8.284,0-15,6.716-15,15v45H15c-8.284,0-15,6.716-15,15V290c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V100.001C330,91.716,323.284,85.001,315,85.001z M105,115.001h120h15V275H90V115.001H105z M120,55h90v30h-90V55z M30,115.001h30V275H30V115.001z M300,275h-30V115.001h30V275z" />
  </svg>
);

const EducationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <g display="none">
      <path
        display="inline"
        opacity={0.2}
        enableBackground="new"
        d="M0,0v52h52V0H0z M49.9,49.9H2.1V2.1h47.8 C49.9,2.1,49.9,49.9,49.9,49.9z"
      />
    </g>
    <g display="none">
      <rect
        x={2}
        y={2}
        display="inline"
        fill="none"
        strokeWidth={0.25}
        strokeMiterlimit={10}
        width={48}
        height={48}
      />
    </g>
    <g display="none">
      <g display="inline" opacity={0.5}>
        <line
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          x1={50}
          y1={2}
          x2={2}
          y2={50}
        />
        <line
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          x1={2}
          y1={2}
          x2={49.9}
          y2={50}
        />
        <rect
          x={2}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={4}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={6}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={8}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={10}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={12}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={14}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={16}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={18}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={20}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={22}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={24}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={26}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={28}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={30}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={32}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={34}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={36}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={38}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={40}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={42}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={44}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={46}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={48}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={2}
          height={48}
        />
        <rect
          x={2}
          y={48}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={46}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={44}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={42}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={40}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={38}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={36}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={34}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={32}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={30}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={28}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={26}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={24}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={22}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={20}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={18}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={16}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={14}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={12}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={10}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={8}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={6}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={4}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
        <rect
          x={2}
          y={2}
          fill="none"
          strokeWidth={0.25}
          strokeMiterlimit={10}
          width={48}
          height={2}
        />
      </g>
    </g>
    <g>
      <path d="M25.8,26.7c-1.2,0.1-2.3-0.4-3.5-0.8c-6.3-2.1-12.7-4.2-19-6.3c-0.4-0.2-0.7-0.3-1-0.6 c-0.4-0.3-0.4-0.7,0-1c0.3-0.2,0.7-0.5,1.1-0.6c6.8-2,13.5-4,20.3-6.1c1.5-0.5,3.1-0.5,4.7,0c6.7,2,13.4,4,20.1,6 c0.4,0.2,0.8,0.3,1.2,0.6c0.5,0.3,0.5,0.8,0,1.1c-0.3,0.2-0.6,0.4-1,0.5C42,21.7,35.3,24,28.5,26.2C27.6,26.6,26.8,26.7,25.8,26.7z " />
      <path d="M12.5,27c-1-0.2-1.2,0.4-1.2,0.9c0,2.6,0,5.1,0,7.6c0,0.9,0.3,1.4,0.9,2c0.2,0.2,0.5,0.4,0.7,0.6 c1.6,1.1,3.5,1.8,5.4,2.3c3.8,1,7.6,1.2,11.5,0.7c2.5-0.3,5-1,7.3-2c1-0.5,2-1,2.7-1.8c0.5-0.5,0.7-1,0.6-1.7 c0.1-2.4,0.1-4.9,0.1-7.4c0-1.4-1-1.2-1.4-1.1c-3.5,1.2-7.2,2.3-10.7,3.5c-1.8,0.6-3.5,0.6-5.2,0L12.5,27z" />
      <path d="M45.9,24.7c-0.3,0.1-0.4,0.2-0.4,0.6c0,2.3,0,4.5,0,6.8c0,0.2-0.1,0.5-0.2,0.7c-0.5,1.2-1,2.4-1.4,3.6 c-0.4,1.1-0.2,2.3,0.6,3.1c0.2,0.3,0.6,0.6,0.9,0.8c0.3,0.3,0.8,0.4,1.2,0.5c0.7,0.1,1.3-0.3,1.8-0.7c0.2-0.2,0.5-0.4,0.7-0.7 c0.6-0.8,0.7-1.8,0.5-2.7c-0.3-1.4-0.9-2.6-1.5-3.8c-0.2-0.2-0.2-0.6-0.2-0.8c0-2.5,0-4.9,0-7.4c0-0.5-0.4-0.4-0.6-0.3L45.9,24.7z" />
    </g>
  </svg>
);

export const navLinks = [
  {
    id: "0",
    title: "Home",
    href: "home",
    icon: HomeIcon,
  },
  {
    id: "1",
    title: "About",
    href: "about",
    icon: AboutIcon,
  },
  {
    id: "2",
    title: "Projects",
    href: "projects",
    icon: ProjectIcon,
  },
  {
    id: "3",
    title: "Experience",
    href: "experience",
    icon: ExperienceIcon,
  },
  {
    id: "4",
    title: "Education",
    href: "education",
    icon: EducationIcon,
  },
];

export const loopTexts = [
  "Yar Zar Nay Oo!",
  "Front-End Engineer!",
  "Back-End Engineer!",
];

export const technologies = [
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#6B7280" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express.js", color: "#6B7280" },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: SiOpenjdk, label: "Java", color: "#ED8B00" },
  { icon: SiSpring, label: "Spring Boot", color: "#6DB33F" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
];

export const aboutContents = [
  {
    icon: Code2,
    color: "#3B82F6",
    text: "Full-stack developer with over 5 years of experience creating scalable web and mobile applications using modern frameworks and efficient architecture.",
  },
  {
    icon: Rocket,
    color: "#F59E0B",
    text: "Experienced in designing and building high-performance digital products with a focus on scalability and maintainable code.",
  },
  {
    icon: Users,
    color: "#10B981",
    text: "Dedicated to developing reliable, user-focused applications through agile teamwork and strong development practices.",
  },
  {
    icon: Palette,
    color: "#EC4899",
    text: "Passionate about design and crafting intuitive, visually appealing interfaces that enhance user experience.",
  },
];

export const mojitoCocktails = {
  imgPath: "/images/mojitoCocktails.png",
  url: "https://mojito-cocktails-yzno.vercel.app/",
  gitUrl: "https://github.com/yarzarnayoo27/mojito-cocktails",
  technologies: [
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
    { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, label: "React", color: "#61DAFB" },
    { icon: SiVite, label: "Vite", color: "#646CFF" },
    { icon: SiGreensock, label: "GSAP", color: "#88CE02" },
  ],
};

export const xoraSaas = {
  imgPath: "/images/xoraSaas.png",
  url: "https://xora-saas-yzno.vercel.app/",
  gitUrl: "https://github.com/yarzarnayoo27/xora-saas",
  technologies: [
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
    { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, label: "React", color: "#61DAFB" },
    { icon: SiVite, label: "Vite", color: "#646CFF" },
  ],
};

export const timelineData = [
  {
    id: 1,
    year: "2023",
    title: "Freelance Web Development",
    description:
      "Delivered freelance websites and started building portfolio projects.",
  },
  {
    id: 2,
    year: "2024",
    title: "Frontend Development (A Bank)",
    description:
      "Started building and maintaining enterprise web applications for A Bank, ensuring robust performance and scalable features.",
  },
  {
    id: 3,
    year: "Present",
    title: "Frontend Development (A Bank)",
    description:
      "Built multiple enterprise web apps and Flutter WebView projects for ABank.",
  },
];
