"use client"
import { BLOG_POST_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

const BlogDetail = () => {
    const path = usePathname();
    const detail = path.replace(/\/blog\//g, '');
    const cardData = BLOG_POST_DATA_LIST?.filter(obj =>
        obj.title?.toLowerCase()?.replace(/ /g, '-') === detail
    )
    return (
        <div>
            {cardData.map((obj, i) => (
                <div key={i}>
                    <Image width={1200} height={500} className='max-w-[1200px] h-[500px] w-full' src={obj.image} alt='img'/>
                    <p className='text-lg font-bold text-white'>{obj.title}</p>
                    <p className='font-normal text-base text-white mt-2'>{obj.description}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogDetail