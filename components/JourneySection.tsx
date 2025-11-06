// import React from 'react'

// import { BookOpen, Code, Server } from 'lucide-react'



// function JourneySection() {

//     const journey = [
//         {
//             date: "January 2024",
//             title: "Web Development Foundations",
//             description: "Started my journey with HTML, CSS, and JavaScript fundamentals",
//             icon: BookOpen
//         },
//         {
//             date: "May 2024",
//             title: "Frontend Development",
//             description: "Learned React.js and modern frontend development practices",
//             icon: Code
//         },
//         {
//             date: "August 2024",
//             title: "Backend Development",
//             description: "Expanded skills to Node.js and Express.js for full-stack development",
//             icon: Server
//         }
//     ];
    
//   return (
//       <section className=" container mx-auto px-4 py-4 lg:py-20 bg-black" id='journey'>
//           <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">My Journey</h2>
//           <div className="max-w-3xl mx-auto">
//               {journey.map((step, index) => (
//                   <div key={step.date} className="relative flex items-start mb-12 last:mb-0">
//                       <div className="absolute left-0 top-0 w-px h-full bg-border -ml-[1px]" />
//                       <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black text-white  border-2 border-white flex items-center justify-center -ml-4">
//                           <step.icon className="w-4 h-4" />
//                       </div>
//                       <div className="ml-12 text-white/60">
//                           <span className="text-sm font-medium ">{step.date}</span>
//                           <h3 className="text-lg font-semibold mt-1  ">{step.title}</h3>
//                           <p className="text-muted-foreground mt-1">{step.description}</p>
//                       </div>
//                   </div>
//               ))}
//           </div>
//       </section>
//   )
// }

// export default JourneySection




"use client";
import React from "react";
import { BookOpen, Code, Server, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

function JourneySection() {
    const journey = [
        {
            date: "January 2024",
            title: "Web Development Foundations",
            description:
                "Started my journey with HTML, CSS, and JavaScript fundamentals.",
            icon: BookOpen,
        },
        {
            date: "May 2024",
            title: "Frontend Development",
            description:
            "Learned React.js and modern frontend development practices.",
            icon: Code,
        },
        {
            date: "August 2024",
            title: "Backend Development",
            description:
            "Expanded skills to Node.js and Express.js for full-stack development.",
            icon: Server,
        },
        {
            date: "April 2025",
            title: "Joined Infusyx",
            description:
                "Began my professional journey as a Frontend Developer at Infusyx, building responsive UI components and integrating APIs for real-world projects.",
            icon: Briefcase,
        },
    ];

    return (
        <section
            id="journey"
            className=" mx-auto px-4 py-16 bg-black relative overflow-hidden"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
                My Journey
            </h2>

            <div className="max-w-3xl mx-auto relative">
                {/* Animated timeline line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute left-[19px] top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-pink-500"
                ></motion.div>

                {journey.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex  items-start mb-14"
                        >
                            <div className="relative z-10 flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-400 bg-zinc-900 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                <Icon className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div className="ml-8 text-white/80">
                                <span className="text-sm text-indigo-300 font-medium">
                                    {step.date}
                                </span>
                                <h3 className="text-lg font-semibold mt-1 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm mt-1 text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default JourneySection;
