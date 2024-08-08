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
    <motion.div className={`flex flex-col items-center lg:items-end gap-5 ${className}`}>
      <div className="flex flex-col lg:flex-col  gap-5 ">
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
              <div className="flex flex-col justify-center gap-4 bg-secondary-900 p-2 ">
                <div>
                  <h4 className="text-base">May 23, 2024</h4>
                  <h3 className="bg-opacity-50 text-xl font-bold ">{header}</h3>
                </div>
                <button className="flex items-center gap-2 text-secondary-500 bg-transparent">
                  Check out this event <FaArrowRight />
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
