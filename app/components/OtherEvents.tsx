"use client";

import React from "react";
import img from "@/public/sampleimg.jpg";
import img2 from "@/public/sampleimg2.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

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
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
};

const OtherEvents = ({ className }: { className: string }) => {
  return (
    <motion.div
      className={`flex flex-col items-center gap-5 lg:items-end ${className}`}
    >
      <div className="flex flex-col gap-5 lg:flex-col">
        {sampleEvent.map(({ header, src }, i) => {
          return (
            <motion.div
              initial="initial"
              whileInView="animate"
              custom={i}
              variants={eventVariants}
              viewport={{ once: true }}
              key={i}
              className="flex w-full overflow-hidden rounded-3xl lg:w-[50vw]"
            >
              <div className="relative flex min-h-[30vh] min-w-[50%] items-end overflow-hidden p-3 lg:min-w-[25vw]">
                <h4 className="rounded-2xl bg-neutral-800 bg-opacity-70 px-3 py-1">
                  {"Event Title"}
                </h4>
                <Image
                  src={src}
                  alt={header}
                  className="-z-10 object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col justify-between gap-4 bg-primary-700 p-4">
                <div>
                  <h4 className="text-base">May 23, 2024</h4>
                  <h5 className="bg-opacity-50 font-bold">{header}</h5>
                </div>
                <button className="flex items-center bg-transparent p-0 text-primary-300">
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        custom={2}
        initial="initial"
        whileInView="animate"
        variants={eventVariants}
        viewport={{ once: true }}
        className="w-max rounded-xl bg-neutral-900 p-2 text-lg md:text-xl"
      >
        See more Events here
      </motion.button>
    </motion.div>
  );
};

export default OtherEvents;
