"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Languages } from "lucide-react";

export default function Education() {
    return (
        <section className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold text-white">UFRGS</h4>
                                <p className="text-gray-400">Civil Engineering Studies</p>
                                <p className="text-sm text-gray-500 mt-1">Highlighting analytical thinking</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Courses & Knowledge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-8 h-8 text-accent" />
                            <h3 className="text-2xl font-bold text-white">Courses & Knowledge</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold text-white">Harvard University</h4>
                                <ul className="space-y-2 mt-2">
                                    <li className="text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        CS50x Computer Science
                                    </li>
                                    <li className="text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        CS50w Web Programming
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Languages className="w-8 h-8 text-blue-400" />
                            <h3 className="text-2xl font-bold text-white">Languages</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-white">Portuguese</span>
                                <span className="text-primary text-sm font-mono">Native</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-white">English</span>
                                <span className="text-primary text-sm font-mono">Fluent</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
