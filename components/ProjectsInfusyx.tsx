
// import React from "react";
// import ScrollAnimation from "./ScrollAnimation";
// import { Button } from "./ui/button";

// function InfusyxProjects() {
//     const projects = [
//         {
//             title: "Upzyne CRM Platform",
//             description:
//                 "Developed a full-featured CRM platform with integrated lead automation, HRMS, and user management modules. Optimized API performance by resolving redundant calls for faster data handling and a seamless user experience.",
//             technologies: ["Next.js", "TypeScript", "Rest API", "Tailwind CSS", "Shad CN UI", "React", "React-Chartjs-2"],
//             link: "https://login.upzyne.com",
//             color: "from-violet-500 to-indigo-500",
//         },
//         {
//             title: "Upzyne Website",
//             description:
//                 "A fully responsive and visually engaging marketing site for the Upzyne CRM platform with smooth animations, interactive transitions, and elegant UI/UX design.",
//             technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
//             link: "https://upzyne.com",
//             color: "from-indigo-500 to-blue-500",
//         },
//         {
//             title: "Infusyx Website",
//             description:
//                 "Developed a fully responsive company website with smooth parallax animations and interactive 3D cards, delivering a dynamic and modern user experience.",
//             technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//             link: "https://infusyx.com",
//             color: "from-blue-500 to-cyan-400",
//         },
//         {
//             title: "sGlobex Website",
//             description:
//                 "Developed a fully responsive company website with smooth animations, interactive transitions, and elegant UI/UX design.",
//             technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
//             link: "https://sglobex.com",
//             color: "from-emerald-400 to-teal-500",
//         },
//     ];

//     return (
//         <section className="relative py-24 px-6 overflow-hidden bg-black">
//             {/* Gradienty-style background */}
        

//             <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">
//                 Projects at Infusyx
//             </h2>

//             {/* Timeline wrapper */}
//             <div className="relative max-w-5xl mx-auto">
//                 <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white to-transparent"></div>

//                 <div className="space-y-16">
//                     {projects.map((project, index) => (
//                         <ScrollAnimation direction="up" delay={0.2 * index} key={index}>
//                             <div
//                                 className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
//                                     }`}
//                             >
//                                 {/* Connector dot */}
//                                 <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30 absolute left-1/2 -translate-x-1/2 md:-translate-x-2"></div>

//                                 {/* Card */}
//                                 <div
//                                     className={`relative bg-black/50 backdrop-blur-md border border-white/10 p-6 md:w-[48%] rounded-2xl shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)] transition-all duration-500 hover:-translate-y-2 ${index % 2 === 0 ? "md:mr-auto md:pl-12" : "md:ml-auto md:pr-12"
//                                         }`}
//                                 >
//                                     <div
//                                         className={`absolute inset-0 rounded-2xl bg-zinc-800/40`}
//                                     ></div>
//                                     <div className="relative z-10">
//                                         <h5 className="text-xl font-semibold text-white mb-2">
//                                             {project.title}
//                                         </h5>
//                                         <p className="text-slate-400 text-sm mb-4">
//                                             {project.description}
//                                         </p>
//                                         <div className="flex flex-wrap gap-2 mb-4">
//                                             {project.technologies.map((tech) => (
//                                                 <span
//                                                     key={tech}
//                                                     className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-white rounded-md text-xs"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                         <Button
//                                             variant="outline"
//                                             size="sm"
//                                             asChild
//                                             className="bg-black text-white hover:text-black hover:scale-105 transition-transform"
//                                         >
//                                         <a
//                                             href={project.link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-violet-400 hover:text-white text-sm font-medium"
//                                         >
//                                             Visit Project →
//                                             </a>
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </ScrollAnimation>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default InfusyxProjects;




import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";

