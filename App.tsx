import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { AssessmentPreview } from "./components/AssessmentPreview";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <AssessmentPreview />
      <FinalCTA />
    </div>
  );
}