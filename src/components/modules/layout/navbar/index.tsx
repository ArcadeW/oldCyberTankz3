"use client";

import { useState } from "react";
import Link from "next/link";
import { links } from "./links";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full h-14 border-b border-foreground/20 px-4 lg:px-14">
      <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      <button
        className="block lg:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex items-center space-x-3 lg:space-x-3 lg:space-y-0 space-y-3 absolute lg:relative lg:top-0 top-14 left-0 w-full lg:w-auto bg-background z-[9999] lg:bg-transparent lg:border-0 border-t lg:border-t-0 border-foreground/20 lg:px-0 px-4 py-2 lg:py-0`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className={cn(
                link.url.length === 0
                  ? "cursor-not-allowed text-foreground/60"
                  : "text-foreground hover:text-foreground/80"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
