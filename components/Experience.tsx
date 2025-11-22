"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Silvi Protocol",
        role: "Blockchain Developer",
        period: "May 2024 - Present",
        description: "Architecturing bockchain solutions for regenerative finance protocol.",
    },
    {
        company: "Greenpill Brasil",
        role: "Blockchain Developer",
        period: "2024 - 2025",
        description: "Developing community engagement tools and on-chain attestations.",
    },
    {
        company: "Guardiões do Clima",
        role: "Mobile Developer",
        period: "2023 - 2024",
        description: "Built cross-platform mobile app for carbon tracking.",
    },
    {
        company: "AgroforestDAO",
        role: "Blockchain Developer",
        period: "2023 - 2024",
        description: "Implemented decentralized agroforestry system using NFTs.",
    },
    {
        company: "Rufus Technologies",
        role: "Blockchain Developer",
        period: "2022",
        description: "Smart contract development and integration.",
    },
    {
        company: "Ootopia",
        role: "Blockchain Developer",
        period: "2021 - 2022",
        description: "Developed blockchain solutions for the platform.",
    },
    {
        company: "Rufus Technologies",
        role: "Full Stack Developer",
        period: "2021",
        description: "Full stack web development.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
                    <p className="text-gray-400">My journey in tech and blockchain.</p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-1.5" />

                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Briefcase size={16} />
                                            <span className="font-bold">{exp.company}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                                        <div className={`flex items-center gap-2 text-gray-400 text-sm mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">{exp.description}</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
