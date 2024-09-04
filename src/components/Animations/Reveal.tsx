/* React */
import { useEffect, useRef } from "react";

/* Framer Motion */
import { motion, useAnimation, useInView } from "framer-motion"

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    translateY?: boolean;
}

export function Reveal({ children, delay, translateY = true }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = translateY ? {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    } : {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div ref={ref}>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 0.75,
                    delay: delay ? delay : 0.25
                }}
                viewport={{
                    once: true
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}