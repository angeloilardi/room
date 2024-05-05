
"use client";
import { useState } from "react";
import Link from "next/link"
import IconClose from "./IconClose";
import IconMenu from "./IconMenu";
import Image from "next/image";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["home", "shop", "about", "contact"];
  return (
    <nav
      className={`z-20 flex absolute top-0 left-0 w-full h-[110px] justify-center items-center text-white p-4 ${
        isMenuOpen ? `bg-white` : "bg-transparent"
      }`}
    >
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        {isMenuOpen ? <IconClose /> : <IconMenu />}
      </button>
      <div
        className={`flex w-full md:justify-start ${
          isMenuOpen ? `justify-between` : `justify-center`
        }`}
      >
        <p
          className={`${
            isMenuOpen && "hidden"
          } text-center text-2xl tracking-wide md:text-4xl`}
        >
          room
        </p>
        {/* Desktop navigation */}
        <div className={`hidden md:flex gap-8 items-center ml-14`}>
          {menuItems.map((item, index) => {
            return (
              <Link key={index} href={"#"}>
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : `hidden`
          } text-black gap-8 ml-auto flex`}
        >
          {menuItems.map((item, index) => {
            return (
              <Link key={index} href={"#"}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
