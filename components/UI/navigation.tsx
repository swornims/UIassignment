"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky bg-white z-30 top-0 shadow-md py-2 px-8">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="relative w-32 h-10 md:w-44 md:h-12">
          <Image fill src="/gymshala.svg" alt="gymshala logo" />
        </div>
        <button
          className="block md:hidden text-indigo-700 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:gap-10 gap-4 items-center w-full md:w-auto`}
        >
          <li className="font-medium">
            <Link href="/#features">Features</Link>
          </li>
          <li className="font-medium">
            <Link href="/#testimonials">Testimonials</Link>
          </li>
          <li className="font-medium">
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li className="font-medium">
            <Link href="/#faq">Faq</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Button link="/contact">Contact Us</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
