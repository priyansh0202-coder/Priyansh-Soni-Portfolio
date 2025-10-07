// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    const navlinks = [
        { href: "#home", text: "Home" },
        { href: "#journey", text: "Journey" },
        { href: "#experience", text: "Experience" },
        { href: "#projects", text: "Projects" },
    ];

    return (
        <nav className=" border-2-black border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md bg-black ">
            <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">Priyansh</div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-16 mx-auto text-white font-medium">
                        {navlinks.map(({ href, text }) => (
                            <a key={href} href={href} className="hover:text-pink-400">
                                {text}
                            </a>
                        ))}
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
                    {navlinks.map(({ href, text }) => (
                            <a key={href} href={href} className="block hover:text-pink-400">
                                {text}
                            </a>
                        ))}
                </div>
            )}

        </nav>
    );
};

export default Navbar;





// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isAtTop, setIsAtTop] = useState(true);
//     const [scrollingDown, setScrollingDown] = useState(false);

//     const navLinks = [
//         { label: "Home", href: "/#home" },
//         { label: "About", href: "/#features" },
//         { label: "Projects", href: "/#why-upzyne" },
//         { label: "Contact Us", href: "/#contact" },
//     ];

//     useEffect(() => {
//         let lastScrollY = window.scrollY;

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             setIsAtTop(currentScrollY === 0);

//             if (currentScrollY > lastScrollY) {
//                 setScrollingDown(true);
//             } else if (currentScrollY < lastScrollY) {
//                 setScrollingDown(false);
//             }

//             lastScrollY = currentScrollY;
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Navbar should be expanded only at top
//     const isExpanded = isAtTop;

//     return (
//         <header className="fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-300 ease-in-out">
//             <div
//                 className={`flex items-center  justify-end md:justify-center w-full transition-all duration-300 ease-in-out 
//                     px-4 md:px-12 md:py-2 mt- md:mt-4 rounded-sm  
//                     gap-20 
//                     ${isExpanded ? "max-w-[800px] " : "max-w-[600px]  bg-white/20 backdrop-blur-md "}`}
//             >
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                    <p className="text-white text-2xl font-bold">Priyansh</p>
//                 </div>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex gap-6 text-[#FFFFFF] font-medium">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.href}
//                             href={link.href}
//                             className={`${link.label === "Home" ? "text-[#FF7A1B]" : ""
//                                 } hover:text-[#FF7A1B] transition`}
//                         >
//                             {link.label}
//                         </a>
//                     ))}
//                 </nav>

//                 {/* Mobile Menu Icon */}
//                 <div className="md:hidden ">
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="text-white"
//                     >
//                         {menuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Dropdown */}
//             {menuOpen && (
//                 <div className="absolute top-[60px] left-0 w-full bg-white px-12 pb-4 md:hidden z-50">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.href}
//                             href={link.href}
//                             className={`block py-2 text-[#321B0D] font-medium ${link.label === "Home" ? "text-[#FF7A1B]" : ""
//                                 }`}
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             {link.label}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Navbar;
