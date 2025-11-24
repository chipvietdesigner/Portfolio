import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { ProjectItem } from './types';
import { X } from 'lucide-react';

const GrainOverlay = () => (
  <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.07] mix-blend-overlay">
      <div className="absolute inset-0 animate-grain bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]"></div>
  </div>
);

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[60] hidden md:block"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isPointer ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProjectSelect = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsMenuOpen(false); // Close menu if open
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu
    if (selectedProject) {
       setSelectedProject(null);
       // Delay scroll to allow Home to render
       setTimeout(() => {
           const element = document.getElementById(id);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
       const element = document.getElementById(id);
       if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen w-full text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <GrainOverlay />
      <CustomCursor />
      
      <AnimatePresence mode='wait'>
        {isLoading && (
          <Loader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col w-full">
           {/* Navigation */}
           <motion.nav 
             initial={{ y: -100 }}
             animate={{ y: 0 }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none"
            >
              <span 
                className="font-serif italic text-2xl font-bold pointer-events-auto cursor-pointer"
                onClick={handleBackToHome}
              >
                S.
              </span>
              
              {/* Only Hamburger Menu */}
              <div 
                className="pointer-events-auto cursor-pointer group z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                 {isMenuOpen ? (
                   <X size={24} className="text-white mix-blend-difference" />
                 ) : (
                   <div className="space-y-1.5 group-hover:opacity-70 transition-opacity">
                      <div className="w-8 h-[1px] bg-white"></div>
                      <div className="w-5 h-[1px] bg-white ml-auto group-hover:w-8 transition-all"></div>
                   </div>
                 )}
              </div>
           </motion.nav>

           {/* Mobile Menu Overlay */}
           <AnimatePresence>
             {isMenuOpen && (
               <motion.div
                 initial={{ x: '100%' }}
                 animate={{ x: 0 }}
                 exit={{ x: '100%' }}
                 transition={{ type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                 className="fixed inset-0 bg-[#111] z-40 flex flex-col items-center justify-center pointer-events-auto"
               >
                 <div className="flex flex-col space-y-8 font-serif text-4xl italic text-center">
                    <span className="cursor-pointer hover:text-gray-400" onClick={() => scrollToSection('work')}>Work</span>
                    <span className="cursor-pointer hover:text-gray-400" onClick={() => scrollToSection('profile')}>Profile</span>
                    <span className="cursor-pointer hover:text-gray-400" onClick={() => scrollToSection('contact')}>Contact</span>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           <AnimatePresence mode="wait">
             {selectedProject ? (
               <ProjectDetail 
                 key="project-detail"
                 project={selectedProject} 
                 onBack={handleBackToHome}
                 onProjectSelect={handleProjectSelect}
               />
             ) : (
               <motion.div
                 key="home-content"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
               >
                 <Hero />
                 <About />
                 <Experience />
                 <Gallery onProjectSelect={handleProjectSelect} />
                 <Footer />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      )}
    </main>
  );
};

export default App;