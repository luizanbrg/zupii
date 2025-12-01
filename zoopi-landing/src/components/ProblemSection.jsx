import { motion } from "framer-motion";
import {
  Scale,
  AlertCircle,
  EyeOff,
  TrendingDown,
  ArrowDown,
} from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Scale,
      title: "Déséquilibre",
      description: "Répartition inéquitable des tâches",
    },
    {
      icon: AlertCircle,
      title: "Conflits",
      description: "Oublis et reproches constants",
    },
    {
      icon: EyeOff,
      title: "Manque de visibilité",
      description: "Impossible de savoir qui fait quoi",
    },
    {
      icon: TrendingDown,
      title: "Démotivation",
      description: "Aucun plaisir dans ces corvées",
    },
  ];

  return (
    <section
      id="problem"
      className="relative pt-12 pb-8 lg:pt-20 lg:pb-12 overflow-hidden bg-gradient-to-b from-white via-cream to-cream"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-40 -left-20 w-96 h-96 bg-primary-blue rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-20 -right-20 w-80 h-80 bg-dark-blue rounded-full blur-3xl"
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
            La gestion des tâches ménagères crée plus de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              conflits
            </span>{" "}
            que de coopération
          </h2>
          <p className="text-xl text-text-dark/80 mb-12">
            Que vous soyez en colocation, en couple ou avec des enfants,{" "}
            <span className="font-semibold text-dark-blue">
              on est tous concernés
            </span>
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-light-sand/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-light-sand/30 rounded-2xl flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-dark-blue">
                  {point.title}
                </h3>
                <p className="text-sm text-text-dark/70">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics - Discreet */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-text-dark/50 max-w-5xl mx-auto">
            82% des colocations déclarent que la gestion des tâches est source
            de conflit (Insee 2024) • 74% trouvent les outils classiques
            inefficaces (Ipsos 2023)
          </p>
        </motion.div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-3xl px-8 py-6 shadow-elevated border-2 border-light-sand">
            <p className="text-2xl lg:text-3xl font-bold text-dark-blue">
              Et si organiser son foyer devenait{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-dark-blue to-primary-blue">
                ludique, équitable et gamifié
              </span>{" "}
              ?
            </p>
          </div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-16"
          >
            <ArrowDown className="w-10 h-10 text-primary-blue mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
