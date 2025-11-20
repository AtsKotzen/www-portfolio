"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download, Send } from "lucide-react";

const handleSendEmail = () => {
    const email = "athusdigital@gmail.com";
    window.location.href = `mailto:${email}`;
};

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to build the next decentralized solution?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:athusdigital@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">athusdigital@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Rio de Janeiro / Remote</p>
                                </div>
                            </div>

                            {/* <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors mt-4"
                            >
                                <Download size={20} />
                                Download Resume
                            </a> */}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
