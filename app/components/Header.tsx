import Image from "next/image";
import React from "react";
import next from "@/public/next.svg";

const Header = () => {
  return (
    <main className={"fixed z-50 flex w-full justify-between p-5"}>
      <Image src={next} width={50} height={50} alt="bg image" />
      <header className="block md:hidden">
        <button>Menu</button>
      </header>
      <header className="hidden md:flex"></header>
    </main>
  );
};

export default Header;
