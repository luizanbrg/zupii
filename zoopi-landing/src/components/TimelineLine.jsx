import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Sparkles } from "lucide-react";

const TimelineLine = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={lineRef}
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      style={{
        top: "-10%",
        height: "120%",
      }}
    >
      {/* Background line (gray) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300/30 rounded-full" />

      {/* Animated line with gradient */}
      <motion.div
        style={{ height }}
        className="absolute left-1/2 -translate-x-1/2 w-0.5 rounded-full bg-gradient-to-b from-red-400/40 via-orange-300/30 to-primary-blue/40 origin-top"
      />

      {/* Problem node (top) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 top-0"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-red-400/80 to-orange-400/80 rounded-full flex items-center justify-center shadow-md border-2 border-white/80 backdrop-blur-sm">
          <AlertCircle className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      {/* Solution node (bottom) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary-blue/80 to-dark-blue/80 rounded-full flex items-center justify-center shadow-md border-2 border-white/80 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineLine;
