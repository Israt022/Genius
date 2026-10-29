import { featuresData } from "@/data/home/features.data";
import FeatureSection from "./FeatureSection";

export default function FeatureHighlights () {
    return (
        <div className="w-full overflow-hidden bg-background">
            {featuresData.map((feature) => (
                <FeatureSection
                    key={feature.id}
                    feature={feature}
                />
            ))}
        </div>
    );
}