import { motion, AnimatePresence } from "framer-motion";
import { Smartphone } from "lucide-react";

const CTASticky = ({ show }) => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Desktop - Top Right */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden md:block fixed top-6 right-6 z-50"
          >
            <motion.button
              onClick={scrollToDemo}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(65, 105, 225, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-blue text-white font-bold rounded-card shadow-elevated flex items-center gap-2 hover:bg-primary-blue/90 transition-colors"
            >
              <Smartphone size={20} />
              <span>Voir la démo</span>
            </motion.button>
          </motion.div>

          {/* Mobile - Bottom Center */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-50"
          >
            <motion.button
              onClick={scrollToDemo}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-primary-blue text-white text-lg font-bold rounded-card shadow-elevated flex items-center justify-center gap-2"
            >
              <Smartphone size={24} />
              <span>Voir la démo</span>
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CTASticky;
