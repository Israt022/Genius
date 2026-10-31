"use client";

import Reveal from "@/components/animations/Reveal";
import Image from "next/image";
import { Quotes } from "@phosphor-icons/react";
import { motion, useAnimationControls } from "motion/react";
import React from "react";

const data = [
    {
        id: 1,
        description:
            "“I can’t say enough about Level. Thanks for the great service. We have no regrets!”",
        name: "Michael Marie",
        // role: "Product Designer",
        avatar: "/assets/home/reviews/user-1.png",
    },
    {
        id: 2,
        description:
            "“We’re loving it. It really saves me time and effort. Level is exactly what we have been lacking.”",
        name: "Riana Rinie",
        // role: "Marketing Manager",
        avatar: "/assets/home/reviews/user-2.png",
    },
    {
        id: 3,
        description:
            "“I made back the purchase price in just 48 hours! We’ve seen amazing results already.”",
        name: "Maria Assegaf",
        // role: "Business Owner",
        avatar: "/assets/home/reviews/user-3.png",
    },
    {
        id: 4,
        description:
            "“The platform makes our daily workflow much easier. Everything feels simple and well organized.”",
        name: "James Wilson",
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop",
    },
    {
        id: 5,
        description:
            "“A great experience overall. The interface is clean, intuitive, and saves our team valuable time.”",
        name: "Sophia Martin",
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
    },
    {
        id: 6,
        description:
            "“Everything we need is in one place. It has made managing our work so much more convenient.”",
        name: "Daniel Smith",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
    },
];

const Reviews = () => {
    const controls = useAnimationControls();

    const duplicatedData = [...data, ...data];

    React.useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [controls]);

    return (
        <section className="w-full bg-background px-[16px] min-[744px]:px-[22px] min-[1080px]:px-[150px]">
            {/* Heading */}
            <div className="mx-auto w-full max-w-[1140px] pt-[60px]">
                <Reveal className="mx-auto text-center">
                    <h2 className="text-3xl font-medium leading-tight text-foreground md:text-5xl lg:text-7xl">
                        What people say about our platform
                    </h2>
                </Reveal>
            </div>

            {/* Review Cards */}
            {/* <div className="mx-auto mt-10 grid w-full max-w-[1140px] grid-cols-1 gap-[30px] pb-[100px] min-[1200px]:grid-cols-3">
                {data.map((item, index) => (
                    <Reveal
                        key={item.id}
                        delay={index * 0.12}
                        className="h-full min-w-0"
                    >
                        <article className="flex h-full min-w-0 flex-col gap-[20px] rounded-[20px] border border-[#5F5F5F] p-[22px]">

                            <Quotes
                                width={60}
                                height={48.88}
                                weight="fill"
                                className="shrink-0 text-[#FFFFFF]"
                                aria-hidden="true"
                            />

                            <p className="text-[18px] leading-7 text-[#FFFFFF] md:text-[22px]">
                                {item.description}
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="relative size-[56px] shrink-0 overflow-hidden rounded-full">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-[18px] md:text-[22px] text-foreground">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div> */}
            {/* Review Slider */}
            <div
                className="mx-auto mt-10 w-full max-w-[1140px] overflow-hidden pb-[100px]"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
            >
                <motion.div
                    className="flex w-max gap-[30px]"
                    animate={controls}
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() => {
                        controls.start({
                            x: ["0%", "-50%"],
                            transition: {
                                duration: 60,
                                ease: "linear",
                                repeat: Infinity,
                            },
                        });
                    }}
                >
                    {duplicatedData.map((item, index) => (
                        <article
                            key={`${item.id}-${index}`}
                            className="group flex w-[300px] shrink-0 flex-col gap-[20px] rounded-[20px] border border-[#5F5F5F] bg-background p-[18px] transition-all duration-300 hover:scale-[1.01] hover:border-brand hover:bg-brand/5 min-[744px]:w-[350px] min-[744px]:p-[22px]"
                        >
                            <Quotes
                                width={60}
                                height={48.88}
                                weight="fill"
                                className="shrink-0 text-white"
                                aria-hidden="true"
                            />

                            <p className="text-[18px] leading-7 text-white transition-colors duration-300 group-hover:text-brand md:text-[22px]">
                                {item.description}
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="relative size-[56px] shrink-0 overflow-hidden rounded-full">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        unoptimized
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-[18px] text-foreground transition-colors duration-300 group-hover:text-brand md:text-[22px]">
                                    {item.name}
                                </h3>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
