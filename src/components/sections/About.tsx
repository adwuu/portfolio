import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">
            About
          </h2>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I'm a developer passionate about creating elegant solutions to complex
              problems. With experience across the full stack, I enjoy building
              products that make a difference.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or working on side projects that push
              the boundaries of what's possible on the web.
            </p>

            <p>
              I believe in writing clean, maintainable code and creating
              experiences that are both beautiful and functional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
