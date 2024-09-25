import Link from "next/link"

export default function Navigation(){
    return (
        <header className="px-3">
            <Link href={"/"} className="px-3">Home</Link>
            <Link href={"/about"} className="px-3">About</Link>
            <Link href={"/contact"} className="px-3">Contact</Link>
        </header>
    )
}