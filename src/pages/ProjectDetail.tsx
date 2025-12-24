import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <article className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Back to projects</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            {slug?.replace(/-/g, " ")}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted text-xl leading-relaxed">
              This is the project detail page for <strong>{slug}</strong>.
              Replace this content with your actual project description, images,
              and case study details.
            </p>

            <div className="mt-12 p-8 rounded-xl bg-surface border border-border">
              <p className="text-muted text-center">
                Add your MDX content here. Create a file at{" "}
                <code className="text-accent">
                  src/content/projects/{slug}.mdx
                </code>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
