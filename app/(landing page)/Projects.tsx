"use client";

import image1 from "@/public/sampleimg.jpg";
import image2 from "@/public/sampleimg2.jpeg";
import image3 from "@/public/sampleimg3.jpg";

import ProjectColumn from "../components/ProjectColumn";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const container = useRef(null);
  const {scrollYProgress } = useScroll(
    { target: container, offset: ["start end", "end start"]}
    
  );
  const y = useTransform(scrollYProgress, [0,1], [0, 1200])
  const y2 = useTransform(scrollYProgress, [0,1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0,1], [0, 800])
  const y4 = useTransform(scrollYProgress, [0,1], [0, 500])
  return (
    <main className="flex flex-col px-[2vw] min-h-screen">
      <h1 className="py-20 px-[2vw]">Things here</h1>
      <div ref={container} className="flex flex-row h-[140vh] md:h-[150vh] w-full relative gap-4 box-border p-2 justify-center overflow-hidden">
        <div className="absolute -top-5  z-10 h-40 w-full bg-gradient-to-b from-primary-500 "></div>
        <ProjectColumn images={[image1, image2, image3]} className="-top-[45%]" y={y} />
        <ProjectColumn images={[image3, image2, image1]} className="hidden sm:flex top-[5%]" y={y2} />
        <ProjectColumn images={[image3, image1, image2]} className="hidden md:flex -top-[30%]" y={y3} />
        <ProjectColumn images={[image2, image1, image3]} className="hidden lg:flex -top-[10%]" y={y4} />
        <div className="absolute -bottom-5 z-10 h-40 w-full bg-gradient-to-t from-primary-500 "></div>
      </div>
    </main>
  );
};

export default Projects;
