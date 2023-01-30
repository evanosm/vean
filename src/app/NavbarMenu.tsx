"use client"
import Link from "next/link"

import { easeInOut, motion } from "framer-motion"
import { useEffect, useRef } from 'react';

export default function NavbarMenu({setState, state}: {setState: Function, state: boolean}) {
    const path = window.location.pathname;
    useEffect(() => {
        const links: NodeListOf<HTMLElement> = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                links.forEach((link) => {
                    link.style.opacity = "0.1";
                    link.style.marginLeft = "0";
                });
                link.style.opacity = "1";
                link.style.marginLeft = "1rem";

            });
            link.addEventListener("mouseleave", () => {
                links.forEach((link) => {
                    link.style.opacity = "1";
                    link.style.marginLeft = "0";
                });
            });
        });
    }, []);


    return (
        <div className="w-screen h-screen fixed inset-0 z-30 flex justify-center transition-transform duration-300">
            <ul className="w-full h-full absolute inset-0 flex flex-col motion">
                <motion.li
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    exit={{ width: "0%", transition: {duration: .3, delay: 0.5} }}
                    transition={{ duration: 0.3, delay: 0.075 }}
                    className="w-0 h-1/4 bg-dark"></motion.li>
                <motion.li
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    exit={{ width: "0%", transition: {duration: .3, delay: 0.3} }}
                    transition={{ duration: 0.3, delay: 0 }}
                    className="w-0 h-1/4 bg-dark"></motion.li>
                <motion.li
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    exit={{ width: "0%", transition: {duration: .3, delay: 0.4} }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="w-0 h-1/4 bg-dark"></motion.li>
                <motion.li
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    exit={{ width: "0%", transition: {duration: .3, delay: 0.5} }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-0 h-1/4 bg-dark"></motion.li>
            </ul>
            <div className="container px-3 flex justify-start items-center">
                <ul className="flex gap-6 items-start justify-start flex-col">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, transition: { duration: 0.3, delay: 0 } }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                    >
                        <Link
                            href={"/"}
                            as={"/"}
                            className="text-light text-5xl md:text-7xl uppercase transition-all duration-300 flex items-center relative nav-link"
                            style={path === "/" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
                            onClick={() => setState(false)}
                        >
                            Home
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, transition: { duration: 0.3, delay: 0.1 } }}
                        transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}>
                        <Link
                            href={"/projects"}
                            as={"/projects"}
                            className="text-light text-5xl md:text-7xl uppercase transition-all duration-300 flex items-center relative nav-link"
                            style={path === "/projects" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
                            onClick={() => setState(false)}
                        >
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, transition: { duration: 0.3, delay: 0.2 } }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}>
                        <Link
                            href={"/tools"}
                            as={"/tools"}
                            className="text-light text-5xl md:text-7xl uppercase transition-all duration-300 flex items-center relative nav-link"
                            style={path === "/contact" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
                            onClick={() => setState(false)}
                        >
                            Tools
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, transition: { duration: 0.3, delay: 0.2 } }}
                        transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}>
                        <Link
                            href={"/contact"}
                            as={"/contact"}
                            className="text-light text-5xl md:text-7xl uppercase transition-all duration-300 flex items-center relative nav-link"
                            style={path === "/contact" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
                            onClick={() => setState(false)}
                        >
                            Contact
                        </Link>
                    </motion.div>
                </ul>
            </div>
        </div>
    )
}
