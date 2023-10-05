import React from 'react';
import { motion } from 'framer-motion';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const variants = {
    selected: { height: '100%', transition: { duration: 0.3 } },
    notSelected: { height: '0%', transition: { duration: 0.3 } },
  };

  return (
    <button 
      className={`relative overflow-hidden rounded-full border-2 px-5 py-2 text-xl cursor-pointer ${isSelected ? "border-white-500" : "border-slate"}`} 
      onClick={() => onClick(name)}
    >
      <motion.div
        className={`absolute top-0 left-0 w-full ${isSelected ? 'bg-gradient-to-r from-primary-600 to-secondary-600' : 'bg-gradient-to-r from-primary-600 to-secondary-600'}`}
        initial={false}
        animate={isSelected ? 'selected' : 'notSelected'}
        variants={variants}
      />
      <div className="relative">
        {name}
      </div>
    </button>
  );
};

export default ProjectTag;
