"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

function Project() {
  const projects = [
    {
      title: "Job Portal Application",
      description:
        "Built full-stack job portal with role-based authentication (User/Admin) supporting job postings, applications, and candidate tracking. Developed secure RESTful APIs with JWT token-based authentication and password encryption using Bcrypt.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
        "Role-Based Authentication",
      ],
      metric: "2.1K",
      metricLabel: "Users",
      growth: "+23.6%",
      graph: [20, 32, 27, 38, 34, 50, 43, 57, 52, 68],
      color: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20",
      glow: "hover:border-emerald-500/50 hover:shadow-[0_0_35px_-10px_rgba(16,185,129,0.35)]",
      links: {
        live: "https://job-portal-eosin-three.vercel.app/",
        github: "https://github.com/priyansh0202-coder/Job-Portal",
      },
    },
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
      metric: "1.8K",
      metricLabel: "Tasks",
      growth: "+19.8%",
      graph: [18, 30, 25, 38, 31, 46, 40, 57, 50, 64],
      color: "text-orange-400",
      accentBg: "bg-orange-500/10",
      accentBorder: "border-orange-500/20",
      glow: "hover:border-orange-500/50 hover:shadow-[0_0_35px_-10px_rgba(249,115,22,0.35)]",
      links: {
        live: "https://task-nest-app-next-js.vercel.app/login",
        github: "https://github.com/priyansh0202-coder/TaskNest---App---Next.js",
      },
    },
    {
      title: "Sales CRM Platform",
      description:
        "Full-stack Sales CRM platform enabling teams to manage leads, deal pipelines, and activity tracking with a dynamic analytics dashboard powered by optimized MongoDB aggregation queries.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Recharts",
        "Tailwind CSS",
      ],
      metric: "3.2K",
      metricLabel: "Leads & Deals",
      growth: "+24.5%",
      graph: [22, 35, 30, 48, 42, 60, 54, 72, 65, 86],
      color: "text-cyan-400",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/20",
      glow: "hover:border-cyan-500/50 hover:shadow-[0_0_35px_-10px_rgba(6,182,212,0.35)]",
      links: {
        live: "https://crm-frontend-tan-one.vercel.app/",
        github: "https://github.com/priyansh0202-coder/crm-frontend",
      },
    },
    {
      title: "Chat Application",
      description:
        "Real-time communication app built with React and Appwrite. Authentication handled by Appwrite Cloud with state managed via useContext.",
      tech: ["React", "Appwrite", "Appwrite Cloud", "Responsive Design"],
      metric: "892",
      metricLabel: "Messages",
      growth: "+17.1%",
      graph: [15, 29, 23, 42, 34, 51, 44, 62, 56, 74],
      color: "text-pink-400",
      accentBg: "bg-pink-500/10",
      accentBorder: "border-pink-500/20",
      glow: "hover:border-pink-500/50 hover:shadow-[0_0_35px_-10px_rgba(236,72,153,0.35)]",
      links: {
        live: "https://chat-application-tau-ten.vercel.app/",
        github: "https://github.com/priyansh0202-coder/Chat-application",
      },
    },
  ];

  /*
   * Generates the SVG points for the line graph.
   */
  const generatePoints = (
    data: number[],
    width = 180,
    height = 60,
    padding = 8
  ) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    return data
      .map((value, index) => {
        const x =
          padding + (index * (width - padding * 2)) / (data.length - 1);
        const y =
          height -
          padding -
          ((value - min) / range) * (height - padding * 2);
        return `${x},${y}`;
      })
      .join(" ");
  };

  const generateAreaPoints = (
    data: number[],
    width = 180,
    height = 60,
    padding = 8
  ) => {
    const linePoints = generatePoints(data, width, height, padding);
    return `${padding},${height - padding} ${linePoints} ${
      width - padding
    },${height - padding}`;
  };

  const LineGraph = ({
    data,
    color,
    width = 180,
    height = 60,
  }: {
    data: number[];
    color: string;
    width?: number;
    height?: number;
  }) => {
    const linePoints = generatePoints(data, width, height, 8);
    const areaPoints = generateAreaPoints(data, width, height, 8);
    const strokeColor = color.includes("emerald")
      ? "#34d399"
      : color.includes("orange")
      ? "#fb923c"
      : color.includes("cyan")
      ? "#22d3ee"
      : color.includes("blue")
      ? "#60a5fa"
      : "#f472b6";

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id={`area-${color.replace(/[^a-zA-Z0-9]/g, "")}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        <polygon
          points={areaPoints}
          fill={`url(#area-${color.replace(/[^a-zA-Z0-9]/g, "")})`}
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={linePoints}
        />
      </svg>
    );
  };

  return (
    <section
      id="personal-projects"
      className="relative w-full overflow-hidden bg-black px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Background glow matching portfolio */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="mb-10 flex items-center justify-center gap-4">
            <div className="hidden h-px w-16 bg-gradient-to-r from-transparent to-violet-500 sm:block" />
            <span className="text-xs font-semibold tracking-widest text-violet-400 sm:text-sm">
              PERSONAL PROJECTS
            </span>
            <div className="hidden h-px w-16 bg-gradient-to-l from-transparent to-violet-500 sm:block" />
          </div>
        </ScrollAnimation>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollAnimation
            key={project.title}
            direction="up"
            delay={0.1 + index * 0.08}
          >
            <div
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-black/75 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${project.glow}`}
            >
              {/* Glow overlay on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Header: Title & Direct Link */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-violet-300 sm:text-xl">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border p-2 transition-all duration-300 hover:scale-110 ${project.accentBorder} ${project.accentBg} ${project.color}`}
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Metric + Sparkline + Actions */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <div className="flex items-end justify-between gap-4">
                  {/* Metric info */}
                  <div>
                    <p className="text-[11px] font-medium text-zinc-500">
                      {project.metricLabel}
                    </p>
                    <div className="mt-0.5 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">
                        {project.metric}
                      </span>
                      <span className={`text-xs font-semibold ${project.color}`}>
                        ↑ {project.growth}
                      </span>
                    </div>
                  </div>

                  {/* Sparkline Graph */}
                  <div className="h-12 w-28 sm:w-36">
                    <LineGraph data={project.graph} color={project.color} />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-violet-500/40 bg-zinc-950 text-xs font-medium text-violet-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
                  >
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-zinc-800 bg-zinc-950 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* GitHub CTA */}
      <ScrollAnimation direction="up" delay={0.4}>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/priyansh0202-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-xl items-center justify-center gap-3 rounded-xl border border-violet-500/30 bg-black/70 px-5 py-4 text-sm text-slate-300 transition-all duration-300 hover:border-violet-500/70 hover:text-violet-300 hover:shadow-[0_0_25px_-10px_rgba(139,92,246,0.6)] sm:text-base"
          >
            <span className="text-lg text-violet-400">&lt;/&gt;</span>
            <span>
              More projects and code on{" "}
              <span className="font-semibold text-violet-400">GitHub</span>
            </span>
            <span>↗</span>
          </a>
        </div>
      </ScrollAnimation>
      </div>
    </section>
  );
}

export default Project;
