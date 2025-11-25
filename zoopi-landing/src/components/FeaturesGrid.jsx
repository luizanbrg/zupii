import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "🏆",
      title: "Points & Badges",
      description:
        "Gagnez des points à chaque tâche terminée, débloquez des badges uniques et montez en niveau",
      color: "from-soft-yellow to-secondary-coral",
    },
    {
      icon: "⚖️",
      title: "Répartition intelligente",
      description:
        "Algorithme IA qui détecte les charges injustes et propose une répartition équitable automatique",
      color: "from-primary-teal to-blue-500",
    },
    {
      icon: "⚔️",
      title: "Défis inter-foyers",
      description:
        "Comparez votre foyer avec d'autres et participez à des défis hebdomadaires pour gagner des bonus",
      color: "from-secondary-coral to-pink-500",
    },
    {
      icon: "🔔",
      title: "Notifications motivantes",
      description:
        "Rappels taquins style Duolingo qui vous poussent gentiment à accomplir vos tâches quotidiennes",
      color: "from-primary-teal to-cyan-500",
    },
    {
      icon: "📡",
      title: "Offline & WebSockets",
      description:
        "Mode hors-ligne complet avec synchronisation intelligente et mises à jour en temps réel",
      color: "from-purple-500 to-primary-teal",
    },
    {
      icon: "🎁",
      title: "Partenariats & Rewards",
      description:
        "Échangez vos points contre de vraies récompenses : réductions Fnac, Dyson, Leclerc et plus encore",
      color: "from-soft-yellow to-primary-teal",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-neutral-surface"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-teal/10 text-primary-teal text-sm font-semibold rounded-full mb-6">
            ⚡ Features
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-6">
            Une application{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-coral">
              complète et moderne
            </span>
          </h2>

          <p className="text-xl text-neutral-muted max-w-2xl mx-auto">
            Zoopi combine gamification, intelligence artificielle et expérience
            utilisateur fluide pour réinventer la gestion des tâches ménagères
          </p>
        </motion.div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon with animation */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-6xl mb-6 relative z-10"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-navy-dark mb-4 relative z-10">
                {feature.title}
              </h3>

              <p className="text-neutral-muted leading-relaxed mb-6 relative z-10">
                {feature.description}
              </p>

              {/* Micro CTA */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary-teal font-semibold text-sm relative z-10"
              >
                <span>En savoir plus</span>
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-teal/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-muted mb-6">
            Et ce n'est que le début... Découvrez notre roadmap complète sur 18
            mois 🚀
          </p>
          <motion.button
            onClick={() =>
              document
                .getElementById("roadmap")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-navy-dark font-semibold rounded-card shadow-soft border-2 border-primary-teal hover:bg-primary-teal hover:text-white transition-all duration-300"
          >
            Voir la roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
