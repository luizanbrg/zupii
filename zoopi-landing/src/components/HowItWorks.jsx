import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      icon: "🏠",
      title: "Créer votre foyer",
      description:
        "Invitez vos colocataires ou membres de famille en quelques clics",
    },
    {
      number: "2",
      icon: "📝",
      title: "Répartir les tâches",
      description:
        "Ajoutez les tâches et laissez l'IA suggérer une répartition équitable",
    },
    {
      number: "3",
      icon: "🎁",
      title: "Gagner des récompenses",
      description:
        "Complétez vos tâches, gagnez des points et débloquez des vraies récompenses",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary-coral/10 text-secondary-coral text-sm font-semibold rounded-full mb-6">
            🛠️ Comment ça marche
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-6">
            Simple comme{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-coral">
              1, 2, 3
            </span>
          </h2>

          <p className="text-xl text-neutral-muted max-w-2xl mx-auto">
            En 3 étapes, transformez la gestion de votre foyer
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - desktop only */}
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-teal via-secondary-coral to-soft-yellow"
            style={{ top: "120px" }}
          />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-teal to-secondary-coral rounded-full text-white text-3xl font-bold mb-6 shadow-soft"
                >
                  {step.number}

                  {/* Icon badge */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-soft">
                    {step.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-navy-dark mb-4">
                  {step.title}
                </h3>

                <p className="text-neutral-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector - mobile only */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="lg:hidden flex justify-center mt-8 text-primary-teal"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-muted mb-6">
            Prêt à révolutionner votre quotidien ?
          </p>
          <motion.button
            onClick={() =>
              document
                .getElementById("vote")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(31, 182, 165, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-primary-teal to-secondary-coral text-white text-xl font-bold rounded-card shadow-elevated hover:shadow-elevated transition-all duration-300"
          >
            🗳️ Voter pour Zoopi maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
