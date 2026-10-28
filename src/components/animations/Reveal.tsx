"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "left" | "right";
};

export default function Reveal({
    children,
    delay = 0,
    className,
    direction = "up",
}: RevealProps) {
    const reduceMotion = useReducedMotion();

    const offset = {
        up: { x: 0, y: 14 },
        left: { x: -14, y: 0 },
        right: { x: 14, y: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={
                reduceMotion
                    ? false
                    : { opacity: 0, ...offset[direction] }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{
                once: false,
                amount: 0.1,
                margin: "0px 0px -40px 0px",
            }}
            transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
