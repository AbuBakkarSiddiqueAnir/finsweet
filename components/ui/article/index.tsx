

import React, { FC } from 'react';
import Image from 'next/image';
import Button from '../button/Button';



const Article: FC = () => {

    return (
        <>
            <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8  py-12 px-10 gap-2 flex flex-col justify-between  md:flex-row items-center'>
                <header className='flex justify-between w-full mb-[64px]'>
                    <div>
                        <h3 className='title-sm font-bold text-base mb-[16px]'>Recent Episodes</h3>
                        <p className='max-w-[371px] text-lg leading-[22px] text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                    </div>
                    <div className='flex self-end'>
                        <Button buttonText='See All Episiodes' />
                    </div>


                </header>





            </div>
        </>
    )
}
export default Article;