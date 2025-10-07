// "use client";


// import Link from "next/link";
// import Herosection from "@/components/Herosection";
// import JourneySection from "@/components/JourneySection";
// import Expierence from "@/components/Expierence";
// import Skills from "@/components/Skills";
// import Project from "@/components/Project";
// import Education from "@/components/Education";
// import Footer from "@/components/Footer";
// import Navbar from "../components/Navbar.jsx";
// import ProjectsInfusyx from "@/components/ProjectsInfusyx";

// export default function Home() {




//   return (
//     <main className="">
      
//       {/* <Navbar/> */}
//       <Herosection />
//       <JourneySection />
//       <Expierence />
//       <ProjectsInfusyx />
//       <Skills />
//       <Project />
//       <Education />
//       <Footer/>
//     </main>
//   );
// }





"use client";

import Link from "next/link";
import Herosection from "@/components/Herosection";
import JourneySection from "@/components/JourneySection";
import Expierence from "@/components/Expierence";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar.jsx";
import ProjectsInfusyx from "@/components/ProjectsInfusyx";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
          radial-gradient(1000px 600px at 10% -10%, rgba(99,102,241,0.08), transparent 40%),
          radial-gradient(900px 500px at 90% 110%, rgba(16,185,129,0.09), transparent 35%),
          radial-gradient(700px 450px at -10% 100%, rgba(59,130,246,0.08), transparent 45%)
        `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,_#fff_1px,_transparent_1px),linear-gradient(to_bottom,_#fff_1px,_transparent_1px)] bg-[size:40px_40px]"
        />
      </div>

      {/* Content */}
      <main className="relative z-10">
        <Herosection  />
        <JourneySection />
        <Expierence />
        <ProjectsInfusyx />
        <Skills />
        <Project />
        <Education />
        <Footer />
      </main>
    </div>

  );
}
