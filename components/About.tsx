import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <motion.div
            className="gradient-border p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineer specializing in building full-stack web
              and mobile applications. With a strong foundation in modern
              technologies, I create scalable solutions that combine beautiful
              user interfaces with robust backend systems.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              💡 My passion lies in transforming complex problems into simple,
              elegant solutions. Whether it's crafting responsive web
              applications with React and Next.js, or building mobile
              experiences with React Native, I'm dedicated to delivering
              high-quality products that exceed expectations. ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
