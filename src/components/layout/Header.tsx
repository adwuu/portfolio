import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <nav className="px-6 h-16 flex items-center">
        <Link
          to="/"
          className="text-xl font-bold text-text hover:text-accent transition-colors"
        >
          Adam Wu
        </Link>
      </nav>
    </motion.header>
  );
}
