import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-3 text-base text-secondary"
        >
            {items.map((item, index) => (
                <div key={item.href} className="flex items-center gap-3">
                    {index > 0 && (
                        <span aria-hidden="true">&gt;</span>
                    )}

                    <Link
                        href={item.href}
                        className="transition-colors hover:text-brand"
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;