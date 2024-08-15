"use client";

import React, { useRef } from "react";
import BackgroundImage from "@/public/HeroBg.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div
      ref={container}
      className="relative flex min-h-[75vh] justify-center space-y-2 overflow-hidden text-center md:max-h-[498px] md:justify-start lg:max-h-[660px] xl:max-h-[720px]"
    >
      <motion.div
        className="absolute h-full w-full overflow-hidden"
        style={{ y: parallaxY }}
      >
        <Image
          src={BackgroundImage}
          alt="random-image"
          fill
          className="bottom-0 -z-10 h-full object-cover lg:bg-no-repeat"
          placeholder="blur"
        />
      </motion.div>
      <div className="z-10 flex max-w-[450px] flex-col items-center justify-center gap-3 p-4 md:items-start md:pl-8 md:text-start">
        <h1 className="font-medium xl:font-semibold xl:tracking-wide">
          TRANSFORM YOUR IDEAS INTO REALITY
        </h1>
        <p className="text-sm font-normal leading-tight md:max-w-96 lg:max-w-80 xl:text-xl">
          Are you ready to bring your ideas to life and revolutionize the world
          with technology? Enroll in our Software Engineering program today and
          unlock endless possibilities!
        </p>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <Link
            href={"/"}
            className="lg:text-md text-center text-sm font-semibold xl:text-xl"
          >
            <button>Inquire</button>
          </Link>
          <Link
            href={"/"}
            className="flex w-max items-center gap-1 text-sm font-semibold underline underline-offset-2 lg:text-[14px] xl:text-[20px]"
          >
            VIEW OUR CURRICULUM
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-primary-900" />
    </div>
  );
};

export default Hero;
