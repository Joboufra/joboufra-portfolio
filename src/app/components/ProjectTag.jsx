import React from 'react';
import { motion } from 'framer-motion';

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition ${
        isSelected
          ? 'border-transparent text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)]'
          : 'border-white/20 text-white/75 hover:border-orange-300/70 hover:text-white'
      }`}
      onClick={() => onClick(name)}
    >
      <motion.div
        className="absolute inset-0 origin-top bg-gradient-to-b from-orange-200/85 via-orange-400/80 to-amber-500/80"
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
