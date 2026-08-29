// import React from "react";
// import { Card } from "./ui/card";
// import ScrollAnimation from "./ScrollAnimation";

// function Expierence() {
//   return (
//     <section id="experience" className=" mx-auto px-4 py-16 lg:py-24 bg-black">
//       <h2 className="text-3xl md:text-3xl font-bold mb-8 text-center text-white">
//         Experience
//       </h2>
//       <div className="relative w-full max-w-6xl mx-auto ">
//         <div className="absolute -inset-2 rounded-lg bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-20 blur-2xl"></div>
//         <div className="relative flex flex-col py-10 px-8  items-center justify-center border border-zinc-700 rounded-lg bg-black text-slate-300">
//           <h3 className="text-xl font-semibold mb-2 text-white">
//             Software Developer
//           </h3>
//           <p className="text-white mb-2">Infusyx Services Pvt Ltd | Pune</p>
//           <p className="text-sm text-white mb-4">March 2025 - February 2026</p>
//           <ScrollAnimation direction="up" delay={0.3}>
//             <ul className="list-disc md:px-8 space-y-3 text-white/60">
//               <li>
//                 Developed and maintained full-stack features using React.js, Next.js, Node.js, Express.js, and PostgreSQL.
//               </li>
//               <li>
//                 Built RESTful APIs using Node.js Express.js with JWT authentication, role-based access control, and secure
//                 workflows.
//               </li>
//               <li>
//                 Reduced runtime errors through strict TypeScript type enforcement and consistent code review practices.
//               </li>
//               <li>
//                 Enhanced application performance using code splitting, lazy loading, and component-level optimizations for
//                 faster load times and smoother UX.
//               </li>
//               <li>
//                 Optimized PostgreSQL queries and indexing strategies to improve database performance and API response
//                 times.
//               </li>
//               <li>
//                 Debugged and resolved production issues, improving application stability and overall user experience.
//               </li>
//               {/* <li>
//                 Specialized in scalable architecture design, focusing on
//                 reusable component libraries, performance tuning, and API-driven
//                 development across enterprise platforms.
//               </li> */}
//             </ul>
//           </ScrollAnimation>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Expierence;



import React from "react";
import ScrollAnimation from "./ScrollAnimation";

function Expierence() {
  const experiences = [
    {
      current: true,
      date: (
        <>
          May 2026
          <br />
          <span className="text-violet-400">—</span>
          <br />
          Present
        </>
      ),
      title: "Full Stack Developer",
      company: "Micro Integrated",
      location: "Pune, Maharashtra",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "React.js",
        "JWT",
        "Firebase FCM",
        "WhatsApp API",
        "Google Meet API",
      ],
      points: [
        "Engineered scalable RESTful APIs using Node.js, Express.js and MySQL with JWT authentication and role-based authorization.",
        "Led development of 10+ backend modules and 5+ React.js frontend modules including Event Management, Meetings, Corporate Hierarchy, Plant Visits, Attendance, Results, Feedback, and Onboarding.",
        "Redesigned complex MySQL queries and reusable service layers, improving API response times by up to 60%.",
        "Integrated WhatsApp notifications, Firebase Cloud Messaging (FCM), Google Meet API and QR code generation, along with automated cron jobs to streamline communication and scheduling.",
        "Automated secure file upload, Excel bulk import and validation pipelines, reducing manual data entry effort by 50%.",
      ],
    },
    {
      current: false,
      date: (
        <>
          March 2025
          <br />
          <span className="text-violet-400">—</span>
          <br />
          Feb 2026
        </>
      ),
      title: "Software Developer",
      company: "Infusyx Services",
      location: "Pune, Maharashtra",
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "TypeScript",
        "JWT",
      ],
      points: [
        "Delivered full-stack features using React.js, Next.js, Node.js, Express.js and PostgreSQL for applications used by 5,000+ users.",
        "Built RESTful APIs using Node.js and Express.js with JWT authentication, role-based access control and secure workflows.",
        "Reduced runtime errors through strict TypeScript type enforcement and consistent code review practices.",
        "Enhanced application performance using code splitting, lazy loading and component-level optimizations for faster load times and smoother UX.",
        "Optimized PostgreSQL queries and indexing strategies to improve database performance and API response times.",
        "Debugged and resolved production issues, improving application stability and overall user experience.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative mx-auto px-4 py-16 lg:py-24 bg-black overflow-hidden"
    >
      {/* Section Heading */}
      <div className="relative z-10 mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Experience
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500" />
      </div>

      {/* Experience Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Vertical Timeline */}
        <div className="absolute left-[100px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-violet-500 via-indigo-500/60 to-zinc-800 md:block" />
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ScrollAnimation
              key={`${experience.company}-${experience.title}`}
              direction="up"
              delay={0.2 + index * 0.15}
            >
              <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[150px_1fr]">
                {/* Date Section */}
                {/* Date / Timeline Section */}
                <div className="relative hidden md:flex flex-col items-end pr-16 pt-8">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-[100px] top-[32px] z-20 h-4 w-4 -translate-x-1/2 rounded-full border-4 ${experience.current
                        ? "border-violet-400 bg-white shadow-[0_0_20px_rgba(139,92,246,0.9)]"
                        : "border-violet-500/40 bg-violet-600"
                      }`}
                  />

                  {/* Date */}
                  <div className="whitespace-nowrap text-sm text-white pr-6">
                    {experience.date}
                  </div>

                  {/* Current Badge */}
                  {experience.current && (
                    <span className="mt-3 rounded-md bg-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-600/20">
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="relative">
                  {/* Glow */}
                  <div
                    className={`absolute -inset-2 rounded-2xl blur-2xl ${experience.current
                        ? "bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-25"
                        : "bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-10"
                      }`}
                  />

                  <div
                    className={`relative rounded-2xl border bg-black/90 p-6 md:p-8 ${experience.current
                        ? "border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.25)]"
                        : "border-zinc-700"
                      }`}
                  >
                    {/* Mobile Date */}
                    <div className="mb-5 flex items-center justify-between md:hidden">
                      <div className="text-sm leading-6 text-white">
                        {experience.date}
                      </div>

                      {experience.current && (
                        <span className="rounded-md bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                          CURRENT
                        </span>
                      )}
                    </div>

                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        {/* Briefcase Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-violet-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m-8 0h10a3 3 0 013 3v8a3 3 0 01-3 3H7a3 3 0 01-3-3v-8a3 3 0 013-3z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 12h16M10 12v2h4v-2"
                            />
                          </svg>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {experience.title}
                          </h3>

                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm md:text-base">
                            <span className="font-semibold text-violet-400">
                              {experience.company}
                            </span>

                            <span className="text-zinc-500">•</span>

                            <span className="text-white">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Current Role */}
                      {experience.current && (
                        <div className="hidden items-center gap-2 text-sm text-emerald-400 sm:flex">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                          Current Role
                        </div>
                      )}
                    </div>

                    {/* Technology Pills */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-violet-500/50 hover:text-violet-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent" />

                    {/* Experience Points */}
                    <ul className="space-y-3 text-sm leading-6 text-white/70 md:text-[15px]">
                      {experience.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="relative pl-5"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-violet-500" />

                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Experience Summary */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-3 rounded-xl border border-violet-600/50 bg-black px-6 py-3 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="font-semibold">
                1.5+ Years of Experience
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Expierence;