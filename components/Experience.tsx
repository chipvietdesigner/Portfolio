import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, SKILLS, AWARDS, PERSONAL_INFO } from '../constants';

const Experience: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full bg-[#f4f4f4] text-[#111] py-20 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-[90rem] mx-auto">
        {/* Header Section - Aligned with the Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24 pb-8 border-b border-black items-end"
        >
          <div className="col-span-1 md:col-span-8">
            <h2 className="text-5xl md:text-7xl font-sans font-semibold tracking-tighter mb-4">{PERSONAL_INFO.name}</h2>
            <div className="flex flex-col md:flex-row md:items-center text-sm font-mono text-gray-600 space-y-1 md:space-y-0 md:space-x-6 tracking-wide">
                <a href={`https://${PERSONAL_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-black hover:underline">{PERSONAL_INFO.website}</a>
                <span className="hidden md:inline text-gray-400">/</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-black hover:underline">{PERSONAL_INFO.email}</a>
                <span className="hidden md:inline text-gray-400">/</span>
                <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 text-left md:text-right">
             <span className="block text-3xl md:text-4xl font-serif italic font-medium">Product Designer</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-16"
        >
          
          {/* Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
            <div className="col-span-1 md:col-span-3">
               <h3 className="text-sm font-bold font-mono uppercase tracking-widest">Experience</h3>
            </div>
            <div className="col-span-1 md:col-span-9 space-y-16">
               <motion.p variants={item} className="text-xl md:text-2xl text-gray-800 font-sans font-light leading-relaxed max-w-4xl mb-12">
                 I have worked on projects across Europe and Southeast Asia, collaborating with cross-functional teams to deliver impactful digital experiences. At the heart of my work is a commitment to simplifying complexity, connecting the dots between user needs, business goals, and innovative design solutions.
               </motion.p>

               {EXPERIENCES.map((exp) => (
                 <motion.div key={exp.id} variants={item} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-gray-200 pt-8 first:border-t-0 first:pt-0">
                    {/* Left Col: Role, Company, Date */}
                    <div className="md:col-span-4 flex flex-col items-start space-y-2">
                         <h4 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">{exp.role}</h4>
                         <p className="text-base font-medium font-sans text-gray-600">{exp.company}</p>
                         <span className="font-mono text-sm text-gray-400 tracking-widest uppercase mt-1">{exp.period}</span>
                    </div>
                    {/* Right Col: Description */}
                    <div className="md:col-span-8">
                        <p className="text-gray-700 font-sans leading-relaxed text-lg md:text-xl font-light">
                            {exp.description}
                        </p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-black/10"></div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
            <div className="col-span-1 md:col-span-3">
               <h3 className="text-sm font-bold font-mono uppercase tracking-widest">Skills</h3>
            </div>
            <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
               {SKILLS.map((cat, idx) => (
                   <motion.div key={idx} variants={item}>
                       <h4 className="text-base font-bold font-sans mb-4 uppercase tracking-wider text-black">{cat.title}</h4>
                       <ul className="space-y-2">
                           {cat.items.map((skill, sIdx) => (
                               <li key={sIdx} className="text-black font-sans text-lg md:text-xl font-light border-b border-gray-200 pb-2 w-full">{skill}</li>
                           ))}
                       </ul>
                   </motion.div>
               ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-black/10"></div>

           {/* Education Section */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
            <div className="col-span-1 md:col-span-3">
               <h3 className="text-sm font-bold font-mono uppercase tracking-widest">Education</h3>
            </div>
            <div className="col-span-1 md:col-span-9">
               <motion.div variants={item}>
                   <h4 className="text-2xl font-bold font-sans">Danang University of Technology</h4>
                   <p className="text-gray-600 font-serif italic mt-2 text-lg">Bachelor of Information of Technology - 2017</p>
               </motion.div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-black/10"></div>

           {/* Awards Section */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
            <div className="col-span-1 md:col-span-3">
               <h3 className="text-sm font-bold font-mono uppercase tracking-widest">Awards</h3>
            </div>
            <div className="col-span-1 md:col-span-9">
               {AWARDS.map((award, i) => (
                   <motion.div key={i} variants={item}>
                       <h4 className="text-2xl font-bold font-sans">{award.title}</h4>
                       <p className="text-gray-600 font-sans text-base mt-3 max-w-3xl leading-relaxed">{award.description}</p>
                   </motion.div>
               ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;