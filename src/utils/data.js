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
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "javaScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
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
  description: "Managing and optimizing data storage",
  skills: [
    { name: "Express", level: 40, color: "bg-green-600" },
    { name: "MySql", level: 96, color: "bg-red-500" },
    { name: "SqlLite", level: 95, color: "bg-yellow-600" },
  ],
},
{
  title: "MobileDev",
  icon: Smartphone,
  description: "Making smooth mobile apps",
  skills: [
    { name: "ReactNtive", level: 90, color: "bg-blue-600" },
    { name: "NtiveWind", level: 90, color: "bg-yellow-600" },
  ],
},
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vite",
  "tailwind",
  "nativewind",
  "react",
  "reactnative",
  "React-Router",
  "git"
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
    title: "School website",
    description:
      "A website for an English school based in poland the website hasstwo languages to swithch to polish and English.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "Vite", "Tailwind"],
    liveUrl: "https://easylearninglanguage.com/",
    githubUrl: "https://github.com/jimotieno475/EasyLearningLanguage",
    featured: true,
    category: "Full Stack",
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
  //   image: PROJECT_IMG_1,
  //   tags: ["React", "Tailwind", "Vite"],
  //   liveUrl: "https://jimotieno475.github.io/Obinnatv-Stores/",
  //   githubUrl: "https://github.com/jimotieno475/Obinnatv-Stores.git",
  //   featured: false,
  //   category: "Full Stack",
  // },
    {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution for selling furniture with advanced filtering,and real-time inventory management.",
    image: PROJECT_IMG_3,
    tags: ["React", "Tailwind", "Vite"],
    liveUrl: "https://jimotieno475.github.io/Furniture-store/",
    githubUrl: "https://github.com/jimotieno475/Furniture-store",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "mechanic mobile app",
    description:
      "A mobile app  where a user can  book mechanics when they have an emergency.",
    image: PROJECT_IMG_4,
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Reactnative", "Nativewind", "MySql"],
    liveUrl: "https://expo.dev/accounts/mackx6/projects/mech/builds/957af59d-8d93-4848-9c58-5266909a9dfc",
    githubUrl: "https://github.com/jimotieno475/MechanicRideApp",
    featured: true,
    category: "Full Stack",
  },
  
]

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started my College journey",
    company: "Moringa School",
    description:
      "Discovering myself and my interests in  the technology world and decided to take a course in software engineering",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Graduated with Certificate in Software Engineering",
    company: "Moringa School ",
    description:
      "Graduated and entered into the world of thech learning more in web dev and mobile dev to buid my journey of becoming a sucessfull filstack/native mobile developer.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Mobile Development",
    company: "Freelance.",
    description:
      "I got facinated by react native and started to learn more building small project untill i landed a big project in 2025.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2025-2027",
    title: "Persuing a Degree",
    company: "Zetech University",
    description:
      "I decided to take a Bachelors of Science in Software Engineering at Zetech University which will run to 2027 while i still do freelance . ",
    icon: BookOpen,
    color: "bg-green-500",
  },
]

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love and iteract with smoothly",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions to real world problems",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices in beth mobile and web developmet ",
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