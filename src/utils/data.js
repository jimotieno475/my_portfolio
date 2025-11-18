import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.png";
import PROJECT_IMG_2 from "../assets/images/project2.png";
import PROJECT_IMG_3 from "../assets/images/project3.png";
import PROJECT_IMG_4 from "../assets/images/project4.jpg";


export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive and visually appealing user interfaces.",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "JavaScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Creating robust server-side applications and APIs.",
    skills: [
      { name: "Express.js", level: 40, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "Flask", level: 95, color: "bg-pink-600" },
      { name: "Django", level: 62, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and managing efficient data storage solutions.",
    skills: [
      { name: "MongoDB", level: 40, color: "bg-green-600" },
      { name: "MySQL", level: 96, color: "bg-red-500" },
      { name: "SQLite", level: 95, color: "bg-yellow-600" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Building smooth and performant mobile applications.",
    skills: [
      { name: "React Native", level: 90, color: "bg-blue-600" },
      { name: "NativeWind", level: 90, color: "bg-yellow-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Tailwind",
  "NativeWind",
  "React",
  "React Native",
  "React Router",
  "Git"
];

export const STATS = [
  { number: "20+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "School Website",
    description:
      "A bilingual website for an English school in Poland, with Polish and English support.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "Vite", "Tailwind"],
    liveUrl: "https://easylearninglanguage.com/",
    githubUrl: "https://github.com/jimotieno475/EasyLearningLanguage",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-stack furniture store with advanced filtering and real-time inventory management.",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Vite"],
    liveUrl: "https://jimotieno475.github.io/Furniture-store/",
    githubUrl: "https://github.com/jimotieno475/Furniture-store",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Mechanic Mobile App",
    description:
      "A mobile app that lets users book mechanics instantly in case of emergencies.",
    image: PROJECT_IMG_4,
    tags: ["React", "Tailwind", "React Native", "NativeWind", "MySQL"],
    liveUrl: "https://expo.dev/accounts/mackx6/projects/mech/builds/957af59d-8d93-4848-9c58-5266909a9dfc",
    githubUrl: "https://github.com/jimotieno475/MechanicRideApp",
    featured: true,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started My College Journey",
    company: "Moringa School",
    description:
      "Discovered my passion for technology and enrolled in Software Engineering.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Graduated with Certificate in Software Engineering",
    company: "Moringa School",
    description:
      "Gained skills in web and mobile development and began my journey as a full-stack / native mobile developer.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Mobile Development",
    company: "Freelance",
    description:
      "Became fascinated by React Native and built small projects, culminating in a larger project in 2025.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2025-2027",
    title: "Pursuing a Degree",
    company: "Zetech University",
    description:
      "Studying for a Bachelor of Science in Software Engineering while continuing freelance projects.",
    icon: BookOpen,
    color: "bg-green-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love to interact with.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions for real-world problems.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices for mobile and web development.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/jimotieno475",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/jim-otieno-5b39042a1/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:jimotieno475@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jimotieno475@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+254) 712764067",
  },
];


// m6VX.vfg2C4amaa
// service_cbqeidx