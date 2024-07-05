"use client";

import React from "react";
import img from "@/public/sampleimg.jpg";
import img2 from "@/public/sampleimg2.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

const sampleEvent = [
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, odit.",
    src: img,
  },
  {
    header:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab at rem facere.",
    src: img2,
  },
];

const eventVariants = {
  initial: { opacity: 0, x: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + i * 0.5,
    },
  }),
};

const OtherEvents = ({ className }: { className: string }) => {
  return (
    <motion.div className={`${className} flex md:flex-row gap-5`}>
      {sampleEvent.map(({ header, src }, i) => {
        return (
          <motion.div
            initial="initial"
            whileInView="animate"
            custom={i}
            variants={eventVariants}
            key={i}
            viewport={{ once: true }}
            className="flex flex-col justify-end mb-4 rounded-3xl overflow-hidden relative h-[40vh] md:w-[30vw]"
          >
            <Image src={src} alt={header} className="object-cover -z-10" fill />
            <h3 className=" text-xl lg:text-2xl px-3 text-white py-2 bg-secondary-500 bg-opacity-50">
              {header}
            </h3>
          </motion.div>
        );
      })}
      <motion.div
        custom={2}
        initial="initial"
        whileInView="animate"
        variants={eventVariants}
        viewport={{ once: true }}
        className="bg-neutral-700 rounded-3xl w-60 self-center justify-center items-center flex md:w-[15vw] md:h-60 text-center text-xl text-white px-2"
      >
        See more Events here
      </motion.div>
    </motion.div>
  );
};

export default OtherEvents;
