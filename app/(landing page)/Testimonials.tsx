"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { FaQuoteLeft } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';


const sampleTestimonials = [
  {
    image: '/paul.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Juan De La Constantino',
    position: 'Faculty Member'
  },
  {
    image: '/paul2.jpg',
    text: 'SE! please, nami ang SE,istg tbh omg wth frfr',
    name: 'Jane Doe',
    position: 'Student'
  },
  {
    image: '/paul3.jpg',
    text: 'Gwapo ako katama, so pili a nyo na ang SE please please dont prove Im right And please, pleasе, please dont bring me to tеars when I just did my makeup so nice.',
    name: 'John Smith',
    position: 'Alumnus'
  }
];

const Testimonials = () => {

  const { data: testimonials } = useQuery({
    queryKey: ['testimonies'],
    queryFn: async () => fetchData('testimonies')
  })
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sampleTestimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sampleTestimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (

    <div className='bg-primary-900 text-white p-4 md:p-8 '>
      <h1 className='text-4xl font-semibold mb-6 md:mb-6'> SE Testimonials</h1>
      <div className='relative flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative rounded-3xl'>
            <Image
              src={sampleTestimonials[currentIndex].image}
              alt='Person'
              width={288}
              height={288}
              className='rounded-3xl w-full object-fill'
            />
            <button className='absolute left-[0px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-4 md:p-6 md:left-[-30px]' onClick={handlePrevClick}>
              <SlArrowLeft />
            </button>
            <button className='absolute right-[0px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-4 md:p-6 md:right-[-30px]' onClick={handleNextClick}>
              <SlArrowRight />
            </button>
            <div className='flex justify-center mt-2'>
              {sampleTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-secondary-500' : 'bg-secondary-100'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex-col md:block hidden md:mb-[50px] lg:mb-[100px]'>
          <FaQuoteLeft className='md:ml-[20px] md:mb-[10px] lg:mb-[0px] lg:ml-[63px]' size={40} />
          <p className='text-base font-normal mb-8 w-[292px] ml-[70px] z-10 lg:ml-[148px] lg:w-[220px] lg:mt-[20px] xl:w-[366px]'>
            {sampleTestimonials[currentIndex].text}
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='text-center bg-primary-300 w-[288px] h-[100px] sm:w-72 sm:h-26 md:w-[704px] md:h-32 -mt-6 rounded-2xl md:justify-start md:-mt-16 lg:w-[958px] lg:-mt-16 xl:w-[1062px] xl:-mt-16'>
          <h2 className='text-xl font-semibold mt-8 md:ml-[422px] md:mt-[35px] md:text-left lg:ml-[613px] xl:ml-[541px]'>{sampleTestimonials[currentIndex].name}</h2>
          <p className='text-sm font-normal -mt-1 md:text-left md:ml-[422px] lg:ml-[613px] xl:ml-[541px]'>{sampleTestimonials[currentIndex].position}</p>

        </div>
      </div>
      <div className='block md:hidden'>
        <FaQuoteLeft className='mt-6' size={57} />
        <div className='text-base font-normal mt-2 mb-8'>
          <p >
            {sampleTestimonials[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
