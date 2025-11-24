import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="profile" className="w-full px-6 md:px-12 py-24 md:py-32 bg-[#050505] relative z-10 border-b border-white/10">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Intro Text - Aligned Left */}
          <div className="col-span-1 md:col-span-7 relative">
             <div className="md:sticky md:top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="mb-6">
                     <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-white">
                        INTRO
                     </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-sans font-light leading-[1.2] text-gray-200">
                    I'm a dedicated <span className="text-white font-medium">Product Designer</span> and <span className="text-white font-medium">Business Analyst</span>. 
                    I specialize in bridging the gap between business requirements and user-centric design solutions. 
                    With a strong background in technical documentation and stakeholder management, I ensure every pixel serves a purpose.
                  </h2>
                </motion.div>
             </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Expertise & Tools - Aligned Right */}
          <div className="col-span-1 md:col-span-3">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="grid grid-cols-1 gap-12"
             >
                <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-6 border-b border-white/10 pb-2">Expertise</h3>
                    <ul className="space-y-3 font-serif text-2xl italic text-gray-300">
                        <li className="hover:text-white transition-colors cursor-default">Product Strategy</li>
                        <li className="hover:text-white transition-colors cursor-default">Business Analysis</li>
                        <li className="hover:text-white transition-colors cursor-default">UI/UX Design</li>
                        <li className="hover:text-white transition-colors cursor-default">Data Visualization</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-6 border-b border-white/10 pb-2">Tools</h3>
                    <ul className="space-y-3 font-serif text-2xl italic text-gray-300">
                        <li className="hover:text-white transition-colors cursor-default">Figma / PlantUML</li>
                        <li className="hover:text-white transition-colors cursor-default">Jira / Confluence</li>
                        <li className="hover:text-white transition-colors cursor-default">Miro / Draw.io</li>
                        <li className="hover:text-white transition-colors cursor-default">SQL / Postman</li>
                    </ul>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;