import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "github.com/TewoldeM" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tewolde-marie-2879b230b/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/theo12212025/",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gradient-border"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        className="mt-20 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-start">
            <p className="text-2xl font-bold text-blue-500">
              Call Me: <span className="text-red-400">+2519-25-23-31-33</span>
            </p>
            <p className="text-2xl font-bold text-blue-500">
              Email:{" "}
              <span className="text-red-400">tewoldemarie6@gmail.com</span>
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
