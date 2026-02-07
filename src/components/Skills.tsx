"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Terminal, Users, Cpu } from 'lucide-react';

const skills = [
    {
        category: "Programming",
        icon: <Terminal className="w-6 h-6" />,
        items: ["Python", "JavaScript", "C", "Django", "Frappe / ERPNext"]
    },
    {
        category: "Web Technologies",
        icon: <Globe className="w-6 h-6" />,
        items: ["HTML5", "CSS3", "Tailwind CSS", "React", "Next.js"]
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6" />,
        items: ["MySQL", "MariaDB", "PostgreSQL"]
    },
    {
        category: "Tools & DevOps",
        icon: <Code className="w-6 h-6" />,
        items: ["Git", "GitHub", "VS Code", "Docker"]
    },
    {
        category: "Soft Skills",
        icon: <Users className="w-6 h-6" />,
        items: ["Problem-solving", "Technical Writing", "Mentoring", "Adaptability"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
            {/* Background Noise Texture (simulated with CSS) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[size:200px] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 font-display">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        A curated list of technologies and tools I use to architect robust digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass-panel p-8 rounded-2xl hover:border-gold/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                {skill.icon}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-gold/10 transition-colors text-gold">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{skill.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span key={idx} className="px-3 py-1 text-sm bg-white/5 border border-white/5 rounded-full text-gray-400 group-hover:text-gray-200 group-hover:border-white/20 transition-all hover:bg-white/10 cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="glass-panel px-6 py-2 rounded-full inline-flex items-center gap-3 text-sm text-gray-400">
                        <Cpu className="w-4 h-4 text-gold" />
                        <span>Always learning and adapting to new technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
