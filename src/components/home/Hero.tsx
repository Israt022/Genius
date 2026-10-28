import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="w-full bg-background">
            <div className="section-container flex min-w-0 flex-col gap-[10px] pt-10 pb-[120px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[10px]">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}