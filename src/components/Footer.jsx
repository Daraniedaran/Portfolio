import React from 'react';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const socialLinks = [
        {
            name: "Email",
            icon: <Mail size={22} strokeWidth={1.5} />,
            url: "mailto:daraniedaran@gmail.com",
            gradient: "from-rose-500/50 to-orange-500/50",
            hover: "hover:text-white hover:border-orange-500/50",
            bg: "hover:bg-orange-500/10"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={22} strokeWidth={1.5} />,
            url: "https://www.linkedin.com/in/daraniedaran-k",
            gradient: "from-blue-600/50 to-cyan-400/50",
            hover: "hover:text-white hover:border-cyan-400/50",
            bg: "hover:bg-cyan-500/10"
        },
        {
            name: "GitHub",
            icon: <Github size={22} strokeWidth={1.5} />,
            url: "https://github.com/Daraniedaran",
            gradient: "from-slate-400/50 to-slate-200/50",
            hover: "hover:text-white hover:border-slate-300/50",
            bg: "hover:bg-slate-300/10"
        }
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800 relative mt-20 pt-16 pb-8">
            {/* Animated top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
                {/* Background glowing orbs */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary-blue/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary-purple/5 rounded-full blur-[80px] pointer-events-none" />

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-300 to-slate-500 mb-8 tracking-tighter text-center"
                >
                    Let's Connect
                </motion.h2>

                {/* Social Links Row */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex space-x-6 mb-12 z-10"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md transition-all duration-500 ${link.hover} ${link.bg}`}
                            whileHover={{ y: -8, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={link.name}
                        >
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${link.gradient} blur-xl`} />
                            
                            <div className="relative z-10 text-slate-400 group-hover:text-white transition-colors duration-300">
                                {link.icon}
                            </div>
                            
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer Bottom Content */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <p className="text-slate-400 text-sm font-medium tracking-wide text-center">
                        &copy; {new Date().getFullYear()} Daraniedaran. All rights reserved.
                    </p>
                    <p className="text-slate-500/80 text-xs flex items-center gap-1.5 flex-wrap justify-center">
                        Crafted with React <span className="text-primary-blue">&bull;</span> Tailwind CSS <span className="text-primary-purple">&bull;</span> Framer Motion
                    </p>
                </div>
            </div>

            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 p-4 rounded-full text-slate-300 shadow-xl hover:text-white hover:border-primary-blue hover:shadow-primary-blue/20 transition-all duration-300 z-20 group"
                aria-label="Back to top"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-[1px] rounded-full bg-slate-900 -z-10" />
                <ArrowUp size={22} className="group-hover:animate-bounce z-10 relative" />
            </motion.button>
        </footer>
    );
};

export default Footer;
