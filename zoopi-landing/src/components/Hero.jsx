import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
        console.log("Autoplay prevented");
      });
    }
  }, []);

  const scrollToVote = () => {
    document.getElementById("vote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-surface via-white to-primary-teal/5"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary-teal rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-coral rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-soft-yellow text-navy-dark text-sm font-semibold rounded-full mb-6">
                🎮 MVP Fonctionnel · Roadmap 18 mois
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-balance">
              Fini les disputes — transformez les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-coral">
                corvées en jeu
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-neutral-muted leading-relaxed max-w-2xl">
              Zoopi gamifie les tâches ménagères : points, défis, classements et
              récompenses pour un foyer plus coopératif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={scrollToVote}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(31, 182, 165, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary-teal text-white text-lg font-bold rounded-card shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                🗳️ Voter pour Zoopi
              </motion.button>

              <motion.button
                onClick={() =>
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-navy-dark text-lg font-semibold rounded-card shadow-soft border-2 border-neutral-surface hover:border-primary-teal transition-all duration-300"
              >
                📱 Voir la démo
              </motion.button>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-neutral-surface/50"
            >
              <div>
                <div className="text-3xl font-bold text-primary-teal">82%</div>
                <div className="text-sm text-neutral-muted">
                  Conflits en colocation
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-teal">60k</div>
                <div className="text-sm text-neutral-muted">
                  Objectif MAU T4 2025
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-teal">
                  18 mois
                </div>
                <div className="text-sm text-neutral-muted">
                  Roadmap complète
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup with Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm lg:max-w-md"
            >
              {/* Phone mockup frame */}
              <div className="relative aspect-[9/19] bg-gradient-to-br from-navy-dark to-primary-teal rounded-[3rem] p-3 shadow-elevated">
                {/* Screen content area with video */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Video inside phone screen */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    poster="/poster.jpg"
                    onLoadedData={() => setIsVideoLoaded(true)}
                  >
                    <source src="/hero_loop.webm" type="video/webm" />
                    <source src="/hero_loop.mp4" type="video/mp4" />
                  </video>

                  {/* Fallback image if video doesn't load */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-teal to-secondary-coral">
                      <div className="text-white text-center p-8">
                        <div className="text-6xl mb-4">🎮</div>
                        <div className="text-xl font-bold">Zoopi</div>
                        <div className="text-sm mt-2 opacity-80">
                          Gamifiez vos tâches
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
              </div>

              {/* Floating badges around phone */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-soft p-4"
              >
                <div className="text-3xl">🏆</div>
                <div className="text-xs font-semibold mt-1">+50 pts</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-soft p-4"
              >
                <div className="text-3xl">🔥</div>
                <div className="text-xs font-semibold mt-1">Streak 7j</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-neutral-muted cursor-pointer hover:text-primary-teal transition-colors"
          onClick={() =>
            document
              .getElementById("problem")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm font-medium mb-2">Découvrir</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
