import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { heroData } from "@/data/home/hero.data";

export default function HeroContent() {
    return (
        <div className="flex w-full min-w-0 flex-col items-start min-[1440px]:w-0 min-[1440px]:flex-1">
            <Reveal className="w-full min-w-0">
                <h1 className="font-sans text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1]">
                    {heroData.heading}
                </h1>
            </Reveal>

            <Reveal delay={0.12} className="mt-5 w-full min-w-0 md:mt-6">
                <p className="text-base font-light leading-[1.5] text-secondary sm:text-lg md:text-xl lg:text-[26px]">
                    {heroData.description}
                </p>
            </Reveal>

            <Reveal delay={0.22} className="mt-6 md:mt-8">
                <div className="flex flex-wrap items-center gap-[10px]">
                    {heroData.buttons.map((button) => (
                        <Link
                            key={button.label}
                            href={button.href}
                            className={
                                button.variant === "primary"
                                    ? "inline-flex min-h-12 items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-background transition-transform duration-200 hover:scale-[1.03]"
                                    : "inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-white px-6 py-3 font-semibold text-[#041117] transition-transform duration-200 hover:scale-[1.03]"
                            }
                        >
                            {button.label}
                        </Link>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}
