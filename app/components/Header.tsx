"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/SeLogo.png";
import Hamburger from "@/public/Hamburger.svg";
import Link from "next/link";
import DropDown from "@/public/dropdown.svg";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="md:shadowx fixed top-0 z-[20] flex h-[60px] w-full items-center justify-between bg-transparent px-5 py-0 text-white shadow md:items-center md:px-10">
      <div className="relative max-w-10 md:max-w-12">
        <Image src={Logo} width={50} height={50} alt="Logo" />
      </div>

      <div onClick={handleNav} className="z-10 cursor-pointer">
        <AiOutlineMenu size={25} />
      </div>
      <div
        className={
          menuOpen
            ? "fixed -right-0 top-0 h-screen w-[65%] bg-secondary-700 p-10 duration-500 ease-in md:w-[30%] md:duration-100 lg:w-[20%]"
            : "fixed -right-[100%] top-0 h-screen w-[65%] p-10 duration-500 ease-in md:w-[30%] md:duration-100 lg:w-[20%]"
        }
      >
        <div className="flex w-full flex-col justify-center duration-500 ease-in-out">
          <Link href="/" className="mx-2 rounded-lg p-2 hover:bg-indigo-800">
            About
          </Link>
          <Link href="/" className="mx-2 rounded-lg p-2 hover:bg-indigo-800">
            News
          </Link>

          <Link
            href="/"
            className="mx-2 flex gap-2 rounded-lg p-2 hover:bg-indigo-800"
          >
            People
            <div className="w-[10px]">
              <Image
                src={DropDown}
                height={10}
                width={10}
                alt="none"
                className="h-full w-full hover:rotate-180"
              />
            </div>
          </Link>

          <Link href="/" className="mx-2 rounded-lg p-2 hover:bg-indigo-800">
            Events
          </Link>
          <Link href="/" className="mx-2 rounded-lg p-2 hover:bg-indigo-800">
            Contacts
          </Link>
          <Link href="/" className="mx-2 rounded-lg p-2 hover:bg-indigo-800">
            Curriculum
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
