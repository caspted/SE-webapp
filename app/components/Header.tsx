import Image from "next/image";
import React from "react";
import Logo from "@/public/SeLogo.png";
import Hamburger from "@/public/Hamburger.svg";
import Link from "next/link";
import DropDown from "@/public/dropdown.svg";
import { useState } from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 z-[20] flex h-[100px] w-full items-center justify-between bg-transparent px-5 text-white md:items-center md:bg-primary-900 md:px-10">
      <div className="relative max-w-10 md:max-w-12">
        <Image src={Logo} width={50} height={50} alt="Logo" />
      </div>
      <div className="hidden md:flex">
        <Link href="/" className="mx-2 hover:bg-indigo-800 rounded-lg p-2">
          About
        </Link>
        <Link href="/" className="mx-2  hover:bg-indigo-800 rounded-lg p-2">
          News
        </Link>

        <Link href="/" className="mx-2 hover:bg-indigo-800 rounded-lg gap-2 p-2 flex justify-center
        ">
          People
          <Image src={DropDown} width={15} height={15} alt={"arrow"} className="relative text-white"/>
        </Link>

        <Link href="/" className="mx-2  hover:bg-indigo-800 rounded-lg p-2">
          Events
        </Link>
        <Link href="/" className="mx-2  hover:bg-indigo-800 rounded-lg p-2">
          Contacts
        </Link>
        <Link href="/" className="mx-2  hover:bg-indigo-800 rounded-lg p-2">
          Curriculum
        </Link>
      </div>
      <div className="flex w-full max-w-[50px] justify-between">
        <button className="border-none bg-transparent md:hidden">
          <Image src={Hamburger} width={50} height={50} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Header;

