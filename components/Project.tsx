import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Github, ExternalLink } from "lucide-react";

function Project() {
  const projects = [
    {
      title: "WorkManager App",
      description:
        "Task management application built with Next.js, React, and MongoDB. Features include secure authentication, responsive design, and efficient task organization.",
      tech: [
        "Next.js",
        "React",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "GitHub Actions",
        "CI/CD Pipeline",
      ],
      links: {
        live: "https://task-nest-app-next-js.vercel.app/login",
        github:
          "https://github.com/priyansh0202-coder/TaskNest---App---Next.js",
      },
    },
    {
      title: "Streamify",
      description:
        "YouTube-like video streaming platform developed using React and Material UI. Integrates with Rapid API for real-time video data.",
      tech: ["React", "Material UI", "Rapid API", "Responsive Design"],
      links: {
        live: "https://streamify-video-application.vercel.app/",
        github:
          "https://github.com/priyansh0202-coder/Streamify-Video-Application",
      },
    },
    {
      title: "Property Rental Application",
      description:
        "A property rental platform built using React.js, Material UI, Axios, and Bayut API allowing users to browse, search, and book rental properties.",
      tech: ["React", "Material UI", "Bayut API", "Responsive Design"],
      links: {
        live: "https://property-rental-application.vercel.app/",
        github:
          "https://github.com/priyansh0202-coder/Property-Rental-Application",
      },
    },
    {
      title: "Chat Application",
      description:
        "Tech-stack: Reactjs, Appwrite. Authentication handled by Appwrite with backend hosted on Appwrite Cloud. Managed state using useContext hook.",
      tech: ["React", "Appwrite", "Appwrite Cloud", "Responsive Design"],
      links: {
        live: "https://chat-application-tau-ten.vercel.app/",
        github: "https://github.com/priyansh0202-coder/Chat-application",
      },
    },
  ];

  return (
    <section id="projects" className="mx-auto px-4 py-16 lg:py-24 bg-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
       Personal Projects
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* gradient background glow */}
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-tl from-indigo-600 via-violet-600 to-gray-600 opacity-20 blur-2xl"></div>

        {/* Responsive scroll container */}
        <div className="relative border border-zinc-700 rounded-lg p-2 md:p-8 bg-black overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 min-w-max md:min-w-0 px-1">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="
          flex-shrink-0 
          w-[300px]              /* 👈 Shows one card fully + 10–15% of next card */
          sm:w-[75%]
          md:w-auto
          p-4 md:p-6 
          border border-zinc-700 
          bg-zinc-800/40 
          text-white 
          md:transform md:transition-all duration-300 
          md:hover:scale-105 md:hover:shadow-2xl
          rounded-xl
        "
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-white rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-black text-white hover:scale-105 transition-transform"
                  >
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-black text-white hover:scale-105 transition-transform"
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
