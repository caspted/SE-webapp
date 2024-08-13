"use client";

import image1 from "@/public/sampleimg.jpg";
import image2 from "@/public/sampleimg2.jpeg";
import image3 from "@/public/sampleimg3.jpg";
import image4 from "@/public/sampleimg4.jpeg";
import image5 from "@/public/sampleimg5.jpg";
import image6 from "@/public/sampleimg6.jpg";

import ProjectColumn from "../components/ProjectColumn";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <main className="relative flex min-h-screen flex-col">
      <h1 className="px-4 py-20 text-center md:text-start">
        {"What we've achieved, and what we have done"}
      </h1>
      <div className="relative">
        <div className="absolute h-40 w-full bg-gradient-to-b from-primary-900" />{" "}
        <div
          ref={container}
          className="relative my-2 flex h-[1500px] flex-row justify-center gap-4 overflow-hidden px-[4vw] py-2"
        >
          <ProjectColumn
            images={[image1, image2, image3]}
            className="top-[35%] hidden md:flex"
            y={y}
          />
          <ProjectColumn
            images={[image6, image4, image2]}
            className="top-[10%]"
            y={y2}
          />
          <ProjectColumn
            images={[image3, image1, image5]}
            className="top-[30%] hidden lg:flex"
            y={y3}
          />
          <ProjectColumn
            images={[image2, image6, image3]}
            className="top-[10%] hidden xl:flex"
            y={y4}
          />
        </div>
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-primary-900" />
      </div>
      <div className="flex h-16 justify-center">
        <button className="text-xl">And many more here</button>
      </div>
    </main>
  );
};

export default Projects;
