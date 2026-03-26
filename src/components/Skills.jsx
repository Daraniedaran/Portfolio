import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming",
        emoji: "⚡",
        skills: ["Python", "Java", "JavaScript"]
    },
    {
        title: "Web Technologies",
        emoji: "🌐",
        skills: ["HTML & CSS", "React", "Tailwind CSS"]
    },
    {
        title: "Tools & Others",
        emoji: "🛠️",
        skills: ["Git", "Firebase", "Figma"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">Technical Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-slate-50 dark:bg-dark-card p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-blue/40 dark:hover:border-primary-purple/40 hover:shadow-2xl hover:shadow-primary-blue/15 dark:hover:shadow-primary-purple/15 transition-all duration-300 group relative overflow-hidden cursor-default"
                        >
                            {/* Animated gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/8 via-transparent to-primary-purple/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl" />

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 group-hover:border-primary-blue/30 dark:group-hover:border-primary-purple/30 pb-3 text-center transition-colors duration-300 relative z-10 flex items-center justify-center gap-2">
                                <span className="text-2xl" role="img" aria-label={category.title}>{category.emoji}</span>
                                {category.title}
                            </h3>

                            <div className="flex flex-col gap-3 relative z-10">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.06, x: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                                        className="w-full px-4 py-3 rounded-xl text-center text-sm font-semibold
                                            bg-white dark:bg-slate-800
                                            border border-slate-200 dark:border-slate-700
                                            text-slate-700 dark:text-slate-300
                                            shadow-sm
                                            hover:bg-gradient-to-r hover:from-primary-blue hover:to-primary-purple
                                            hover:text-white
                                            hover:border-transparent
                                            hover:shadow-lg hover:shadow-primary-blue/30 dark:hover:shadow-primary-purple/30
                                            transition-all duration-200 cursor-default select-none relative overflow-hidden"
                                    >
                                        <span className="relative z-10">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
