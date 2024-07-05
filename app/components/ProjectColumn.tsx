'use client';

import Image, { StaticImageData } from "next/image";
import React from "react";
import { MotionValue, motion } from "framer-motion";

const ProjectColumn = ({ images, className, y }: { images: StaticImageData[], className?: string, y: MotionValue<number> }) => {
  return (
    <motion.div style={{y}} className={`w-[70vw] h-full flex flex-col relative gap-[2vh]  ${className}`}>
      {images.map((image, index) => {
        return <div key={index} className="h-full w-full relative transition-all rounded-xl overflow-hidden">
          <Image src={image} alt="Image" fill className="object-cover" />
        </div>;
      })}
    </motion.div>
  );
};

export default ProjectColumn;
