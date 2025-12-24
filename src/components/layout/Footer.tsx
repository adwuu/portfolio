import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2">
        <button
          onClick={scrollToTop}
          className="font-bold text-2xl text-muted hover:text-text transition-colors"
        >
          Back to Top
        </button>
        <p className="font-bold text-muted">
          &copy; {new Date().getFullYear()} Adam Wu
        </p>
      </div>
    </motion.footer>
  );
}
