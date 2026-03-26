import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    className="flex-1 text-center md:text-left z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-dark-card px-3 py-1 rounded-full text-sm font-medium mb-6 border border-slate-200 dark:border-slate-800">
                        <Terminal size={16} className="text-primary-blue" />
                        <span>Tech Enthusiast | Web Developer</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple">
                            Daraniedaran
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0">
                        I build intelligent systems and smart applications that solve real-world problems. Passionate about machine learning, elegant code, and innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple text-white font-medium hover:opacity-90 transition-opacity text-center shadow-lg shadow-primary-blue/30"
                        >
                            Contact Me
                        </Link>
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                        >
                            <span>Download Resume</span>
                            <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-primary-purple rounded-[2rem] rotate-6 opacity-70"></div>
                        <div className="absolute inset-0 bg-slate-900 rounded-[2rem] overflow-hidden flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 duration-300 shadow-xl">
                            <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Daraniedaran avatar" className="w-full h-full object-cover scale-105" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-sm text-slate-500 mb-2">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown size={20} className="text-slate-500" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
