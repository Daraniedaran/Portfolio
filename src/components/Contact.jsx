import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-100 dark:bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple inline-block mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
                    <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'm currently open for new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all text-slate-800 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all text-slate-800 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all text-slate-800 dark:text-white resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 mt-2 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary-blue/20 hover:shadow-primary-purple/30 hover:-translate-y-1"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
