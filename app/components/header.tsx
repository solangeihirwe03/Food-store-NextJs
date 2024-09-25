import Image from "next/image"
import Navigation from "./navbar"
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


export default function Header() {
    return (
        <div className="my-4 flex flex-col justify-center items-center">
            <div className="mt-28 flex gap-5 items-center">
                <Image
                    src="/images/logo.jpg"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <div className="flex items-center border-2 border-[#686868] px-6 py-2.5 rounded-full w-[28vw] gap-3">
                    <input
                        type="text"
                        placeholder="Select for items..."
                        className="w-[14vw]"
                    />
                    <span className="w-1 h-7 border-l-2 border-black"></span>
                    <p>All Categories</p>
                </div>
                <div className="flex items-center gap-7">
                    <div className="relative">
                        <span className="absolute h-5 w-5 rounded-full bg-orange-500 text-center text-white font-medium right-[-7px] top-[-6px]">3</span>
                        <IoHeartOutline fontSize={30} />
                    </div>
                    <div className="relative">
                        <span className="absolute h-5 w-5 rounded-full bg-orange-500 text-center text-white font-medium right-[-7px] top-[-6px]">12</span>
                        <IoCartOutline fontSize={30} />
                    </div>
                    <p className="flex items-center gap-3">
                        <FiUser fontSize={30} />
                        <span>your Account</span>
                    </p>
                </div>
            </div>
            <Navigation />
        </div>
    )
}