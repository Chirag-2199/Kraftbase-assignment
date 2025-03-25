'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageryPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const imageStyles = [
        {
            name: "Authentic",
            description: "Real people in natural environments",
            example: "/images/imagery/authentic.jpg",
            usage: "Product screens, testimonials, case studies"
        },
        {
            name: "Conceptual",
            description: "Abstract representations of ideas",
            example: "/images/imagery/conceptual.jpg",
            usage: "Marketing campaigns, feature highlights"
        },
        {
            name: "Lifestyle",
            description: "People using products in real life",
            example: "/images/imagery/lifestyle.jpg",
            usage: "Social media, advertisements"
        },
        {
            name: "Technical",
            description: "Product details and interfaces",
            example: "/images/imagery/technical.jpg",
            usage: "Documentation, tutorials"
        }
    ];

    const compositionExamples = [
        {
            title: "Rule of Thirds",
            description: "Key elements aligned with grid intersections",
            example: "/images/imagery/composition-1.jpg"
        },
        {
            title: "Negative Space",
            description: "Breathing room around subjects",
            example: "/images/imagery/composition-2.jpg"
        },
        {
            title: "Leading Lines",
            description: "Natural lines guide the eye",
            example: "/images/imagery/composition-3.jpg"
        },
        {
            title: "Color Harmony",
            description: "Complementary brand colors",
            example: "/images/imagery/composition-4.jpg"
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
                        src="/images/imagery-bg.jpg"
                        alt="Imagery Guidelines Background"
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
                            Imagery
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Visual storytelling through photography and illustration
                        </motion.p>
                    </div>
                </div>

                {/* Imagery Guidelines Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Image Styles */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                                Image Styles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {imageStyles.map((style, index) => (
                                    <motion.div
                                        key={style.name}
                                        className="group overflow-hidden rounded-xl shadow-lg"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="relative h-64">
                                            <Image
                                                src={style.example}
                                                alt={style.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 bg-white">
                                            <h3 className="font-bold text-lg text-gray-800">{style.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{style.description}</p>
                                            <p className="text-xs text-gray-500 mt-3">{style.usage}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Composition */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Composition Principles
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {compositionExamples.map((example, index) => (
                                    <motion.div
                                        key={example.title}
                                        className="group overflow-hidden rounded-xl bg-gray-50"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="relative h-48">
                                            <Image
                                                src={example.example}
                                                alt={example.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-gray-800">{example.title}</h3>
                                            <p className="text-sm text-gray-600 mt-2">{example.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Color Treatment */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Color Treatment
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/imagery/color-1.jpg"
                                            alt="Vibrant colors"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mt-4">Vibrant</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Bold, saturated colors for energetic contexts
                                    </p>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/imagery/color-2.jpg"
                                            alt="Muted tones"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mt-4">Muted</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Subtle, desaturated tones for professional contexts
                                    </p>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/imagery/color-3.jpg"
                                            alt="Brand colors"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 mt-4">Branded</h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Images that incorporate our brand color palette
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Do's and Don'ts */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Do's and Don'ts
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-green-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-green-800 mb-4">Do's</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✓
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Use high-resolution images</h4>
                                                <p className="text-sm text-gray-600">Minimum 2000px on the long edge</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✓
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Maintain brand colors</h4>
                                                <p className="text-sm text-gray-600">Use our color palette as reference</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✓
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Show real people</h4>
                                                <p className="text-sm text-gray-600">Authentic, diverse representation</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-red-50 rounded-xl">
                                    <h3 className="font-bold text-lg text-red-800 mb-4">Don'ts</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✗
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Use stock clichés</h4>
                                                <p className="text-sm text-gray-600">Avoid generic business clichés</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✗
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Over-filter images</h4>
                                                <p className="text-sm text-gray-600">Maintain natural color balance</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white mt-0.5">
                                                ✗
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Pixelate images</h4>
                                                <p className="text-sm text-gray-600">Ensure proper resolution</p>
                                            </div>
                                        </li>
                                    </ul>
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
                                Image Resources
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Access our approved image library and style guides
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg font-semibold"
                                >
                                    Download Image Library
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full shadow-lg font-semibold"
                                >
                                    View Style Guide
                                </motion.button>
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