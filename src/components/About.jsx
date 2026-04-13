import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            I am a passionate <strong className="text-primary-blue dark:text-primary-purple">B.Tech Information Technology student</strong> currently in my third year, with a strong foundation in <strong className="text-primary-blue dark:text-primary-purple">Python Programming</strong> and <strong className="text-primary-blue dark:text-primary-purple">full-stack web development</strong> and also a <strong className="text-primary-blue dark:text-primary-purple">DevOps</strong> learner. I enjoy building real-world applications that are not only functional but also scalable and user-friendly.
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            With hands-on experience in both frontend and backend technologies, I can take an idea from concept to deployment. My interest in DevOps allows me to understand modern development workflows, including automation, continuous integration, and cloud-based deployment.
                        </p>    
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I am a quick learner, a problem solver, and someone who enjoys turning ideas into practical solutions. I am currently looking for opportunities to apply my skills, collaborate on exciting projects, and grow as a software engineer.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Code size={24} />, title: "Full-Stack", desc: "End-to-end web apps", gradient: "from-primary-blue to-primary-purple" },
                            { icon: <Cpu size={24} />, title: "DevOps", desc: "Automated workflows", gradient: "from-sky-500 to-cyan-500" },
                            { icon: <Brain size={24} />, title: "AI Integration", desc: "Smart applications", gradient: "from-violet-500 to-purple-600" },
                            { icon: <Lightbulb size={24} />, title: "Problem Solving", desc: "Practical solutions", gradient: "from-amber-500 to-orange-500" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -6, scale: 1.03 }}
                                className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-purple/40 transition-all duration-300 cursor-default group"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-blue dark:group-hover:text-primary-purple transition-colors duration-300">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
