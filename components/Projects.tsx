"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "./ui/Skeleton";

const projects = [
  {
    title: "Dating App",
    description:
      "A modern dating platform built with Next.js, TS, Tailwind CSS...",
    image: "/dating.jpg",
    demo: "https://full-stack-dating-app.vercel.app/",
    code: "https://github.com/TewoldeM/Full-Stack-Dating-App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    finished: true,
  },
  {
    title: "Project Management App",
    description: "A drag-and-drop project management tool...",
    image: "/projectmanage.jpg",
    demo: "https://https://hospital-appointment-sigma.vercel.app/",
    code: "https://github.com/TewoldeM/Full-Stack-Project-Managment-Web-App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    finished: true,
  },
  {
    title: "Hospital Appointment Booking App",
    description: "A healthcare appointment booking system...",
    image: "/hospital.jpg",
    demo: "https://your-hospital-demo.com",
    code: "https://github.com/TewoldeM/Hospital_Appointment_Fullstack_app-",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    finished: true,
  },

  // ⭐ In Progress Projects
  {
    title: "Expense & Income Tracker",
    description: "A personal finance tracking app...",
    image: "/expensetracker.jpg",
    demo: null,
    code: "https://github.com/TewoldeM/Expense-income-Tracker",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    finished: false,
  },
  {
    title: "Dynamic Form Builder",
    description: "A powerful drag-and-drop Form Builder application...",
    image: "/formbuilder.jpg",
    demo: null,
    code: "https://github.com/TewoldeM/Full-stack-Form-builder-Web-App",
    tags: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    finished: false,
  },
  {
    title: "VolunteerHub Platform",
    description: "A full-stack volunteer matching platform...",
    image: "/volunter1.jpg",
    demo: null,
    code: "https://github.com/TewoldeM/VolunteerHub",
    tags: ["Next.js", "TypeScript", "Prisma"],
    finished: false,
  },
  {
    title: "JJU Campus Services System",
    description: "An all-in-one campus services platform...",
    image: "/jju3.jpg",
    demo: null,
    code: "https://github.com/TewoldeM/JJU-ID-Mail-Card-Replacement-Web-App",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    finished: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "finished" | "progress">("all");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === "finished") return p.finished === true;
    if (filter === "progress") return p.finished === false;
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Sorting Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "finished" ? "default" : "outline"}
            onClick={() => setFilter("finished")}
          >
            Finished
          </Button>
          <Button
            variant={filter === "progress" ? "default" : "outline"}
            onClick={() => setFilter("progress")}
          >
            In Progress
          </Button>
        </div>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="p-4 border rounded-xl">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-2/3 mt-4" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
                <div className="flex gap-3 mt-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="gradient-border group overflow-hidden rounded-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={480}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* In Progress Badge */}
                  {!project.finished && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 text-xs rounded-full font-bold shadow-lg"
                    >
                      In Progress
                    </motion.span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.finished ? (
                      <motion.a
                        href={project.demo!}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden group"
                      >
                        {/* Ripple */}
                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-all"></span>
                        {/* Icon rotation */}
                        <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        Demo
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 bg-gray-600 text-white py-2 rounded-md cursor-not-allowed"
                      >
                        Not Finished
                      </motion.button>
                    )}

                    {/* Code Button */}
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-gray-500/30 group"
                    >
                      <Github className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
