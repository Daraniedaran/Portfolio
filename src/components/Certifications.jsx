import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Trophy, Briefcase, Code2 } from 'lucide-react';

const certifications = [
    {
        title: 'IT Specialist – Python',
        institution: 'Certiport / Pearson VUE (CertNexus)',
        date: 'Oct 2024',
        description: 'Information Technology Specialist Certification in Python, validating strong core programming capabilities.',
        type: 'Certification',
        gradient: 'from-sky-500 to-blue-600',
        icon: <Code2 size={24} className="text-white" />
    },
    {
        title: 'Full Stack Development',
        institution: 'NoviTech R&D Private Limited',
        date: 'Aug 2025',
        description: 'Comprehensive Full Stack Development program gaining hands-on web application development skills.',
        type: 'Training',
        gradient: 'from-primary-blue to-primary-purple',
        icon: <Award size={24} className="text-white" />
    },
    {
        title: 'Code 4 Change 2026 – Hackathon',
        institution: 'Karpaga Vinayaga College of Engineering & Technology',
        date: 'Feb 2026',
        description: 'National level hackathon participation developing innovative solutions under tight time constraints.',
        type: 'Hackathon',
        gradient: 'from-amber-500 to-orange-500',
        icon: <Trophy size={24} className="text-white" />
    },
    {
        title: 'The Joy of Computing using Python',
        institution: 'NPTEL | Elite (67%)',
        date: 'Apr 2026',
        description: 'Completed NPTEL certification with Elite grade status in Python programming concepts.',
        type: 'Certification',
        gradient: 'from-purple-500 to-indigo-600',
        icon: <Code2 size={24} className="text-white" />
    },
    {
        title: 'UI/UX Design Internship',
        institution: 'Scode Software Solutions',
        date: 'Dec 24, 2024 – Dec 31, 2024',
        description: 'Completed a UI/UX Design internship, gaining hands-on experience in user interface design, user experience principles, wireframing, and mobile app design.',
        type: 'Internship',
        gradient: 'from-emerald-500 to-teal-500',
        icon: <Briefcase size={24} className="text-white" />
    },
    {
        title: 'Volunteer – HackIndia 2026 Spark-3',
        institution: 'Department of IT, Mailam Engineering College',
        date: '2026',
        description: 'Volunteered for the HackIndia 2026 Spark-3 event facilitating event execution and tech support.',
        type: 'Volunteer',
        gradient: 'from-violet-500 to-purple-600',
        icon: <Award size={24} className="text-white" />
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
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
                            className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} opacity-10 rounded-bl-full -mr-8 -mt-8 z-0`}></div>

                            <div className="relative z-10">
                                {/* Type badge */}
                                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${item.gradient} text-white`}>
                                    {item.type}
                                </span>

                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0 shadow-md`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-snug">{item.title}</h3>
                                        <h4 className="text-sm text-primary-blue dark:text-primary-purple font-medium">{item.institution}</h4>
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
