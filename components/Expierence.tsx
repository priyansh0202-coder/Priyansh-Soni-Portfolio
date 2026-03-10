import React from "react";
import { Card } from "./ui/card";
import ScrollAnimation from "./ScrollAnimation";

function Expierence() {
  return (
    <section id="experience" className=" mx-auto px-4 py-16 lg:py-24 bg-black">
      <h2 className="text-3xl md:text-3xl font-bold mb-8 text-center text-white">
        Experience
      </h2>
      <div className="relative w-full max-w-6xl mx-auto ">
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-20 blur-2xl"></div>
        <div className="relative flex flex-col py-10 px-8  items-center justify-center border border-zinc-700 rounded-lg bg-black text-slate-300">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Software Developer
          </h3>
          <p className="text-white mb-2">Infusyx Services Pvt Ltd | Pune</p>
          <p className="text-sm text-white mb-4">March 2025 - February 2026</p>
          <ScrollAnimation direction="up" delay={0.3}>
            <ul className="list-disc md:px-8 space-y-3 text-white/60">
              <li>
                Developed and maintained full-stack features using React.js, Next.js, Node.js, Express.js, and PostgreSQL.
              </li>
              <li>
                Built RESTful APIs using Node.js Express.js with JWT authentication, role-based access control, and secure
                workflows.
              </li>
              <li>
                Reduced runtime errors through strict TypeScript type enforcement and consistent code review practices.
              </li>
              <li>
                Enhanced application performance using code splitting, lazy loading, and component-level optimizations for
                faster load times and smoother UX.
              </li>
              <li>
                Optimized PostgreSQL queries and indexing strategies to improve database performance and API response
                times.
              </li>
              <li>
                Debugged and resolved production issues, improving application stability and overall user experience.
              </li>
              {/* <li>
                Specialized in scalable architecture design, focusing on
                reusable component libraries, performance tuning, and API-driven
                development across enterprise platforms.
              </li> */}
            </ul>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Expierence;
