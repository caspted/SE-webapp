import Image from "next/image";
import React from "react";
import sampleImage from "@/public/sampleimg4.jpeg";
import OtherEvents from "../components/OtherEvents";

const Events = () => {
  return (
    <main className="">
      <div className="from-white opacity-20 bg-gradient-to-t h-28 " />
      <div className="relative min-h-screen overflow-hidden w-full flex flex-col justify-between py-20 ">
        <Image
          src={sampleImage}
          alt="random-image"
          fill
          className="object-cover w-full -z-10 opacity-100"
          placeholder="blur"
        />
        <div className="relative flex flex-col p-5 text-white w-[70vw] md:w-[40vw]">
          <h3>March 12, 2024</h3>
          <h2 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quos?
          </h2>
          <div className="bg-gradient-to-r  from-primary-900 h-full left-0 top-0 absolute w-full -z-10"></div>
          <button className="h-min md:w-full w-auto text-xl mt-10">
            Check out this event
          </button>
        </div>
        <OtherEvents className="hidden md:flex flex-row py-10 justify-end px-4" />
      </div>
      <div className="bg-gradient-to-b opacity-20 from-white h-28" />
      <OtherEvents className="md:hidden flex-col px-10" />
    </main>
  );
};

export default Events;
