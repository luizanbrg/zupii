import { motion } from "framer-motion";
import { useState } from "react";
import { Gamepad2, Smartphone, Users, Trophy, Flame } from "lucide-react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRecruitment = () => {
    document
      .getElementById("recruitment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-sand via-light-sand/60 to-primary-blue/10"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary-blue rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-light-sand rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            {/* Logo/Nom de l'app en très grand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-7xl lg:text-8xl font-extrabold text-dark-blue mb-2">
                ZOOPI
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-sand text-dark-blue text-sm font-semibold rounded-full">
                <Gamepad2 size={16} />
                Application mobile de gestion des tâches ménagères
              </div>
            </motion.div>

            {/* Slogan accrocheur et clair */}
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-text-dark">
              Transformez vos corvées en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-dark-blue">
                missions à accomplir
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-text-dark leading-relaxed">
              Gagnez des points, défiez vos colocataires et débloquez des
              récompenses réelles !
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={scrollToDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(65, 105, 225, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary-blue text-white text-lg font-bold rounded-card shadow-soft hover:shadow-elevated transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Smartphone size={20} />
                Découvrir l'app
              </motion.button>

              <motion.button
                onClick={scrollToRecruitment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-dark-blue text-lg font-semibold rounded-card shadow-soft border-2 border-light-sand hover:border-primary-blue transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Rejoindre l'équipe
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Phone Mockup with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 sm:w-72 md:w-80 lg:w-80"
            >
              {/* Phone mockup frame */}
              <div className="relative aspect-[9/19] bg-gradient-to-br from-dark-blue to-primary-blue rounded-[3rem] p-3 shadow-elevated">
                {/* Screen content area with image */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Zoopi image inside phone screen */}
                  <img
                    src="/src/assets/zoopi.jpeg"
                    alt="Zoopi App"
                    className="w-full h-full object-cover object-center"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                    onLoad={() => setIsVideoLoaded(true)}
                  />

                  {/* Fallback while image loads */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-blue to-light-sand">
                      <div className="text-white text-center p-8">
                        <Gamepad2 size={64} className="mx-auto mb-4" />
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
                <Trophy size={32} className="text-primary-blue" />
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
                <Flame size={32} className="text-orange-500" />
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
          className="flex flex-col items-center text-text-dark cursor-pointer hover:text-primary-blue transition-colors"
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
