import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-blue text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-light-sand rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-extrabold text-white mb-1">ZOOPI</h3>
            <p className="text-light-sand/80 text-sm">
              Transformez vos tâches ménagères en missions ludiques
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <a
              href="#hero"
              className="text-light-sand/80 hover:text-white transition-colors"
            >
              Accueil
            </a>
            <span className="text-light-sand/40">•</span>
            <a
              href="#problem"
              className="text-light-sand/80 hover:text-white transition-colors"
            >
              Problème
            </a>
            <span className="text-light-sand/40">•</span>
            <a
              href="#solution"
              className="text-light-sand/80 hover:text-white transition-colors"
            >
              Solution
            </a>
            <span className="text-light-sand/40">•</span>
            <a
              href="#demo"
              className="text-light-sand/80 hover:text-white transition-colors"
            >
              Démo
            </a>
            <span className="text-light-sand/40">•</span>
            <a
              href="#tech"
              className="text-light-sand/80 hover:text-white transition-colors"
            >
              Tech
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-white/10 hover:bg-primary-blue rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-white/10 hover:bg-primary-blue rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </motion.a>
            <motion.a
              href="mailto:contact@zoopi.app"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-white/10 hover:bg-primary-blue rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-light-sand/70"
        >
          <p className="flex items-center gap-1">
            © {currentYear} Zoopi. Fait avec{" "}
            <Heart className="w-3 h-3 text-red-400 fill-current" />
          </p>
          <p>Projet présenté à Epitech - Promotion 2027</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
