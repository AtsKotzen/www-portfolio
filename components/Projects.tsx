"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Silvi Protocol",
        role: "Lead Blockchain Developer",
        description: "Engineered the blockchain architecture for a regenerative finance protocol on the Celo blockchain. Implemented seamless NFT minting and automated verification workflows.",
        tech: ["Solidity", "Celo", "ERC-721/1155", "Account Abstraction", "EAS"],
        highlights: ["Seamless NFT minting", "IPFS integration", "Automated verification"],
        link: "#", // Placeholder
    },
    {
        title: "Greenpill Brasil",
        role: "Developer",
        description: "A Telegram bot designed to capture user interactions and transform them into on-chain attestations, bridging Web2 chat interfaces with Web3 security.",
        tech: ["Telegraf", "Blockchain Attestations", "Node.js"],
        highlights: ["Web2 to Web3 bridge", "Telegram integration", "On-chain attestations"],
        link: "#",
    },
    {
        title: "AgroforestDAO",
        role: "Blockchain Developer",
        description: "The first decentralized Agroforestry system in Brazil, using NFTs to represent and incentivize real-world land lots.",
        tech: ["React", "IPFS", "NFTs"],
        highlights: ["Regenerative crypto use case", "Real-world asset tokenization"],
        link: "#",
    },
    {
        title: "Guardiões do Clima",
        role: "Mobile Developer",
        description: "Cross-platform mobile app for tracking carbon emission compensation in tourism.",
        tech: ["React Native", "Expo", "PlayStore"],
        highlights: ["Cross-platform mobile app", "Carbon tracking"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Real-world applications of blockchain technology for regeneration and impact.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-primary text-sm font-mono">{project.role}</span>
                                    </div>
                                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Tech</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Highlights</h4>
                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
