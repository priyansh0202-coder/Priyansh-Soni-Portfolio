import React from 'react'

import { BookOpen, Code, Server } from 'lucide-react'



function JourneySection() {

    const journey = [
        {
            date: "January 2024",
            title: "Web Development Foundations",
            description: "Started my journey with HTML, CSS, and JavaScript fundamentals",
            icon: BookOpen
        },
        {
            date: "March 2024",
            title: "Frontend Development",
            description: "Learned React.js and modern frontend development practices",
            icon: Code
        },
        {
            date: "May 2024",
            title: "Backend Development",
            description: "Expanded skills to Node.js and Express.js for full-stack development",
            icon: Server
        }
    ];
    
  return (
      <section className="container mx-auto px-4 py-4 lg:py-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">My Journey</h2>
          <div className="max-w-3xl mx-auto">
              {journey.map((step, index) => (
                  <div key={step.date} className="relative flex items-start mb-12 last:mb-0">
                      <div className="absolute left-0 top-0 w-px h-full bg-border -ml-[1px]" />
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center -ml-4">
                          <step.icon className="w-4 h-4" />
                      </div>
                      <div className="ml-12">
                          <span className="text-sm font-medium text-muted-foreground">{step.date}</span>
                          <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
                          <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  )
}

export default JourneySection
