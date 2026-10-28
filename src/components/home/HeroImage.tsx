"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/animations/Reveal";
import { heroData } from "@/data/home/hero.data";

export default function HeroImage() {
    const reduceMotion = useReducedMotion();

    return (
        <Reveal
            direction="right"
            delay={0.15}
            className="w-full min-w-0 min-[1440px]:w-0 min-[1440px]:flex-1"
        >
            <motion.div
                className="relative aspect-[565/640] w-full overflow-hidden"
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <Image
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1023px) calc(100vw - 32px), 565px"
                    className="object-cover"
                    style={{
                        objectPosition: heroData.image.position,
                    }}
                />
            </motion.div>
        </Reveal>
    );
}