import Link from "next/link";

export default function FooterLogo() {
    return (
        <Link
            href="/"
            aria-label="Genius home"
            className="inline-flex w-fit items-center font-sans text-[72px] font-medium leading-[100%] tracking-[0%] text-brand"
        >
            Genius
        </Link>
    );
}
