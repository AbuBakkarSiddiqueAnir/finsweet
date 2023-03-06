

import Image from 'next/image';
import React, { FC } from 'react';
import Button from '../button/Button';


const Hero:FC = () => {

    return (
        <div className="max-w-5xl mx-auto px-6  sm:px-6 lg:px-8 gap-[30px] md:py-20 py-12 flex justify-between flex-col-reverse  md:flex-row items-center">
        <div className="flex-1 ">
          <h1 className="font-bold title mb-5">Become The Hero Of Your Own Story</h1>
          <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#F4F2FF] text-[#AFB0B9] text-[16px] leading-[24px]  py-2 px-1 md:px-4  flex-1"
            />
           <Button buttonText='Subscribe'/>
          </form>
        </div>
        <div className="flex-1 ml-0 md:ml-10">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )
}
export default Hero;