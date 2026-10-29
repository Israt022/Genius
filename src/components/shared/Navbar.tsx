'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link, Button } from "@heroui/react";
import Logo from "@/components/shared/Logo";

const navItems = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact-us" },
];

const cta = {
    label: "Start Free Trial",
    href: "/login",
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(`${href}/`);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-xl">
            <header className="mx-auto flex h-[58px] w-full max-w-[1440px] items-center justify-between px-4 py-[28.5px] md:px-8 lg:h-[115px] lg:px-[150px] lg:py-[24.5px]">
                {/* Logo + Left Navigation */}
                <div className="flex min-w-0 items-center gap-8">
                    <Logo />

                    <ul className="hidden items-center gap-6 lg:flex">
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${active
                                            ? "text-brand"
                                            : "text-foreground/70 hover:text-brand"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right Actions */}
                <div className="flex shrink-0 items-center gap-3">
                    <Button
                        className="hidden  rounded-md bg-brand font-semibold text-background transition-opacity hover:opacity-85 lg:inline-flex"
                        onPress={() => {
                            window.location.href = cta.href;
                        }}
                    >
                        {cta.label}
                    </Button>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-surface-hover lg:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <svg
                            className={`size-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"
                                }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                        >
                            {isMenuOpen ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown */}
            <div
                id="mobile-navigation"
                inert={!isMenuOpen}
                className={`absolute inset-x-0 top-full grid overflow-hidden border-b border-border bg-background shadow-xl transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out lg:hidden ${isMenuOpen
                    ? "visible grid-rows-[1fr] opacity-100"
                    : "invisible grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="px-5 py-4 sm:px-8">
                        <ul className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const active = isActive(item.href);

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-surface-hover hover:text-brand ${active
                                                ? "text-brand"
                                                : "text-foreground"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-3 border-t border-border pt-4">
                            <Button
                                className="w-full rounded-md bg-brand font-semibold text-background transition-opacity hover:opacity-85"
                                onPress={() => {
                                    setIsMenuOpen(false);
                                    window.location.href = cta.href;
                                }}
                            >
                                {cta.label}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
