import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Construction3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.1;
        containerRef.current.style.transform = `rotateY(${rotation}deg) rotateX(${rotation * 0.5}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        ref={containerRef}
        className="relative transform-gpu"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main Building Structure */}
        <div className="relative">
          {/* Base Foundation */}
          <motion.div
            className="w-80 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg shadow-2xl"
            style={{ transform: 'rotateX(90deg) translateZ(-4px)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Main Building Tower */}
          <motion.div
            className="w-32 h-64 bg-gradient-to-t from-blue-800 via-blue-600 to-blue-400 relative mx-auto shadow-2xl"
            style={{ 
              transform: 'translateZ(20px)',
              clipPath: 'polygon(0 100%, 0 10%, 10% 0, 90% 0, 100% 10%, 100% 100%)'
            }}
            initial={{ height: 0 }}
            animate={{ height: 256 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            {/* Building Windows */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-yellow-300 opacity-80"
                style={{
                  left: `${20 + (i % 3) * 25}%`,
                  top: `${20 + Math.floor(i / 3) * 20}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8] }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.5 + i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              />
            ))}
          </motion.div>

          {/* Left Wing */}
          <motion.div
            className="absolute left-0 top-16 w-24 h-48 bg-gradient-to-t from-gray-600 to-gray-400 shadow-xl"
            style={{ transform: 'translateZ(10px) rotateY(-15deg)' }}
            initial={{ height: 0 }}
            animate={{ height: 192 }}
            transition={{ duration: 1.8, delay: 1.2 }}
          >
            {/* Left Wing Windows */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-blue-200 opacity-70"
                style={{
                  left: `${25 + (i % 2) * 40}%`,
                  top: `${25 + Math.floor(i / 2) * 20}%`,
                }}
              />
            ))}
          </motion.div>

          {/* Right Wing */}
          <motion.div
            className="absolute right-0 top-20 w-20 h-44 bg-gradient-to-t from-gray-500 to-gray-300 shadow-xl"
            style={{ transform: 'translateZ(8px) rotateY(15deg)' }}
            initial={{ height: 0 }}
            animate={{ height: 176 }}
            transition={{ duration: 1.6, delay: 1.4 }}
          >
            {/* Right Wing Windows */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-blue-200 opacity-70"
                style={{
                  left: `${30 + (i % 2) * 35}%`,
                  top: `${30 + Math.floor(i / 2) * 25}%`,
                }}
              />
            ))}
          </motion.div>

          {/* Construction Crane */}
          <motion.div
            className="absolute -right-20 -top-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {/* Crane Tower */}
            <div className="w-2 h-32 bg-yellow-500 relative">
              {/* Crane Arm */}
              <div className="absolute top-4 -left-8 w-16 h-1 bg-yellow-600 origin-left">
                {/* Crane Hook */}
                <motion.div
                  className="absolute right-0 top-0 w-1 h-8 bg-gray-800"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full -ml-0.5 mt-8" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Scaffolding */}
          <motion.div
            className="absolute left-8 top-8 w-16 h-40 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {/* Vertical Poles */}
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-700" />
            <div className="absolute right-0 top-0 w-0.5 h-full bg-gray-700" />
            
            {/* Horizontal Bars */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-0.5 bg-gray-600"
                style={{ top: `${i * 12.5}%` }}
              />
            ))}
          </motion.div>

          {/* Floating Construction Elements */}
          <motion.div
            className="absolute -left-16 top-12 w-4 h-4 bg-orange-500 rounded"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute -right-12 top-32 w-3 h-6 bg-blue-600"
            animate={{ 
              x: [0, 15, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Construction Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full"
              style={{
                left: `${Math.random() * 400 - 100}px`,
                top: `${Math.random() * 300 + 50}px`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-400 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Construction3D;