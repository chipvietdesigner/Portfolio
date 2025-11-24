import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface GalleryProps {
  onProjectSelect: (project: ProjectItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onProjectSelect }) => {
  return (
    <section id="work" className="w-full bg-[#050505] text-white py-24 md:py-40 border-t border-white/10 relative z-10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
             <div>
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="font-mono text-xs text-gray-400 tracking-widest">SELECTED WORKS</span>
                 </div>
                 <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight">Featured Projects</h2>
             </div>
             <span className="hidden md:block font-mono text-sm tracking-widest border border-white/20 px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-white hover:text-black transition-colors duration-300 cursor-default">2020 — 2025</span>
          </div>

          {/* Grid Layout - Constrained Width and Adjusted Spacing/Aspect Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {PROJECTS.map((project, index) => (
               <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onClick={() => onProjectSelect(project)}
               />
            ))}
          </div>
          
          <div className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">
              <div className="flex gap-8">
                  <p className="hover:text-white transition-colors cursor-crosshair">Product Design</p>
                  <p className="hover:text-white transition-colors cursor-crosshair">Business Analyst</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-8 text-right">
                 <p className="hover:text-white transition-colors cursor-crosshair">HMI Designer</p>
                 <p className="hover:text-white transition-colors cursor-crosshair">Requirement Engineer</p>
              </div>
          </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
    // Determine offset for staggering effect, but kept simpler for cleaner layout
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            onClick={onClick}
            className={`group cursor-pointer flex flex-col ${!isEven ? 'md:mt-24' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className="w-full aspect-[3/2] relative mb-6 overflow-hidden bg-white/5 rounded-sm">
                 {/* Image Layer */}
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                     <div className="bg-white text-black rounded-full p-3 md:p-4 shadow-lg">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                     </div>
                </div>
            </div>

            {/* Content */}
            <div className="border-t border-white/20 pt-4 group-hover:border-white transition-colors duration-500">
                <div className="flex justify-between items-baseline">
                    <h3 className="text-3xl md:text-4xl font-serif group-hover:italic transition-all duration-300">{project.title}</h3>
                    <span className="font-mono text-xs text-gray-500">0{index + 1}</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                     <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{project.category}</span>
                     <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                     <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{project.year}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery;