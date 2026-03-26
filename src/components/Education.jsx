import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar } from 'lucide-react';

const allocEducations = [
    {
        type: 'degree',
        title: 'B.Tech in Information Technology',
        institution: 'Mailam Engineering College',
        date: '2026 - Pre-Final Year',
        score: 'CGPA: 8.4 (Till 5th sem)',
        description: 'Specializing in Artificial Intelligence and Machine Learning. Consistently achieved high academic standing while working on various technical projects.',
        icon: <BookOpen size={24} className="text-white" />
    },
    {
        type: 'hsc',
        title: 'HSC (Higher Secondary Certificate)',
        institution: "St.Joseph's Higher Secondary School",
        date: '2022 - 2023',
        score: 'Percentage: 82.1',
        description: 'Completed higher secondary education with excellent academic performance.',
        icon: <BookOpen size={24} className="text-white" />
    },
    {
        type: 'sslc',
        title: 'SSLC (Secondary School Leaving Certificate)',
        institution: "St.Joseph's Higher Secondary School",
        date: '2020 - 2021',
        score: 'Percentage: All pass',
        description: 'Completed secondary education with excellent academic performance.',
        icon: <BookOpen size={24} className="text-white" />
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-dark-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {allocEducations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline dot */}
                            <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple shadow-lg shadow-primary-blue/30 z-10">
                                {item.icon}
                            </div>

                            <div className="ml-12 md:ml-0 md:w-5/12 pl-4 md:pl-0">
                                <div className={`bg-slate-50 dark:bg-dark-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="inline-flex items-center space-x-2 text-sm text-primary-blue dark:text-primary-purple font-medium mb-2">
                                        <Calendar size={16} />
                                        <span>{item.date}</span>
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{item.title}</h3>
                                    <h4 className="text-md text-slate-500 font-medium mb-2">{item.institution}</h4>
                                    {item.score && (
                                        <div className="inline-block px-3 py-1 bg-primary-blue/10 dark:bg-primary-blue/20 text-primary-blue font-semibold rounded-full text-xs mb-3">
                                            {item.score}
                                        </div>
                                    )}
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
