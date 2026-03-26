import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Contact', to: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple"
                    >
                        K. DARANIEDARAN
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-sm font-medium hover:text-primary-blue dark:hover:text-primary-purple transition-colors"
                                activeClass="text-primary-blue dark:text-primary-purple"
                                spy={true}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark-card border-t border-slate-200 dark:border-slate-800"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1 block">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
