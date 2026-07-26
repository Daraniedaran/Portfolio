import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Database, ShieldCheck, GraduationCap, Wifi } from 'lucide-react';

const projectsData = [
    {
        title: "HotFiNet – Peer-to-Peer Internet Sharing Platform",
        description: "Developed a mobile application using React Native and Firebase enabling secure, real-time sharing of mobile internet between nearby users via a QR-based connection system and a digital coin economy.",
        tech: ["React Native", "Firebase", "QR Connection", "Coin Economy"],
        github: "https://github.com/Daraniedaran",
        live: "#",
        icon: <Wifi size={40} className="text-primary-blue" />
    },
    {
        title: "Smart Academic Companion (SAC)",
        description: "Developed an AI-powered assistant built using React, FastAPI and AI integration to help students manage their academic lives efficiently. Features include a personalized study helper chatbot, academic guidance, and performance tracking.",
        tech: ["React", "FastAPI", "Python", "AI Integration"],
        github: "https://github.com/Daraniedaran",
        live: "#",
        icon: <GraduationCap size={40} className="text-primary-purple" />
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-primary-blue/30 dark:hover:border-primary-purple/40 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Gradient glow strip on top on hover */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-blue to-primary-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-primary-blue/10 dark:group-hover:bg-primary-blue/20 group-hover:scale-110 transition-all duration-300">
                                    {project.icon}
                                </div>
                                <div className="flex space-x-3">
                                    <a href={project.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-blue dark:group-hover:text-primary-purple transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className="px-3 py-1 text-xs font-medium bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-primary-blue rounded-full group-hover:bg-primary-blue group-hover:text-white dark:group-hover:bg-primary-purple dark:group-hover:text-white transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
