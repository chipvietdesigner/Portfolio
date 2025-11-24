import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Non-linear speed for a more natural feel
        const increment = prev > 80 ? 1 : 2;
        return prev + increment;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 1000);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-white text-black px-6 py-10 md:p-16"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { 
          duration: 1.2, 
          ease: [0.83, 0, 0.17, 1] // Custom ease like cubic-bezier(0.83, 0, 0.17, 1)
        } 
      }}
    >
      <div className="flex justify-between items-start overflow-hidden">
        <motion.div 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs md:text-sm tracking-tighter uppercase font-bold"
        >
          Pham Xuan Sang
        </motion.div>
        <motion.div 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs md:text-sm tracking-tighter uppercase font-bold"
        >
          Portfolio 2025
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center justify-center relative">
         <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 90 ? 0 : 1 }}
         >
            <div className="w-64 h-[1px] bg-black/10 relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-black" 
                    style={{ width: `${progress}%` }}
                />
            </div>
         </motion.div>

        <div className="relative overflow-hidden text-center">
          <motion.h1 
            className="text-[15vw] md:text-[12vw] leading-none font-serif italic font-medium tracking-tight"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {progress}%
          </motion.h1>
        </div>
      </div>

      <div className="flex justify-between items-end overflow-hidden">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block text-xs font-mono w-1/3"
         >
             Based in Da Nang, Vietnam. <br/>
             Open for new opportunities.
         </motion.div>
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs font-mono uppercase tracking-widest"
         >
             Loading Resources
         </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;