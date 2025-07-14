// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    return (
        <nav className=" border-2 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md">
            <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">Priyansh</div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-16 mx-auto text-white font-medium">
                        <a href="#home" className="hover:text-pink-400">Home</a>
                        <a href="#about" className="hover:text-pink-400">About</a>
                        <a href="#projects" className="hover:text-pink-400">Projects</a>
                        <a href="#contact" className="hover:text-pink-400">Contact</a>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="md:hidden text-white" onClick={toggleNav}>
                        {navOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full z-50 bg-black px-8 pb-4 pt-2 space-y-6 text-white shadow-lg">
                    <a href="#home" className="block hover:text-pink-400">Home</a>
                    <a href="#about" className="block hover:text-pink-400">About</a>
                    <a href="#projects" className="block hover:text-pink-400">Projects</a>
                    <a href="#contact" className="block hover:text-pink-400">Contact</a>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
