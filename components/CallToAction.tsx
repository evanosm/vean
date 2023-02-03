"use client"

import Link from "next/link"
import { ImArrowUpRight2 } from "react-icons/im"

export default function CallToAction({ text, link, hasIcon = true }: { text: string, link?: string, hasIcon?: boolean }): JSX.Element {
    if (link) {
        return (
            <Link
                href={link}
                className="flex flex-row gap-1 items-center bg-dark text-light py-3 px-3 text-xs"
            >
                {hasIcon && <ImArrowUpRight2 />}
                <span className="font-bold">{text}</span>
            </Link>
        )
    } else {
        return <></>
    }
}
