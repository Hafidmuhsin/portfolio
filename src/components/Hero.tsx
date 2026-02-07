"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';


const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent">

            <div className="z-10 text-center px-6 max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block px-4 py-1.5 mb-6 border border-gold/30 rounded-full bg-gold/5 backdrop-blur-sm"
                >
                    <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold">
                        Portfolio 2026
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 text-white"
                >
                    Hafid <span className="text-gray-500">Muhsin</span> KP
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-gray-400 mb-10 font-light text-lg md:text-xl"
                >
                    <span className="hover:text-gold transition-colors duration-300">Computer Applications Postgraduate</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    <span className="hover:text-gold transition-colors duration-300">Researcher</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    <span className="hover:text-gold transition-colors duration-300">Assistant Professor</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-500 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed glass-panel p-6 rounded-2xl"
                >
                    Building elegant software solutions, teaching computer science, and crafting modern ERP systems with precision and purpose.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <a href="#projects" className="group px-8 py-3 bg-white text-black rounded-full transition-all duration-300 font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                        View Projects
                        <ArrowDown className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                    <a href="#contact" className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full transition-all duration-300 font-medium hover:bg-white/10 hover:scale-105">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 animate-bounce cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <ArrowDown className="w-6 h-6 text-gray-600 hover:text-white transition-colors" />
            </motion.div>
        </section>
    );
};

export default Hero;
