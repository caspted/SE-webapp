import React from "react";
import BackgroundImage from "@/public/HeroBg.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (


      <div className="max-h-[325px] relative flex min-h-[55vh] justify-center text-center md:max-h-[498px] md:justify-start lg:max-h-[660px] space-y-2 xl:max-h-[720px]">
        <Image
          src={BackgroundImage}
          alt="random-image"
          fill
          className="-z-10 h-full object-cover lg:bg-no-repeat bottom-0"
          placeholder="blur"
        />
        <div className="justify-center p-4 items-center flex flex-col space-y-1 md:items-start md:text-start md:pl-8 max-w-[450px] lg:space-y-3 z-10">
          <p className="text-[20px] font-medium leading-none md:text-[30px] xl:text-[48px] xl:font-semibold xl:tracking-wide">
            TRANSFORM YOUR IDEAS INTO REALITY
          </p>

          <p className="text-[14px] font-normal leading-tight md:max-w-96 lg:max-w-80 xl:text-[20px]">
            Are you ready to bring your ideas to life and revolutionize the world
            with technology? Enroll in our Software Engineering program today and
            unlock endless possibilities!
          </p>

          <div className="flex flex-col gap-3 items-center justify-center pt-2 md:flex-row xl:pt-6 ">
            <Link href={"/"} className="text-center text-[10px] font-semibold lg:text-[14px] xl:text-[20px]">
              <button>Inquire</button>
            </Link>
            <Link
              href={"/"}
              className="text-[8px] font-semibold text-[#FE9901] underline underline-offset-2 flex items-center gap-1 md:gap-none lg:text-[14px] xl:text-[20px]"
            >
              VIEW OUR CURRICULUM
              <FaArrowRight className="hidden md:block "/>
            </Link>
          </div>
        </div>
        <div className="h-3/4 bg-gradient-to-t from-primary-900 absolute w-full bottom-0" />
      </div>
  );
};

export default Hero;
