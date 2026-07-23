import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
    const [beads, setBeads] = useState([]);

    useEffect(() => {
        // Generate random beads for the flowing effect
        const generatedBeads = Array.from({ length: 50 }).map((_, i) => {
            return {
                id: i,
                size: Math.random() * 6 + 4, // Random size between 4px and 10px
                left: Math.random() * 100, // Random horizontal starting position (0-100vw)
                delay: -(Math.random() * 15), // Negative delay makes them start immediately at different positions
                duration: Math.random() * 8 + 5, // Faster floating speed between 5s and 13s
                // Mix of colors to match the theme
                color: i % 3 === 0 ? 'bg-orange-500 shadow-orange-500/50' : 
                       (i % 3 === 1 ? 'bg-rose-500 shadow-rose-500/50' : 'bg-purple-400 shadow-purple-400/50')
            };
        });
        setBeads(generatedBeads);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            {beads.map((bead) => (
                <motion.div
                    key={bead.id}
                    initial={{ y: "110vh", opacity: 0, x: 0, scale: 0.1 }}
                    animate={{ 
                        y: "-10vh", 
                        opacity: [0, 0.8, 1, 0],
                        scale: [0.1, 0.5, 1.2, 1.8], // Grows as it flows up (3D depth effect)
                        x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
                        filter: ["blur(10px)", "blur(2px)", "blur(0px)", "blur(5px)"] // Starts blurred in the background
                    }}
                    transition={{
                        duration: bead.duration,
                        repeat: Infinity,
                        delay: bead.delay,
                        ease: "easeInOut"
                    }}
                    className={`absolute rounded-full shadow-[0_0_15px_currentColor] ${bead.color}`}
                    style={{
                        width: bead.size,
                        height: bead.size,
                        left: `${bead.left}vw`
                    }}
                />
            ))}
            
            {/* Very subtle ambient glow so it's not completely flat black */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-900/5 to-rose-900/10 mix-blend-screen pointer-events-none"></div>
        </div>
    );
};

export default BackgroundAnimation;
