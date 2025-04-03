"use client"
import Image from 'next/image'
import React from 'react'
import { BLOG_POST_DATA_LIST } from '@/utils/helper';
import Link from 'next/link';

const BlogCard = () => {
    return (
        <div className='container max-w-[1248px] mx-auto'>
            <div className='flex items-center justify-between'>
                {BLOG_POST_DATA_LIST.map((obj, i) => (
                    <Link href={`/card/${obj ? obj.title?.toLowerCase()?.replace(/ /g, '-') : '404'}`} key={i} className='bg-white shadow-lg rounded-lg py-3 px-4 max-w-[300px]'>
                        <Image sizes='100vw' width={200} height={80} className='' src={obj.image} alt='blog-img' />
                        <h2 className='font-bold text-lg text-black'>{obj.title}</h2>
                        <p className='font-normal text-base text-black mt-2'>{obj.description}</p>
                        <p className='text-sm text-black/80 mt-2'>Suggested Price:- ${obj.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogCard