




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
            <div className="max-w-7xl mx-auto pt-[160px] md:pt-[192px] pb-8 md:pb-[96px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <Image width={130} height={26} alt='logo' src={brand} />

                </div>
                <div className="col-span-1">
                    <h3 className="text-white text-[20px] leading-[30px] font-bold mb-8">Pages</h3>
                    <ul>
                        <li className='mb-4'><Link href="/" className="text-secondary  hover:text-white">Home</Link></li>
                        <li className='mb-4'><Link href="/podcast" className="text-secondary  hover:text-white">Podcast</Link></li>
                        <li className='mb-4'><Link href="/host" className="text-secondary  hover:text-white">Host</Link></li>
                        <li className='mb-4'><Link href="/blog" className="text-secondary  hover:text-white">Blog</Link></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-white  text-[20px] leading-[30px]  font-bold mb-8">Reach Us</h3>
                    <ul>
                        <li className='mb-4'><Link href="/contact" className="text-secondary  hover:text-white">Contact</Link></li>
                        <li className='mb-4'><Link href="/about" className="text-secondary  hover:text-white">About</Link></li>

                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-white  text-[20px] leading-[30px]  font-bold mb-8">Subscribe</h3>
                    <ul>
                        <li className='mb-8'>
                            <Link href="/contact" className="text-secondary  hover:text-white">
                                <Image width={182} height={32} alt='apple' src='/images/Apple_p.png' />
                            </Link>
                        </li>
                        <li className='mb-8'>
                            <Link href="/about" className="text-secondary  hover:text-white">
                                <Image width={182} height={32} alt='google' src='/images/Google_p.png' />
                            </Link>
                        </li>
                        <li className='mb-8'>
                            <Link href="/contact" className="text-secondary  hover:text-white">
                                <Image width={182} height={32} alt='soundcloud' src='/images/Soundcloud_p.png' />
                            </Link>
                        </li>
                        <li className='mb-8'>
                            <Link href="/about" className="text-secondary  hover:text-white">
                                <Image width={182} height={32} alt='spotify' className='h-8 w-[130px]' src='/images/spo.png' />
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="  text-center bg-primary py-6 text-secondary">
                © Copyright Finsweet 2021
            </div>
            <div className='absolute -top-[200px] w-full'>
                <div>
                    <Sponsors />
                </div>

            </div>

        </footer>
    )

}


export default Footer;















