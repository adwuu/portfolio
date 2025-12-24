import { motion } from "framer-motion";
import filmVideo from "/videos/film.mp4";

export function Film() {
  return (
    <section id="film" className="min-h-screen flex flex-col justify-between pt-6 pb-6 px-6 text-white border-[48px] border-yellow relative overflow-hidden">
      <video
        src={filmVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex justify-between items-start gap-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold shrink-0">
            Film
          </h2>

          <p className="font-bold text-white text-right max-w-md">
            Award-winning audio engineer and composer for film and TV.
            Working with{" "}
            <a
              href="https://tadpolepictures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Tadpole Pictures
            </a>
            .
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <a
          href="https://www.youtube.com/watch?v=txoBO94VmEI&t=2s"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white/70 hover:text-white transition-colors"
        >
          Watch Short Film
        </a>
      </motion.div>
    </section>
  );
}
