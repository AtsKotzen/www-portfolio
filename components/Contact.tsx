"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to build the next decentralized solution?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                        <a href="mailto:athusdigital@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <Mail size={32} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-lg">athusdigital@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                                <MapPin size={32} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium text-lg">Rio de Janeiro / Remote</p>
                            </div>
                        </div>
                    </div>

                    {/* <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors mt-12"
                    >
                        <Download size={20} />
                        Download Resume
                    </a> */}
                </motion.div>
            </div>
        </section>
    );
}
