import { useState } from "react";
import { motion } from "framer-motion";

// Add your Spotify track IDs for each genre
const genres = {
  pop: {
    label: "Pop",
    tracks: [
      "3xQQS8GaSxXRbTlx3QrQlR",
      "7KFh9FKKF9vTIQRB1Mqqlo",
      "0EAuQv36oROvWLmPvlmsd8",
      "5tVVo6rLpnepq9Unx6nDC9",
      "1tAzDXHW0lnsgaFupkx3IB",
      "7q4bhtRKWiT4vldV12zT3s",
      "1Pbsir2CNnzpBea6DFZdej",
      "2ezSn4nSbKkw6eMggtjlOg",
    ],
  },
  hiphop: {
    label: "Rap",
    tracks: [
      "4vXzvMp9NVZT3Dbip6I4Ar",
      "1XAoRhgUbL8EvcaRHYhZbV",
      "3vYVMujnwZLuCOgw5144wh",
      "4EB0cTqaqMTRTYAaJInxmy",
      "1UXWswhznP0PTi9MeTWqDw",
      "5W0HiRGjAjJRhlMhky99ww",
    ],
  },
  edm: {
    label: "EDM",
    tracks: [
      "5iRq7fuqyOxOroVmi02IBR",
      "4eXzAVTDMKIYJfgEfZDCuS",
      "7y71FDTarlxE9r4bvPDO24",
      "0MDfqQa9alV4j4xizaTCf2",
      "2m7il6LLvUYTizNGfkUwuA",
      "5k6KYsvl1SotHjTcslbesa",
      "71FQ2MlCUl4k9iZ4grmh4B",
      "4Gn2uFHUcZTT7ALJEa7npU",
    ],
  },
  rock: {
    label: "Rock",
    tracks: [
      "1T6OPHTfkzccl6kfjf5SvP",
      "4Qz3OFaE4EV1jiLoEJcTzp",
    ],
  },
};

type Genre = keyof typeof genres;

export function Adwuu() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>("pop");

  return (
    <section id="adwuu" className="min-h-screen flex flex-col items-start pt-6 px-6 text-white border-[48px] border-purple relative overflow-hidden animated-gradient">
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex justify-between items-start gap-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold shrink-0">
            adwuu
          </h2>

          <p className="font-bold text-white text-right max-w-md">
            Songwriter and producer specializing in pop, hip-hop, and EDM. 100k+ streams to date.
          </p>
        </motion.div>

        {/* Genre Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-between items-center"
        >
          <div className="flex gap-4">
            {(Object.keys(genres) as Genre[]).map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedGenre === genre
                    ? "bg-white text-background"
                    : "bg-transparent border border-white text-white hover:bg-white/20"
                }`}
              >
                {genres[genre].label}
              </button>
            ))}
          </div>
          <a
            href="https://linktr.ee/adwuu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white/70 hover:text-white transition-colors"
          >
            Other Platforms?
          </a>
        </motion.div>

        {/* Spotify Embeds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {genres[selectedGenre].tracks.map((trackId, index) => (
            <iframe
              key={`${selectedGenre}-${index}`}
              src={`https://open.spotify.com/embed/track/${trackId}?theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl opacity-80"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
