'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IconographyPage() {
    const [hovered, setHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const iconCategories = [
        {
            name: "System Icons",
            description: "Core UI elements and actions",
            icons: [
                { name: "Home", path: "/icons/system/home.svg" },
                { name: "Search", path: "/icons/system/search.svg" },
                { name: "Settings", path: "/icons/system/settings.svg" },
                { name: "User", path: "/icons/system/user.svg" },
                { name: "Notification", path: "/icons/system/notification.svg" },
                { name: "Download", path: "/icons/system/download.svg" },
            ]
        },
        {
            name: "File Type Icons",
            description: "Representations for different file formats",
            icons: [
                { name: "PDF", path: "/icons/file-types/pdf.svg" },
                { name: "Document", path: "/icons/file-types/doc.svg" },
                { name: "Spreadsheet", path: "/icons/file-types/sheet.svg" },
                { name: "Presentation", path: "/icons/file-types/presentation.svg" },
                { name: "Image", path: "/icons/file-types/image.svg" },
                { name: "Video", path: "/icons/file-types/video.svg" },
            ]
        },
        {
            name: "Action Icons",
            description: "Common user actions and interactions",
            icons: [
                { name: "Add", path: "/icons/actions/add.svg" },
                { name: "Delete", path: "/icons/actions/delete.svg" },
                { name: "Edit", path: "/icons/actions/edit.svg" },
                { name: "Share", path: "/icons/actions/share.svg" },
                { name: "Copy", path: "/icons/actions/copy.svg" },
                { name: "Move", path: "/icons/actions/move.svg" },
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
                        src="/images/iconography-bg.png"
                        alt="Iconography Background"
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
                            Iconography
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-white max-w-2xl text-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Visual symbols that enhance usability and create intuitive interfaces
                        </motion.p>
                    </div>
                </div>

                {/* Iconography Sections */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Icon Categories */}
                        {iconCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                                    {category.name}
                                </h2>
                                <p className="text-gray-600 mb-12 max-w-2xl">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                    {category.icons.map((icon, iconIndex) => (
                                        <motion.div
                                            key={icon.name}
                                            className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                                            initial={{ y: 20 }}
                                            whileInView={{ y: 0 }}
                                            transition={{ delay: iconIndex * 0.05 }}
                                        >
                                            <div className="flex flex-col items-center space-y-4">
                                                <div className="w-16 h-16 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                                    <Image
                                                        src={icon.path}
                                                        alt={icon.name}
                                                        width={32}
                                                        height={32}
                                                        className="text-gray-800"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 text-center">
                                                    {icon.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Usage Guidelines */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                                Usage Guidelines
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Size Guidelines */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Sizing</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">16px - Small UI elements</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">24px - Standard size</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">32px - Prominent elements</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Color Usage */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Color Usage</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Default state</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Interactive state</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Disabled state</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Spacing */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Spacing</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                                            <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Minimum 4px padding</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
                                            <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">8px for larger icons</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* States */}
                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">States</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Default</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Hover</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                                            <span className="text-sm text-gray-600">Disabled</span>
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
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Consistency</h3>
                                    <p className="text-sm text-gray-600">
                                        Maintain consistent stroke weights and visual styles across all icons
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Clarity</h3>
                                    <p className="text-sm text-gray-600">
                                        Ensure icons are easily recognizable and convey clear meaning
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="p-6 bg-gray-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Accessibility</h3>
                                    <p className="text-sm text-gray-600">
                                        Provide sufficient contrast and include text labels where necessary
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