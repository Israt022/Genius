'use client'

import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import type { FeatureSectionData } from "@/data/home/features.data";
import { CheckCircle } from "@phosphor-icons/react";

type FeatureSectionProps = {
    feature: FeatureSectionData;
};

export default function FeatureSection({
    feature,
}: FeatureSectionProps) {
    const imageOnLeft = feature.imageSide === "left";

    return (
        <section
            id={feature.id}
            className="w-full bg-background"
        >
            <div
                className={`section-container mx-auto flex min-w-0 flex-col items-center gap-8 px-[26px] py-10 min-[744px]:px-[42px] min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-6 min-[1200px]:px-[clamp(60px,calc(75vw-810px),150px)] min-[1200px]:py-[80px] ${imageOnLeft ? "min-[1200px]:flex-row-reverse" : ""
                    }`}
            >
                {/* Text content */}
                <Reveal
                    direction={imageOnLeft ? "left" : "right"}
                    className="w-full min-w-0 min-[1200px]:w-0 min-[1200px]:flex-1"
                >
                    <div className="flex min-w-0 flex-col items-start">
                        <span className="inline-flex max-w-full items-center rounded-full border border-brand px-5 py-[15px] text-[20px] font-medium text-brand sm:text-[26px]">
                            {feature.badge}
                        </span>

                        <h2 className="mt-5 text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground sm:text-4xl min-[1000px]:text-5xl min-[1200px]:text-6xl">
                            {feature.heading}
                        </h2>

                        <p className="mt-5 max-w-xl text-base font-light leading-7 text-secondary sm:text-[22px]">
                            {feature.description}
                        </p>

                        <ul className="mt-6 flex flex-col gap-3">
                            {feature.benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-2 text-2xl text-brand sm:text-base"
                                >
                                    <CheckCircle
                                        size={30}
                                        weight="fill"
                                        className="shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span className="text-[18px] md:text-[20px]">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                {/* Dynamic image */}
                <Reveal
                    direction={imageOnLeft ? "right" : "left"}
                    delay={0.12}
                    className="w-full min-w-0 min-[1200px]:w-0 min-[1200px]:flex-1"
                >
                    <div className="relative mx-auto h-[620px] w-full min-w-0 max-w-none overflow-hidden rounded-[20px] bg-surface min-[1200px]:max-w-[555px]">
                        <Image
                            src={feature.image.src}
                            alt={feature.image.alt}
                            width={335}
                            height={335}
                            sizes="(min-width: 1200px) 555px, 100vw"
                            className="absolute bottom-[-96.53px] left-1/2 h-auto w-[335.19px] max-w-none -translate-x-1/2 object-contain"
                            style={{
                                objectPosition: feature.image.position ?? "center",
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}