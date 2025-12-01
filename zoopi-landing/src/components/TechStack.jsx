import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Package,
  Cpu,
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Smartphone,
      title: "Mobile",
      tech: "React Native + Expo",
      description: "Application cross-platform iOS & Android",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend",
      tech: "Node.js + TypeScript",
      description: "API REST performante et typée",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Base de données",
      tech: "PostgreSQL",
      description: "Gestion robuste des données",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Package,
      title: "DevOps",
      tech: "Docker + CI/CD",
      description: "Déploiement automatisé et scalable",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="tech"
      className="relative pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-light-sand/20 to-cream"
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
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
            <Code2 className="w-5 h-5 text-primary-blue" />
            <span className="text-primary-blue font-semibold text-sm">
              Stack technique
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6 leading-tight">
            Une architecture{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-dark-blue">
              moderne et scalable
            </span>
          </h2>

          <p className="text-xl text-text-dark/80 mb-4">
            Notre prototype a été développé avec des technologies éprouvées
          </p>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-elevated border-2 border-light-sand/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-dark/60 mb-1">
                      {category.title}
                    </h3>
                    <p className="text-2xl font-bold text-dark-blue">
                      {category.tech}
                    </p>
                  </div>
                </div>
                <p className="text-text-dark/70 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-blue/5 to-dark-blue/5 rounded-3xl p-8 border-2 border-primary-blue/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue mb-2">
                  Architecture modulaire et évolutive
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  Notre architecture découplée permet d'adapter le projet selon
                  les besoins. Le choix des technologies peut évoluer : d'autres
                  frameworks mobile, langages backend ou bases de données sont
                  envisageables. L'essentiel réside dans la qualité de
                  l'implémentation et la robustesse de l'architecture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
