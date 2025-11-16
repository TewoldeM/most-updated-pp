"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import { ArrowDown, Code2, Instagram, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <Head>
        <title>Tewolde Marie | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Tewolde Marie, a skilled developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      {/* Navbar */}
      {/* <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-gray-950 backdrop-blur-md z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-400">
                <Code2 />
              </h1>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#social"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                type="button"
                aria-label="Toggle menu"
                title="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-gray-800"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#social"
                className="text-blue-300 hover:text-blue-400 transition"
              >
                Social
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav> */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gradient-end/5" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">Tewolde Marie</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a passionate developer who loves creating powerful and
              user-friendly digital products that make a difference in people's
              lives. <br />
              <span className="text-xl">
                I'm confortable with React, Next.js, Typescript,Nest.js and React Native
              </span>
            </motion.p>

            <motion.div
              className="flex gap-8 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-blue-500 text-primary-foreground hover:bg-blue-500/90"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Social Media Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-blue-300">
          © 2025 Tewolde Marie. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
