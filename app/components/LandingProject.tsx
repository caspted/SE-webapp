import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface LandingProjectProps {
  title: string;
  image: StaticImageData;
}

const LandingProject = ({ title, image }: LandingProjectProps) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl transition-all drop-shadow-lg">
      <Image
        src={image}
        alt="Image"
        fill
        className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute -z-10 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>
      <div className="flex flex-col items-center gap-2 opacity-0 duration-700 group-hover:opacity-100">
        <h2>{title}</h2>
        {/* change into link if project is available */}
        <button>
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
};

export default LandingProject;
