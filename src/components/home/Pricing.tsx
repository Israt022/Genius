
"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { plans } from "@/data/home/pricing.data";
import Reveal from "@/components/animations/Reveal";;

export default function Pricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <section className="w-full bg-background px-[26px] min-[744px]:px-[42px] min-[1080px]:px-[150px] py-25">
            <div className="mx-auto pt-[60px] mb-30 w-full max-w-[1140px]">
                {/* Heading */}
                <div className="mx-auto  text-center">
                    <Reveal className="mx-auto text-center">

                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight text-foreground">
                            Best pricing for growth
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-secondary sm:text-lg md:text-xl lg:text-[26px]">
                            Simple plans designed to grow with you. Choose yours and get started!
                        </p>
                    </Reveal>
                    <Reveal delay={0.12} className="mt-[30px] lg:mb-[20px] inline-flex items-center gap-1 rounded-xl border border-[#5F5F5F] bg-surface p-1.5">

                        {/* Monthly / Yearly Toggle */}
                            <button
                                type="button"
                                onClick={() => setBilling("monthly")}
                                aria-pressed={billing === "monthly"}
                                className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${billing === "monthly"
                                    ? "bg-brand text-background"
                                    : "text-foreground hover:bg-white/5"
                                    }`}
                            >
                                Monthly
                            </button>

                            <button
                                type="button"
                                onClick={() => setBilling("yearly")}
                                aria-pressed={billing === "yearly"}
                                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${billing === "yearly"
                                    ? "bg-brand text-background"
                                    : "text-foreground hover:bg-white/5"
                                    }`}
                            >
                                Yearly
                            </button>
                    </Reveal>
                </div>

                {/* Pricing Cards */}
                <div className="mt-12 grid grid-cols-1 items-start gap-6 min-[780px]:grid-cols-2 min-[1200px]:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Reveal
                            key={plan.name}
                            delay={index * 0.15}
                            className={`flex flex-col rounded-[20px] border border-[#5F5F5F] p-[22px] text-center transition-transform sm:p-[30px] ${plan.featured
                                ? "bg-brand/10 min-[1200px]:-my-10"
                                : "bg-background"
                                }`}
                        >
                            <h3 className="text-2xl font-semibold text-foreground">
                                {plan.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-secondary">
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mt-5 flex items-end justify-center gap-2">
                                <span className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                                    ${billing === "monthly" ? plan.monthly : plan.yearly}
                                </span>

                                <span className="pb-2 text-sm text-secondary">/ month</span>
                            </div>

                            <p className="mt-2 text-sm text-secondary">
                                {billing === "yearly"
                                    ? `$${plan.yearly * 12} billed annually`
                                    : "Per month, Billed monthly"}
                            </p>

                            {/* Button */}
                            <button
                                type="button"
                                className="mt-5 w-full rounded-md bg-brand px-5 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
                            >
                                {plan.button}
                            </button>

                            <div className="my-7 h-px w-full bg-[#5F5F5F]/60" />

                            {/* Features */}
                            <ul className="flex flex-col gap-4 text-left">
                                {plan.features.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-6 text-foreground"
                                    >
                                        <CheckCircle
                                            size={21}
                                            weight="fill"
                                            className="mt-0.5 shrink-0 text-brand"
                                            aria-hidden="true"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
