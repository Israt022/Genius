"use client";

import Reveal from "@/components/animations/Reveal";
import FeatureHighlights from '@/components/home/features/FeatureHighlights'
import Breadcrumb from "@/components/shared/Breadcrumb";

import {
    ClockCountdown,
    ChartLineUp,
    Wallet,
    CloudArrowUp,
    CurrencyCircleDollar,
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
    {
        id: 4,
        icon: CloudArrowUp,
        heading: "Attendance Tracking",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
    {
        id: 5,
        icon: CurrencyCircleDollar,
        heading: "Reimbursement",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
    {
        id: 6,
        icon: ChartLineUp,
        heading: "Perfomance Evaluation",
        description:
            "Multiply your sales efforts with intelligent automation. Close deals faster, and with greater precision.",
    },
];

const Features = () => {
    return (
        <section>
            <div className="section-container flex min-w-0 flex-col gap-[10px] px-[26px] pt-15 pb-[60px] text-center min-[744px]:px-[42px] min-[1440px]:px-[99.5px] min-[1200px]:pb-[80px]">
                <Reveal className="w-full  max-w-[941px] mx-auto">
                    <h2 className="font-sans text-3xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-5xl lg:text-[72px] lg:leading-[1]">
                        Discover everything you can do with <span className="text-brand">Genius</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.12} className="mx-auto">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Features", href: "/features" },
                        ]}
                    />
                </Reveal>
            </div>

            <div className="section-container grid min-w-0 grid-cols-1 gap-[30px] px-[26px] pb-[120px] min-[744px]:px-[42px] min-[1024px]:grid-cols-3 min-[1024px]:px-[150px] min-[1440px]:px-[150px]">
                {data.map((item) => {
                    const Icon = item.icon;
                    const isFeatured = item.id === 1;
                    return (
                        <Reveal key={item.id} className="h-full min-w-0">
                            <article
                                className={`flex h-full min-h-[260px] flex-col items-start gap-5 rounded-[20px] border border-[#5F5F5F] p-[30px] text-left bg-background text-foreground
                                    `}
                            >
                                <Icon
                                    size={32}
                                    weight="fill"
                                    className="text-foreground"
                                />
                                <div className="flex flex-col gap-5">
                                    <h3 className="text-2xl font-semibold leading-tight">
                                        {item.heading}
                                    </h3>
                                    <p
                                        className={`text-base leading-7 text-secondary`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
            <FeatureHighlights />
        </section>
    )
}

export default Features
