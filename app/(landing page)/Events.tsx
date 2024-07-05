import Image from "next/image";
import React from "react";
import sampleImage from "@/public/sampleimg4.jpeg";
import OtherEvents from "../components/OtherEvents";

const Events = () => {
  return (
    <main>
      <div className="from-white opacity-20 bg-gradient-to-t h-28" />
      <div className="relative min-h-[55vh] md:min-h-screen overflow-hidden w-full flex flex-col justify-between">
        <h3 className="absolute left-3 bottom-3 bg-neutral-800 bg-opacity-70 rounded-3xl px-3 py-1">
    {"{Event Title here}"}
        </h3>
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
        <OtherEvents className="hidden md:flex flex-row py-10 justify-end px-4" />
      </div>
      <div className="bg-gradient-to-b opacity-20 from-white h-28" />
      <OtherEvents className="md:hidden flex-col px-4" />
    </main>
  );
};

export default Events;
