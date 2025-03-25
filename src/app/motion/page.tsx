'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MotionPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const motionPrinciples = [
        {
            name: "Purposeful",
            description: "Motion should enhance usability, not distract",
            example: "/videos/purposeful.mp4",
            usage: "Focus attention, explain relationships"
        },
        {
            name: "Responsive",
            description: "Instant feedback to user actions",
            example: "/videos/responsive.mp4",
            usage: "Button presses, state changes"
        },
        {
            name: "Natural",
            description: "Follow real-world physics",
            example: "/videos/natural.mp4",
            usage: "Transitions, object movements"
        },
        {
            name: "Cohesive",
            description: "Consistent timing and easing",
            example: "/videos/cohesive.mp4",
            usage: "System-wide animations"
        }
    ];

    const animationTypes = [
        {
            name: "Micro-interactions",
            description: "Small, functional animations",
            examples: [
                "Button hover states",
                "Form field validation",
                "Toggle switches"
            ]
        },
        {
            name: "Transitions",
            description: "Between states or screens",
            examples: [
                "Page transitions",
                "Modal appearances",
                "List item reordering"
            ]
        },
        {
            name: "Feedback",
            description: "Visual response to actions",
            examples: [
                "Success/error states",
                "Loading indicators",
                "Drag and drop"
            ]
        }
    ];

    // Keep useEffect same as previous pages

    return (
        <>
            {/* Custom Cursor and Scroll Progress Bar (same as previous pages) */}

            <div className="relative min-h-screen" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center">
                    <Image
                        src="/images/motion-bg.jpg"
                        alt="Motion Design Background"
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
                            Motion Design
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Bringing interfaces to life with purposeful animation
                        </motion.p>
                    </div>
                </div>

                {/* Motion Guidelines Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Motion Principles */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                                Motion Principles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {motionPrinciples.map((principle, index) => (
                                    <motion.div
                                        key={principle.name}
                                        className="group overflow-hidden rounded-xl shadow-lg"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="relative h-48 bg-gray-800 overflow-hidden">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            >
                                                <source src={principle.example} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="p-6 bg-white">
                                            <h3 className="font-bold text-lg text-gray-800">{principle.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{principle.description}</p>
                                            <p className="text-xs text-gray-500 mt-3">{principle.usage}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Animation Types */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Animation Types
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {animationTypes.map((type, index) => (
                                    <motion.div
                                        key={type.name}
                                        className="p-6 bg-gray-50 rounded-xl"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h3 className="font-bold text-lg text-gray-800 mb-3">{type.name}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                                        <ul className="space-y-2">
                                            {type.examples.map((example, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                    </div>
                                                    <span className="text-sm text-gray-600">{example}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Timing & Easing */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Timing & Easing
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Durations</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                <span>Micro-interactions</span>
                                                <span>100-300ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                <span>Transitions</span>
                                                <span>300-500ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                <span>Complex animations</span>
                                                <span>500-1000ms</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Easing Curves</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-sm text-gray-600 mb-2">Standard (easeInOut)</div>
                                            <svg width="100%" height="40" viewBox="0 0 100 20" className="bg-gray-100 rounded">
                                                <path
                                                    d="M0,20 C20,0 80,0 100,20"
                                                    stroke="#0061FF"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-2">Enter (easeOut)</div>
                                            <svg width="100%" height="40" viewBox="0 0 100 20" className="bg-gray-100 rounded">
                                                <path
                                                    d="M0,20 C40,20 60,0 100,0"
                                                    stroke="#0061FF"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Choreography</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                                1
                                            </div>
                                            <span className="text-sm text-gray-600">Parent element moves first</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                                2
                                            </div>
                                            <span className="text-sm text-gray-600">Child elements follow with delay</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                                3
                                            </div>
                                            <span className="text-sm text-gray-600">Elements overlap slightly</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Implementation Examples */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Implementation Examples
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Button States</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
                                        >
                                            Interactive
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ backgroundColor: "#0052D9" }}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
                                        >
                                            Color Shift
                                        </motion.button>
                                        <motion.button
                                            whileHover={{
                                                boxShadow: "0 5px 15px rgba(0, 97, 255, 0.3)",
                                                y: -2
                                            }}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
                                        >
                                            Elevation
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Page Transitions</h3>
                                    <div className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="p-4 bg-white rounded-lg shadow-sm"
                                        >
                                            Slide In
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-4 bg-white rounded-lg shadow-sm"
                                        >
                                            Scale Up
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Download Section */}
                        <motion.div
                            className="py-12 px-6 bg-blue-50 rounded-xl text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                                Motion Resources
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Download our motion design kit with reusable animation components
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg font-semibold"
                            >
                                Download Motion Kit
                            </motion.button>
                        </motion.div>
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