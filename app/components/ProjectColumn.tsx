"use client";

import { StaticImageData } from "next/image";
import React from "react";
import { MotionValue, motion } from "framer-motion";
import LandingProject from "./LandingProject";
import TempProject from "./TempProject";

const ProjectColumn = ({
  images,
  className,
  y,
}: {
  images: StaticImageData[];
  className?: string;
  y?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex h-[2250px] w-[70vw] flex-col gap-[2vh] ${className} `}
    >
      <TempProject />
      {images.map((image, index) => {
        return (
          <LandingProject title="title project" key={index} image={image} />
        );
      })}
      <TempProject />
    </motion.div>
  );
};

export default ProjectColumn;
