"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-transparent text-white relative">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-20 text-center"
                >
                    Professional <span className="text-gold">Journey</span>
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-16 space-y-20 py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <span className="absolute -left-[39px] md:-left-[71px] top-1.5 w-5 h-5 rounded-full bg-zinc-900 border border-white/20 group-hover:bg-gold group-hover:border-gold transition-colors duration-500"></span>

                        <div className="glass-panel p-8 rounded-2xl hover:border-gold/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">Assistant Professor</h3>
                                    <p className="text-gray-500 font-medium">Full-time</p>
                                </div>
                                <span className="text-gold/80 font-mono text-xs md:text-sm tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10 mt-2 md:mt-0">SEP 2025 - PRESENT</span>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Teaching computer science fundamentals and advanced concepts to undergraduate students.
                            </p>

                            <ul className="text-gray-500 space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Delivering lectures on Data Structures, Algorithms, and Web Development</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Guiding students in their final year academic projects and research</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Mentoring students in career development and technical skills</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <span className="absolute -left-[39px] md:-left-[71px] top-1.5 w-5 h-5 rounded-full bg-zinc-900 border border-white/20 group-hover:bg-gold group-hover:border-gold transition-colors duration-500"></span>

                        <div className="glass-panel p-8 rounded-2xl hover:border-gold/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">Junior Frappe Developer</h3>
                                    <p className="text-gray-500 font-medium">Full-time</p>
                                </div>
                                <span className="text-gold/80 font-mono text-xs md:text-sm tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10 mt-2 md:mt-0">MAR 2025 - AUG 2025</span>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Specialized in ERPNext customization and full-stack development using Python and Frappe Framework.
                            </p>

                            <ul className="text-gray-500 space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Developed custom modules for specific business logic requirements</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Implemented complex workflows and automation scripts</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <span className="absolute -left-[39px] md:-left-[71px] top-1.5 w-5 h-5 rounded-full bg-zinc-900 border border-white/20 group-hover:bg-gold group-hover:border-gold transition-colors duration-500"></span>

                        <div className="glass-panel p-8 rounded-2xl hover:border-gold/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">Frappe Developer Intern</h3>
                                    <p className="text-gray-500 font-medium">Internship</p>
                                </div>
                                <span className="text-gold/80 font-mono text-xs md:text-sm tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10 mt-2 md:mt-0">FEB 2025 - MAR 2025</span>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Gained hands-on experience in Frappe Framework and ERPNext ecosystem.
                            </p>

                            <ul className="text-gray-500 space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Assisted in developing and testing ERPNext modules</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                                    <span>Fixed bugs and optimized existing codebases</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
