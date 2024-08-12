import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spring from "@/public/spring.png";
import sangwa from "@/public/sangwa.png";
import streetbridge from "@/public/streetbridge.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student at Rwanda Coding Academy",
    location: "Rwanda",
    description:
      "I am a graduate at  Rwanda Coding Academy, where I learnt  advanced programming and systems development.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Attended HerInTech Summer Bootcamp",
    location: "Virtual",
    description:
      "I participated in the HerInTech summer bootcamp, focusing on web development and empowering women in technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Online FreeCodeCamp Courses",
    location: "Online",
    description:
      "I completed various online courses on FreeCodeCamp, gaining skills in JavaScript, front-end, and back-end development.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;


export const projectsData = [
  {
    title: "Spring Initiative",
    description:
      "A community-focused platform aimed at uplifting local communities through various services and initiatives.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: spring,
  },
  {
    title: "Sangwa's Portfolio",
    description:
      "A personal portfolio showcasing a collection of web development projects and technical resources.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: sangwa,
  },
  {
    title: "Street Bridge Foundation",
    description:
      "An organization dedicated to empowering street kids and families, providing them with opportunities for better livelihoods.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: streetbridge,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "JAVA",
  "DSA (Data Structures and Algorithm)",
  "React Native",
  "MySQL",
  "Flutter",
  "PHP",
  "C",
  "C++",
  "Angular",
  "Cyber Security Expert",
  "Embedded Systems Expert",
  "UX/UI Design",
] as const;