"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12 bg-transparent relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/40 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
                        <GraduationCap className="text-gold w-10 h-10" />
                        Academic <span className="text-gray-600">History</span>
                    </h2>
                    <div className="space-y-8 pl-4 border-l border-white/10 relative">

                        <div className="relative group pl-8">
                            <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-black border border-gold rounded-full z-10"></span>
                            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border-l-4 border-l-gold/80 hover:scale-[1.02]">
                                <span className="text-xs font-mono text-gold mb-2 block tracking-widest">2023 - 2025</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">Master of Computer Applications</h3>
                                <p className="text-gray-400 mb-3">College of Engineering Vadakara</p>
                                <div className="inline-block px-3 py-1 rounded bg-gold/10 text-gold text-sm font-bold border border-gold/20">CGPA: 8.02</div>
                            </div>
                        </div>

                        <div className="relative group pl-8">
                            <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-zinc-800 rounded-full z-10 group-hover:bg-white transition-colors"></span>
                            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border-l-4 border-l-gray-700 hover:border-l-white hover:scale-[1.02]">
                                <span className="text-xs font-mono text-gray-500 mb-2 block tracking-widest">2020 - 2023</span>
                                <h3 className="text-xl font-bold text-white mb-1">BSc Mathematics</h3>
                                <p className="text-gray-400 mb-3">Sullamussalam Science College</p>
                                <div className="inline-block px-3 py-1 rounded bg-white/5 text-gray-300 text-sm border border-white/10">CGPA: 6.9</div>
                            </div>
                        </div>

                        <div className="relative group pl-8 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-zinc-800 rounded-full z-10"></span>
                            <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-white/20">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-lg font-bold text-white">Plus Two</h3>
                                    <span className="text-gold font-bold">88%</span>
                                </div>
                                <p className="text-gray-500 text-sm">Science Stream</p>
                            </div>
                        </div>

                        <div className="relative group pl-8 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-zinc-800 rounded-full z-10"></span>
                            <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-white/20">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-lg font-bold text-white">SSLC</h3>
                                    <span className="text-gold font-bold">90%</span>
                                </div>
                                <p className="text-gray-500 text-sm">General Education</p>
                            </div>
                        </div>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
                        <Award className="text-gold w-10 h-10" />
                        Certifications
                    </h2>
                    <div className="grid grid-cols-1 gap-6">

                        <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-gold/50 via-white/20 to-transparent group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500">
                            <div className="glass-panel p-8 rounded-2xl relative h-full flex flex-col justify-center items-center text-center">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Award className="w-24 h-24 text-gold" />
                                </div>

                                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                    <BookOpen className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">UGC NET Qualified</h3>
                                <p className="text-gold font-medium mb-4">December 2024</p>
                                <p className="text-gray-400 text-sm max-w-xs">Qualified for Assistant Professor in Computer Science & Applications</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors shrink-0">
                                <Star className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Introduction to Internet of Things</h3>
                                <p className="text-gray-500 text-sm">NPTEL Certification (2024)</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