function InfusyxProjects() {
    const professionalProjects = [
        {
            title: "Upzyne CRM Platform",
            description:
                "Developed a full-featured CRM platform with integrated lead automation, HRMS, and user management modules. Optimized API performance by resolving redundant calls for faster data handling and a seamless user experience.",
            technologies: [
                "Next.js",
                "TypeScript",
                "REST API",
                "Tailwind CSS",
                "Shad CN UI",
                "React",
                "React Chart.js",
            ],
            link: "https://login.upzyne.com",
            metric: "3,482",
            metricLabel: "Active Users",
            growth: "+18.4%",
            graph: [25, 42, 35, 55, 48, 70, 61, 82, 75, 96],
        },
        {
            title: "Upzyne Website",
            description:
                "A fully responsive and visually engaging marketing site for the Upzyne CRM platform with smooth animations, interactive transitions, and elegant UI/UX design.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "React",
            ],
            link: "https://upzyne.com",
            metric: "12.6K",
            metricLabel: "Page Views",
            growth: "+28.7%",
            graph: [20, 35, 30, 52, 43, 65, 58, 78, 69, 92],
        },
        {
            title: "Infusyx Website",
            description:
                "Developed a fully responsive company website with smooth parallax animations and interactive 3D cards, delivering a dynamic and modern user experience.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
            ],
            link: "https://infusyx.com",
            metric: "8,932",
            metricLabel: "Page Views",
            growth: "+21.3%",
            graph: [18, 30, 25, 48, 40, 63, 54, 72, 66, 88],
        },
        {
            title: "sGlobex Website",
            description:
                "Developed a fully responsive company website with smooth animations, interactive transitions, and elegant UI/UX design.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ],
            link: "https://sglobex.com",
            metric: "5,489",
            metricLabel: "Page Views",
            growth: "+16.9%",
            graph: [22, 36, 29, 48, 42, 59, 51, 70, 63, 84],
        },
    ];


    /*
     * Generates the SVG points for the line graph.
     */
    const generatePoints = (
        data: number[],
        width: number = 300,
        height: number = 130,
        padding: number = 12
    ) => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min || 1;

        return data
            .map((value: number, index: number) => {
                const x =
                    padding +
                    (index * (width - padding * 2)) / (data.length - 1);

                const y =
                    height -
                    padding -
                    ((value - min) / range) *
                    (height - padding * 2);

                return `${x},${y}`;
            })
            .join(" ");
    };

    const generateAreaPoints = (
        data: number[],
        width: number = 300,
        height: number = 130,
        padding: number = 12
    ) => {
        const linePoints = generatePoints(
            data,
            width,
            height,
            padding
        );

        return `${padding},${height - padding} ${linePoints} ${width - padding
            },${height - padding}`;
    };

    /*
     * Reusable line graph component.
     */
    const LineGraph = ({
        data,
        width = 300,
        height = 130,
        large = false,
    }: {
        data: number[];
        width?: number;
        height?: number;
        large?: boolean;
    }) => {
        const linePoints = generatePoints(
            data,
            width,
            height,
            14
        );

        const areaPoints = generateAreaPoints(
            data,
            width,
            height,
            14
        );

        return (
            <div
                className={`relative w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-black/40 ${large ? "h-[250px] sm:h-[280px]" : "h-[170px]"
                    }`}
            >
                {/* Background grid */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                >
                    <defs>
                        <linearGradient
                            id={`areaGradient-${large ? "large" : "small"}-${data.join(
                                "-"
                            )}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#8b5cf6"
                                stopOpacity="0.30"
                            />
                            <stop
                                offset="100%"
                                stopColor="#8b5cf6"
                                stopOpacity="0"
                            />
                        </linearGradient>

                        <filter
                            id={`glow-${large ? "large" : "small"}-${data.join(
                                "-"
                            )}`}
                        >
                            <feGaussianBlur
                                stdDeviation="2.5"
                                result="coloredBlur"
                            />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Area */}
                    <polygon
                        points={areaPoints}
                        fill={`url(#areaGradient-${large ? "large" : "small"
                            }-${data.join("-")})`}
                    />

                    {/* Line */}
                    <polyline
                        points={linePoints}
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth={large ? "2.5" : "2"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter={`url(#glow-${large ? "large" : "small"}-${data.join(
                            "-"
                        )})`}
                    />

                    {/* Data points */}
                    {data.map((value, index) => {
                        const max = Math.max(...data);
                        const min = Math.min(...data);
                        const range = max - min || 1;

                        const x =
                            14 +
                            (index * (width - 28)) /
                            (data.length - 1);

                        const y =
                            height -
                            14 -
                            ((value - min) / range) *
                            (height - 28);

                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r={large ? "3" : "2.2"}
                                fill="#a78bfa"
                                stroke="#000"
                                strokeWidth="1"
                            />
                        );
                    })}
                </svg>

                {/* Chart labels */}
                {large && (
                    <div className="absolute bottom-3 left-5 right-5 flex justify-between text-[10px] text-zinc-500 sm:text-xs">
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span className="font-semibold text-violet-400">
                            May
                        </span>
                        <span>Jun</span>
                        <span>Jul</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[120px]" />

            {/* Heading */}
            <ScrollAnimation direction="up">
                <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        Projects
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500" />

                    <p className="mt-5 text-sm text-slate-400 sm:text-base">
                        A showcase of the impactful projects I&apos;ve worked on.
                    </p>
                </div>
            </ScrollAnimation>

            {/* =========================================================
                FEATURED PROJECT
            ========================================================= */}
            <div className="relative z-10 mx-auto max-w-7xl">
                <ScrollAnimation direction="up" delay={0.15}>
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="hidden h-px w-16 bg-gradient-to-r from-transparent to-violet-500 sm:block" />

                        <span className="text-xs font-semibold tracking-widest text-violet-400 sm:text-sm">
                            FEATURED PROJECT
                        </span>

                        <div className="hidden h-px w-16 bg-gradient-to-l from-transparent to-violet-500 sm:block" />
                    </div>
                </ScrollAnimation>

                {/* Kaptify Card */}
                <ScrollAnimation direction="up" delay={0.2}>
                    <div className="group relative overflow-hidden rounded-2xl border border-violet-500/70 bg-black/80 shadow-[0_0_45px_-15px_rgba(139,92,246,0.5)] transition-all duration-500 hover:shadow-[0_0_65px_-15px_rgba(139,92,246,0.7)]">
                        {/* Glow */}
                        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-purple-600/10 blur-xl" />

                        <div className="relative grid grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-8">
                            {/* Left */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    {/* Title */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-2xl">
                                            🚀
                                        </div>

                                        <h3 className="text-3xl font-bold text-white sm:text-4xl">
                                            Kaptify
                                        </h3>

                                        <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                            Current Project
                                        </span>
                                    </div>

                                    <p className="mt-4 text-base font-medium text-violet-400">
                                        Corporate Investor Relations Analytics Management
                                    </p>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                                        Kaptify is a professional investor relations and corporate connectivity platform that bridges the gap between corporates, investors, analysts and the capital markets.
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {[
                                            "Node.js",
                                            "Express.js",
                                            "MySQL",
                                            "React.js",
                                            "JWT",
                                            "WhatsApp API",
                                            "Firebase FCM",
                                            "Google Meet API",
                                            "AWS",
                                            "Docker",
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-violet-500/50 hover:text-violet-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Button */}
                                <div className="mt-7">
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="border-violet-500/70 bg-black text-violet-400 transition-all duration-300 hover:scale-105 hover:bg-violet-500 hover:text-white"
                                    >
                                        <a
                                            href="https://kaptifyir.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project
                                            <span className="ml-2 text-lg">
                                                →
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Right - Analytics */}
                            <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4 sm:p-5">
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                    <h4 className="text-sm font-semibold text-white">
                                        Platform Overview
                                    </h4>

                                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-400">
                                        Last 6 Months
                                    </span>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        {
                                            value: "128",
                                            label: "Total Events",
                                            growth: "+12.5%",
                                        },
                                        {
                                            value: "56",
                                            label: "Total Meetings",
                                            growth: "+8.2%",
                                        },
                                        {
                                            value: "1,256",
                                            label: "Total Users",
                                            growth: "+15.3%",
                                        },
                                        {
                                            value: "87%",
                                            label: "Attendance",
                                            growth: "+6.1%",
                                        },
                                    ].map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3"
                                        >
                                            <p className="text-[10px] text-zinc-500 sm:text-xs">
                                                {metric.label}
                                            </p>

                                            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                                                {metric.value}
                                            </p>

                                            <p className="mt-1 text-[10px] text-emerald-400">
                                                ↑ {metric.growth}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Large Graph */}
                                <div className="mt-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <p className="text-xs font-medium text-white">
                                            Event Engagement Overview
                                        </p>

                                        <span className="text-[10px] text-zinc-500">
                                            Monthly
                                        </span>
                                    </div>

                                    <LineGraph
                                        data={[
                                            25,
                                            42,
                                            40,
                                            63,
                                            56,
                                            118,
                                            90,
                                            72,
                                            82,
                                            112,
                                        ]}
                                        large
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* =====================================================
                    PROFESSIONAL PROJECTS
                ===================================================== */}

                <ScrollAnimation direction="up" delay={0.3}>
                    <div className="mb-7 mt-16 flex items-center justify-center gap-4">
                        <div className="hidden h-px w-16 bg-gradient-to-r from-transparent to-violet-500 sm:block" />

                        <span className="text-xs font-semibold tracking-widest text-violet-400 sm:text-sm">
                            PROFESSIONAL PROJECTS
                        </span>

                        <div className="hidden h-px w-16 bg-gradient-to-l from-transparent to-violet-500 sm:block" />
                    </div>
                </ScrollAnimation>

                {/* Professional Grid */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {professionalProjects.map((project, index) => (
                        <ScrollAnimation
                            direction="up"
                            delay={0.1 + index * 0.1}
                            key={project.title}
                        >
                            <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-black/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_35px_-15px_rgba(139,92,246,0.6)] sm:p-6">
                                <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_120px]">
                                    {/* Content */}
                                    <div>
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-lg text-violet-400">
                                                {index === 0
                                                    ? "↗"
                                                    : index === 1
                                                        ? "◎"
                                                        : index === 2
                                                            ? "▣"
                                                            : "▰"}
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-bold text-white sm:text-xl">
                                                    {project.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-400">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1.5 text-[10px] text-slate-300 sm:text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <Button
                                            variant="ghost"
                                            asChild
                                            className="mt-4 px-0 text-violet-400 hover:bg-transparent hover:text-violet-300"
                                        >
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Project
                                                <span className="ml-2">
                                                    →
                                                </span>
                                            </a>
                                        </Button>
                                    </div>

                                    {/* Mini Analytics */}
                                    <div className="flex flex-col justify-between">
                                        <div className="rounded-xl border border-zinc-800 bg-black/60 p-3">
                                            <p className="text-[10px] text-zinc-500">
                                                {project.metricLabel}
                                            </p>

                                            <p className="mt-1 text-xl font-semibold text-white">
                                                {project.metric}
                                            </p>

                                            <p className="mt-1 text-[10px] text-emerald-400">
                                                ↑ {project.growth}
                                            </p>

                                            <div className="mt-3">
                                                <LineGraph
                                                    data={project.graph}
                                                />
                                            </div>
                                        </div>
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