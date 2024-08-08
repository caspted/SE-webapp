import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='bg-shades-light rounded-l w-[320px] min-h-[430px] rounded-t-[20px] md:hidden'>
        <div className='px-4 md:px-8 text-black mt-[40px]'>
          <div className='flex justify-center'>
            <img src='Logo.png' alt='PSSE Logo' className='w-[65px] h-[65px] mt-10'/>
          </div>
          <div className='flex justify-center mt-[5px]'>
            <p className='text-center w-[288px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex mt-[50px] justify-center space-x-2'>
            <img src='Copyright.png' alt='Copyright' className='w-[34px] h-[34px]'/>
            <img src='Facebook.png' alt='Facebook' className='w-[34px] h-[34px]'/>
            <img src='LinkedIn.png' alt='LinkedIn' className='w-[34px] h-[34px]'/>
            <img src='Instagram.png' alt='Instagram' className='w-[34px] h-[34px]'/>
          </div>
          <div>
            <h2 className='text-xl font-semibold mt-[35px]'>Contact Us</h2>
            <div>
              <div className='flex mt-[5px] items-center'>
                <img src='Call.png' alt='Call' className='w-[34px] h-[34px]'/>
                <p className='ml-[10px]'>0912453497510</p>
              </div>
              <div className='items-center flex'>
                <img src='Email.png' alt='Email' className='w-[34px] h-[34px]'/>
                <p className='ml-[10px]'>psseemail@yahoo.com</p>
              </div>
            </div>
            <div className='flex mt-[20px] justify-center'>
              <p>© PSSE 2024. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden md:flex bg-shades-light rounded-l rounded-t-[20px] w-[768px] h-[217px] items-center'>
        <div className='px-4 md:px-8 text-black flex justify-between w-full'>
          <div className='flex flex-col items-center space-y-2'>
            <img src='Logo.png' alt='PSSE Logo' className='w-[65px] h-[65px]'/>
            <p className='text-center w-[288px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex mt-2 space-x-2'>
              <img src='Facebook.png' alt='Facebook' className='w-[34px] h-[34px]'/>
              <img src='Instagram.png' alt='Instagram' className='w-[34px] h-[34px]'/>
              <img src='LinkedIn.png' alt='LinkedIn' className='w-[34px] h-[34px]'/>
              <img src='Copyright.png' alt='Copyright' className='w-[34px] h-[34px]'/>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
            <div className='flex items-center mb-1'>
              <img src='Call.png' alt='Call' className='w-[34px] h-[34px] mr-2'/>
              <p>0912453497510</p>
            </div>
            <div className='flex items-center'>
              <img src='Email.png' alt='Email' className='w-[34px] h-[34px] mr-2'/>
              <p>psseemail@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className='w-full text-center mt-4  text-black'>
          <p>© PSSE 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
