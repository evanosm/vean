import Link from "next/link"
import { ImArrowUpRight2 } from "react-icons/im"

export default function CallToAction({ text, link, hasIcon = true }: { text: string, link?: string, hasIcon?: boolean }): JSX.Element {
    if (link) {
        return <Link href={link} className="flex flex-row gap-2 items-center text-light bg-dark text-md font-bold px-3 py-2 text-sm lg:text-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                {text}
                {hasIcon && <ImArrowUpRight2 />}
        </Link>
    } else {
        return <div className="flex flex-row gap-2 items-center text-light bg-dark text-md font-bold"></div>
    }
}
