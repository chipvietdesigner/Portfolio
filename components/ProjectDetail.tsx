import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
  onProjectSelect: (project: ProjectItem) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onProjectSelect }) => {
  
  // Filter out the current project to show others
  const otherProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="w-full bg-[#050505] min-h-screen text-white pt-32 px-6 md:px-20 pb-0 relative z-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 mb-12 text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
        </button>

        {/* Hero Title */}
        <div className="mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif italic mb-6 leading-[0.9]"
          >
            {project.title}
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
             <span className="px-4 py-1 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest text-gray-300">
                {project.category}
             </span>
             <span className="px-4 py-1 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest text-gray-300">
                {project.year}
             </span>
             {project.link && (
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 px-4 py-1 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-black transition-all"
                 >
                    Visit Website <ExternalLink size={12} />
                 </a>
             )}
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm mb-20"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </motion.div>

        {/* Project Info & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 border-b border-white/10 pb-20">
          <div className="col-span-1 md:col-span-4 space-y-8">
             <div>
                <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Client</h3>
                <p className="font-sans text-xl font-medium">{project.client}</p>
             </div>
             <div>
                <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Role</h3>
                <p className="font-sans text-xl font-medium">{project.category}</p>
             </div>
             <div>
                <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Year</h3>
                <p className="font-sans text-xl font-medium">{project.year}</p>
             </div>
          </div>
          
          <div className="col-span-1 md:col-span-8">
             <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-6">About the project</h3>
             <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-gray-200">
                {project.description}
             </p>
          </div>
        </div>

        {/* Additional Images Gallery */}
        <div className="space-y-12 md:space-y-24 mb-32">
           {project.images && project.images.map((img, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full"
             >
                <img 
                  src={img} 
                  alt={`Project detail ${index + 1}`}
                  className="w-full h-auto object-cover rounded-sm"
                />
             </motion.div>
           ))}
        </div>
      </div>

      {/* More Projects Section */}
      <div className="w-full bg-[#111] py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-0">
              <div className="flex items-center justify-between mb-12">
                  <h3 className="font-sans text-3xl md:text-4xl font-normal">More Selected Projects</h3>
                  <button onClick={onBack} className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">View All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {otherProjects.map((p) => (
                      <div 
                        key={p.id} 
                        className="group cursor-pointer"
                        onClick={() => onProjectSelect(p)}
                      >
                          <div className="w-full aspect-[16/9] overflow-hidden rounded-sm mb-4">
                              <img 
                                src={p.image} 
                                alt={p.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                              />
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-4 group-hover:border-white transition-colors">
                              <div>
                                  <h4 className="text-2xl font-serif group-hover:italic transition-all">{p.title}</h4>
                                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{p.category}</span>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                  <ArrowRight className="text-white" size={20} />
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;