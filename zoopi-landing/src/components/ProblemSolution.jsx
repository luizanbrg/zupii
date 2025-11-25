import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "🎯",
      title: "Système de points, badges et classements",
      description:
        "Chaque tâche rapporte des points, débloquez des badges et montez dans le classement de votre foyer",
    },
    {
      icon: "⚖️",
      title: "Répartition intelligente et transparente",
      description:
        "Algorithme équitable qui détecte les déséquilibres et suggère une répartition optimale",
    },
    {
      icon: "🔔",
      title: "Notifications motivantes façon Duolingo",
      description:
        "Des rappels taquins et personnalisés pour vous motiver sans vous ennuyer",
    },
    {
      icon: "🎁",
      title: "Récompenses réelles via partenariats",
      description:
        "Échangez vos points contre des réductions chez nos partenaires (Fnac, Dyson, Leclerc...)",
    },
  ];

  return (
    <section id="problem" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-secondary-coral/10 text-secondary-coral text-sm font-semibold rounded-full mb-6">
            ⚠️ Le Problème
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-6">
            La gestion des tâches crée des tensions
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-extrabold text-secondary-coral"
            >
              82%
            </motion.div>
            <p className="text-xl lg:text-2xl text-neutral-muted text-left max-w-md">
              des colocations vivent des{" "}
              <span className="font-semibold text-navy-dark">
                conflits autour des corvées
              </span>
            </p>
          </div>

          <p className="text-lg text-neutral-muted italic">
            Source : Insee 2024
          </p>
        </motion.div>

        {/* Divider with arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-20"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-teal to-secondary-coral rounded-full flex items-center justify-center text-white text-3xl shadow-soft">
            ↓
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-teal/10 text-primary-teal text-sm font-semibold rounded-full mb-6">
            ✅ La Solution
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-6">
            Zoopi transforme les tâches en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-coral">
              jeu collaboratif
            </span>
          </h2>

          <p className="text-xl text-neutral-muted">
            Plus d'équité, plus de motivation, moins de tensions. MVP existant —
            roadmap prête.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(11, 37, 69, 0.12)",
              }}
              className="bg-neutral-surface rounded-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
