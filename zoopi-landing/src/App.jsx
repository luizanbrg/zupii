import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
}

export default App;
