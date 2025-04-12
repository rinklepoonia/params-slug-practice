"use client";
import React, { useEffect, useState } from "react";
import { RefStructer } from "./common/RefStructer";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);

    const ACCORDION_DATA = [
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 4Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias " },
        { title: "Title 3", content: "Content 4Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa soluta ullam deserunt natus sunt alias eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, repellat ad quaerat, cumque consequatur voluptas iure aperiam iste unde eius delectus culpa " },
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
        <div>
            {ACCORDION_DATA.map((obj, i) => (
                <div key={i} className="border border-solid border-white w-full mb-4">
                    <button
                        onClick={() => toggleAccordion(i)}
                        className="relative border-b border-solid border-white w-full p-3 text-start text-white"
                    >
                        {obj.title}
                        <span className={`absolute end-5 border-r border-b border-solid border-white size-3 ${isOpen === i ? "-rotate-140" : "rotate-45"
                            }`}></span>
                    </button>
                    <RefStructer reCalculate={currentScreenWidth} open={isOpen === i} speed={300}>
                        <p className="text-base text-white p-3">{obj.content}</p>
                    </RefStructer>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
