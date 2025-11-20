"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I specialize in Smart Contracts, dApp development, and full-stack integration.
                                My focus is on creating decentralized tools that solve real-world problems,
                                from DeFi protocols to regenerative agriculture tracking.
                            </p>
                            <p>
                                With a background in Civil Engineering and over a decade of experience in hardware
                                and software, I bring a unique analytical perspective to blockchain development.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20" />
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                            <span className="block text-6xl font-bold text-primary mb-2">10+</span>
                            <span className="text-xl text-white font-medium">Years Experience</span>
                            <div className="mt-4 text-gray-400">Hardware & Software Development</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
