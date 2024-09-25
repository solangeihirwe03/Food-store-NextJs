import Link from "next/link"
import { IoMenu } from "react-icons/io5";

export default function Navigation() {
    return (
        <header className=" py-2 flex items-center border-2 w-[100vw] pl-[32rem] mt-6 gap-9">
            <Link href={"/"} className="px-4 py-2 bg-orange-600 text-white flex items-center gap-2 rounded-md">
                <span>
                    <IoMenu fontSize={25}/>
                </span>All Categories
            </Link>
            <Link href={"/menu"} className="px-3">Menu</Link>
            <Link href={"/about"} className="px-3">About us</Link>
            <Link href={"/blog"} className="px-3">Blogs</Link>
            <Link href={"/contact"} className="px-3">Contact us</Link>
        </header>
    )
}