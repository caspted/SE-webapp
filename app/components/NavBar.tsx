"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/SeLogo.png";
import Link from "next/link";
import DropDown from "@/public/dropdown.svg";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [peopleOpen, setPeopleOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="md:shadowx fixed top-0 z-[20] flex h-[60px] w-full items-center justify-between bg-transparent px-5 py-0 text-white shadow md:items-center md:px-10">
      <Link href={"/"} className="relative max-w-10 md:max-w-12">
        <Image src={Logo} width={50} height={50} alt="Logo" />
      </Link>
      <button onClick={handleNav} className="z-10 bg-transparent">
        <AiOutlineMenu size={25} />
      </button>
      <div
        className={`fixed -right-0 top-0 h-screen bg-secondary-700 bg-opacity-75 p-10 transition-all duration-1000 ease-in-out md:w-[30%] lg:w-[20%] ${!menuOpen && "-right-[100%]"}`}
      >
        <div className="flex w-full flex-col justify-center duration-500 ease-in-out">
          <Link href="/" className="rounded-lg p-2 hover:bg-secondary-500">
            About
          </Link>
          <Link href="/" className="rounded-lg p-2 hover:bg-secondary-500">
            News
          </Link>

          <button
            onClick={() => setPeopleOpen(!peopleOpen)}
            className={`{'hover:bg-secondary-500'} flex flex-col rounded-lg bg-transparent p-2`}
          >
            <div className="flex items-center gap-2">
              People
              <div className="w-[10px]">
                <Image
                  src={DropDown}
                  height={10}
                  width={10}
                  alt="none"
                  className={`h-full w-full ${peopleOpen && "rotate-180"}`}
                />
              </div>
            </div>

            <div>
              {peopleOpen && (
                <div className="flex flex-col items-start gap-2 py-2">
                  <Link
                    href="/"
                    className="rounded-lg p-2 hover:bg-secondary-500"
                  >
                    Students
                  </Link>
                  <Link
                    href="/"
                    className="rounded-lg p-2 hover:bg-secondary-500"
                  >
                    Faculty
                  </Link>
                </div>
              )}
            </div>
          </button>

          <Link href="/" className="rounded-lg p-2 hover:bg-secondary-500">
            Events
          </Link>
          <Link href="/" className="rounded-lg p-2 hover:bg-secondary-500">
            Contacts
          </Link>
          <Link href="/" className="rounded-lg p-2 hover:bg-secondary-500">
            Curriculum
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
