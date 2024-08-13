"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    image: "/paul.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Juan De La Constantino",
    position: "Faculty Member",
  },
  {
    image: "/wendell.jpg",
    text: "SE! please, nami ang SE,istg tbh omg wth frfr",
    name: "Jane Doe",
    position: "Student",
  },
  {
    image: "/Nicholae.jpg",
    text: "Gwapo ako katama, so pili a nyo na ang SE please please dont prove Im right And please, pleasе, please dont bring me to tеars when I just did my makeup so nice. I LOVE IT SSSUUUPPPEEERR!",
    name: "John Smith",
    position: "Alumnus",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="bg-primary-900 p-4 text-white md:p-8">
      <h1 className="mb-6 text-4xl font-semibold md:mb-6"> SE Testimonials</h1>
      <div className="relative flex h-[400px] justify-center md:justify-around">
        <div className="flex h-[60vh] max-h-[400px] w-[60vh] max-w-[400px] flex-col">
          <div className="relative flex h-full w-full rounded-3xl">
            <Image
              src={testimonials[currentIndex].image}
              alt="Person"
              fill
              className="w-full rounded-3xl object-fill"
            />
            <button
              className="absolute left-[0px] top-1/2 -translate-y-1/2 transform rounded-full bg-white p-4 text-black md:left-[-30px] md:p-6"
              onClick={handlePrevClick}
            >
              <SlArrowLeft />
            </button>
            <button
              className="absolute right-[0px] top-1/2 -translate-y-1/2 transform rounded-full bg-white p-4 text-black md:right-[-30px] md:p-6"
              onClick={handleNextClick}
            >
              <SlArrowRight />
            </button>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 justify-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`mx-1 h-2 w-2 rounded-full ${currentIndex === index ? "bg-secondary-500" : "bg-secondary-100"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="hidden flex-col md:block">
            <FaQuoteLeft className="md:mb-[10px] lg:mb-[0px]" size={40} />
            <p className="z-10 mb-8 w-[292px] lg:mt-[20px] lg:w-[220px] xl:w-[366px]">
              {testimonials[currentIndex].text}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="sm:h-26 -mt-6 h-[100px] w-[288px] rounded-2xl bg-primary-300 pt-3 text-center sm:w-72 md:-mt-16 md:h-32 md:w-[704px] md:justify-start lg:-mt-16 lg:w-[958px] xl:-mt-16 xl:w-[1062px]">
          <h2 className="mt-8 text-xl font-semibold md:ml-[422px] md:mt-[35px] md:text-left lg:ml-[613px] xl:ml-[541px]">
            {testimonials[currentIndex].name}
          </h2>
          <p className="-mt-1 text-sm font-normal md:ml-[422px] md:text-left lg:ml-[613px] xl:ml-[541px]">
            {testimonials[currentIndex].position}
          </p>
        </div>
      </div>
      <div className="block md:hidden">
        <FaQuoteLeft className="mt-6" size={57} />
        <div className="mb-8 mt-2 text-base font-normal">
          <p>{testimonials[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
