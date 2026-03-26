import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
    {
        title: 'Full Stack Development',
        institution: 'NoviTech R&D Private Limited',
        date: 'July 23 – August 26, 2025',
        description: 'Intensive program covering both front-end and back-end web development technologies.',
        icon: <Award size={24} className="text-white" />
    },
    {
        title: 'Cloud Computing Fundamentals',
        institution: 'AWS Certification',
        date: '2023',
        description: 'Foundational knowledge of cloud services, architecture, and deployment.',
        icon: <Award size={24} className="text-white" />
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-100 dark:bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">Certifications</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 dark:bg-primary-blue/10 rounded-bl-full -mr-8 -mt-8 z-0"></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                                        <h4 className="text-md text-primary-blue dark:text-primary-purple font-medium">{item.institution}</h4>
                                    </div>
                                </div>

                                <span className="inline-flex items-center space-x-2 text-sm text-slate-500 mb-4 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </span>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
