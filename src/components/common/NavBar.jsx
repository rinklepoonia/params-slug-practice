"use client"
import React, { useState } from "react";
import { RefStructer } from "./RefStructer";

const NavBar = () => {
    const [isDropOpen, setisDropOpen] = useState(-1);
    const list = [
        {
            title: "Link 1",
            url: "/",
        },
        {
            title: "Menu",
            list: [
                {
                    title: "List  Item 1",
                    url: "",
                },
                {
                    title: "List  Item 2",
                    url: "",
                },
                {
                    title: "List  Item 3",
                    url: "",
                },
                {
                    title: "List  Item 4",
                    url: "",
                },
                {
                    title: "List  Item 5",
                    url: "",
                },
            ],
        },
        {
            title: "Link 1",
            url: "/",
        },
        {
            title: "Link 1",
            url: "/",
        },
        {
            title: "Link 1",
            url: "/",
        },
        {
            title: "Menu 2",
            list: [
                {
                    title: "List  Item 1",
                    url: "",
                },
                {
                    title: "List  Item 2",
                    url: "",
                },
                {
                    title: "List  Item 3",
                    url: "",
                },
                {
                    title: "List  Item 4",
                    url: "",
                },
                {
                    title: "List  Item 5",
                    url: "",
                },
            ],
        },
    ];
    return (
        <div className="container mx-auto py-4">
            <nav className=" flex items-center justify-between">
                <a href="/">Page logo</a>
                <div className=" flex items-center gap-x-3">
                    {list.map((obj, index) =>
                        obj.url ? (
                            <a href={obj.url} className="block">
                                {obj.title}
                            </a>
                        ) : (
                            <div className=" relative">
                                {" "}
                                <p
                                    onClick={() => setisDropOpen(index)}
                                    href="#page"
                                    className="relative">
                                    Menu
                                </p>{" "}
                                <div className="absolute top-full ">

                                    <RefStructer open={isDropOpen === index}>
                                        <div
                                            className={` shadow-md shadow-white bg-black/60 p-4 min-w-[200px] space-y-3  border border-solid border-white ${isDropOpen
                                                ? "translate-y-3"
                                                : "opacity-0 pointer-events-none "
                                                }`}>
                                            <p className="text-sm border-b border-solid border-white/30">
                                                Hello World
                                            </p>
                                            <p className="text-sm border-b border-solid border-white/30">
                                                Hello World
                                            </p>
                                            <p className="text-sm border-b border-solid border-white/30">
                                                Hello World
                                            </p>
                                            <p className="text-sm border-b border-solid border-white/30">
                                                Hello World
                                            </p>
                                        </div>
                                    </RefStructer>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <button>visit</button>
            </nav>
        </div>
    );
};

export default NavBar;