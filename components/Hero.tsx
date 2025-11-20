"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-2 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-1 relative w-50 h-50 md:w-60 md:h-60">
                        <Image
                            src="/logo-atsdevelop-green.png"
                            alt="Athus Oliveira Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h2 className="text-primary font-mono text-lg mb-4 tracking-wide">
                        Building the Future of Decentralized Solutions
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Athus Oliveira</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Blockchain Developer with 10+ years of experience bridging hardware, software, and Web3.
                        Specializing in Smart Contracts, DeFi, and Regenerative Finance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-white/20 bg-white/5 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
