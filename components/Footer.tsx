import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="w-full bg-[#050505] text-white py-24 md:py-32 border-t border-white/10 relative z-10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Animated Dot */}
        <div className="mb-12 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-sans font-light tracking-wide text-gray-200">
                PHAM XUAN SANG
            </h2>

            <p className="text-lg md:text-xl font-mono text-gray-400">
                ( PRODUCT DESIGNER & BUSINESS ANALYST )
            </p>
            
            <div className="flex gap-6 justify-center mt-6">
                <a 
                    href={PERSONAL_INFO.social.behance} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                    Behance
                </a>
                <a 
                    href={PERSONAL_INFO.social.dribbble} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                    Dribbble
                </a>
            </div>
        </div>

        <div className="w-16 h-[1px] bg-white/20 my-12"></div>

        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
             <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                 Local Time (Vietnam)
             </span>
             <span className="text-sm md:text-base font-mono text-white uppercase tracking-widest tabular-nums">
                 {time} GMT+7
             </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;