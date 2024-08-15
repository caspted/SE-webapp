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
    <div className="flex flex-col items-center px-4 md:px-8 py-20">
      <div className="max-w-screen-md md:flex md:space-x-4 lg:space-x-8 xl:space-x-16">
        <div className="md:w-72 lg:w-80 xl:w-96">
          <h1 className="text-5xl font-semibold">Any Questions? We Got You.</h1>
          <p className="text-base font-normal">
            Our Software Engineering course is designed to be comprehensive, but
            we know questions can come up. Whether it&apos;s about course content,
            project deadlines, or technical requirements, we&apos;re here to help.
            Reach out via our contact form, email, or live chat for quick and
            detailed responses. Your success is our priority, and we&apos;re
            committed to providing the support you need to excel.
          </p>
        </div>
        <div className="my-12 flex flex-1 flex-col items-center space-y-8 md:my-0">
          <div className="w-72 rounded-xl bg-secondary-300 p-4 md:w-full">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleAccordion(1)}
            >
              <h2 className="w-56 text-xl font-semibold text-shades-light md:w-80 lg:w-96">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, voluptates nesciunt cupiditate autem dignissimos est
                  minus. Quae dolor illum consequuntur, officiis animi enim
                  dignissimos earum rem. Alias nesciunt hic culpa.
                </p>
              </div>
            )}
          </div>

          <div className="w-72 rounded-xl bg-secondary-300 p-4 md:w-full">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleAccordion(2)}
            >
              <h2 className="w-56 text-xl font-semibold text-shades-light md:w-80 lg:w-96">
                What are the prerequisites for enrolling in a Software
                Engineering program?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At a
                  labore ducimus hic sint cumque perferendis necessitatibus in
                  laborum. Maxime dolor optio excepturi sint necessitatibus? In
                  facere tenetur doloribus, quis voluptatum sit exercitationem
                  beatae sunt quasi labore optio corrupti. Iure ab explicabo
                  unde voluptatum repellat ut eius, porro omnis error.
                </p>
              </div>
            )}
          </div>

          <div className="w-72 rounded-xl bg-secondary-300 p-4 md:w-full">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleAccordion(3)}
            >
              <h2 className="w-56 text-xl font-semibold text-shades-light md:w-80 lg:w-96">
                What careers can I pursue after graduating from the BSSE
                program?
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
      </div>
      <form className="my-12 flex w-full max-w-screen-md flex-1 flex-col space-y-4">
        <div>
          <input
            type="email"
            className="h-10 w-full rounded-xl p-2 text-shades-dark"
            placeholder="Type your email address here..."
          />
        </div>
        <div>
          <textarea
            className="placeholder overflow-y:auto resize:none h-80 w-full rounded-xl p-2 text-shades-dark"
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
