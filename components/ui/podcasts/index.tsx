

import React, { FC } from 'react';
import Image from 'next/image';



const Podcasts: FC = () => {

    return (
        <>
            <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8 py-2 md:py-12 px-10 gap-2 flex flex-col justify-between  md:flex-row items-center'>
                <h4 className='md:text-[24px] text-[20px] mb-4 md:mb-0 leading-[36px] font-semibold'>Podcast Available On</h4>
                <Image height={100} width={100} alt='apple podcast' className='min-w-[130px]' src='/images/apple.png' />
                <Image height={100} width={100} alt='apple podcast' className='min-w-[130px]' src='/images/Sound.png' />
                <Image height={100} width={100} alt='apple podcast' className='min-w-[130px]' src='/images/Google.png' />
                <Image height={100} width={100} alt='apple podcast' className='min-w-[130px]' src='/images/Spotify.png' />
            </div>
        </>
    )
}
export default Podcasts;