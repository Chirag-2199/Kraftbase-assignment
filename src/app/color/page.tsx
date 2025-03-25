'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ColorPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const colorPalette = {
        primary: [
            { name: "Blue 50", hex: "#F0F6FF", usage: "Backgrounds, subtle accents" },
            { name: "Blue 100", hex: "#E0EDFF", usage: "Hover states, secondary elements" },
            { name: "Blue 600", hex: "#0061FF", usage: "Primary buttons, key highlights" },
            { name: "Blue 700", hex: "#0052D9", usage: "Active states, pressed buttons" },
        ],
        secondary: [
            { name: "Gray 50", hex: "#F8F9FA", usage: "Light backgrounds" },
            { name: "Gray 200", hex: "#E9ECEF", usage: "Borders, dividers" },
            { name: "Gray 800", hex: "#343A40", usage: "Body text, dark elements" },
            { name: "Gray 900", hex: "#212529", usage: "Headings, dark backgrounds" },
        ],
        system: [
            { name: "Success", hex: "#28A745", usage: "Positive actions, completion" },
            { name: "Warning", hex: "#FFC107", usage: "Warnings, attention needed" },
            { name: "Error", hex: "#DC3545", usage: "Errors, destructive actions" },
            { name: "Info", hex: "#17A2B8", usage: "Informational messages" },
        ]
    };

    // Keep useEffect same as previous pages

    return (
        <>
            {/* Custom Cursor and Scroll Progress Bar (same as previous pages) */}

            <div className="relative min-h-screen" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center">
                    <Image
                        src="/images/color-bg.png"
                        alt="Color System Background"
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
                            Color System
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Strategic color usage that defines our visual identity and enhances user experience
                        </motion.p>
                    </div>
                </div>

                {/* Color Palette Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Primary Colors */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Primary Colors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {colorPalette.primary.map((color, index) => (
                                    <motion.div
                                        key={color.name}
                                        className="relative h-64 rounded-xl overflow-hidden group"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className="h-full w-full flex flex-col justify-end p-6"
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            <div className="bg-black bg-opacity-50 p-4 rounded-lg backdrop-blur-sm text-white">
                                                <h3 className="font-bold">{color.name}</h3>
                                                <p className="text-sm opacity-90">{color.hex}</p>
                                                <p className="text-xs mt-2 opacity-75">{color.usage}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Secondary Colors */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Secondary Colors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {colorPalette.secondary.map((color, index) => (
                                    <motion.div
                                        key={color.name}
                                        className="h-64 rounded-xl overflow-hidden shadow-lg relative group"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className="h-full w-full flex items-center justify-center"
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            <div className={`text-center px-4 ${Number(color.hex.slice(-2, -1)) < 8 ? 'text-white' : 'text-gray-800'}`}>
                                                <h3 className="font-bold text-xl">{color.name}</h3>
                                                <p className="text-sm">{color.hex}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* System Colors */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">System Colors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {colorPalette.system.map((color, index) => (
                                    <motion.div
                                        key={color.name}
                                        className="h-48 rounded-xl relative overflow-hidden shadow-md"
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className="h-full w-full flex flex-col items-center justify-center"
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            <span className="font-bold text-lg mb-2 text-white">{color.name}</span>
                                            <span className="text-sm text-white/90">{color.hex}</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/20 p-2 text-center">
                                            <span className="text-xs text-white">{color.usage}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gradients Section */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Gradients</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <motion.div
                                    className="h-48 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Primary Gradient
                                </motion.div>
                                <motion.div
                                    className="h-48 rounded-xl bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold text-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Neutral Gradient
                                </motion.div>
                                <motion.div
                                    className="h-48 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Vibrant Gradient
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Typography Colors */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Text Colors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-xl bg-gray-800 space-y-4">
                                    <h3 className="text-2xl font-bold text-white">Light Theme</h3>
                                    <p className="text-gray-100">Primary Text</p>
                                    <p className="text-gray-400">Secondary Text</p>
                                    <p className="text-blue-400">Interactive Elements</p>
                                </div>
                                <div className="p-8 rounded-xl bg-gray-50 space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Dark Theme</h3>
                                    <p className="text-gray-800">Primary Text</p>
                                    <p className="text-gray-600">Secondary Text</p>
                                    <p className="text-blue-600">Interactive Elements</p>
                                </div>
                            </div>
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