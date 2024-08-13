import React from "react";



const Footer = () => {
  return (
    <div className="w-full rounded-l rounded-t-[20px] bg-shades-light">
      <div className="mt-7 flex flex-col items-center justify-center px-4 text-black md:flex-row md:justify-evenly md:px-8 lg:justify-start">
        <div className="flex flex-col items-center justify-center lg:w-96 lg:items-start">
          <img
            src="Logo.png"
            alt="PSSE Logo"
            className="h-[65px] w-[65px] lg:h-28 lg:w-28"
          />
          <p className="w-72 text-center lg:w-[350px] lg:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-6 md:mt-2 lg:hidden">
            <img src="Copyright.png" alt="Copyright" className="h-8 w-8" />
            <img src="Facebook.png" alt="Facebook" className="h-8 w-8" />
            <img src="LinkedIn.png" alt="LinkedIn" className="h-8 w-8" />
            <img src="Instagram.png" alt="Instagram" className="h-8 w-8" />
          </div>
        </div>

        <div className="mt-4 md:mt-0 lg:ml-auto">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <div>
            <div className="flex items-center md:mt-2">
              <img src="Call.png" alt="Call" className="h-[34px] w-[34px]" />
              <p className="ml-[10px]">0912453497510</p>
            </div>
            <div className="flex items-center">
              <img src="Email.png" alt="Email" className="h-[34px] w-[34px]" />
              <p className="ml-[10px]">psseemail@yahoo.com</p>
            </div>
            <div className="mt-2 hidden space-x-4 lg:flex">
              <img src="Copyright.png" alt="Copyright" className="h-14 w-14" />
              <img src="Facebook.png" alt="Facebook" className="h-14 w-14" />
              <img src="LinkedIn.png" alt="LinkedIn" className="h-14 w-14" />
              <img src="Instagram.png" alt="Instagram" className="h-14 w-14" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[10px] mt-[10px] flex justify-center px-4 text-black md:px-8 lg:justify-start">
        <p>© PSSE 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
