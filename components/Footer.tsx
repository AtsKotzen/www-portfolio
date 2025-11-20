import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                        <Image
                            src="/logo-atsdevelop-green.png"
                            alt="Athus Oliveira Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Athus Oliveira. All rights reserved.
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/atskotzen" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/athus-linhares-a905a917a/" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/Atskotzen" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
