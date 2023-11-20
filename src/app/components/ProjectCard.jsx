import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className='text-center'>
      <div className='relative mx-auto'> 
        <motion.div className='flex overflow-hidden group rounded-t-xl'>
          <div className='overlay items-center justify-center absolute top-0 left-0 right-0 bottom-0 rounded-t-xl w-full h-full bg-slate-500 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500 z-10'>
            <Link href={gitUrl} target="_blank" className='h-10 w-10 border-2 relative rounded-full hover:border-secondary-600 group-hover:flex justify-center items-center'>
                <CodeBracketIcon className='h-6 w-6' />
            </Link>
            {previewUrl && (
              <Link href={previewUrl} target="_blank" className='h-10 w-10 ml-6 border-2 relative rounded-full hover:border-secondary-500 group-hover:flex justify-center items-center'>
                <EyeIcon className='h-6 w-6' />
              </Link>
            )}
          </div>
          <Image 
            src={imgUrl} 
            alt={title} 
            width={800} 
            height={250}
          />
        </motion.div>
      </div>
      <div className='text-white rounded-b-xl bg-[#1d1d1d] py-4 px-4 line-clamp-10'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
