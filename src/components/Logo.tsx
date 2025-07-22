import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Background Circle */}
          <circle
            cx="20"
            cy="20"
            r="20"
            fill="url(#logoGradient)"
          />
          
          {/* Building Structure */}
          <g transform="translate(8, 8)">
            {/* Main Building */}
            <rect
              x="6"
              y="8"
              width="12"
              height="16"
              fill="white"
              fillOpacity="0.95"
              rx="1"
            />
            
            {/* Left Wing */}
            <rect
              x="2"
              y="12"
              width="6"
              height="12"
              fill="white"
              fillOpacity="0.8"
              rx="0.5"
            />
            
            {/* Right Wing */}
            <rect
              x="16"
              y="10"
              width="6"
              height="14"
              fill="white"
              fillOpacity="0.8"
              rx="0.5"
            />
            
            {/* Windows */}
            <rect x="8" y="10" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            <rect x="12" y="10" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            <rect x="8" y="14" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            <rect x="12" y="14" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            <rect x="8" y="18" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            <rect x="12" y="18" width="2" height="2" fill="#1e40af" fillOpacity="0.6" rx="0.2" />
            
            {/* Side Building Windows */}
            <rect x="4" y="14" width="1.5" height="1.5" fill="#1e40af" fillOpacity="0.4" rx="0.1" />
            <rect x="4" y="18" width="1.5" height="1.5" fill="#1e40af" fillOpacity="0.4" rx="0.1" />
            <rect x="18" y="12" width="1.5" height="1.5" fill="#1e40af" fillOpacity="0.4" rx="0.1" />
            <rect x="18" y="16" width="1.5" height="1.5" fill="#1e40af" fillOpacity="0.4" rx="0.1" />
            
            {/* Foundation */}
            <rect
              x="1"
              y="22"
              width="22"
              height="2"
              fill="white"
              fillOpacity="0.9"
              rx="1"
            />
          </g>
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle Animation Dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight">
          Sarjak
        </span>
        <span className="text-sm font-medium text-blue-700 -mt-1 tracking-wide">
          CONSULTANCY
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;