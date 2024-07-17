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
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
};

const OtherEvents = ({ className }: { className: string }) => {
  return (
    <motion.div className={`${className} flex flex-col items-end gap-5`}>
      <div className="flex flex-col gap-5 items-start">
        {sampleEvent.map(({ header, src }, i) => {
          return (
            <motion.div
              initial="initial"
              whileInView="animate"
              custom={i}
              variants={eventVariants}
              viewport={{ once: true }}
              key={i}
              className="flex w-full rounded-3xl overflow-hidden md:w-[50vw]"
            >
              <div className="relative min-w-[50%] md:min-w-[25vw] min-h-[30vh]  overflow-hidden rounded-s-3xl items-end flex p-3">
                <h4 className="bg-neutral-800 px-3 py-1 rounded-2xl bg-opacity-70">
                  {"Event Title"}
                </h4>
                <Image
                  src={src}
                  alt={header}
                  className="object-cover -z-10"
                  fill
                />
              </div>
              <div
                className={
                  "bg-secondary-900 bg-opacity-100 md:bg-opacity-50 flex justify-center flex-col px-2"
                }
              >
                <h4 className="text-lg">May 23, 2024</h4>
                <h3 className="bg-opacity-50">{header}</h3>
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
        className="bg-neutral-900 w-auto p-2 rounded-xl text-lg md:text-xl"
      >
        See more Events here
      </motion.button>
    </motion.div>
  );
};

export default OtherEvents;
