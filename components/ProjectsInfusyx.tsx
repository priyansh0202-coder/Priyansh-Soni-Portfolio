// import React from "react";
// import ScrollAnimation from "./ScrollAnimation";

// function InfusyxProjects() {
//     const projects = [
//         {
//             title: "Upzyne CRM Platform",
//             description:
//                 "Developed a full-featured CRM platform with integrated lead automation, HRMS, and user management modules. Optimized API performance by resolving redundant calls, ensuring faster data handling and a seamless user experience.",
//             technologies: ["Next.js","TypeScript","Rest API", "Tailwind CSS","Shad CN UI", "React"],
//             link: "https://login.upzyne.com",
//             borderColor: "border-violet-500/20",
//             hoverBorder: "hover:border-violet-500/40",
//             textColor: "text-violet-400",
//             hoverText: "hover:text-violet-300",
//         }, 
//         {
//             title: "Upzyne Website",
//             description:
//                 "A fully responsive and visually engaging marketing site for the Upzyne CRM platform, built from scratch with smooth animations, modern UI/UX, and interactive transitions to showcase features and boost engagement",
//             technologies: ["Next.js","TypeScript", "Tailwind CSS","Framer Motion", "React"],
//             link: "https://upzyne.com",
//             borderColor: "border-indigo-500/20",
//             hoverBorder: "hover:border-indigo-500/40",
//             textColor: "text-indigo-400",
//             hoverText: "hover:text-indigo-300",
//         },
//         {
//             title: "Lead Automation Portal",
//             description:
//                 "Automated the lead management flow with API-driven updates and integrated analytics modules.",
//             link: "https://your-project3-link.com",
//             borderColor: "border-blue-500/20",
//             hoverBorder: "hover:border-blue-500/40",
//             textColor: "text-blue-400",
//             hoverText: "hover:text-blue-300",
//         },
//         {
//             title: "Analytics & Reporting Module",
//             description:
//                 "Created a visual reporting module with chart integrations for better performance tracking.",
//             link: "https://your-project4-link.com",
//             borderColor: "border-blue-500/20",
//             hoverBorder: "hover:border-blue-500/40",
//             textColor: "text-emerald-400",
//             hoverText: "hover:text-emerald-300",
//         },
//     ];

//     return (
//         <section className="container mx-auto px-4 py-16 bg-black">
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
//                 Projects at Infusyx
//             </h2>

//             <div className="relative w-full max-w-6xl mx-auto">
//                 {/* gradient background glow */}
//                 <div className="absolute -inset-2 rounded-lg bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-20 blur-2xl"></div>

//                 {/* project cards */}
//                 <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 border border-zinc-700 rounded-lg bg-black p-8 text-slate-300">
//                     {projects.map((project, index) => (
//             <ScrollAnimation direction="up" delay={0.3}>
//                         <div
//                             key={index}
//                             className={`group shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-zinc-800/60 relative border ${project.borderColor} bg-zinc-800/40 rounded-xl p-10 ${project.hoverBorder} transition-all duration-300`}
//                         >
//                             <h5
//                                 className={`text-lg font-semibold ${project.textColor} group-hover:${project.hoverText} transition-colors`}
//                             >
//                                 {project.title}
//                             </h5>
//                             <p className="text-sm text-slate-400 mt-2">
//                                 {project.description}
//                             </p>

//                             {/* technologies */}
//                             {project.technologies && (
//                                 <div className="text-xs text-slate-500 mt-2">
//                                     {project.technologies.join(", ")}
//                                 </div>
//                             )}
//                             <a
//                                 href={project.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className={`inline-block mt-4 ${project.textColor} ${project.hoverText} text-sm font-medium`}
//                             >
//                                 Visit Project →
//                             </a>
//                         </div>
//                     </ScrollAnimation>
//                     ))}
//                 </div>
//                 </div>
//         </section>
//     );
// }

// export default InfusyxProjects;

import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";

function InfusyxProjects() {
    const projects = [
        {
            title: "Upzyne CRM Platform",
            description:
                "Developed a full-featured CRM platform with integrated lead automation, HRMS, and user management modules. Optimized API performance by resolving redundant calls for faster data handling and a seamless user experience.",
            technologies: ["Next.js", "TypeScript", "Rest API", "Tailwind CSS", "Shad CN UI", "React", "React-Chartjs-2"],
            link: "https://login.upzyne.com",
            color: "from-violet-500 to-indigo-500",
        },
        {
            title: "Upzyne Website",
            description:
                "A fully responsive and visually engaging marketing site for the Upzyne CRM platform with smooth animations, interactive transitions, and elegant UI/UX design.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
            link: "https://upzyne.com",
            color: "from-indigo-500 to-blue-500",
        },
        {
            title: "Infusyx Website",
            description:
                "Developed a fully responsive company website with smooth parallax animations and interactive 3D cards, delivering a dynamic and modern user experience.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            link: "https://infusyx.com",
            color: "from-blue-500 to-cyan-400",
        },
        {
            title: "sGlobex Website",
            description:
                "Developed a fully responsive company website with smooth animations, interactive transitions, and elegant UI/UX design.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "https://sglobex.com",
            color: "from-emerald-400 to-teal-500",
        },
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-black">
            {/* Gradienty-style background */}
        

            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">
                Projects at Infusyx
            </h2>

            {/* Timeline wrapper */}
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white to-transparent"></div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <ScrollAnimation direction="up" delay={0.2 * index} key={index}>
                            <div
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Connector dot */}
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30 absolute left-1/2 -translate-x-1/2 md:-translate-x-2"></div>

                                {/* Card */}
                                <div
                                    className={`relative bg-black/50 backdrop-blur-md border border-white/10 p-6 md:w-[48%] rounded-2xl shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)] transition-all duration-500 hover:-translate-y-2 ${index % 2 === 0 ? "md:mr-auto md:pl-12" : "md:ml-auto md:pr-12"
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-zinc-800/40`}
                                    ></div>
                                    <div className="relative z-10">
                                        <h5 className="text-xl font-semibold text-white mb-2">
                                            {project.title}
                                        </h5>
                                        <p className="text-slate-400 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-white rounded-md text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="bg-black text-white hover:text-black hover:scale-105 transition-transform"
                                        >
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-violet-400 hover:text-white text-sm font-medium"
                                        >
                                            Visit Project →
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InfusyxProjects;
