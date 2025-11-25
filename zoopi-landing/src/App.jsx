import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import FeaturesGrid from "./components/FeaturesGrid";
import DemoVideo from "./components/DemoVideo";
import KPIs from "./components/KPIs";
import HowItWorks from "./components/HowItWorks";
import Roadmap from "./components/Roadmap";
import Recruitment from "./components/Recruitment";
import Footer from "./components/Footer";
import CTASticky from "./components/CTASticky";

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero
      setShowStickyCTA(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <CTASticky show={showStickyCTA} />

      <Hero />
      <ProblemSolution />
      <FeaturesGrid />
      <DemoVideo />
      <KPIs />
      <HowItWorks />
      <Roadmap />
      <Recruitment />
      <Footer />
    </div>
  );
}

export default App;
