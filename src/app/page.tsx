'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 9500);
    return () => clearTimeout(timer);
  }, []);

  const handleRouteChange = (section: string) => {
    setActiveRoute(section);
    setTimeout(() => {
      router.push(`/${section.toLowerCase().replace(/\s+/g, '-')}`);
    }, 1000);
  };

  if (!showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* First Logo Animation */}
        <motion.div
          className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Logo
        </motion.div>

        <motion.div
          className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold fixed"
          initial={{ x: 0, y: 0 }}
          animate={{ x: '-40vw', y: '40vh' }}
          transition={{ delay: 1, duration: 2 }}
        >
          Logo
        </motion.div>

        <motion.div
          className="absolute border-2 border-blue-600"
          initial={{ width: 0, height: 0 }}
          animate={{ width: 300, height: 300 }}
          transition={{ duration: 2, delay: 3.5 }}
        >
          <motion.div
            className="absolute w-full h-full border-t-2 border-blue-600"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 5.5 }}
          />
          <motion.div
            className="absolute w-full h-full border-r-2 border-blue-600"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, delay: 6.5 }}
          />
        </motion.div>
      </div>
    );
  }

  const hoverVariants = {
    framework: { backgroundColor: '#f87171', scale: 1.1 },
    'voice-tone': { backgroundColor: '#60a5fa', scale: 1.1 },
    logo: { backgroundColor: '#34d399', scale: 1.1 },
    typography: { backgroundColor: '#fbbf24', scale: 1.1 },
    iconology: { backgroundColor: '#a78bfa', scale: 1.1 },
    color: { backgroundColor: '#f472b6', scale: 1.1 },
    imagery: { backgroundColor: '#facc15', scale: 1.1 },
    motion: { backgroundColor: '#4ade80', scale: 1.1 },
  };

  const gridStyles = [
    'col-span-1 row-span-2',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-2'
  ];

  return (
    <motion.div
      className="min-h-screen grid grid-cols-4 grid-rows-3 gap-2 p-2 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {['Framework', 'Voice-tone', 'Logo', 'Typography', 'Iconology', 'Color', 'Imagery', 'Motion'].map((section, index) => (
        <motion.div
          key={index}
          whileHover={hoverVariants[section.toLowerCase().replace(/\s+/g, '')]}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRouteChange(section)}
          className={`${gridStyles[index]} flex items-center justify-center bg-white shadow-md cursor-pointer text-xl font-semibold text-gray-800`}
        >
          {activeRoute === section ? (
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: 10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {section}
            </motion.span>
          ) : (
            section
          )}
        </motion.div>
      ))}

      <motion.div
        onClick={() => handleRouteChange('home')}
        className="col-span-1 row-span-1 flex items-center justify-center bg-blue-600 text-white text-xl font-bold shadow-lg cursor-pointer"
      >
        {activeRoute === 'home' ? (
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Home
          </motion.span>
        ) : (
          'Home'
        )}
      </motion.div>
    </motion.div>
  );
}
