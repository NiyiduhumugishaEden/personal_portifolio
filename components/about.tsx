"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After completing my studies at{" "}
  <span className="font-medium">Rwanda Coding Academy</span>, I became deeply
  interested in technology and programming. I attended the{" "}
  <span className="font-medium">HerInTech Summer Bootcamp</span> and took{" "}
  <span className="font-medium">online FreeCodeCamp courses</span> to enhance
  my skills. My favorite part of programming is the{" "}
  <span className="italic">problem-solving</span> aspect. I{" "}
  <span className="underline">love</span> the sense of achievement when I
  figure out a solution to a challenging problem. My core stack includes{" "}
  <span className="font-medium">
    React, Next.js, Node.js, and MongoDB
  </span>
  . I'm also proficient in TypeScript, Prisma, and various other technologies.
  I'm always eager to learn and explore new technologies. I am currently
  seeking a <span className="font-medium">full-time position</span> as a
  software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy exploring
  emerging tech fields, playing video games, and watching movies. I also have a
  passion for <span className="font-medium">learning new things</span>. Right
  now, I'm diving into <span className="font-medium">history and philosophy</span> and am also
  teaching myself to play the guitar.
</p>

    </motion.section>
  );
}
