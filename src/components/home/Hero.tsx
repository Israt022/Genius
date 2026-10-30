import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="w-full bg-background">
            <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-[10px] px-[16px] pt-10 pb-[120px] min-[744px]:px-[20px] min-[1080px]:flex-row min-[1080px]:items-center min-[1080px]:gap-[10px] min-[1080px]:px-[150px]">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
}