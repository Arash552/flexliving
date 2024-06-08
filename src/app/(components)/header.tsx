import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full px-5 py-2 flex justify-between items-center bg-white">
        <img src="/Logo.png" alt="" className="h-10" />
        <div className="flex flex-col gap-y-1 sm:hidden">
          <div className="w-5 h-[2px] bg-black rounded-xl"></div>
          <div className="w-5 h-[2px] bg-black rounded-xl"></div>
          <div className="w-5 h-[2px] bg-black rounded-xl"></div>
        </div>
        <ul className="list-none gap-x-2 items-center text-black hidden sm:flex cursor-pointer text-sm">
          <Link href={""}>Home</Link>
          <Link href={"/booking"}>Landord</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={""}>Contacts</Link>
        </ul>
      </header>
    )
}