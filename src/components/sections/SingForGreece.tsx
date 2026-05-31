import { useState } from "react";
import { motion } from "framer-motion";

const YOUTUBE_ID = "DrCmxRWEcXg";
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;

export function SingForGreece() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="singforgreece" className="min-h-screen flex flex-col pt-6 pb-6 px-6 text-white border-y-[96px] md:border-[48px] border-teal overflow-hidden animated-gradient-teal">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Eurovision 2026
          </h2>

          <p className="font-bold text-white text-left md:text-right max-w-md">
            Producer and co-writer of Stylianos' "You and I" &mdash; SingForGreece 2026 Finalist.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex-1 flex items-center justify-center py-8"
      >
        <div className="w-full max-w-4xl aspect-video overflow-hidden bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Stylianos - You and I (SingForGreece 2026)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play the performance"
              className="group relative w-full h-full cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Stylianos - You and I performance thumbnail"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <span className="flex items-center justify-center w-20 h-20 rounded-full bg-teal/90 transition-transform group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 ml-1 text-background"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white/70 hover:text-white transition-colors"
        >
          Watch the Performance
        </a>
      </motion.div>
    </section>
  );
}
