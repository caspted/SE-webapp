"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import sampleImage from "@/public/sampleimg4.jpeg";
import OtherEvents from "../components/OtherEvents";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchData } from "../utils/fetchData";

const Events = () => {
  const {data: events} = useQuery({
    queryKey: ["events"],
    queryFn: () => fetchData('events')
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <main>
      <div className="from-white opacity-20 bg-gradient-to-t h-28" />
      {/* {events && ( */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={ref}
        className="relative min-h-[55vh] md:min-h-screen max-h-[120vh] overflow-hidden w-full flex flex-col justify-between"
      >
        <Image
          src={sampleImage}
          alt="random-image"
          fill
          className="object-cover h-full -z-10"
          placeholder="blur"
        />
        <div className="relative flex flex-col p-5 text-white w-[70vw] md:w-[40vw] mt-10">
          <h3>March 12, 2024</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quos?
          </h2>
          <div className="bg-gradient-to-r  from-primary-900 h-full left-0 top-0 absolute w-full -z-10 opacity-50"></div>
          <button className="h-min text-xl mt-10 w-max">
            Check out this event
          </button>
        </div>
        <motion.div style={{ y }}>
          <OtherEvents className="hidden md:flex flex-row py-10 justify-end px-4" />
        </motion.div>
        <h3 className="absolute left-3 bottom-3 bg-neutral-800 bg-opacity-70 rounded-3xl px-3 py-1">
          {"{Event Title here}"}
        </h3>
      </motion.div>
      {/* )} */}
      <div className="bg-gradient-to-b opacity-20 from-white h-28" />
      {/* {events && ( */}
      <motion.div style={{ y: y2 }}>
        <OtherEvents className="md:hidden flex-col px-4" />
      </motion.div>
      {/* )} */}
    </main>
  );
};

export default Events;
