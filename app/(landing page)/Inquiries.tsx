"use client";

import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";


const Inquiries = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null); 
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="px-4 md:px-8">
      <div>
        <h1>Any Questions? We Got You.</h1>
        <p className="text-base font-normal mt-4">
          Our Software Engineering course is designed to be comprehensive, but
          we know questions can come up. Whether it's about course content,
          project deadlines, or technical requirements, we're here to help.
          Reach out via our contact form, email, or live chat for quick and
          detailed responses. Your success is our priority, and we're committed
          to providing the support you need to excel.
        </p>
      </div>
      <div className="flex-col space-y-8 my-10">
        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(1)}
          >
            <h2 className="text-xl font-semibold text-shades-light w-56">
              What is the Bachelor of Science in Software Engineering (BSSE) program?
            </h2>
            <button className="bg-transparent border-none p-0">
              {openAccordion === 1 ? (
                <AiFillMinusCircle className="w-6 h-6" />
              ) : (
                <AiFillPlusCircle className="w-6 h-6" />
              )}
            </button>
          </div>
          {openAccordion === 1 && (
            <div className="mt-4 text-shades-light">
              <p>The BSSE program is designed to provide a comprehensive education...</p>
            </div>
          )}
        </div>

        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(2)}
          >
            <h2 className="text-xl font-semibold text-shades-light w-56">
              What are the prerequisites for enrolling in a Software Engineering program?
            </h2>
            <button className="bg-transparent border-none p-0">
              {openAccordion === 2 ? (
                <AiFillMinusCircle className="w-6 h-6" />
              ) : (
                <AiFillPlusCircle className="w-6 h-6" />
              )}
            </button>
          </div>
          {openAccordion === 2 && (
            <div className="mt-4 text-shades-light">
              <p>Prerequisites for enrolling in the program include a strong foundation...</p>
            </div>
          )}
        </div>

        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(3)}
          >
            <h2 className="text-xl font-semibold text-shades-light w-56">
              What careers can I pursue after graduating from the BSSE program?
            </h2>
            <button className="bg-transparent border-none p-0">
              {openAccordion === 3 ? (
                <AiFillMinusCircle className="w-6 h-6" />
              ) : (
                <AiFillPlusCircle className="w-6 h-6" />
              )}
            </button>
          </div>
          {openAccordion === 3 && (
            <div className="mt-4 text-shades-light">
              <p>Graduates can pursue careers in software development, systems engineering...</p>
            </div>
          )}
        </div>
      </div>
      <form className="space-y-4 my-10">
        <div>
          <input
            type="email"
            className="text-shades-dark w-72 h-10 rounded-xl p-2"
            placeholder="Type your email address here..."
          />
        </div>
        <div>
          <textarea
            className=" text-shades-dark w-72 h-80 rounded-xl placeholder p-2 overflow-y:auto resize:none"
            placeholder="Type your concerns here..."
          />
        </div>
        <div>
          <div className="flex justify-end">
            <button className="bg-transparent border-none">
              <FaArrowRight className="fill-secondary-300 w-10 h-10"/>
            </button>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Inquiries;
