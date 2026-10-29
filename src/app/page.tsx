import Features from "@/components/home/Features";
import FeatureHighlights from "@/components/home/features/FeatureHighlights";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <div className="space-y-[10px]">
      <Hero />
      <Features />
      <FeatureHighlights />
      <Pricing />
    </div>
  );
}
