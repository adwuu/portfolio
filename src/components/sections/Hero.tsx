import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [showArrow, setShowArrow] = useState(false);
  const hasShownOnce = useRef(false);

  // Show arrow once after hero animation, hide when hero section is no longer visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
      hasShownOnce.current = true;
    }, 2500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only hide when scrolling away, don't show again
        if (!entry.isIntersecting && hasShownOnce.current) {
          setShowArrow(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const words = ["Hi, I'm Adam.", "I compose", "biology,", "music,", "and", "film."];

    // Map words to their section links and colors (using CSS variables)
    const buttonWords: Record<string, { href: string; color: string }> = {
      "biology,": { href: "#aminoanalytica", color: "var(--color-blue)" },
      "music,": { href: "#adwuu", color: "var(--color-purple)" },
      "film.": { href: "#film", color: "var(--color-yellow)" },
    };

    textRef.current.innerHTML = "";

    // Create word spans containing character spans
    words.forEach((word, wordIdx) => {
      const isButton = buttonWords[word];

      const wordWrapper = document.createElement(isButton ? "a" : "span");
      wordWrapper.style.display = "inline";

      if (isButton) {
        (wordWrapper as HTMLAnchorElement).href = isButton.href;
        wordWrapper.style.color = isButton.color;
        wordWrapper.style.cursor = "pointer";
        wordWrapper.style.transition = "opacity 0.2s";
        wordWrapper.addEventListener("mouseenter", () => {
          wordWrapper.style.opacity = "0.7";
        });
        wordWrapper.addEventListener("mouseleave", () => {
          wordWrapper.style.opacity = "1";
        });
        wordWrapper.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(isButton.href)?.scrollIntoView({ behavior: "smooth" });
        });
      }

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = "0";
        charSpan.className = "char";
        wordWrapper.appendChild(charSpan);
      });

      textRef.current?.appendChild(wordWrapper);

      // Add line break after first phrase, space after other words
      if (wordIdx === 0) {
        const br = document.createElement("br");
        textRef.current?.appendChild(br);
      } else if (wordIdx < words.length - 1) {
        const space = document.createTextNode(" ");
        textRef.current?.appendChild(space);
      }
    });

    // Animate each character
    animate(textRef.current.querySelectorAll(".char"), {
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 50,
      delay: stagger(50, { start: 500 }),
    });
  }, []);

  return (
    <>
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 md:px-12 lg:px-16 relative pb-32">
        <div className="max-w-4xl text-left">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          />
        </div>

        <AnimatePresence>
          {showArrow && (
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="px-[72px] py-12 text-right">
        <p className="font-bold text-white mb-4">
          Interdisciplinary creative/scientist based in London, UK.
        </p>
        <p className="font-bold text-white mb-4">
          MEng @ Imperial College.
        </p>
        <div className="flex flex-col gap-1 items-end font-bold text-muted">
          <a href="mailto:adamwu838@gmail.com" className="hover:text-text transition-colors">adamwu838@gmail.com [E]</a>
          <a href="https://linkedin.com/in/akhwu" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">linkedin/akhwu [LI]</a>
          <a href="https://x.com/adaminoacid" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">@adaminoacid [X]</a>
          <a href="https://instagram.com/adwuu" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">@adwuu [IG]</a>
        </div>
      </section>
    </>
  );
}
