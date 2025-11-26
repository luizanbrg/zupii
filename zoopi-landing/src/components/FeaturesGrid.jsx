import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Scale, Swords, Bell, Wifi, Gift, Rocket } from "lucide-react";

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Trophy,
      title: "Points & Badges",
      description:
        "Gagnez des points à chaque tâche terminée, débloquez des badges uniques et montez en niveau",
      color: "from-light-sand to-primary-blue",
    },
    {
      icon: Scale,
      title: "Répartition intelligente",
      description:
        "Algorithme IA qui détecte les charges injustes et propose une répartition équitable automatique",
      color: "from-primary-blue to-dark-blue",
    },
    {
      icon: Swords,
      title: "Défis inter-foyers",
      description:
        "Comparez votre foyer avec d'autres et participez à des défis hebdomadaires pour gagner des bonus",
      color: "from-light-sand to-light-sand",
    },
    {
      icon: Bell,
      title: "Notifications motivantes",
      description:
        "Rappels taquins style Duolingo qui vous poussent gentiment à accomplir vos tâches quotidiennes",
      color: "from-primary-blue to-light-sand",
    },
    {
      icon: Wifi,
      title: "Offline & WebSockets",
      description:
        "Mode hors-ligne complet avec synchronisation intelligente et mises à jour en temps réel",
      color: "from-dark-blue to-primary-blue",
    },
    {
      icon: Gift,
      title: "Partenariats & Rewards",
      description:
        "Échangez vos points contre de vraies récompenses : réductions Fnac, Dyson, Leclerc et plus encore",
      color: "from-light-sand to-light-sand",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-light-sand"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full mb-6">
            Features
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark-blue mb-6">
            Une application{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-light-sand">
              complète et moderne
            </span>
          </h2>

          <p className="text-xl text-text-dark max-w-2xl mx-auto">
            Zoopi combine gamification, intelligence artificielle et expérience
            utilisateur fluide pour réinventer la gestion des tâches ménagères
          </p>
        </motion.div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
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
                  className="text-primary-blue mb-6 relative z-10"
                >
                  <IconComponent size={48} strokeWidth={2} />
                </motion.div>

                <h3 className="text-2xl font-bold text-dark-blue mb-4 relative z-10">
                  {feature.title}
                </h3>

                <p className="text-text-dark leading-relaxed mb-6 relative z-10">
                  {feature.description}
                </p>

                {/* Micro CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-primary-blue font-semibold text-sm relative z-10"
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
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-dark mb-6 flex items-center justify-center gap-2">
            Et ce n'est que le début... Découvrez notre roadmap complète sur 18
            mois
            <Rocket size={20} className="text-primary-blue" />
          </p>
          <motion.button
            onClick={() =>
              document
                .getElementById("roadmap")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-dark-blue font-semibold rounded-card shadow-soft border-2 border-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
          >
            Voir la roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
