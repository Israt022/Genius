
const NotFoundAnimation = () => {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">

            {/* Orbit Rings */}
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-full border border-brand/10" />

            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] rounded-full border border-dashed border-brand/15 animate-[spin_35s_linear_infinite]" />

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[70px]" />

            {/* Floating Stars */}
            <div className="absolute left-[12%] top-[22%] animate-pulse text-brand">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 0L14.5 9.5 24 12 14.5 14.5 12 24 9.5 14.5 0 12 9.5 9.5Z" />
                </svg>
            </div>

            <div className="absolute right-[15%] top-[18%] animate-[pulse_3s_ease-in-out_infinite] text-brand/70">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M12 0L14.5 9.5 24 12 14.5 14.5 12 24 9.5 14.5 0 12 9.5 9.5Z" />
                </svg>
            </div>

            <div className="absolute bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-brand/60 animate-ping" />

            <div className="absolute bottom-[25%] right-[12%] h-2 w-2 rounded-full bg-brand animate-pulse" />

            {/* Planet */}
            <div className="absolute right-[12%] top-[32%] animate-[bounce_5s_ease-in-out_infinite]">
                <div className="relative h-[75px] w-[75px]">
                    <div className="absolute inset-0 rounded-full bg-[#172E34] shadow-[inset_-12px_-8px_20px_rgba(0,0,0,0.5)]" />
                    <div className="absolute left-[15px] top-[17px] h-3 w-5 rounded-full bg-brand/30 blur-[1px]" />
                    <div className="absolute bottom-[18px] right-[14px] h-4 w-4 rounded-full bg-brand/20" />
                    <div className="absolute inset-[-8px] rotate-[-25deg] rounded-full border-[3px] border-brand/60" />
                </div>
            </div>

            {/* Astronaut */}
            <div className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 animate-[bounce_4s_ease-in-out_infinite]">

                <svg
                    viewBox="0 0 240 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full drop-shadow-[0_20px_35px_rgba(182,251,68,0.12)]"
                >
                    {/* Backpack */}
                    <rect x="55" y="105" width="42" height="76" rx="18" fill="#10262E" stroke="#B6FB44" strokeWidth="3" />
                    <rect x="62" y="120" width="28" height="36" rx="9" fill="#1B3B42" />
                    <path d="M69 133H83" stroke="#B6FB44" strokeWidth="3" strokeLinecap="round" />

                    {/* Left Arm */}
                    <path d="M73 119C51 121 42 137 50 151L69 160" stroke="#DCE5E2" strokeWidth="17" strokeLinecap="round" />
                    <path d="M73 119C51 121 42 137 50 151L69 160" stroke="#8C9C99" strokeWidth="2" strokeLinecap="round" />

                    {/* Right Arm */}
                    <path d="M157 120C179 112 188 128 178 146L163 158" stroke="#DCE5E2" strokeWidth="17" strokeLinecap="round" />
                    <path d="M157 120C179 112 188 128 178 146L163 158" stroke="#8C9C99" strokeWidth="2" strokeLinecap="round" />

                    {/* Body */}
                    <path d="M78 112C78 94 91 85 120 85C149 85 162 94 162 112L155 180C153 193 141 200 120 200C99 200 87 193 85 180L78 112Z" fill="#DCE5E2" stroke="#8C9C99" strokeWidth="3" />

                    {/* Chest Panel */}
                    <rect x="99" y="132" width="42" height="30" rx="7" fill="#10262E" />
                    <rect x="106" y="139" width="12" height="5" rx="2" fill="#B6FB44" />
                    <rect x="106" y="149" width="26" height="4" rx="2" fill="#55716D" />

                    {/* Legs */}
                    <path d="M94 190L89 217C87 227 94 233 105 232L115 230L117 198" fill="#DCE5E2" stroke="#8C9C99" strokeWidth="3" />
                    <path d="M146 190L151 217C153 227 146 233 135 232L125 230L123 198" fill="#DCE5E2" stroke="#8C9C99" strokeWidth="3" />

                    {/* Boots */}
                    <path d="M89 216L83 228C80 236 86 241 97 241H113C119 241 120 234 115 230" fill="#10262E" stroke="#B6FB44" strokeWidth="3" />
                    <path d="M151 216L157 228C160 236 154 241 143 241H127C121 241 120 234 125 230" fill="#10262E" stroke="#B6FB44" strokeWidth="3" />

                    {/* Helmet */}
                    <circle cx="120" cy="69" r="48" fill="#DCE5E2" stroke="#8C9C99" strokeWidth="4" />
                    <circle cx="120" cy="69" r="36" fill="#10262E" stroke="#B6FB44" strokeWidth="3" />

                    {/* Helmet Glass */}
                    <path d="M91 68C91 47 104 33 122 33C142 33 153 49 151 67C149 87 135 99 117 98C100 97 91 84 91 68Z" fill="#183D43" />
                    <path d="M103 48C109 41 117 39 125 40" stroke="#B6FB44" strokeWidth="4" strokeLinecap="round" opacity=".7" />
                    <circle cx="139" cy="82" r="4" fill="#B6FB44" opacity=".7" />

                    {/* Helmet Side Details */}
                    <rect x="71" y="61" width="8" height="17" rx="4" fill="#B6FB44" />
                    <rect x="161" y="61" width="8" height="17" rx="4" fill="#B6FB44" />

                    {/* Floating Question Mark */}
                    <g className="animate-[pulse_2s_ease-in-out_infinite]">
                        <circle cx="185" cy="40" r="17" fill="#B6FB44" />
                        <text x="185" y="47" textAnchor="middle" fontSize="23" fontWeight="bold" fill="#041117">?</text>
                    </g>
                </svg>
            </div>

            {/* Bottom Floating Platform */}
            <div className="absolute bottom-[8%] left-1/2 h-3 w-[48%] -translate-x-1/2 rounded-[50%] bg-brand/15 blur-md" />
        </div>
    );
};

export default NotFoundAnimation;
