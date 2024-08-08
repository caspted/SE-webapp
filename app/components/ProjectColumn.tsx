"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { MotionValue, motion } from "framer-motion";

const ProjectColumn = ({
  images,
  className,
  y,
}: {
  images: StaticImageData[];
  className?: string;
  y: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex h-full w-[70vw] flex-col gap-[2vh] ${className}`}
    >
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-xl transition-all"
          >
            <Image src={image} alt="Image" fill className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProjectColumn;
