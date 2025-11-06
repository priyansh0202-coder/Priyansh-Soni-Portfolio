import React from 'react'
import { Card } from './ui/card'
import ScrollAnimation from './ScrollAnimation'

function Expierence() {
  return (
      <section id="experience" className=" mx-auto px-4 py-16 lg:py-24 bg-black">
              <h2 className="text-3xl md:text-3xl font-bold mb-8 text-center text-white">Experience</h2>
          <div className="relative w-full max-w-6xl mx-auto ">

              <div
                  className="absolute -inset-2 rounded-lg bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-20 blur-2xl"
              ></div>
              <div className="relative flex flex-col py-10 px-8  items-center justify-center border border-zinc-700 rounded-lg bg-black text-slate-300">
                  
              <h3 className="text-xl font-semibold mb-2 text-white">Frontend Developer</h3>
              <p className="text-white mb-2">Infusyx Services Pvt Ltd | Pune</p>
              <p className="text-sm text-white mb-4">April 2025 - Present</p>
              <ScrollAnimation direction="up" delay={0.3}>
              <ul className="list-disc md:px-8 space-y-3 text-white/60">
                  <li>Developed and optimized database-driven features including user management, reporting modules, and role-based authentication flows to ensure security and scalability.</li>
                  <li>Architected and built admin dashboards with real-time data rendering, improving monitoring and control for platform administrators.</li>
                  <li>Reduced runtime errors by 30% using TypeScript</li>
                  <li>Designed and developed reusable frontend modules (dashboards, forms, charts, widgets) for the Upzyne SaaS platform, enabling faster development cycles and consistent UI/UX.</li>
                  <li>Integrated REST APIs and third-party services across multiple projects, ensuring seamless data synchronization between frontend and backend.</li>
                  <li>Optimized API handling by reducing redundant requests and implementing efficient state management, improving responsiveness and overall UX.</li>
                  <li>Collaborated with backend teams to enhance APIs, improve authentication logic, and integrate complex business workflows into frontend applications.</li>
                  <li>Specialized in scalable architecture design, focusing on reusable component libraries, performance tuning, and API-driven development across enterprise platforms.</li>
                  </ul>

                 
                  </ScrollAnimation>
              </div>
          </div>
      </section>
  )
}

export default Expierence
