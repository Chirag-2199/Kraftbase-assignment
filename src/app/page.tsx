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
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  const handleRouteChange = (section: string) => {
    setActiveRoute(section);
    setTimeout(() => {
      router.push(`/${section.toLowerCase().replace(/\s+/g, '-')}`);
    }, 800); // Smoother transition
  };

  if (!showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Animated Border Effect */}
        <motion.div
          className="absolute border-4 border-transparent"
          initial={{ width: 0, height: 0, rotate: 0 }}
          animate={{
            width: 360,
            height: 360,
            rotate: 360,
            borderColor: ['#60a5fa', '#34d399', '#fbbf24', '#a78bfa']
          }}
          transition={{
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: "anticipate"
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    );
  }

  // Enhanced hover effects
  const hoverVariants = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: (section: string) => ({
      scale: 1.05,
      backgroundColor: getSectionColor(section),
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    })
  };

  const getSectionColor = (section: string) => {
    const colors: { [key: string]: string } = {
      framework: '#f87171',
      'voice-tone': '#60a5fa',
      logo: '#34d399',
      typography: '#fbbf24',
      iconology: '#a78bfa',
      color: '#f472b6',
      imagery: '#facc15',
      motion: '#4ade80'
    };
    return colors[section.toLowerCase().replace(/\s+/g, '')] || '#ffffff';
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
      className="min-h-screen grid grid-cols-4 grid-rows-3 gap-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {['Framework', 'Voice-tone', 'Logo', 'Typography', 'Iconology', 'Color', 'Imagery', 'Motion'].map((section, index) => (
        <motion.div
          key={index}
          variants={hoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          custom={section}
          onClick={() => handleRouteChange(section)}
          className={`${gridStyles[index]} flex items-center justify-center bg-white rounded-xl shadow-sm cursor-pointer text-xl font-semibold text-gray-800 hover:text-white transition-colors`}
          style={{ willChange: 'transform' }}
        >
          {activeRoute === section ? (
            <motion.div
              className="absolute inset-0 bg-current rounded-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ) : null}
          <span className="relative z-10">{section}</span>
        </motion.div>
      ))}

      <motion.div
        onClick={() => handleRouteChange('home')}
        className="col-span-1 row-span-1 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl font-bold shadow-lg cursor-pointer rounded-xl"
        whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        {activeRoute === 'home' ? (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        ) : null}
        <span className="relative z-10">Home</span>
      </motion.div>
    </motion.div>
  );
}