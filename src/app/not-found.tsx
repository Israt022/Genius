
import Link from "next/link";
import NotFoundAnimation from "@/components/shared/NotFoundAnimation";
import { ArrowLeft, House } from "lucide-react";

const NotFound = () => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

            <div className="relative z-10 mx-auto flex w-full max-w-[700px] flex-col items-center text-center">

                {/* Custom Animation */}
                <div className="w-full max-w-[380px]">
                    <NotFoundAnimation />
                </div>

                {/* Error Text */}
                <div className="-mt-2">
                    <h1 className="text-[100px] font-extrabold leading-none tracking-tighter text-brand sm:text-[140px]">
                        404
                    </h1>

                    <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-4xl">
                        Oops! Page Not Found
                    </h2>

                    <p className="mx-auto mt-4 max-w-[440px] text-base leading-7 text-secondary sm:text-lg">
                        Looks like you've drifted into the unknown.
                        The page you're looking for doesn't exist
                        or may have been moved.
                    </p>
                </div>

                {/* Home Button */}
                <Link
                    href="/"
                    className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(182,251,68,0.15)]"
                >
                    <House size={19} />
                    Back to Home
                    <ArrowLeft
                        size={18}
                        className="rotate-180 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>

                {/* Footer */}
                <p className="mt-12 text-sm text-secondary">
                    ERROR CODE <span className="text-brand">404</span>
                    <span className="mx-2">·</span>
                    GENIUS
                </p>
            </div>
        </main>
    );
};

export default NotFound;
