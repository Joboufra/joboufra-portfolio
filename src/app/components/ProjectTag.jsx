import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "bg-gradient-to-r from-primary-500 to-secondary-500 border-slate-300 text-white"
  : "border-slate-600 hover:border-slate-200";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag