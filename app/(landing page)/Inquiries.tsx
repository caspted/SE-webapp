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
        <p className="mt-4 text-base font-normal">
          Our Software Engineering course is designed to be comprehensive, but
          we know questions can come up. Whether it's about course content,
          project deadlines, or technical requirements, we're here to help.
          Reach out via our contact form, email, or live chat for quick and
          detailed responses. Your success is our priority, and we're committed
          to providing the support you need to excel.
        </p>
      </div>
      <div className="my-10 flex-col space-y-8">
        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => toggleAccordion(1)}
          >
            <h2 className="w-56 text-xl font-semibold text-shades-light">
              What is the Bachelor of Science in Software Engineering (BSSE)
              program?
            </h2>
            <button className="border-none bg-transparent p-0">
              {openAccordion === 1 ? (
                <AiFillMinusCircle className="h-6 w-6" />
              ) : (
                <AiFillPlusCircle className="h-6 w-6" />
              )}
            </button>
          </div>
          {openAccordion === 1 && (
            <div className="mt-4 text-shades-light">
              <p>
                The BSSE program is designed to provide a comprehensive
                education...
              </p>
            </div>
          )}
        </div>

        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => toggleAccordion(2)}
          >
            <h2 className="w-56 text-xl font-semibold text-shades-light">
              What are the prerequisites for enrolling in a Software Engineering
              program?
            </h2>
            <button className="border-none bg-transparent p-0">
              {openAccordion === 2 ? (
                <AiFillMinusCircle className="h-6 w-6" />
              ) : (
                <AiFillPlusCircle className="h-6 w-6" />
              )}
            </button>
          </div>
          {openAccordion === 2 && (
            <div className="mt-4 text-shades-light">
              <p>
                Prerequisites for enrolling in the program include a strong
                foundation...
              </p>
            </div>
          )}
        </div>

        <div className="w-72 rounded-xl bg-secondary-300 p-4">
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => toggleAccordion(3)}
          >
            <h2 className="w-56 text-xl font-semibold text-shades-light">
              What careers can I pursue after graduating from the BSSE program?
            </h2>
            <button className="border-none bg-transparent p-0">
              {openAccordion === 3 ? (
                <AiFillMinusCircle className="h-6 w-6" />
              ) : (
                <AiFillPlusCircle className="h-6 w-6" />
              )}
            </button>
          </div>
          {openAccordion === 3 && (
            <div className="mt-4 text-shades-light">
              <p>
                Graduates can pursue careers in software development, systems
                engineering...
              </p>
            </div>
          )}
        </div>
      </div>
      <form className="my-10 space-y-4">
        <div>
          <input
            type="email"
            className="h-10 w-72 rounded-xl p-2 text-shades-dark"
            placeholder="Type your email address here..."
          />
        </div>
        <div>
          <textarea
            className="placeholder overflow-y:auto resize:none h-80 w-72 rounded-xl p-2 text-shades-dark"
            placeholder="Type your concerns here..."
          />
        </div>
        <div>
          <div className="flex justify-end">
            <button className="border-none bg-transparent">
              <FaArrowRight className="h-10 w-10 fill-secondary-300" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inquiries;
