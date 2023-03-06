

import React, { FC } from 'react';
import Button from '../button/Button';


const AboutHero: FC = () => {

  return (
    <div className="max-w-5xl mb-[250px] md:mb-[315px] mx-auto  sm:px-6 lg:px-8  py-20 px-10 flex justify-between flex-col-reverse  md:flex-row items-center">
      <div className="flex-1">
        <h1 className="font-bold title mb-5">Become The Hero Of Your Own Story</h1>
        <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <Button buttonText='Subscribe Now' />
      </div>
      <div className="flex-1 ml-10">
      </div>
    </div>
  )
}
export default AboutHero;