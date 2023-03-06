

import React, { FC } from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { blogs } from './../../../lib/data';
import ArticleCard from '../article/articleCard';



const Blog: FC = () => {

    return (
        <>
            <div className='max-w-7xl mx-auto  sm:px-6 lg:px-8  py-12 px-6 gap-2 flex flex-col mb-[210px] md:mb-[313px] justify-between  items-center'>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Image width={400} height={100} alt='blog' src='/images/content.png'/>
                    {
                        blogs.map((article, i)=>{
                            return (
                                <ArticleCard key={article.id} article={article}/>
                            )
                        })
                    }
                </div>



            </div>
        </>
    )
}
export default Blog;