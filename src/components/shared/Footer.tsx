
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
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 lg:px-[150px]">

                {/* Main Footer */}
                <div className="grid grid-cols-2 gap-8 pb-8 sm:grid-cols-3 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-12">

                    {/* Brand */}
                    <div className="col-span-2 flex flex-col gap-3 sm:col-span-3 lg:col-span-1 lg:pr-8">
                        <FooterLogo />

                        <p className="max-w-[340px] text-sm leading-8 text-foreground/70">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium totam.
                        </p>
                    </div>

                    {/* Navigation Groups */}
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

                {/* Copyright */}
                <div className="border-t border-border pt-5 text-center">
                    <p className="text-sm text-foreground/70">
                        Copyright © {new Date().getFullYear()} Genius. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
