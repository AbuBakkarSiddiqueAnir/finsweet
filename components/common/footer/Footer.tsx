




import Sponsors from '@components/ui/Sponsors';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface FooterProps {
    brand: string;
}

const Footer: React.FC<FooterProps> = ({ brand }) => {

    return (
        <footer className="bg-base pt-12 relative">
            <div className="max-w-7xl mx-auto pt-[192px] pb-[96px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                <Image width={130} height={26} alt='logo' src={brand} />

                </div>
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Pages</h3>
                    <ul>
                        <li><a href="#" className="text-secondary hover:text-white">Home</a></li>
                        <li><a href="#" className="text-secondary hover:text-white">Podcast</a></li>
                        <li><a href="#" className="text-secondary hover:text-white">Host</a></li>
                        <li><a href="#" className="text-secondary hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Reach Us</h3>
                    <ul>
                        <li><a href="#" className="text-secondary hover:text-white">Contact</a></li>
                        <li><a href="#" className="text-secondary hover:text-white">About</a></li>

                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Subscribe</h3>

                </div>
            </div>

            <div className="  text-center bg-primary py-6 text-secondary">
            © Copyright Finsweet 2021
            </div>
            <div className='absolute -top-[200px] w-full'>
                <div>
                <Sponsors/>
                </div>

            </div>

        </footer>
    )

}


export default Footer;















