import { motion } from "framer-motion";
import { Play, Smartphone } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="demo"
      className="relative pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-light-sand/20 via-cream to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-20 -left-32 w-96 h-96 bg-primary-blue rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-20 -right-32 w-80 h-80 bg-light-sand rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
            <Smartphone className="w-5 h-5 text-primary-blue" />
            <span className="text-primary-blue font-semibold text-sm">
              Démo en action
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6 leading-tight">
            Un{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-dark-blue">
              prototype fonctionnel
            </span>
          </h2>

          <p className="text-xl text-text-dark/80">
            Nous avons déjà créé un premier prototype fonctionnel de
            l'application mobile
          </p>
        </motion.div>

        {/* iPhone Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xs mx-auto"
        >
          {/* iPhone Frame */}
          <div className="relative">
            {/* iPhone body */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />

              {/* Screen */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* Video element */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/path-to-your-thumbnail.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Play overlay */}
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-dark-blue/20 backdrop-blur-[2px]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                    >
                      <Play
                        className="w-8 h-8 text-primary-blue ml-1"
                        fill="currentColor"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[3rem] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
