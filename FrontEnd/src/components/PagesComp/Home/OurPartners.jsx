import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { partners } from "../../../constant/partners.const";

const Partners = () => {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const contentWidth = content.scrollWidth / 2;
        const duration = 20; // speed control

        controls.start({
            x: [0, -contentWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration,
                    ease: "linear",
                },
            },
        });
    }, [controls]);

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        Our Partners
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-[#F36B4A] to-red-600 mx-auto mt-3 rounded-full"
                    />
                    <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                        Together with NGOs, restaurants, hotels, and community leaders, we
                        are building a hunger-free future.
                    </p>
                </div>

                {/* Logos Marquee */}
                <div ref={containerRef} className="relative overflow-hidden h-40">
                    <motion.div
                        ref={contentRef}
                        className="absolute flex gap-10"
                        animate={controls}
                        style={{ width: "fit-content" }}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <motion.div
                                key={`${partner.name}-${index}`}
                                className="flex flex-col items-center min-w-[160px] lg:pt-3 group"
                                whileHover={{ y: -8, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200 overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <p className="text-sm text-gray-700 font-medium mt-2 group-hover:text-[#F36B4A] transition-colors">
                                    {partner.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
