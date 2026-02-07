"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "TOWME",
        subtitle: "Real-time Roadside Assistance",
        description: "A comprehensive platform for booking roadside assistance services in real-time. Built with Frappe/ERPNext for robust backend management and a responsive frontend.",
        tags: ["Frappe", "Python", "JavaScript", "MariaDB"],
        link: "#",
        github: "#",
        image: "/project/TOWME.png"
    },
    {
        title: "FIX-FIT",
        subtitle: "Health & Calorie Tracking",
        description: "An intelligent health monitoring system that tracks calories, fitness goals, and health metrics. Developed using Django for a secure and scalable backend.",
        tags: ["Django", "Python", "SQLite", "Chart.js"],
        link: "#",
        github: "#",
        image: "/project/FIXFIT.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-bold text-white mb-32 text-center tracking-tighter"
                >
                    Selected <span className="text-gray-800">Works</span>
                </motion.h2>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center group`}
                        >
                            <div className="w-full lg:w-3/5 relative perspective-1000">
                                <div className="absolute inset-0 bg-gold/10 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <motion.div
                                    whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 2, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="relative z-10 overflow-hidden rounded-2xl glass-card border border-white/10 aspect-[16/9] flex items-center justify-center bg-zinc-900/50"
                                >
                                    {/* Project Image */}
                                    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-2/5 md:px-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-gold font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
                                    <div className="h-px w-12 bg-gray-800"></div>
                                </div>

                                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 group-hover:text-gold transition-colors duration-500">{project.title}</h3>
                                <p className="text-xl text-gray-300 mb-6 font-light tracking-wide">{project.subtitle}</p>
                                <p className="text-gray-500 mb-8 leading-relaxed text-base md:text-lg">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 text-xs font-medium border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-8">
                                    <a href={project.link} className="flex items-center gap-2 text-white hover:text-gold transition-colors group/link py-2 border-b border-transparent hover:border-gold">
                                        <span className="font-medium">View Case Study</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                    <a href={project.github} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors py-2">
                                        <Github className="w-4 h-4" />
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))
                    }
                </div >
            </div >
        </section >
    );
};

export default Projects;
