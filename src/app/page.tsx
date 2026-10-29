import Features from "@/components/home/Features";
import FeatureHighlights from "@/components/home/features/FeatureHighlights";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Resources from "@/components/home/Resources";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <div className="space-y-[10px]">
      <Hero />
      <Features />
      <FeatureHighlights />
      <Pricing />
      <Resources />
      <Reviews />
    </div>
  );
}
