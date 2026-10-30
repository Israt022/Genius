"use client";

import Reveal from "@/components/animations/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "@phosphor-icons/react";

const data = [
    {
        id: 1,
        image: "/assets/home/resources/resource-1.png",
        imageAlt: "Latest resource article",
        heading: "3 Things to improve your idea become reality",
        description:
            "3 things to make your idea become reality and how to realize it",
        date: "March 10, 2024",
        href: "#",
    },
    {
        id: 2,
        image: "/assets/home/resources/resource-2.png",
        imageAlt: "Resource article cover",
        heading: "Analytics for accurate data reusabel",
        description:
            "3 things to make your idea become reality and how to realize it",
        date: "April 18, 2024",
        href: "#",
    },
    {
        id: 3,
        image: "/assets/home/resources/resource-3.png",
        imageAlt: "Resource article cover",
        heading: "Customizing user persona for identity",
        description:
            "Explore how automation can simplify repetitive tasks and help your team save valuable time.",
        date: "May 05, 2024",
        href: "#",
    },
];

const Resources = () => {
    return (
        <section className="w-full bg-background px-[16px] min-[744px]:px-[22px] min-[1080px]:px-[150px]">
            {/* Heading */}
            <div className="mx-auto w-full max-w-[1140px] pt-[60px]">
                <Reveal className="mx-auto text-left">
                    <h2 className="text-3xl font-medium leading-tight text-foreground md:text-5xl lg:text-7xl">
                        Explore our latest resources
                    </h2>
                </Reveal>
            </div>

            {/* Resource Cards */}
            <div className="mx-auto mt-10 grid mb-[100px] w-full max-w-[1140px] grid-cols-1 gap-[30px] min-[1200px]:grid-cols-3">
                {data.map((item, index) => (
                    <Reveal
                        key={item.id}
                        delay={index * 0.12}
                        className="h-full min-w-0"
                    >
                        <article className="flex h-full min-w-0 flex-col gap-[20px] overflow-hidden rounded-[20px] border border-[#5F5F5F] p-[18px] sm:p-[22px]">
                            {/* Image */}
                            <Link
                                href={item.href}
                                aria-label={`Read ${item.heading}`}
                                className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[12px]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    fill
                                    sizes="(min-width: 1200px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </Link>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-[20px]">
                                <h3 className="text-[22px] font-semibold leading-tight text-foreground md:text-[26px] lg:text-[26px]">
                                    <Link
                                        href={item.href}
                                        className="transition-colors hover:text-brand"
                                    >
                                        {item.heading}
                                    </Link>
                                </h3>

                                <p className="text-[18px] md:text-[22px]  leading-6 text-[#FFFFFF]">
                                    {item.description}
                                </p>

                                {/* Date */}
                                <Link
                                    href={item.href}
                                    className="mt-auto inline-flex items-center gap-2 text-[18px] md:text-[22px]  text-[#FFFFFF] transition-colors hover:text-brand"
                                >
                                    <Clock
                                        size={22}
                                        weight="regular"
                                        className="shrink-0 text-[#5F5F5F]"
                                    />
                                    <span>{item.date}</span>
                                </Link>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Resources;