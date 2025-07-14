import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Github, ExternalLink } from 'lucide-react'


function Project() {
    const projects = [
        {
            title: "WorkManager App",
            description: "Task management application built with Next.js, React, and MongoDB. Features include secure authentication, responsive design, and efficient task organization.",
            tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "JWT", "GitHub Actions", "CI/CD Pipeline"],
            links: {
                live: "https://task-nest-app-next-js.vercel.app/login",
                github: "https://github.com/priyansh0202-coder/TaskNest---App---Next.js"
            }
        },
        {
            title: "Streamify",
            description: "YouTube-like video streaming platform developed using React and Material UI. Integrates with Rapid API for real-time video data.",
            tech: ["React", "Material UI", "Rapid API", "Responsive Design"],
            links: {
                live: "https://streamify-video-application.vercel.app/",
                github: "https://github.com/priyansh0202-coder/Streamify-Video-Application"
            }
        },
        {
            title: "Property Rental Application",
            description: "A property rental platform built using React.js, Material UI, Axios, and Bayut API allowing users to browse, search, and book rental properties. This app features property listings, filtering options, and a booking system.",
            tech: ["React", "Material UI", "Bayut API", "Responsive Design"],
            links: {
                live: "https://property-rental-application.vercel.app/",
                github: "https://github.com/priyansh0202-coder/Property-Rental-Application"
            }
        },
        {
            title: "Chat Application",
            description: "Tech-stack: Reactjs, Appwrite . The frontend was built with Reactjs. Authentication being handled by Appwrite. The backend was built with Appwrite Cloud. State management with useContext hook.",
            tech: ["React", "Appwrite", "Appwrite Cloud", "Responsive Design"],
            links: {
                live: "https://chat-application-tau-ten.vercel.app/",
                github: "https://github.com/priyansh0202-coder/Chat-application"
            }
        }
      ];

  return (
      <section className="container mx-auto px-4 py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                  <Card key={project.title} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                              <span
                                  key={tech}
                                  className="px-2 py-1 bg-secondary rounded-md text-xs"
                              >
                                  {tech}
                              </span>
                          ))}
                      </div>
                      <div className="flex gap-4">
                          <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform">
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                              </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform">
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" />
                                  Code
                              </a>
                          </Button>
                      </div>
                  </Card>
              ))}
          </div>
      </section>
  )
}

export default Project
