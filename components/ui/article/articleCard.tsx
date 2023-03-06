
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export interface ArticleCardProps {
    article: { id: string; title: string; description: string; image: string; type: string };
};

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {

    const {title, description, image, type } = article

    return (
        <article className="container mx-auto cursor-pointer hover:border-1">
            <div className=" mx-auto bg-white     overflow-hidden md:max-w-2xl">
                <div className="">
                    <div className="md:flex-shrink-0">
                        <Image
                            className="w-full object-cover"
                            src={image}
                            width={100}
                            height={100}
                            alt="Blog post"
                        />
                    </div>
                    <div className="pt-8">
                        <a
                            href="#"
                            className="block mt-1 text-[24px] leading-[36px] font-medium text-base hover:underline"
                        >
                            {title}
                        </a>
                        <p className="mt-2 text-base text-lg leading-[24px]">
                            {description}.
                        </p>
                        <div className="mt-4 flex items-center ">
                            {
                                type === 'blog' ? (
                                    <Link
                                        href="#"
                                        className="text-primary text-lg leading-[24px] font-semibold  ml-2"
                                    >
                                        Read now
                                    </Link>
                                ) : (
                                    <>
                                        <Image src='/images/listen.png' height={32} width={32} alt='listen' />
                                        <Link
                                            href="#"
                                            className="text-primary text-lg leading-[24px] font-semibold  ml-2"
                                        >
                                            Listen
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default ArticleCard;