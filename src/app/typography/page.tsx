'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TypographyPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const typeScale = [
        { name: "H1", size: "64px", weight: "700", lineHeight: "72px", usage: "Page titles" },
        { name: "H2", size: "48px", weight: "700", lineHeight: "56px", usage: "Section headers" },
        { name: "H3", size: "32px", weight: "700", lineHeight: "40px", usage: "Sub-sections" },
        { name: "H4", size: "24px", weight: "600", lineHeight: "32px", usage: "Card titles" },
        { name: "H5", size: "20px", weight: "600", lineHeight: "28px", usage: "Subheadings" },
        { name: "Body 1", size: "16px", weight: "400", lineHeight: "24px", usage: "Main body text" },
        { name: "Body 2", size: "14px", weight: "400", lineHeight: "20px", usage: "Secondary text" },
        { name: "Caption", size: "12px", weight: "400", lineHeight: "16px", usage: "Captions, labels" },
    ];

    const fontPairings = [
        {
            name: "Primary Pairing",
            heading: "ABC Diatype Bold",
            body: "ABC Diatype Regular",
            usage: "Main content and headings"
        },
        {
            name: "Secondary Pairing",
            heading: "ABC Diatype Medium",
            body: "ABC Diatype Light",
            usage: "Supporting content"
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
                        src="/images/typography-bg.png"
                        alt="Typography Background"
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
                            Typography
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            The art of arranging type to make language visible and create hierarchy
                        </motion.p>
                    </div>
                </div>

                {/* Typography Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Type Scale */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                                Type Scale
                            </h2>
                            <div className="space-y-6">
                                {typeScale.map((type, index) => (
                                    <motion.div
                                        key={type.name}
                                        className="p-6 bg-gray-50 rounded-xl"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div className="flex-1">
                                                <div
                                                    className="mb-2"
                                                    style={{
                                                        fontSize: type.size,
                                                        fontWeight: type.weight,
                                                        lineHeight: type.lineHeight
                                                    }}
                                                >
                                                    {type.name}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {type.usage}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <div>Size: {type.size}</div>
                                                <div>Weight: {type.weight}</div>
                                                <div>Line Height: {type.lineHeight}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Font Pairings */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Font Pairings
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {fontPairings.map((pairing, index) => (
                                    <motion.div
                                        key={pairing.name}
                                        className="p-6 bg-gray-50 rounded-xl"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            {pairing.name}
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="text-lg font-bold" style={{ fontFamily: pairing.heading }}>
                                                    {pairing.heading}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Used for headings
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="text-lg" style={{ fontFamily: pairing.body }}>
                                                    {pairing.body}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Used for body text
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {pairing.usage}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hierarchy Examples */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Hierarchy Examples
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Article Example */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Article Layout
                                    </h3>
                                    <div className="space-y-4">
                                        <h1 className="text-4xl font-bold">Article Title</h1>
                                        <h2 className="text-2xl font-semibold">Section Heading</h2>
                                        <p className="text-base">
                                            This is an example of body text in an article layout. It demonstrates
                                            how different type scales work together to create clear hierarchy.
                                        </p>
                                        <blockquote className="pl-4 border-l-4 border-blue-600 italic">
                                            A well-structured quote example
                                        </blockquote>
                                    </div>
                                </motion.div>

                                {/* Dashboard Example */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Dashboard Layout
                                    </h3>
                                    <div className="space-y-4">
                                        <h1 className="text-2xl font-bold">Dashboard Title</h1>
                                        <h2 className="text-xl font-semibold">Section Header</h2>
                                        <p className="text-sm">
                                            This is an example of dashboard text with more compact spacing
                                            and smaller type sizes for dense information display.
                                        </p>
                                        <div className="text-xs text-gray-600">
                                            Secondary information and labels
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Best Practices */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Best Practices
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Hierarchy</h3>
                                    <p className="text-sm text-gray-600">
                                        Establish clear visual hierarchy through size, weight, and spacing
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Readability</h3>
                                    <p className="text-sm text-gray-600">
                                        Ensure optimal line length (45-75 characters) and line height
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Contrast</h3>
                                    <p className="text-sm text-gray-600">
                                        Maintain sufficient contrast between text and background
                                    </p>
                                </motion.div>
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