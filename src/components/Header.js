"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-[#F8FAFC] py-3 px-4 md:px-8 shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 h-full cursor-pointer">
          {/* Logo */}
          <Image
            src="/Logo.png"
            alt="Supreme Group Logo"
            width={130}
            height={120}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={handleScrollToContact}
            className="bg-[#41CFFF] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2fc2f5] transition cursor-pointer"
          >
            Contact Us
          </button>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-xl text-black" />
          </Link>
          <div className="flex items-center space-x-1">
            <Image
              src="/translate.png"
              alt="translate icon"
              width={20}
              height={15}
            />
            <span className="text-sm font-semibold text-black">ENG</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black cursor-pointer p-2 rounded hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes size={20} className="text-black" />
          ) : (
            <FaBars size={20} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu + Background Blur */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-40 p-4">
         
          <div className="flex justify-center items-center space-x-4 mt-2 mb-4">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl text-black" />
            </Link>
            <div className="flex items-center space-x-1">
              <Image
                src="/translate.png"
                alt="translate icon"
                width={20}
                height={15}
              />
              <span className="text-sm font-semibold text-black">ENG</span>
            </div>
          </div>
           <button
            onClick={handleScrollToContact}
            className="bg-[#41CFFF] text-white px-5 py-2 rounded-full font-medium w-full text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
