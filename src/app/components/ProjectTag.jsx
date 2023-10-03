import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-white bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-slate-200"
  : "text-[#ADB7BE] border-slate-600 hover:border-slate-200";
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