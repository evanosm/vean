"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import NavbarMenu from "./NavbarMenu";
import { AnimatePresence } from 'framer-motion';
import gsap from "gsap";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="z-40 w-screen py-6 flex flex-row items-center justify-center fixed top-0">
                <div className="container px-3 flex justify-between items-center relative">
                    <div className="left-0 relative">
                        <Image
                            src="/logo-v-dark.svg"
                            alt="logo"
                            width={50}
                            height={50}
                        ></Image>
                    </div>

                    <ul className="hidden md:flex gap-x-3">
                        <Link
                            href='/'
                            className="text-dark text-md hover:-translate-y-1 transition-all duration-300"
                        >HOME</Link>
                        <li className="select-none">|</li>
                        <Link
                            href='/projects'
                            className="text-dark text-md hover:-translate-y-1 transition-all duration-300"
                        >PROJECTS</Link>
                        <li className="select-none">|</li>
                        <Link
                            href='/tools'
                            className="text-dark text-md hover:-translate-y-1 transition-all duration-300"
                        >TOOLS</Link>
                        <li className="select-none">|</li>
                        <Link
                            href='/contact'
                            className="text-dark text-md hover:-translate-y-1 transition-all duration-300"
                        >CONTACT</Link>
                    </ul>

                    <button className="md:hidden font-md text-dark flex items-center transition-all duration-300"
                        style={isOpen ? { color: "#FAFAFA" } : { color: "#18181B" }}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            
            <AnimatePresence>
                {isOpen && <NavbarMenu
                    setState={setIsOpen}
                    state={isOpen}
                />}
            </AnimatePresence>
            
        </>
    )
}
