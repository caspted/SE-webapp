import React from 'react';

const Footer = () => {
  return (
    
    <div className='bg-shades-light rounded-l w-full  rounded-t-[20px]'>
      <div className='px-4 md:px-8 text-black mt-7 justify-center flex flex-col items-center md:flex-row md:justify-evenly lg:justify-start'>
        <div className='flex justify-center flex-col items-center lg:items-start lg:w-96'>
          <img src='Logo.png' alt='PSSE Logo' className='w-[65px] h-[65px] lg:w-28 lg:h-28'/>
          <p className='text-center w-72 lg:w-[350px] lg:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='flex space-x-6 md:mt-2 lg:hidden'>
            <img src='Copyright.png' alt='Copyright' className='w-8 h-8'/>
            <img src='Facebook.png' alt='Facebook' className='w-8 h-8'/>
            <img src='LinkedIn.png' alt='LinkedIn' className='w-8 h-8'/>
            <img src='Instagram.png' alt='Instagram' className='w-8 h-8'/>
          </div>
        </div>
        
        <div className='mt-4 md:mt-0 lg:ml-auto'>
          <h2 className='text-xl font-semibold'>Contact Us</h2>
          <div>
            <div className='flex items-center md:mt-2'>
              <img src='Call.png' alt='Call' className='w-[34px] h-[34px]'/>
              <p className='ml-[10px]'>0912453497510</p>
            </div>
            <div className='items-center flex'>
              <img src='Email.png' alt='Email' className='w-[34px] h-[34px]'/>
              <p className='ml-[10px]'>psseemail@yahoo.com</p>
            </div>
            <div className='space-x-4 mt-2 hidden lg:flex'>
              <img src='Copyright.png' alt='Copyright' className='w-14 h-14'/>
              <img src='Facebook.png' alt='Facebook' className='w-14 h-14'/>
              <img src='LinkedIn.png' alt='LinkedIn' className='w-14 h-14'/>
              <img src='Instagram.png' alt='Instagram' className='w-14 h-14'/>
          </div>
          </div>
        </div>
      </div>
      <div className='flex mt-[10px] mb-[10px] justify-center text-black px-4 md:px-8 lg:justify-start'>
                <p>© PSSE 2024. All Rights Reserved.</p>
              </div>
    </div>
  );
}

export default Footer;
