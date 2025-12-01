import Hero from "./components/Hero";
import VideoIntro from "./components/VideoIntro";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import DemoSection from "./components/DemoSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <VideoIntro />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
