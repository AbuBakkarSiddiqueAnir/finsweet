
import Image from 'next/image';
import React from 'react';

type SponsorsProps = {

};

const Sponsors:React.FC<SponsorsProps> = () => {

    return (
        <section className="bg-primary  max-w-7xl mx-auto py-8 md:py-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
          <h2 className="text-[22px] md:text-[32px] leading-[42px] text-center font-bold text-white mb-10 md:mb-16">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-5 gap-8">
            <div className="">
              <Image width='172' height='34' alt='' src='/images/Logo1.png'/>
            </div>
            <div className="">
            <Image width='172' height='34' alt='' src='/images/Logo2.png'/>
            </div>
            <div className="">
            <Image width='172' height='34' alt='' src='/images/Logo3.png'/>
            </div>
            <div className="">
            <Image width='172' height='34' alt='' src='/images/Logo4.png'/>
            </div>
            <div className="">
            <Image width='172' height='34' alt='' src='/images/Logo5.png'/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Sponsors;