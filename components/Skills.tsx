// import React from 'react'

// function Skills() {
//     const skills = [
//         "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
//         "Tailwind CSS", "Redux", "Node.js", "MongoDB", "MySQL",
//         "Git", "Docker", "REST APIs", "Material UI", "Bootstrap", "GitHub Actions", "CI/CD"
//       ];
//   return (
//       <section className=" container mx-auto px-4 py-16 lg:py-24 bg-black">
//           <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Skills</h2>
//           <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
//               {skills.map((skill) => (
//                   <span
//                       key={skill}
//                       className="px-4 py-2 bg-secondary-foreground text-white rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
//                   >
//                       {skill}
//                   </span>
//               ))}
//           </div>
//       </section>
//   )
// }

// export default Skills




import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
    const skills = [
        { name: 'React', level: 90, color: '#61DBFB' },
        { name: 'Next.js', level: 85, color: '#FFFFFF' },
        { name: 'TypeScript', level: 80, color: '#3178C6' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'HTML5', level: 90, color: '#E34F26' },
        { name: 'CSS3', level: 88, color: '#264de4' },
        { name: 'Tailwind CSS', level: 92, color: '#38BDF8' },
        { name: 'Redux', level: 80, color: '#764ABC' },
        { name: 'Node.js', level: 85, color: '#68A063' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'MySQL', level: 78, color: '#00758F' },
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 70, color: '#0db7ed' },
        { name: 'REST APIs', level: 88, color: '#00B8D4' },
        { name: 'Material UI', level: 85, color: '#0081CB' },
        { name: 'Bootstrap', level: 75, color: '#563d7c' },
        { name: 'GitHub Actions', level: 70, color: '#2088FF' },
        { name: 'CI/CD', level: 65, color: '#FF6F00' },
    ];
    
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false, // Animate only once
      });

    return (
        <section ref={ref}
            className=" mx-auto px-4 py-16 lg:py-20 bg-black">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto ">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-zinc-700/40  p-4 rounded-lg shadow-md transition-all hover:scale-[1.02]"
                    >
                        <div className=" flex justify-between mb-2 text-[16px] font-medium text-white">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full">
                            <div
                                className="h-full bg- opacity-70 rounded-full transition-all duration-1000 ease-in-out"
                                style={{
                                    width: inView ? `${skill.level}%` : '0%',
                                    backgroundColor: skill.color,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
