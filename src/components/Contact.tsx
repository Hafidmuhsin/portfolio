"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 opacity-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/20 via-black to-black pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800 mb-10 tracking-tighter">
                        Get in Touch
                    </h2>

                    <p className="text-xl text-gray-400 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
                        Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <motion.a
                        href="mailto:hafidmuhsin@gmail.com"
                        whileHover={{ y: -10 }}
                        className="glass-panel p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 group flex flex-col items-center border border-white/5 hover:border-gold/20"
                    >
                        <div className="mb-6 p-5 bg-zinc-900 rounded-full group-hover:bg-gold group-hover:text-black transition-all duration-300 text-gray-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-lg">Email</h3>
                        <p className="text-gray-500 text-sm group-hover:text-gold transition-colors font-mono">hafidmuhsin@gmail.com</p>
                    </motion.a>

                    <motion.a
                        href="tel:+919995702838"
                        whileHover={{ y: -10 }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 group flex flex-col items-center border border-white/5 hover:border-gold/20"
                    >
                        <div className="mb-6 p-5 bg-zinc-900 rounded-full group-hover:bg-gold group-hover:text-black transition-all duration-300 text-gray-400">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-lg">Phone</h3>
                        <p className="text-gray-500 text-sm group-hover:text-gold transition-colors font-mono">+91 99957 02838</p>
                    </motion.a>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 group flex flex-col items-center border border-white/5 hover:border-gold/20 cursor-default"
                    >
                        <div className="mb-6 p-5 bg-zinc-900 rounded-full group-hover:bg-gold group-hover:text-black transition-all duration-300 text-gray-400">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-lg">Location</h3>
                        <p className="text-gray-500 text-sm group-hover:text-gold transition-colors font-mono">Malappuram, Kerala</p>
                    </motion.div>
                </div>

                <div className="flex justify-center gap-8 mb-20">
                    <a href="https://www.linkedin.com/in/hafid-muhsin-9121a231b?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="p-4 rounded-full bg-zinc-900 border border-white/10 hover:bg-white text-gray-400 hover:text-black transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Hafidmuhsin" className="p-4 rounded-full bg-zinc-900 border border-white/10 hover:bg-white text-gray-400 hover:text-black transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6" />
                    </a>
                </div>

                <footer className="pt-12 border-t border-white/5 text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Hafid Muhsin KP. All rights reserved.</p>
                    <p className="text-xs font-mono opacity-50">Designed with Luxury & Precision</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
