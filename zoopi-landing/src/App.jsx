import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import DemoSection from "./components/DemoSection";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
    </div>
  );
}

export default App;
