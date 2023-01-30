import Link from "next/link"
import { ImArrowUpRight2 } from "react-icons/im"

export default function CallToAction({ text, link, hasIcon = true }: { text: string, link?: string, hasIcon?: boolean }): JSX.Element {
    if (link) {
        return (
            <Link
                href={link}
                className="flex flex-row gap-1 items-center bg-dark text-light py-2 px-4"
            >
                {hasIcon && <ImArrowUpRight2 />}
                <p className="font-bold text-md">{text}</p>
            </Link>
        )
    } else {
        return <></>
    }
}
