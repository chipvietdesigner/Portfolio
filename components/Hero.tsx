import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform values for different layers (depth effect)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const textX = useTransform(springX, [-0.5, 0.5], ["-20px", "20px"]);
  const textY = useTransform(springY, [-0.5, 0.5], ["-20px", "20px"]);
  
  const bgX = useTransform(springX, [-0.5, 0.5], ["10px", "-10px"]);
  const bgY = useTransform(springY, [-0.5, 0.5], ["10px", "-10px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXPos = e.clientX - rect.left;
      const mouseYPos = e.clientY - rect.top;
      
      // Calculate normalized mouse position (-0.5 to 0.5)
      const xPct = (mouseXPos / width) - 0.5;
      const yPct = (mouseYPos / height) - 0.5;
      
      mouseX.set(xPct);
      mouseY.set(yPct);
    }
  };

  const letterAnimation = {
    hidden: { y: "120%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.4 + i * 0.05,
      },
    }),
  };

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen w-full flex flex-col justify-between px-6 md:px-12 py-12 md:py-20 pt-32 border-b border-white/10 relative overflow-hidden perspective-1000 max-w-[90rem] mx-auto"
    >
      
      {/* 3D Background Elements */}
      <motion.div 
        style={{ x: bgX, y: bgY, rotateX: rotateX, rotateY: rotateY }}
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
      >
          <div className="absolute top-[10%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-gray-800 to-transparent blur-3xl opacity-40" />
          <div className="absolute bottom-[20%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-tr from-gray-800 to-transparent blur-3xl opacity-30" />
      </motion.div>

      {/* Spinning Geometric Element - Increased Opacity for Visibility */}
      <div className="absolute top-0 right-0 p-20 md:p-40 opacity-60 pointer-events-none z-0">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 md:w-96 md:h-96 border-[1px] border-white/30 rounded-full flex items-center justify-center"
        >
             <div className="w-full h-[1px] bg-white/30" />
             <div className="absolute h-full w-[1px] bg-white/30" />
             <div className="absolute w-[70%] h-[70%] border-[1px] border-white/20 rounded-full" />
        </motion.div>
      </div>

      {/* Main Content with Parallax */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="flex flex-col justify-center flex-grow z-10 mt-10 md:mt-0 relative"
      >
        <div className="overflow-hidden">
          <motion.h1 
            custom={0}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-[9vw] leading-[0.85] font-serif font-normal tracking-tighter text-left mix-blend-exclusion"
          >
            welcome to my
          </motion.h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start relative z-10">
           <div className="overflow-hidden">
             <motion.h1 
                custom={1}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="text-7xl md:text-[11vw] leading-[0.85] font-serif italic font-light pr-4 md:pr-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
              >
                portfolio
              </motion.h1>
           </div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 md:mt-0 border-t border-white/10 pt-8 md:border-none md:pt-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <div className="flex flex-col space-y-2 group">
           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Role</span>
           <span className="text-sm md:text-base font-sans font-light">Business Analyst</span>
           <span className="text-sm md:text-base font-sans font-light">Product Designer</span>
        </div>
        
        <div className="flex flex-col space-y-2 group">
           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Contact</span>
           <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm md:text-base font-sans font-light hover:text-white text-gray-300 transition-colors">{PERSONAL_INFO.email}</a>
           <span className="text-sm md:text-base font-sans font-light text-gray-300">{PERSONAL_INFO.phone}</span>
        </div>

        <div className="flex flex-col space-y-2 group">
           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Social</span>
           <a href={PERSONAL_INFO.social.behance} target="_blank" rel="noreferrer" className="text-sm md:text-base font-sans font-light hover:text-white text-gray-300 transition-colors">Behance</a>
           <a href={PERSONAL_INFO.social.dribbble} target="_blank" rel="noreferrer" className="text-sm md:text-base font-sans font-light hover:text-white text-gray-300 transition-colors">Dribbble</a>
        </div>

        <div className="hidden md:flex flex-col justify-end items-end">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 rotate-90 origin-right translate-x-2">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;