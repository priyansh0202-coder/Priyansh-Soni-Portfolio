// import React from 'react'

// function Footer() {
//   return (
//       <footer className="container mx-auto px-4 py-8 text-center text-white bg-black  border-t">
//           <p>© 2025 • Built with Next.js and Tailwind CSS</p>
//       </footer>
//   )
// }

// export default Footer



import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-zinc-800">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"></div>

      <div className="container mx-auto px-6 py-10 text-center text-zinc-300">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} • Designed & Developed by{" "}
          <span className="text-indigo-400 font-medium">Priyansh Soni</span>
        </p>

        <p className="text-xs md:text-sm mt-1 text-zinc-500">
          Built with <span className="text-violet-400">Next.js</span> and{" "}
          <span className="text-violet-400">Tailwind CSS</span>
        </p>

        <div className="flex justify-center gap-6 mt-5">
          <a
            href="https://github.com/priyansh0202-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/priyansh-soni-625ab2220/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:priyanshsoni36@gmail.com"
            className="text-zinc-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

