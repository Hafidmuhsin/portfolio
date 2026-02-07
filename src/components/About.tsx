"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600">
                        About Me
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I am an aspiring web developer and educator with a passion for crafting elegant digital experiences. With a Master's in Computer Applications (2025) and UGC NET qualification, I bridge the gap between academic theory and practical application.
                        </p>
                        <p>
                            Currently working as an <span className="text-gold font-medium">Assistant Professor</span>, I optimize student learning through innovative teaching methods. I also have professional experience building robust ERP systems as a Frappe Developer.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="glass-panel p-4 rounded-xl text-center min-w-[120px] hover:bg-white/5 transition-colors">
                            <h3 className="text-2xl font-bold text-white">2025</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">MCA Graduate</p>
                        </div>
                        <div className="glass-panel p-4 rounded-xl text-center min-w-[120px] hover:bg-white/5 transition-colors">
                            <h3 className="text-2xl font-bold text-gold">NET</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Qualified Dec '24</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="absolute inset-0 bg-gold blur-[120px] opacity-10 rounded-full animate-pulse"></div>
                    <motion.div
                        whileHover={{ rotateY: 5, rotateX: 5 }}
                        className="relative z-10 glass-card p-8 rounded-2xl border-t border-white/10 transform transition-all duration-500 shadow-2xl shadow-gold/5"
                    >
                        <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-xs text-gray-500 font-mono">developer.py</div>
                        </div>
                        <code className="text-sm font-mono text-gray-400 block leading-loose">
                            <span className="text-purple-400">class</span> <span className="text-yellow-200">Developer</span> {'{'} <br />
                            &nbsp;&nbsp;<span className="text-blue-400">constructor</span>() {'{'} <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">this</span>.name = <span className="text-green-300">'Hafid Muhsin KP'</span>; <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">this</span>.role = <span className="text-green-300">['Assistant Professor', 'Researcher']</span>; <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">this</span>.passion = <span className="text-green-300">'Teaching'</span>; <br />
                            &nbsp;&nbsp;{'}'} <br /><br />
                            &nbsp;&nbsp;<span className="text-blue-400">buildFuture</span>() {'{'} <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-green-300">'Innovation'</span>; <br />
                            &nbsp;&nbsp;{'}'} <br />
                            {'}'}
                        </code>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
