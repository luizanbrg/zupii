import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const KPIs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kpis = [
    {
      value: "MVP",
      label: "Fonctionnel",
      description: "Testé en cycle projet",
      icon: "✅",
      color: "from-primary-teal to-cyan-500",
    },
    {
      value: "60k",
      label: "MAU cible",
      description: "T4 2025",
      icon: "👥",
      color: "from-secondary-coral to-pink-500",
    },
    {
      value: "18 mois",
      label: "Roadmap",
      description: "Complète & détaillée",
      icon: "🗺️",
      color: "from-soft-yellow to-primary-teal",
    },
    {
      value: "82%",
      label: "Conflits",
      description: "En colocation (Insee)",
      icon: "📊",
      color: "from-purple-500 to-primary-teal",
    },
  ];

  const timeline = [
    { quarter: "T3 2025", event: "Beta privée", status: "planned" },
    { quarter: "T4 2025", event: "Lancement public", status: "planned" },
    { quarter: "T1 2026", event: "Partenariats", status: "planned" },
    { quarter: "T2 2026", event: "Scale international", status: "future" },
  ];

  return (
    <section
      id="kpis"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-neutral-surface to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-teal/10 text-primary-teal text-sm font-semibold rounded-full mb-6">
            📈 Traction & Preuve
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-6">
            Un projet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-coral">
              crédible et ambitieux
            </span>
          </h2>

          <p className="text-xl text-neutral-muted max-w-2xl mx-auto">
            Zoopi n'est pas qu'une idée : nous avons un MVP fonctionnel, une
            roadmap claire et une vision à long terme
          </p>
        </motion.div>

        {/* KPI Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative bg-white rounded-card p-6 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${kpi.color} opacity-5`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{kpi.icon}</div>
                <div className="text-4xl lg:text-5xl font-extrabold text-navy-dark mb-2">
                  {kpi.value}
                </div>
                <div className="text-lg font-bold text-primary-teal mb-1">
                  {kpi.label}
                </div>
                <div className="text-sm text-neutral-muted">
                  {kpi.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline / Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto bg-white rounded-card p-8 lg:p-12 shadow-soft"
        >
          <h3 className="text-3xl font-extrabold text-navy-dark mb-8 text-center">
            Roadmap sur 18 mois 🚀
          </h3>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-teal via-secondary-coral to-soft-yellow lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-12`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    } text-left pl-8 lg:pl-0`}
                  >
                    <div className="inline-block bg-primary-teal/10 text-primary-teal px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {item.quarter}
                    </div>
                    <h4 className="text-xl font-bold text-navy-dark">
                      {item.event}
                    </h4>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-teal rounded-full shadow-soft" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* TAM/SAM/SOM placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 pt-8 border-t border-neutral-surface/50 grid md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary-teal mb-1">
                12M€
              </div>
              <div className="text-sm text-neutral-muted">
                TAM (Total Market)
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-teal mb-1">
                2.4M€
              </div>
              <div className="text-sm text-neutral-muted">
                SAM (Serviceable)
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-teal mb-1">
                240K€
              </div>
              <div className="text-sm text-neutral-muted">SOM (Obtainable)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPIs;
