
"use client";

import Reveal from "@/components/animations/Reveal";
import Image from "next/image";
import { Quotes } from "@phosphor-icons/react";

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
];

const Reviews = () => {
    return (
        <section className="w-full bg-background px-[26px] min-[744px]:px-[42px] min-[1080px]:px-[150px]">
            {/* Heading */}
            <div className="mx-auto w-full max-w-[1140px] pt-[60px]">
                <Reveal className="mx-auto text-center">
                    <h2 className="text-3xl font-medium leading-tight text-foreground md:text-5xl lg:text-7xl">
                        What people say about our platform
                    </h2>
                </Reveal>
            </div>

            {/* Review Cards */}
            <div className="mx-auto mt-10 grid w-full max-w-[1140px] grid-cols-1 gap-[30px] pb-[100px] min-[1200px]:grid-cols-3">
                {data.map((item, index) => (
                    <Reveal
                        key={item.id}
                        delay={index * 0.12}
                        className="h-full min-w-0"
                    >
                        <article className="flex h-full min-w-0 flex-col gap-[20px] rounded-[20px] border border-[#5F5F5F] p-[22px]">
                            {/* Quote Icon */}
                            <Quotes
                                width={60}
                                height={48.88}
                                weight="fill"
                                className="shrink-0 text-[#FFFFFF]"
                                aria-hidden="true"
                            />

                            {/* Review Description */}
                            <p className="text-[18px] leading-7 text-[#FFFFFF] md:text-[22px]">
                                {item.description}
                            </p>

                            {/* Reviewer */}
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
                                    {/* <p className="mt-1 text-sm text-secondary">
                                        {item.role}
                                    </p> */}
                                </div>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
