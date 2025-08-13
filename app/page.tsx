"use client";

import { Github, Linkedin, Mail, ExternalLink, BookOpen, Code, Server, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
  const skills = [
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Redux", "Node.js", "MongoDB", "MySQL",
    "Git", "Docker", "REST APIs", "Material UI", "Bootstrap", "GitHub Actions", "CI/CD"
  ];

  const contactInfo = {
    email: "priyanshsoni36@gmail.com",
    phone: "+91 9981887858"
  };

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
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-lg md:text-3xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-gray-300"> Hi I'm Priyansh Soni  </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 mt-3 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className=" text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 lg:mb-20 lg:min-w-full px-4">
            A Full Stack Developer passionate about building scalable web applications with seamless frontend and backend integration. Skilled in React, Next.js, Node.js, and MongoDB, MySQL with a strong focus on problem-solving and performance optimization.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                    <Link href="https://github.com/priyansh0202-coder">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                    <Link href="https://www.linkedin.com/in/priyansh-soni-625ab2220/">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground hover:scale-105 transition-transform">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:scale-105 transition-transform">
              <Phone className="h-4 w-4" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
     <section className=" container mx-auto px-4 py-4 lg:py-12 bg-black">
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

      {/* Experience Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
          <Card className="p-6 md:p-8 mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-muted-foreground mb-2">Infusyx Services Pvt Ltd | Pune</p>
              <p className="text-sm text-muted-foreground mb-4">April 2025 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed 10+ visually appealing, responsive pages utilizing React and Tailwind CSS</li>
                  <li>Applied server-side rendering and dynamic routing in Next.js, increasing SEO</li>
                  <li>Reduced runtime errors by 30% using TypeScript</li>
                  <li>Achieved 25% faster load times through optimization</li>
                  {/* <li> Integrated RESTful APIs to fetch product data and authenticate users,
                      resulting in a 15% reduction in data fetch latency.</li> */}
              </ul>
          </Card>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24 bg-secondary/50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24 bg-secondary/50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Master of Business Administration</h3>
            <p className="text-muted-foreground">Business Analytics & Information Technology</p>
            <p className="text-sm text-muted-foreground">Devi Ahilya Vishwavidyalaya Indore</p>
          </Card>
          <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Bachelor of Commerce</h3>
            <p className="text-muted-foreground">Computer Application</p>
            <p className="text-sm text-muted-foreground">Barkatullah University Bhopal</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2025 • Built with Next.js and Tailwind CSS</p>
      </footer>
    </main>
  );
}
