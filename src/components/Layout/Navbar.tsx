"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-xl font-bold font-mono tracking-tighter text-white cursor-pointer select-none group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        HAFID<span className="text-gold group-hover:text-white transition-colors">.DEV</span>
                    </div>

                    <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        {['about', 'skills', 'projects', 'experience', 'education'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="hover:text-white transition-colors relative group/btn"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover/btn:w-full"></span>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 ml-4"
                        >
                            Contact
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 md:hidden text-white"
                    >
                        {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="text-2xl font-light uppercase tracking-widest hover:text-gold transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
