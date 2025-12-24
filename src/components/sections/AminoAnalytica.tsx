import { motion } from "framer-motion";
import aminoVideo from "/videos/aminoanalytica.mp4";

export function AminoAnalytica() {
  return (
    <section id="aminoanalytica" className="min-h-screen flex flex-col justify-between pt-6 pb-6 px-6 border-[48px] border-blue text-white relative overflow-hidden">
      <video
        src={aminoVideo}
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
            AminoAnalytica
          </h2>

          <p className="font-bold text-white text-right max-w-md">
            Co-founder and CTO. Building AI scientists to design life-saving drugs autonomously.
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
          href="https://www.aminoanalytica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white/70 hover:text-white transition-colors"
        >
          Visit AminoAnalytica
        </a>
      </motion.div>
    </section>
  );
}
