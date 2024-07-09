"use client";

import image1 from "@/public/sampleimg.jpg";
import image2 from "@/public/sampleimg2.jpeg";
import image3 from "@/public/sampleimg3.jpg";

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
    <main className="flex flex-col min-h-screen relative">
      <h1 className="py-20 px-[3vw]">
        {"What we've achieved, and what we have done"}
      </h1>
      <div className="relative">
        <div className="absolute h-40 w-full bg-gradient-to-b from-primary-700 via-primary-700"></div>{" "}
        <div
          ref={container}
          className="flex -z-10 flex-row h-[1500px] relative gap-4 px-[4vw] justify-center overflow-hidden py-2 my-2"
        >
          <ProjectColumn
            images={[image1, image2, image3]}
            className="hidden md:flex top-[35%]"
            y={y}
          />
          <ProjectColumn
            images={[image3, image2, image1]}
            className="top-[10%]"
            y={y2}
          />
          <ProjectColumn
            images={[image3, image1, image2]}
            className="hidden lg:flex top-[30%]"
            y={y3}
          />
          <ProjectColumn
            images={[image2, image1, image3]}
            className="hidden xl:flex top-[10%]"
            y={y4}
          />
        </div>
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-primary-700 via-primary-700"></div>
      </div>

      <div className="flex justify-center h-16">
        <button className="text-xl">And many more here</button>
      </div>
    </main>
  );
};

export default Projects;
