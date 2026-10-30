"use client";

import Reveal from "@/components/animations/Reveal";
import {
    ClockCountdown,
    ChartLineUp,
    Wallet,
} from "@phosphor-icons/react";

const data = [
    {
        id: 1,
        icon: ClockCountdown,
        heading: "Attendance Tracking",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
    {
        id: 2,
        icon: ChartLineUp,
        heading: "HR Analytics",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
    {
        id: 3,
        icon: Wallet,
        heading: "Employee Payslip",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
];

const Features = () => {
    // console.log(window.innerWidth, window.innerHeight);
    return (
        <section className="w-full bg-background">
            <div className="section-container flex min-w-0 flex-col gap-[10px] px-[26px] pt-10 pb-[60px] text-center min-[744px]:px-[32px] min-[1440px]:px-[99.5px] min-[1200px]:pb-[80px]">
                <Reveal className="w-full min-w-0">
                    <h2 className="font-sans text-3xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-5xl lg:text-[72px] lg:leading-[1]">
                        Comprehensive features with automated processes
                    </h2>
                </Reveal>
            </div>

            <div className="section-container grid min-w-0 grid-cols-1 gap-[30px] px-[16px] pb-[120px] min-[744px]:px-[20px] min-[1024px]:grid-cols-3 min-[1024px]:px-[150px] min-[1440px]:px-[150px]">
                {data.map((item) => {
                    const Icon = item.icon;
                    const isFeatured = item.id === 1;
                    return (
                        <Reveal key={item.id} className="h-full min-w-0">
                            <article
                                className={`flex h-full min-h-[260px] flex-col items-start gap-5 rounded-[20px] border border-[#5F5F5F] p-[30px] text-left ${isFeatured
                                    ? "bg-brand/10 text-brand"
                                    : "bg-background text-foreground"
                                    }`}
                            >
                                <Icon
                                    size={32}
                                    weight="fill"
                                    className={isFeatured ? "text-brand" : "text-foreground"}
                                />
                                <div className="flex flex-col gap-5">
                                    <h3 className="text-2xl font-semibold leading-tight">
                                        {item.heading}
                                    </h3>
                                    <p
                                        className={`text-base leading-7 ${isFeatured
                                            ? "text-brand/80"
                                            : "text-secondary"
                                            }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;