/* Framer Motion */
import { motion } from "framer-motion"

interface PageTransitionProps {
    children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
    return (
        <div>
            <motion.div
                className="fixed top-0 left-0 w-full h-[100vh] bg-zinc-800 origin-bottom z-50"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.25, 1] }}
            />

            {children}

            <motion.div 
                className="fixed top-0 left-0 w-full h-[100vh] bg-zinc-800 origin-top z-50"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.25, 1] }}
            />
        </div>
    );
}

export default PageTransition;