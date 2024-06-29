import Image from "next/image";
import React from "react";
import next from "@/public/next.svg";

const Header = () => {
  return (
    <main className={"flex fixed p-5 justify-between w-full"}>
      <Image src={next} width={50} height={50} alt="bg image" />
      <header className="md:hidden block">
        <button>
          Menu
        </button>
      </header>
      <header className="hidden md:flex"></header>
    </main>
  );
};

export default Header;
