import React from "react";
import BackgroundImage from "@/public/HeroBg.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative flex max-h-[325px] min-h-[55vh] justify-center space-y-2 text-center md:max-h-[498px] md:justify-start lg:max-h-[660px] xl:max-h-[720px]">
      <Image
        src={BackgroundImage}
        alt="random-image"
        fill
        className="bottom-0 -z-10 h-full object-cover lg:bg-no-repeat"
        placeholder="blur"
      />
      <div className="z-10 flex max-w-[450px] flex-col items-center justify-center space-y-1 p-4 md:items-start md:pl-8 md:text-start lg:space-y-3">
        <p className="text-[20px] font-medium leading-none md:text-[30px] xl:text-[48px] xl:font-semibold xl:tracking-wide">
          TRANSFORM YOUR IDEAS INTO REALITY
        </p>

        <p className="text-[14px] font-normal leading-tight md:max-w-96 lg:max-w-80 xl:text-[20px]">
          Are you ready to bring your ideas to life and revolutionize the world
          with technology? Enroll in our Software Engineering program today and
          unlock endless possibilities!
        </p>

        <div className="flex flex-col items-center justify-center gap-3 pt-2 md:flex-row xl:pt-6">
          <Link
            href={"/"}
            className="text-center text-[10px] font-semibold lg:text-[14px] xl:text-[20px]"
          >
            <button>Inquire</button>
          </Link>
          <Link
            href={"/"}
            className="md:gap-none flex items-center gap-1 text-[8px] font-semibold text-[#FE9901] underline underline-offset-2 lg:text-[14px] xl:text-[20px]"
          >
            VIEW OUR CURRICULUM
            <FaArrowRight className="hidden md:block" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-primary-900" />
    </div>
  );
};

export default Hero;
