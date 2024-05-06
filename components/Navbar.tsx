"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

interface Menu {
  title: string;
  link: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const Menu: Menu[] = [
    { title: "About Us", link: "/#about-us" },
    { title: "Why Us", link: "/#why-us" },
    { title: "Services", link: "/#services" },
    { title: "Projects", link: "/#projects" },
    { title: "Our Team", link: "/#our-team" },
  ];

  return (
    <nav className="fixed top-4 left-6 right-6 bg-white z-20 rounded-full">
      <div className="w-full rounded-full border px-5 md:px-10 py-3 flex justify-between items-center bg-white ">
        <a href={"/#about-us"} className="flex items-center">
          <Image
            src="/WHITE-NEW 1.png"
            alt="logo"
            width={40}
            height={40}
            className="mr-3 md:mr-6"
          />
          <p className="font-medium">Retorika Film</p>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {Menu.map((menu) => (
            <a key={menu.title} href={menu.link}>
              {menu.title}
            </a>
          ))}
          {/* contact */}
          <a className="bg-black text-white px-4 py-2 rounded-full" href="#">
            Contact Us
          </a>
        </div>
        <button aria-label="hamburger menu" className="p-1 text-3xl lg:hidden" onClick={handleOpen}>
          <FaBars />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full right-0 w-full max-w-[250px] flex justify-center items-center"
          >
            <div className="bg-white rounded-md flex flex-col m-4 p-4 w-full gap-2">
              {Menu.map((menu) => (
                <a
                  key={menu.title}
                  href={menu.link}
                  className="flex items-center justify-center py-2"
                >
                  {menu.title}
                </a>
              ))} 
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
