"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal } from "lucide-react";

const skills = [
    {
        category: "Web3 & Blockchain",
        icon: <Database className="w-8 h-8 text-primary" />,
        items: ["Solidity", "Smart Contracts", "Hardhat", "Ethers.js", "IPFS", "Infura", "Chainlink", "Hypercerts", "EAS"],
    },
    {
        category: "Web Development",
        icon: <Code2 className="w-8 h-8 text-accent" />,
        items: ["JavaScript", "Node.js", "React", "Vue.js", "HTML/CSS", "Firestore", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Tools & DevOps",
        icon: <Terminal className="w-8 h-8 text-blue-400" />,
        items: ["Docker", "Git", "Telegraf", "Telegram Bots", "Linux", "CI/CD"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building decentralized and scalable applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm font-mono border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
