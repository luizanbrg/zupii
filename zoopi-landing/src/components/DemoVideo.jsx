import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Smartphone,
  CheckCircle,
  Trophy,
  Zap,
  Gamepad2,
  BarChart3,
  Volume2,
} from "lucide-react";

const DemoVideo = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="demo"
      ref={ref}
      className="py-24 lg:py-32 bg-dark-blue text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-sand rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/20 text-primary-blue text-sm font-semibold rounded-full mb-6">
            <Smartphone size={16} />
            Démo Live
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Voyez Zoopi en action
          </h2>

          <p className="text-xl text-light-sand max-w-2xl mx-auto">
            Du login à la validation d'une tâche : découvrez l'expérience
            utilisateur fluide et gamifiée de Zoopi
          </p>
        </motion.div>

        {/* Phone mockup with video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto relative"
        >
          {/* Phone frame */}
          <div className="relative aspect-[9/19] bg-gradient-to-br from-white to-light-sand rounded-[3rem] p-4 shadow-elevated">
            {/* Screen with video */}
            <div
              className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                loop
                preload="metadata"
                poster="/demo_poster.jpg"
              >
                <source src="/demo_video.webm" type="video/webm" />
                <source src="/demo_video.mp4" type="video/mp4" />
              </video>

              {/* Play/Pause overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isPlaying ? 0 : 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-10 h-10 text-primary-blue ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Sound indicator */}
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-2 flex items-center gap-2"
                >
                  <Volume2 size={16} className="text-dark-blue" />
                  <span className="text-xs font-semibold text-dark-blue">
                    Son activé
                  </span>
                </motion.div>
              )}
            </div>

            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
          </div>

          {/* Floating labels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-4 lg:-left-20 top-1/4 bg-white text-dark-blue rounded-2xl p-4 shadow-soft max-w-xs hidden lg:block"
          >
            <div className="flex items-start gap-3">
              <CheckCircle size={28} className="text-green-500" />
              <div>
                <div className="font-bold text-sm mb-1">Tâche validée</div>
                <div className="text-xs text-text-dark">+20 points gagnés</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-4 lg:-right-20 bottom-1/4 bg-white text-dark-blue rounded-2xl p-4 shadow-soft max-w-xs hidden lg:block"
          >
            <div className="flex items-start gap-3">
              <Trophy size={28} className="text-primary-blue" />
              <div>
                <div className="font-bold text-sm mb-1">Badge débloqué !</div>
                <div className="text-xs text-text-dark">Super Nettoyeur</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features highlights below video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, text: "Interface fluide et intuitive" },
            { icon: Gamepad2, text: "Gamification immersive" },
            { icon: BarChart3, text: "Stats en temps réel" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon size={40} className="mx-auto mb-3 text-light-sand" />
              <div className="text-light-sand font-medium">{item.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
