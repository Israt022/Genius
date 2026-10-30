"use client";

import { useEffect, useState } from "react";

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 90 ? 90 : prev + 1));
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[110px]" />

            <div className="relative z-10 flex w-full max-w-[400px] flex-col items-center text-center">

                {/* Animated Loader */}
                <div className="relative mb-10 flex h-32 w-32 items-center justify-center">

                    {/* Outer Orbit */}
                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-brand/30" />

                    {/* Inner Orbit */}
                    <div className="absolute inset-3 animate-[spin_4s_linear_infinite_reverse] rounded-full border border-brand/20" />

                    {/* Orbit Dot */}
                    <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_15px_#B6FB44]" />
                    </div>

                    {/* Center Logo */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/20 bg-surface shadow-[0_0_35px_rgba(182,251,68,0.12)]">
                        <span className="text-3xl font-extrabold tracking-tighter text-brand">
                            G<span className="text-foreground">.</span>
                        </span>
                    </div>
                </div>

                {/* Loading Text */}
                <h1 className="text-2xl font-bold tracking-wide text-foreground">
                    Getting things ready
                </h1>

                <p className="mt-3 text-sm text-secondary">
                    Please wait while we prepare your experience...
                </p>

                {/* Progress Bar */}
                <div className="mt-9 w-full">
                    <div className="mb-3 flex items-center justify-between text-xs font-medium">
                        <span className="tracking-widest text-secondary">
                            LOADING
                        </span>
                        <span className="tabular-nums text-brand">
                            {progress}%
                        </span>
                    </div>

                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-hover">
                        <div
                            className="h-full rounded-full bg-brand shadow-[0_0_12px_rgba(182,251,68,0.5)] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-10 text-[11px] font-medium tracking-[0.3em] text-secondary/60">
                    GENIUS · PLEASE WAIT
                </p>
            </div>
        </main>
    );
};

export default Loading;
