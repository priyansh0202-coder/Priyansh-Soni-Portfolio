// import React from 'react'

// import { Github, Linkedin, Mail, Phone } from 'lucide-react'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import { Typewriter } from 'react-simple-typewriter'

// const contactInfo = {
//         email: "priyanshsoni36@gmail.com",
//         phone: "+91 9981887858"
// };
    
// function Herosection() {
//   return (
//       <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32 ">
//           <div className="max-w-4xl mx-auto text-center">
//               <span className="text-lg md:text-3xl lg:text-6xl font-bold mb-4 bg-gradient-to-r  from-white to-[#ffb647] text-transparent bg-clip-text leading-relaxed font-serif"> Hi I'm Priyansh Soni  </span>
//               <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold mb-6 mt-10 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text ">
//                   <Typewriter
//                       words={['Full Stack Developer', "Problem Solver", "Performance Optimizer"]}
//                       loop={false}
//                       cursor
//                       cursorStyle="|"
//                       typeSpeed={100}
//                       deleteSpeed={50}
//                       delaySpeed={1500}
//                   />
//               </h1>
//               <p className=" text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 lg:mb-20 lg:min-w-full px-4">
//                   A Full Stack Developer passionate about building scalable web applications with seamless frontend and backend integration. Skilled in React, Next.js, Node.js, and MongoDB, MySQL with a strong focus on problem-solving and performance optimization.
//               </p>

//               <div className="flex justify-center gap-4 mb-12">
//                   <TooltipProvider>
//                       <Tooltip>
//                           <TooltipTrigger asChild>
//                               <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
//                                   <Link href="https://github.com/priyansh0202-coder">
//                                       <Github className="h-5 w-5" />
//                                   </Link>
//                               </Button>
//                           </TooltipTrigger>
//                           <TooltipContent>GitHub</TooltipContent>
//                       </Tooltip>
//                   </TooltipProvider>
//                   <TooltipProvider>
//                       <Tooltip>
//                           <TooltipTrigger asChild>
//                               <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
//                                   <Link href="https://www.linkedin.com/in/priyansh-soni-625ab2220/">
//                                       <Linkedin className="h-5 w-5" />
//                                   </Link>
//                               </Button>
//                           </TooltipTrigger>
//                           <TooltipContent>LinkedIn</TooltipContent>
//                       </Tooltip>
//                   </TooltipProvider>
//               </div>

//               {/* Contact Information */}
//               <div className="flex flex-col items-center gap-4">
//                   <div className="flex items-center gap-2 text-muted-foreground hover:scale-105 transition-transform">
//                       <Mail className="h-4 w-4" />
//                       <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
//                           {contactInfo.email}
//                       </a>
//                   </div>
//                   <div className="flex items-center gap-2 text-muted-foreground hover:scale-105 transition-transform">
//                       <Phone className="h-4 w-4" />
//                       <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
//                           {contactInfo.phone}
//                       </a>
//                   </div>
//               </div>
//           </div>
//       </div>
//   )
// }

// export default Herosection






"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Photo from "../public/WhatsApp Image 2025-06-16 at 15.30.35.jpeg"



const contactInfo = {
    email: "priyanshsoni36@gmail.com",
    phone: "+91 9981887858",
};

const SkillsImage = 
    [
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
        { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        // { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
        { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        // { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "NextJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]


function Herosection() {
    return (
        <section id="home" className="relative overflow-hidden bg-black text-white pt-24 ">
            {/* Blurred Gradient Background */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700 opacity-30 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700 opacity-30 rounded-full blur-[180px] translate-x-1/3 -translate-y-1/2 z-0" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-6 md:py-4 text-center">
                {/* Circular Photo + Verified */}
                {/* <div className="flex flex-col items-center mb-6">
                    <Image
                        src={Photo} 
                        alt="Priyansh Soni"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-white"
                    />
                   
                </div> */}
                {/* <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-400 opacity-10 rounded-full blur-[280px] -translate-x-1/3 -translate-y-1/2 z-0" /> */}
                {/* Name */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-[#ffb647] text-transparent bg-clip-text font-serif">
                    Hi I'm Priyansh Soni
                </h1>

                {/* Typewriter */}
                <h2 className="text-xl md:text-3xl font-bold mb-10 text-white bg-clip-text text-transparent">
                    <Typewriter
                        words={['Full Stack Developer', "Problem Solver", "Performance Optimizer"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-white/50 mb-14 px-4 max-w-4xl mx-auto">
                    A Full Stack Developer passionate about building scalable web applications with seamless frontend and backend integration. Skilled in React, Next.js, Node.js, and MongoDB, MySQL with a strong focus on problem-solving and performance optimization.
                </p>

                {/* Social Buttons */}
                <div className="flex justify-center gap-4 mb-8 ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform  text-white bg-inherit">
                                    <Link href="https://github.com/priyansh0202-coder" target="_blank">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>GitHub</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform text-white bg-inherit">
                                    <Link href="https://www.linkedin.com/in/priyansh-soni-625ab2220/" target="_blank">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>LinkedIn</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center gap-2 mb-12 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                            {contactInfo.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                            {contactInfo.phone}
                        </a>
                    </div>
                </div>

                {/* Marquee Icons */}
                {/* <div className="overflow-hidden py-6">
                    <div className="flex animate-marquee space-x-10 w-max px-4 items-center">
                        {SkillsImage.map((icon, idx) => (
                            <img
                                key={idx}
                                src={icon.url}
                                alt={icon.name}
                                title={icon.name}
                                className="h-10 w-10  hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Herosection;
