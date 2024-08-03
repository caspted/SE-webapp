import React from "react";
import BackgroundImage from "@/public/HeroBg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="h-28 bg-gradient-to-t from-white opacity-20" />
      <div className="relative flex max-h-[120vh] min-h-[55vh] w-full flex-col justify-between overflow-hidden p-4 text-center md:min-h-screen">
        <Image
          src={BackgroundImage}
          alt="random-image"
          fill
          className="-z-10 h-full object-cover"
          placeholder="blur"
        />

        <h1 className="font-medium"> TRANSFORM YOUR IDEAS INTO A REALITY</h1>

        <p>
          Are you ready to bring your ideas to life and revolutionize the world
          with technology? Enroll in our Software Engineering program today and
          unlock endless possibilities!
        </p>

        <div>
          <button>INQUIRE</button>
          <button>VIEW OUR CURRICULUM</button>
        </div>

        <div className="h-28 bg-gradient-to-b from-white opacity-20" />
      </div>
    </main>
  );
};

export default Hero;
