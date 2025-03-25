'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const logoVariations = [
        {
            name: "Primary Logo",
            description: "Full-color version for light backgrounds",
            usage: "Primary branding, marketing materials",
            file: "/logos/primary.svg"
        },
        {
            name: "Dark Background",
            description: "Light version for dark backgrounds",
            usage: "Dark UI surfaces, photography overlays",
            file: "/logos/light.svg"
        },
        {
            name: "Monochrome",
            description: "Single color version",
            usage: "Grayscale applications, embossing",
            file: "/logos/monochrome.svg"
        },
        {
            name: "Icon Only",
            description: "Simplified mark without wordmark",
            usage: "Favicons, app icons, small spaces",
            file: "/logos/icon.svg"
        }
    ];

    const incorrectUsage = [
        {
            description: "Don't stretch or distort",
            example: "/logos/incorrect/stretched.svg"
        },
        {
            description: "Don't rotate or skew",
            example: "/logos/incorrect/rotated.svg"
        },
        {
            description: "Don't recolor improperly",
            example: "/logos/incorrect/recolored.svg"
        },
        {
            description: "Don't add effects",
            example: "/logos/incorrect/effects.svg"
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
                        src="/images/logo-bg.png"
                        alt="Logo Guidelines Background"
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
                            Logo Guidelines
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Proper usage of our visual identity mark across all applications
                        </motion.p>
                    </div>
                </div>

                {/* Logo Guidelines Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Logo Variations */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                                Logo Variations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {logoVariations.map((logo, index) => (
                                    <motion.div
                                        key={logo.name}
                                        className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="w-full h-32 flex items-center justify-center p-4">
                                                <Image
                                                    src={logo.file}
                                                    alt={logo.name}
                                                    width={160}
                                                    height={80}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="font-bold text-lg text-gray-800">{logo.name}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{logo.description}</p>
                                                <p className="text-xs text-gray-500 mt-2">{logo.usage}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Clear Space */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Clear Space & Minimum Size
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-gray-50 rounded-xl">
                                    <div className="relative w-full h-48 border border-dashed border-gray-300 flex items-center justify-center">
                                        <Image
                                            src="/logos/primary.svg"
                                            alt="Logo with clear space"
                                            width={120}
                                            height={60}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-xs text-gray-500">Minimum clear space = 1x height of logo</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-4 text-center">
                                        Maintain clear space around logo equal to the height of the logo mark
                                    </p>
                                </div>

                                <div className="p-8 bg-gray-50 rounded-xl">
                                    <div className="flex flex-col items-center space-y-6">
                                        <div className="flex items-end space-x-4">
                                            <div className="text-center">
                                                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2">
                                                    <Image
                                                        src="/logos/primary.svg"
                                                        alt="Small logo"
                                                        width={64}
                                                        height={32}
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-600">24px min digital</span>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-32 h-32 flex items-center justify-center mx-auto mb-2">
                                                    <Image
                                                        src="/logos/primary.svg"
                                                        alt="Medium logo"
                                                        width={128}
                                                        height={64}
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-600">Print applications</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 text-center">
                                            Minimum size requirements for different applications
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Usage */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Background Usage
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center">
                                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                                        <Image
                                            src="/logos/primary.svg"
                                            alt="Logo on light"
                                            width={128}
                                            height={64}
                                        />
                                    </div>
                                    <h3 className="font-bold text-gray-800">Light Backgrounds</h3>
                                    <p className="text-sm text-gray-600 text-center mt-2">
                                        Use primary color logo on white or light colored backgrounds
                                    </p>
                                </div>

                                <div className="p-8 rounded-xl bg-gray-800 flex flex-col items-center justify-center">
                                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                                        <Image
                                            src="/logos/light.svg"
                                            alt="Logo on dark"
                                            width={128}
                                            height={64}
                                        />
                                    </div>
                                    <h3 className="font-bold text-white">Dark Backgrounds</h3>
                                    <p className="text-sm text-gray-300 text-center mt-2">
                                        Use light version on dark or photographic backgrounds
                                    </p>
                                </div>

                                <div className="p-8 rounded-xl bg-blue-600 flex flex-col items-center justify-center">
                                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                                        <Image
                                            src="/logos/light.svg"
                                            alt="Logo on colored"
                                            width={128}
                                            height={64}
                                        />
                                    </div>
                                    <h3 className="font-bold text-white">Colored Backgrounds</h3>
                                    <p className="text-sm text-blue-100 text-center mt-2">
                                        Ensure sufficient contrast between logo and background
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Incorrect Usage */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Incorrect Usage
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {incorrectUsage.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-6 bg-red-50 rounded-xl"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="w-full h-24 flex items-center justify-center p-2 bg-white rounded border border-red-200">
                                                <Image
                                                    src={item.example}
                                                    alt="Incorrect usage"
                                                    width={120}
                                                    height={60}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm font-medium text-red-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Download Section */}
                        <motion.div
                            className="py-12 px-6 bg-blue-50 rounded-xl text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                                Logo Assets
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Download our logo package with all variations in multiple formats
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg font-semibold"
                            >
                                Download Logo Package
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