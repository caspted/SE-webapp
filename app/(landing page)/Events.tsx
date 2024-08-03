"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import sampleImage from "@/public/sampleimg4.jpeg";
import OtherEvents from "../components/OtherEvents";
import { motion, useScroll, useTransform } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <main>
      <div className="h-28 bg-gradient-to-t from-white opacity-20" />
      <div
        ref={ref}
        className="relative flex max-h-[120vh] min-h-[55vh] w-full flex-col justify-between overflow-hidden md:min-h-screen"
      >
        <Image
          src={sampleImage}
          alt="random-image"
          fill
          className="-z-10 h-full object-cover"
          placeholder="blur"
        />
        <div className="relative mt-10 flex w-[70vw] flex-col p-5 text-white md:w-[40vw]">
          <h3>March 12, 2024</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quos?
          </h2>
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-primary-900 opacity-50"></div>
          <button className="mt-10 h-min w-max text-xl">
            Check out this event
          </button>
        </div>
        <motion.div style={{ y }}>
          <OtherEvents className="hidden flex-row justify-end px-4 py-10 md:flex" />
        </motion.div>
        <h3 className="absolute bottom-3 left-3 rounded-3xl bg-neutral-800 bg-opacity-70 px-3 py-1">
          {"{Event Title here}"}
        </h3>
      </div>
      <div className="h-28 bg-gradient-to-b from-white opacity-20" />
      <motion.div style={{ y: y2 }}>
        <OtherEvents className="flex-col px-4 md:hidden" />
      </motion.div>
    </main>
  );
};

export default Events;
