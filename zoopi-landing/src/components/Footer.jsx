import { motion } from "framer-motion";
import {
  Gamepad2,
  Mail,
  Briefcase,
  Rocket,
  Link2,
  Heart,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-dark-blue text-white py-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-light-sand rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-16 border-b border-white/10"
        >
          <div className="inline-block mb-6">
            <div className="flex justify-center mb-4">
              <Rocket size={64} className="text-light-sand" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Rejoignez l'aventure Zoopi !
            </h2>
          </div>

          <p className="text-xl text-light-sand max-w-2xl mx-auto mb-8">
            Nous recherchons des talents passionnés pour développer
            l'application qui va transformer la gestion des tâches ménagères.
            <br />
            Développeurs, designers, data scientists... Rejoignez-nous !
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("recruitment")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-6 bg-gradient-to-r from-primary-blue via-light-sand to-light-sand text-dark-blue text-2xl font-extrabold rounded-card shadow-elevated hover:shadow-elevated transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Briefcase size={28} />
            VOIR LES POSTES
          </motion.button>

          <p className="text-sm text-light-sand mt-6 opacity-75">
            Postes ouverts en développement mobile, backend, IA et design
          </p>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Gamepad2 size={28} />
              <span>Zoopi</span>
            </h3>
            <p className="text-light-sand leading-relaxed mb-4">
              L'application mobile qui gamifie les tâches ménagères pour rendre
              votre foyer plus coopératif et agréable.
            </p>
            <div className="flex gap-2">
              <span className="inline-block px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-semibold rounded-full">
                MVP Ready
              </span>
              <span className="inline-block px-3 py-1 bg-light-sand/20 text-light-sand text-xs font-semibold rounded-full">
                18 mois roadmap
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Mail size={20} />
              Contact
            </h3>
            <ul className="space-y-3 text-light-sand">
              <li>
                <a
                  href="mailto:luiza.nobrega@epitech.eu"
                  className="hover:text-primary-blue transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  luiza.nobrega@epitech.eu
                </a>
              </li>
              <li>
                <a
                  href="mailto:axel1.huguet@epitech.eu"
                  className="hover:text-primary-blue transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  axel1.huguet@epitech.eu
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luiza-nobrega-felix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-blue transition-colors flex items-center gap-2"
                >
                  <Briefcase size={16} />
                  LinkedIn Luiza
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/axel-huguet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-blue transition-colors flex items-center gap-2"
                >
                  <Briefcase size={16} />
                  LinkedIn Axel
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Link2 size={20} />
              Liens
            </h3>
            <ul className="space-y-3 text-light-sand">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary-blue transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary-blue transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-primary-blue transition-colors"
                >
                  Démo
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-primary-blue transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#recruitment"
                  className="hover:text-primary-blue transition-colors"
                >
                  Recrutement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-light-sand text-sm">
          <p>© {currentYear} Zoopi. Projet étudiant Epitech MSc Nice.</p>
          <p className="flex items-center gap-2">
            Fait avec <Heart size={16} className="text-red-400 fill-red-400" />{" "}
            et beaucoup de <Coffee size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
