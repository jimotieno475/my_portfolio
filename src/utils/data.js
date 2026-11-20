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
  Plane,
  Building2,
  UserRound,
  Laptop,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.png";
import PROJECT_IMG_2 from "../assets/images/project2.png";
import PROJECT_IMG_3 from "../assets/images/project3.png";
import PROJECT_IMG_4 from "../assets/images/project4.jpg";
import PROJECT_IMG_5 from "../assets/images/project5.png";
import PROJECT_IMG_6 from "../assets/images/project6.png";
import PROJECT_IMG_7 from "../assets/images/project7.png";

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
    description: "Creating server-side applications and APIs.",
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
  "Tailwind CSS",
  "NativeWind",
  "React",
  "React Native",
  "React Router",
  "Git",
];

export const STATS = [
  { number: "10+", label: "Technologies" },
  { number: "Web & Mobile", label: "Development Focus" },
  { number: "2027", label: "Expected Graduation" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Easy Learning Language",
    description:
      "A bilingual English and Polish website for a language school, designed to make its information and learning services accessible to both language communities.",
    image: PROJECT_IMG_2,
    tags: ["React", "Vite", "Tailwind CSS", "i18next"],
    liveUrl: "https://easylearninglanguage.com/",
    githubUrl: "https://github.com/jimotieno475/EasyLearningLanguage",
    featured: true,
    category: "Web Application",
  },
  {
    id: 2,
    title: "Furniture Store",
    description:
      "An e-commerce-style furniture storefront with product browsing and a responsive shopping experience.",
    image: PROJECT_IMG_3,
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://jimotieno475.github.io/Furniture-store/",
    githubUrl: "https://github.com/jimotieno475/Furniture-store",
    featured: false,
    category: "E-Commerce",
  },
  {
    id: 3,
    title: "Mechanic Mobile App",
    description:
      "A mobile application concept that helps users find and book mechanic assistance when they need vehicle support.",
    image: PROJECT_IMG_4,
    tags: ["React Native", "Expo", "NativeWind", "Flask", "SQLite"],
    liveUrl:
      "https://expo.dev/accounts/mackx6/projects/mech/builds/957af59d-8d93-4848-9c58-5266909a9dfc",
    githubUrl: "https://github.com/jimotieno475/MechanicRideApp",
    featured: true,
    category: "Mobile Application",
  },
  {
    id: 4,
    title: "Jenova Tech",
    description:
      "A technology brand website presenting digital services through a modern, responsive interface.",
    image: PROJECT_IMG_5,
    coverClass: "from-slate-950 via-blue-950 to-indigo-900",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://jenova-tech.netlify.app/",
    featured: true,
    category: "Business Website",
  },
  {
    id: 5,
    title: "Nuru Travels",
    description:
      "A travel experience website for exploring journeys, itineraries and trip options, with interactive trip-saving and enquiry-style interface elements.",
    image: PROJECT_IMG_6,
    coverClass: "from-sky-950 via-cyan-900 to-teal-800",
    tags: ["React", "Vite", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://nuru-travels.netlify.app/",
    githubUrl: "https://github.com/jimotieno475/nuru-travels",
    note: "Frontend prototype: booking and newsletter actions are not connected to a live backend.",
    featured: true,
    category: "Travel Website",
  },
  {
    id: 6,
    title: "Mansu Plas",
    description:
      "A property discovery interface for browsing homes, viewing listing details and preparing enquiries through contact channels.",
    image: PROJECT_IMG_7,
    coverClass: "from-emerald-950 via-teal-900 to-slate-800",
    tags: ["React", "Vite", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://mansu-plas.netlify.app/",
    githubUrl: "https://github.com/jimotieno475/Mansu-Plas",
    note: "Frontend prototype: property details and contact information include sample content.",
    featured: true,
    category: "Property Website",
  },
  // {
  //   id: 7,
  //   title: "Dr Ben Kajwang — Portfolio",
  //   description:
  //     "A professional portfolio website created to present an individual's profile and professional presence online.",
  //   icon: UserRound,
  //   coverClass: "from-stone-950 via-amber-950 to-neutral-800",
  //   tags: ["Portfolio Website", "Responsive Design"],
  //   liveUrl: "https://dr-ben-kajwang.netlify.app/",
  //   featured: false,
  //   category: "Portfolio Website",
  // },
];

export const JOURNEY_STEPS = [
  {
    year: "2023–2024",
    title: "Full-Stack Software Engineering Training",
    company: "Moringa School",
    description:
      "Completed practical training in software development, building a foundation in web and application development.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2025–2027",
    title: "BSc Software Engineering",
    company: "Zetech University",
    description:
      "Pursuing a Bachelor of Science in Software Engineering while developing web and mobile projects.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users can navigate with ease.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into practical software solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and strengthening my skills in software engineering.",
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
