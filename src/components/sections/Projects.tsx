import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectCard } from "../ui/ProjectCard";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  thumbnail?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

// Sample projects - replace with your actual projects
const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A full-stack application built with modern technologies. Features real-time updates, authentication, and a clean user interface.",
    tags: ["React", "TypeScript", "Node.js"],
    year: "2024",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "An open-source tool that helps developers streamline their workflow and improve productivity.",
    tags: ["Python", "CLI", "Open Source"],
    year: "2024",
    github: "https://github.com/adwuu/project-two",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "A design system and component library built for scalability and accessibility.",
    tags: ["Design System", "Figma", "React"],
    year: "2023",
    live: "https://example.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">
            Projects
          </h2>
          <p className="text-2xl md:text-3xl text-text max-w-2xl">
            A selection of projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <span>View all projects</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
