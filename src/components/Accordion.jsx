"use client";
import React, { useEffect, useState } from "react";
import { RefStructer } from "./common/RefStructer";
import Icons from "./common/Icons";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);

    const ACCORDION_DATA = [
        { title: "Nunc pellentesque consectetur", content: "Lorem ipsum dolor sit amet consectetur. Cursus habitant ornare pellentesque egestas. Consectetur blandit justo bibendum quam. Pharetra nulla tortor viverra hendrerit ipsum donec eget venenatis. Lobortis nec augue et sed ut. Blandit convallis eget laoreet urna. A tristique vitae arcu augue mauris vel lacus proin. Tincidunt dui velit faucibus magna nunc porta amet sed. Ornare amet sagittis ut amet facilisis lectus. Amet eu a urna erat hac." },
        { title: "In donec in tristique integer", content: "Lorem ipsum dolor sit amet consectetur. Cursus habitant ornare pellentesque egestas. Consectetur blandit justo bibendum quam. Pharetra nulla tortor viverra hendrerit ipsum donec eget venenatis. Lobortis nec augue et sed ut. Blandit convallis eget laoreet urna. A tristique vitae arcu augue mauris vel lacus proin. Tincidunt dui velit faucibus magna nunc porta amet sed. Ornare amet sagittis ut amet facilisis lectus. Amet eu a urna erat hac." },
        { title: "Nunc porta pellentesque", content: "Lorem ipsum dolor sit amet consectetur. Cursus habitant ornare pellentesque egestas. Consectetur blandit justo bibendum quam. Pharetra nulla tortor viverra hendrerit ipsum donec eget venenatis. Lobortis nec augue et sed ut. Blandi " },

    ];


    const toggleAccordion = (index) => {
        if (isOpen === index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    };
    const [currentScreenWidth, setCurrentScreenWidth] = useState(0)
    useEffect(() => {
        const heightCalculate = () => {
            setCurrentScreenWidth(window.innerWidth)
            console.log('debug the  resize  ')
        }
        heightCalculate()
        console.log('debug the  resize  ')
        window.addEventListener("resize", () => { heightCalculate() });
        return window.removeEventListener("resize", () => { heightCalculate() })
    }, [])

    return (
        <div className="container max-w-[900px] mx-auto">
            {ACCORDION_DATA.map((obj, i) => (
                <div key={i} className="border border-solid border-white rounded-xl w-full mb-4 ">
                    <button
                        onClick={() => toggleAccordion(i)}
                        className={`relative  w-full  text-start px-4 py-5  ${isOpen === i ? 'bg-red-100 rounded-t-[10px] text-black' : 'bg-black rounded-xl text-white'}`}
                    >
                        {obj.title}
                        <span className={`absolute end-5 transition-all ease-linear duration-300 ${isOpen === i ? "-rotate-180" : ""
                            }`}><Icons icon="accordionArrow" /></span>
                    </button>
                    <RefStructer reCalculate={currentScreenWidth} open={isOpen === i} speed={300}>
                        <p className="text-base text-white pt-3 pb-3 px-4">{obj.content}</p>
                    </RefStructer>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
