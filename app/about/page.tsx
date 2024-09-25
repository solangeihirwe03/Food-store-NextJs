import Image from "next/image"

export default function About() {
    return (
        <div className="w-full h-[60vh]">
            <Image
                src="/images/computer.jpg"
                alt="machine image"
                width={400}
                height={500}
            />
        </div>
    )
}