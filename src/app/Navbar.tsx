"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Navbar(): JSX.Element {
    //get scroll position
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (<nav className="h-24 w-full fixed flex flex-col gap-0 bg-light bg-opacity-70 backdrop-blur-sm z-50">
        <div className="transition-all duration-300  w-full h-16 flex items-center justify-center" style={
            scrollPosition > 100 ? { height: "0", opacity: 0 } : { height: "64px", opacity: 1 }
        }>
            <Image
                src="/logo-v-dark.svg"
                alt="Logo"
                width={50}
                height={50}
                className="transition-all duration-300"
                style={
                    scrollPosition > 100 ? { rotate: "45deg" } : { rotate: "0deg" }
                }
            ></Image>
        </div>
        <div className="h-8 w-full flex items-center justify-center transition-all duration-300"
            style={
                scrollPosition > 100 ? { height: "96px" } : { height: "32px" }
            }
        >
            <ul className="flex flex-row gap-6 text-dark text-md">
                <Link href="/" as="/" className="nav-link relative mix-blend-hard-light">Home</Link>
                <Link href="/portfolio" as="/portfolio" className="nav-link relative">Portfolio</Link>
                <Link href="/tools" as="/tools" className="nav-link relative">Tools</Link>
                <Link href="/contact" as="/contact" className="nav-link relative">Contact</Link>
            </ul>
        </div>
    </nav>)
}