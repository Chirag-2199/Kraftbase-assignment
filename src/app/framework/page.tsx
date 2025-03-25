'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FrameworkPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const brandAttributes = [
        { title: "Reliable", content: "We build trust through consistency and dependability in every interaction." },
        { title: "Human", content: "We approach technology with warmth and authenticity." },
        { title: "Innovative", content: "We challenge conventions to create meaningful progress." },
        { title: "Optimistic", content: "We believe in a better way forward and empower others to see it too." },
    ];

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const progressBar = document.getElementById('scroll-progress');

        const moveCursor = (e: MouseEvent) => {
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setScrollProgress(progress);

            if (progressBar) {
                progressBar.style.background = `linear-gradient(to bottom, 
                    #0061ff ${progress}%, 
                    rgba(0, 97, 255, 0.2) ${progress}%
                )`;
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Custom Cursor */}
            <div
                id="custom-cursor"
                className={`custom-cursor ${hovered ? 'custom-cursor-hover' : ''}`}
            />

            {/* Scroll Progress Bar */}
            <div
                id="scroll-progress"
                className="fixed left-0 top-0 h-screen w-2 z-50 transition-all duration-300"
                style={{
                    background: `linear-gradient(to bottom, 
                        #0061ff ${scrollProgress}%, 
                        rgba(0, 97, 255, 0.2) ${scrollProgress}%
                    )`
                }}
            />

            <div className="relative min-h-screen" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center">
                    <Image
                        src="/images/framework.png"
                        alt="Framework Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white mb-4 text-center"
                            initial={{ scale: 10, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Framework
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Guiding principles that shape our brand identity and communications
                        </motion.p>
                    </div>
                </div>

                {/* Brand Attributes Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Core Brand Attributes
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {brandAttributes.map((attr, index) => (
                                <motion.div
                                    key={attr.title}
                                    className="p-6 bg-gray-50 rounded-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{attr.title}</h3>
                                    <p className="text-gray-600">{attr.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <div className="fixed bottom-8 right-8">
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                            <span>←</span>
                            Back to Home
                        </motion.button>
                    </Link>
                </div>
            </div>
        </>
    );
}