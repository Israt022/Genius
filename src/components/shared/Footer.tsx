
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const footerGroups = [
    {
        title: "Company",
        links: [
            { label: "Feature", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "Resource",
        links: [
            { label: "Help Center", href: "/help-center" },
            { label: "Partner Program", href: "/partners" },
            { label: "SaaS Software", href: "/saas-software" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { label: "Location", href: "/contact-us#location" },
            { label: "Email", href: "mailto:hello@genius.com" },
            { label: "Telephone", href: "tel:+1234567890" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-4 pt-0 pb-0 md:px-8 lg:px-[150px] lg:pt-[60px]">

                {/* Main Footer */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[50px]">
                    {/* Brand - Left Side */}
                    <div className="flex flex-col lg:w-[545px] lg:shrink-0">
                        <FooterLogo />

                        <p className="w-full text-[16px] font-normal leading-[50px] tracking-normal text-foreground/70 lg:h-[100px] lg:text-[22px]">
                            Sed ut perspiciatis undmnis iste natus error sit
                            <br />
                            voluptatem accu santium dolore laudantium totam.
                        </p>
                    </div>

                    {/* Link Groups - Right Side */}
                    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-[30px] lg:flex-1">
                        {footerGroups.map((group) => (
                            <div key={group.title} className="min-w-0">
                                <h3 className="mb-4 text-base font-semibold text-foreground">
                                    {group.title}
                                </h3>

                                <ul className="flex flex-col gap-4">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-foreground/75 transition-colors duration-200 hover:text-brand"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Copyright */}
                <div className="mt-8 border-t border-border py-[10px] text-center">
                    <p className="text-sm text-foreground/70">
                        Copyright © {new Date().getFullYear()} Genius. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
