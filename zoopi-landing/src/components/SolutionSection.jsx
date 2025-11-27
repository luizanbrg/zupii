import { motion } from "framer-motion";
import { Trophy, Home, Swords, Bell, Scale, ChevronRight } from "lucide-react";
import { useState } from "react";

const SolutionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: Trophy,
      title: "Gamification qui motive",
      description:
        "Transformez les corvées en jeu avec un système de points, badges et niveaux. Participez à des défis hebdomadaires et grimpez dans le classement qui se réinitialise chaque période.",
      highlights: [
        "Points et récompenses",
        "Défis hebdomadaires",
        "Classement motivant",
      ],
      color: "from-blue-500 to-primary-blue",
    },
    {
      icon: Home,
      title: "Foyers personnalisables",
      description:
        "Créez votre foyer unique en choisissant vos pièces (cuisine, salle de bain, chambres...). Invitez vos colocataires et consultez d'autres foyers pour vous inspirer.",
      highlights: [
        "Pièces personnalisables",
        "Invitation de membres",
        "Exploration de foyers",
      ],
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: Swords,
      title: "Défis entre foyers",
      description:
        "Lancez des tournois et compétitions avec d'autres maisons. Comparez vos scores et progressez dans le classement global pour devenir le meilleur foyer !",
      highlights: [
        "Tournois et compétitions",
        "Classement global",
        "Comparaison de scores",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Bell,
      title: "Notifications taquines",
      description:
        "Recevez des rappels drôles et personnalisés qui motivent sans être ennuyeux. Notre système s'inspire de Duolingo pour vous encourager avec humour.",
      highlights: [
        "Rappels personnalisés",
        "Messages drôles",
        "Motivation ludique",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Scale,
      title: "Répartition équitable",
      description:
        "Gardez une visibilité totale sur qui fait quoi. Le système détecte les déséquilibres et vous aide à maintenir une répartition juste grâce à l'historique des tâches.",
      highlights: [
        "Visibilité complète",
        "Détection de déséquilibres",
        "Historique détaillé",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <section
      id="solution"
      className="relative pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream via-white to-light-sand/20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-blue rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 -left-40 w-80 h-80 bg-light-sand rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-12 leading-tight">
            Zoopi :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-dark-blue">
              La solution ludique et intelligente
            </span>
          </h2>
          <p className="text-xl text-text-dark/80 mb-12">
            Découvrez comment Zoopi révolutionne la gestion des tâches ménagères
          </p>
        </motion.div>

        {/* Card Stack */}
        <div className="max-w-4xl mx-auto">
          <div className="relative" style={{ minHeight: "550px" }}>
            {/* Render all cards with stacking effect */}
            {features.map((feature, index) => {
              // Calculate position relative to current index
              const position =
                (index - currentIndex + features.length) % features.length;
              const isActive = position === 0;
              const isVisible = position < 3; // Show only 3 cards in stack

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isActive ? 1 : 0.92 - position * 0.03,
                    y: position * 12,
                    opacity: isVisible ? 1 - position * 0.25 : 0,
                    zIndex: features.length - position,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="absolute top-0 left-0 right-0 cursor-pointer"
                  onClick={isActive ? handleNext : undefined}
                  style={{
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div
                    className={`bg-white rounded-3xl shadow-elevated border-2 border-light-sand/50 p-8 lg:p-12 ${
                      isActive ? "hover:shadow-2xl" : ""
                    } transition-shadow duration-300`}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-dark-blue">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-text-dark/80 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlights as badges */}
                    <div className="flex flex-wrap gap-3 mb-6 justify-center">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`px-5 py-3 bg-gradient-to-r ${feature.color} rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300`}
                        >
                          {highlight}
                        </motion.div>
                      ))}
                    </div>

                    {/* Click indicator for active card */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 text-primary-blue font-semibold pt-4"
                      >
                        <span>Cliquez pour la suite</span>
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-blue"
                    : "w-2 bg-light-sand hover:bg-primary-blue/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
