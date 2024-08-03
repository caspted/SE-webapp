import React from "react";
import BackgroundImage from "@/public/HeroBg.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main>
      <div className="relative flex max-h-[120vh] min-h-[55vh] w-full flex-col justify-center overflow-hidden p-4 text-center md:min-h-screen items-center space-y-2">
        <Image
          src={BackgroundImage}
          alt="random-image"
          fill
          className="-z-10 h-full object-cover"
          placeholder="blur"
        />

        <p className="font-medium text-[20px] tracking-normal"> TRANSFORM YOUR IDEAS INTO A REALITY</p>

        <p className="font-normal text-[14px] ">
          Are you ready to bring your ideas to life and revolutionize the world
          with technology? Enroll in our Software Engineering program today and
          unlock endless possibilities!
        </p>

        <div className="flex-col flex gap-1 space-y-1 pt-2">
          <Link href={'/'} className="font-semibold text-[10px] text-center">
          <button>INQUIRE</button>
          </Link>
          <Link href={'/'} className="text-[#FE9901] text-[10px] font-semibold underline underline-offset-2 ">VIEW OUR CURRICULUM</Link>
        </div>

      </div>
    </main>
  );
};

export default Hero;
