import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle,
  Users,
  Map,
  BarChart3,
  TrendingUp,
  Rocket,
} from "lucide-react";

const KPIs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kpis = [
    {
      value: "MVP",
      label: "Fonctionnel",
      description: "Testé en cycle projet",
      icon: CheckCircle,
      color: "from-primary-blue to-cyan-500",
    },
    {
      value: "60k",
      label: "MAU cible",
      description: "T4 2025",
      icon: Users,
      color: "from-light-sand to-pink-500",
    },
    {
      value: "18 mois",
      label: "Roadmap",
      description: "Complète & détaillée",
      icon: Map,
      color: "from-light-sand to-primary-blue",
    },
    {
      value: "82%",
      label: "Conflits",
      description: "En colocation (Insee)",
      icon: BarChart3,
      color: "from-purple-500 to-primary-blue",
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
      className="py-24 lg:py-32 bg-gradient-to-b from-light-sand to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full mb-6">
            <TrendingUp size={16} />
            Traction & Preuve
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark-blue mb-6">
            Un projet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-light-sand">
              crédible et ambitieux
            </span>
          </h2>

          <p className="text-xl text-text-dark max-w-2xl mx-auto">
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
                <kpi.icon size={48} className="text-primary-blue mb-3" />
                <div className="text-4xl lg:text-5xl font-extrabold text-dark-blue mb-2">
                  {kpi.value}
                </div>
                <div className="text-lg font-bold text-primary-blue mb-1">
                  {kpi.label}
                </div>
                <div className="text-sm text-text-dark">{kpi.description}</div>
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
          <h3 className="text-3xl font-extrabold text-dark-blue mb-8 text-center flex items-center justify-center gap-2">
            Roadmap sur 18 mois
            <Rocket size={32} className="text-primary-blue" />
          </h3>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-light-sand to-light-sand lg:-translate-x-1/2" />

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
                    <div className="inline-block bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {item.quarter}
                    </div>
                    <h4 className="text-xl font-bold text-dark-blue">
                      {item.event}
                    </h4>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-blue rounded-full shadow-soft" />

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
            className="mt-12 pt-8 border-t border-light-sand/50 grid md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary-blue mb-1">
                12M€
              </div>
              <div className="text-sm text-text-dark">TAM (Total Market)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue mb-1">
                2.4M€
              </div>
              <div className="text-sm text-text-dark">SAM (Serviceable)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-blue mb-1">
                240K€
              </div>
              <div className="text-sm text-text-dark">SOM (Obtainable)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPIs;
