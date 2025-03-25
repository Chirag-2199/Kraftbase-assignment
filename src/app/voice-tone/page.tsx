'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VoiceTonePage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const voicePrinciples = [
        {
            title: "Clear",
            description: "Straightforward communication that's easy to understand",
            examples: [
                "Use simple, concise language",
                "Avoid jargon and technical terms",
                "Get to the point quickly"
            ]
        },
        {
            title: "Approachable",
            description: "Friendly without being casual, professional without being stiff",
            examples: [
                "Use contractions (we're, you'll)",
                "Avoid corporate speak",
                "Maintain a conversational tone"
            ]
        },
        {
            title: "Smart",
            description: "Insightful and value-added perspective",
            examples: [
                "Show expertise without arrogance",
                "Provide meaningful insights",
                "Focus on user benefits"
            ]
        },
        {
            title: "Dynamic",
            description: "Energetic and forward-moving tone",
            examples: [
                "Use active voice",
                "Focus on possibilities",
                "Express enthusiasm authentically"
            ]
        }
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
                        src="/images/voice-tone-bg.png"
                        alt="Voice & Tone Background"
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
                            Voice & Tone
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Defining how we communicate and connect with our audience
                        </motion.p>
                    </div>
                </div>

                {/* Principles Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Communication Principles
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {voicePrinciples.map((principle, index) => (
                                <motion.div
                                    key={principle.title}
                                    className="group p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                                {principle.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {principle.description}
                                            </p>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-blue-600">Examples:</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {principle.examples.map((example, i) => (
                                                        <li key={i} className="text-gray-600">
                                                            {example}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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