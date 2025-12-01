import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const VideoAd = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToNextSection = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="video-intro"
      className="relative py-12 lg:py-16 pb-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-cream to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-blue rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue">
            Découvrez Zoopi en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-dark-blue">
              15 secondes
            </span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/src/assets/pub.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(43, 90, 158, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToNextSection}
            className="px-8 py-4 bg-primary-blue text-white text-lg font-bold rounded-card shadow-soft hover:shadow-elevated transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            Découvrir le projet
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoAd;
