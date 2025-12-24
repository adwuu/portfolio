import { motion } from "framer-motion";
import aminoVideo from "/videos/aminoanalytica.mp4";
import aminoThumb from "/videos/aminoanalytica-thumb.jpg";

export function AminoAnalytica() {
  return (
    <section id="aminoanalytica" className="min-h-screen flex flex-col pt-6 pb-6 px-6 border-y-[96px] md:border-[48px] border-blue text-white overflow-hidden animated-gradient-blue">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            AminoAnalytica
          </h2>

          <p className="font-bold text-white text-left md:text-right max-w-md">
            Co-founder and CTO. Building AI scientists to design life-saving drugs autonomously.
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
        <div className="w-full max-w-4xl aspect-[4/3] md:aspect-video overflow-hidden">
          <video
            src={aminoVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={aminoThumb}
            onCanPlay={(e) => (e.target as HTMLVideoElement).play()}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
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
