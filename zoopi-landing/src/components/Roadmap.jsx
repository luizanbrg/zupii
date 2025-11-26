import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Map,
  Rocket,
  Bot,
  Globe,
  Watch,
  Link as LinkIcon,
  TrendingUp,
  Gamepad2,
} from "lucide-react";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openAccordion, setOpenAccordion] = useState(null);

  const roadmapItems = [
    {
      title: "Roadmap Technique",
      items: [
        {
          phase: "T3 2025",
          title: "Beta Privée",
          features: [
            "Tests utilisateurs réels",
            "Optimisation performances",
            "Corrections bugs",
          ],
        },
        {
          phase: "T4 2025",
          title: "Lancement Public",
          features: [
            "App stores iOS & Android",
            "Campagne marketing",
            "Onboarding amélioré",
          ],
        },
        {
          phase: "T1 2026",
          title: "Partenariats",
          features: [
            "API partenaires actives",
            "Marketplace récompenses",
            "Programme B2B",
          ],
        },
        {
          phase: "T2 2026",
          title: "Scale & IA",
          features: [
            "Recommandations IA avancées",
            "Multi-langues",
            "Expansion internationale",
          ],
        },
      ],
    },
    {
      title: "Modèle de Monétisation",
      items: [
        {
          plan: "Freemium",
          price: "Gratuit",
          features: [
            "Foyer jusqu'à 5 personnes",
            "Tâches illimitées",
            "Points & badges basiques",
            "Pub discrète",
          ],
        },
        {
          plan: "Premium",
          price: "4,99€/mois",
          features: [
            "Foyers illimités",
            "IA prédictive avancée",
            "Pas de pub",
            "Support prioritaire",
            "Récompenses exclusives",
          ],
        },
        {
          plan: "Partenariats",
          price: "Commission",
          features: [
            "Affiliation marques",
            "Dashboard analytics B2B",
            "API intégration",
            "Revenue share 20%",
          ],
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section
      id="roadmap"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-light-sand to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-light-sand/20 text-light-sand text-sm font-semibold rounded-full mb-6">
            <Map size={16} />
            Vision & Business Model
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark-blue mb-6">
            Une stratégie{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-light-sand">
              claire et rentable
            </span>
          </h2>

          <p className="text-xl text-text-dark max-w-2xl mx-auto">
            Roadmap technique ambitieuse et modèle économique viable
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {roadmapItems.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="bg-white rounded-card shadow-soft overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(sectionIndex)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-light-sand transition-colors"
              >
                <h3 className="text-2xl font-bold text-dark-blue text-left">
                  {section.title}
                </h3>
                <motion.svg
                  animate={{ rotate: openAccordion === sectionIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-primary-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{
                  height: openAccordion === sectionIndex ? "auto" : 0,
                  opacity: openAccordion === sectionIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        openAccordion === sectionIndex
                          ? { opacity: 1, x: 0 }
                          : {}
                      }
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      className="mb-6 last:mb-0 p-6 bg-gradient-to-r from-light-sand to-white rounded-card border-l-4 border-primary-blue"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-dark-blue">
                          {item.phase || item.plan}
                        </h4>
                        {item.title && (
                          <span className="text-lg text-primary-blue font-semibold">
                            {item.title}
                          </span>
                        )}
                        {item.price && (
                          <span className="text-lg text-primary-blue font-bold">
                            {item.price}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-text-dark"
                          >
                            <span className="text-primary-blue mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Features Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-primary-blue to-light-sand rounded-card p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl font-extrabold mb-8 text-center flex items-center justify-center gap-2">
            Fonctionnalités à venir
            <Rocket size={32} />
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Bot, text: "IA prédictive avancée" },
              { icon: Globe, text: "Support multi-langues" },
              { icon: Watch, text: "App Apple Watch" },
              { icon: LinkIcon, text: "Intégrations Notion/Calendar" },
              { icon: TrendingUp, text: "Analytics avancées" },
              { icon: Gamepad2, text: "Défis communautaires" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-card px-4 py-3 font-semibold flex items-center justify-center gap-2"
              >
                <feature.icon size={20} />
                {feature.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
