import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="vote"
      className="bg-navy-dark text-white py-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-teal rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-coral rounded-full blur-3xl" />
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
            <div className="text-6xl mb-4">🗳️</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Votez pour Zoopi !
            </h2>
          </div>

          <p className="text-xl text-neutral-surface max-w-2xl mx-auto mb-8">
            Aidez-nous à transformer la gestion des tâches ménagères en jeu
            collaboratif.
            <br />
            Votre vote compte pour faire de Zoopi une réalité !
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("https://forms.gle/your-vote-form", "_blank")
            }
            className="px-12 py-6 bg-gradient-to-r from-primary-teal via-secondary-coral to-soft-yellow text-navy-dark text-2xl font-extrabold rounded-card shadow-elevated hover:shadow-elevated transition-all duration-300"
          >
            🚀 VOTER MAINTENANT
          </motion.button>

          <p className="text-sm text-neutral-surface mt-6 opacity-75">
            Formulaire rapide • Moins de 30 secondes
          </p>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🎮</span>
              <span>Zoopi</span>
            </h3>
            <p className="text-neutral-surface leading-relaxed mb-4">
              L'application mobile qui gamifie les tâches ménagères pour rendre
              votre foyer plus coopératif et agréable.
            </p>
            <div className="flex gap-2">
              <span className="inline-block px-3 py-1 bg-primary-teal/20 text-primary-teal text-xs font-semibold rounded-full">
                MVP Ready
              </span>
              <span className="inline-block px-3 py-1 bg-secondary-coral/20 text-secondary-coral text-xs font-semibold rounded-full">
                18 mois roadmap
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">📬 Contact</h3>
            <ul className="space-y-3 text-neutral-surface">
              <li>
                <a
                  href="mailto:luiza.nobrega@epitech.eu"
                  className="hover:text-primary-teal transition-colors"
                >
                  📧 luiza.nobrega@epitech.eu
                </a>
              </li>
              <li>
                <a
                  href="mailto:axel1.huguet@epitech.eu"
                  className="hover:text-primary-teal transition-colors"
                >
                  📧 axel1.huguet@epitech.eu
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luiza-nobrega-felix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-teal transition-colors"
                >
                  💼 LinkedIn Luiza
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/axel-huguet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-teal transition-colors"
                >
                  💼 LinkedIn Axel
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">🔗 Liens</h3>
            <ul className="space-y-3 text-neutral-surface">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary-teal transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary-teal transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-primary-teal transition-colors"
                >
                  Démo
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-primary-teal transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#recruitment"
                  className="hover:text-primary-teal transition-colors"
                >
                  Recrutement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-surface text-sm">
          <p>© {currentYear} Zoopi. Projet étudiant Epitech MSc Nice.</p>
          <p>Fait avec 💚 et beaucoup de ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
