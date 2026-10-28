
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Genius home"
            className="inline-flex h-[38px] w-[99px] shrink-0 items-center whitespace-nowrap font-sans text-[32px] font-bold leading-[100%] tracking-[0%] text-brand"
        >
            Genius
        </Link>
    );
}
