import React from 'react';
import { motion } from 'framer-motion';

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition ${
        isSelected ? 'border-amber-300/70 text-white' : 'border-white/15 text-white/70 hover:border-white/30'
      }`}
      onClick={() => onClick(name)}
    >
      <motion.div
        className="absolute inset-0 origin-top bg-gradient-to-b from-amber-400/50 via-orange-400/40 to-rose-400/40"
        initial={{ opacity: 0, scaleY: 0, originY: 0 }}
        animate={
          isSelected
            ? { opacity: 1, scaleY: 1, originY: 0 }
            : { opacity: 0, scaleY: 0, originY: 1 }
        }
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      />
      <span className="relative">{name}</span>
    </button>
  );
};

export default ProjectTag;
