import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Recruitment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      icon: "📱",
      title: "Développeur Mobile",
      tech: "React Native",
      available: 1,
    },
    {
      icon: "⚙️",
      title: "Développeur Backend",
      tech: "Node.js / TypeScript",
      available: 2,
    },
    {
      icon: "🤖",
      title: "Développeur IA/Data",
      tech: "Python / ML",
      available: 1,
    },
    {
      icon: "🎨",
      title: "UI/UX Designer",
      tech: "Figma / Design Systems",
      available: 1,
    },
  ];

  const mailtoLink = `mailto:luiza.nobrega@epitech.eu,axel1.huguet@epitech.eu?subject=Candidature%20Zoopi%20-%20[Votre%20Rôle]&body=Bonjour,%0D%0A%0D%0AJe%20suis%20intéressé(e)%20par%20le%20projet%20Zoopi.%0D%0A%0D%0ARôle%20souhaité:%20%0D%0ACompétences:%20%0D%0AMotivation:%20%0D%0A%0D%0ACordialement`;

  return (
    <section
      id="recruitment"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-br from-navy-dark via-primary-teal/20 to-navy-dark text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary-coral rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-soft-yellow/20 text-soft-yellow text-sm font-semibold rounded-full mb-6">
            🔥 On recrute !
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Rejoignez l'aventure Zoopi
          </h2>

          <p className="text-xl text-neutral-surface max-w-2xl mx-auto mb-8">
            Vous êtes étudiant(e) en MSc et vous voulez développer une
            application mobile complète avec des fonctionnalités avancées ?
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>✅</span> MVP existant
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>✅</span> Stack moderne
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>✅</span> Équipe motivée
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>✅</span> Projet ambitieux
            </div>
          </div>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20 hover:border-primary-teal hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold mb-2">{role.title}</h3>
              <p className="text-neutral-surface text-sm mb-3">{role.tech}</p>
              <div className="inline-block px-3 py-1 bg-secondary-coral rounded-full text-xs font-semibold">
                {role.available} poste{role.available > 1 ? "s" : ""} ouvert
                {role.available > 1 ? "s" : ""}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What we offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-card p-8 lg:p-12 border border-white/20 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Ce qu'on offre 🎁
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "🚀 Expérience solide pour votre portfolio",
              "💻 Stack moderne et scalable",
              "🤝 Environnement bienveillant",
              "📚 Documentation complète",
              "⏰ Réunions hebdo organisées",
              "🎯 Objectifs clairs et atteignables",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="text-xl">{benefit.split(" ")[0]}</span>
                <span className="text-neutral-surface">
                  {benefit.substring(benefit.indexOf(" ") + 1)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-neutral-surface mb-6">
            Envoyez-nous un message avec votre rôle souhaité, compétences et
            motivation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={mailtoLink}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-navy-dark text-lg font-bold rounded-card shadow-elevated hover:bg-neutral-surface transition-all duration-300"
            >
              📧 Postuler maintenant
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/luiza-nobrega-felix/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary-teal text-white text-lg font-semibold rounded-card shadow-soft hover:bg-primary-teal/90 transition-all duration-300"
            >
              💼 LinkedIn
            </motion.a>
          </div>
          <p className="text-sm text-neutral-surface mt-6 opacity-75">
            Entretien de 15 minutes pour faire connaissance • Réponse sous 48h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Recruitment;
