import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface LandingProjectProps {
  title: string;
  image: StaticImageData;
}

const LandingProject = ({ title, image }: LandingProjectProps) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl transition-all">
      <Image
        src={image}
        alt="Image"
        fill
        className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute -z-10 bg-black h-full w-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="group-hover:opacity-100 opacity-0 duration-700 flex items-center flex-col gap-2" >
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
