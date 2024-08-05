"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import sampleImage from "@/public/sampleimg4.jpeg";
import OtherEvents from "../components/OtherEvents";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Events = () => {
  const [events, setEvents] = useState([]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <main>
      <div className="h-28 bg-gradient-to-t from-white opacity-20" />
      <div
        ref={ref}
        className="relative flex min-h-max w-full flex-col justify-between overflow-hidden sm:min-h-[400px]"
      >
        <Image
          src={sampleImage}
          alt="first event image"
          fill
          className="-z-10 h-full object-cover"
          placeholder="blur"
        />
        <div className="relative mt-10 flex flex-col p-5 md:w-[40vw]">
          <h3>March 12, 2024</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quos?
          </h2>
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-primary-900 opacity-50"></div>
          <button className="my-4 flex items-center justify-between gap-2 rounded-md sm:w-max">
            Check out this event
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="flex justify-between items-end w-screen p-5">
          <h3 className=" w-max rounded-3xl bg-neutral-800 bg-opacity-80 px-3 py-1 text-sm h-max">
            {"{Event Title here}"}
          </h3>
          <motion.div style={{ y }}>
            <OtherEvents className="hidden px-4 lg:flex " />
          </motion.div>
        </div>
      </div>
      <div className="h-28 bg-gradient-to-b from-white opacity-20" />
      <motion.div style={{ y: y2 }}>
        <OtherEvents className="px-4 lg:hidden" />
      </motion.div>
    </main>
  );
};

export default Events;
