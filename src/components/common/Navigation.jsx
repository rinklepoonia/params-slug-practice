"use client"
import React, { useState } from 'react'
import { RefStructer } from './RefStructer'

const Navigation = () => {
    const [isOpenDrop, setOpenDrop] = useState(-1)
    const NAV_DATA_LIST = [
        { title: 'Home', link: '#' },
        {
            title: 'About',
            list: [
                "dropdown1", "dropdown2", "dropdown3", "dropdown4",
            ]
        },

        { title: 'Contact', link: '#' },
        {
            title: 'Menu',
            list: [
                "dropdown1", "dropdown2", "dropdown3"
            ]
        },
    ]
    return (
        <div className='container mx-auto px-3'>
            <div className='flex justify-between items-center my-6'>
                <p className='text-lg text-white font-normal'>logo</p>
                <div className='flex gap-10 items-center'>
                    {NAV_DATA_LIST.map((obj, i) => (
                        <div key={i}>
                            {obj.link ? (
                                <a href={obj.link} className='text-base text-white font-normal'>{obj.title}</a>

                            ) : (
                                <div className='relative'>
                                    <p className='relative' onClick={() => setOpenDrop(i)}> {obj.title}</p>
                                    <div className='absolute left-0 top-full mt-3'>
                                        <RefStructer open={isOpenDrop === i} speed={300}>
                                            <div className={` bg-white/80 shadow-lg rounded-lg ${!isOpenDrop && "opacity-0"}`}>
                                                {obj.list.map((item, index) => (
                                                    <p
                                                        key={index}
                                                        className="block whitespace-nowrap px-4 py-2 text-white"
                                                    >
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        </RefStructer>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    ))}
                </div>
                <button className='cursor-pointer text-lg text-white bg-blue-400 shadow-lg  rounded-lg px-4 py-2'>click</button>
            </div>
        </div>
    )
}

export default Navigation