import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags }) => {
  return (
    <div className="bento-card flex h-full flex-col overflow-hidden">
      <div className="relative h-44 w-full">
        <Image src={imgUrl} alt={title} fill sizes="(max-width: 1024px) 100vw, 360px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="space-y-1">
          <h5 className="text-xl font-semibold text-white">{title}</h5>
          <p className="text-sm text-slate-200/80">{description}</p>
        </div>
        <div className="mt-auto flex gap-3">
          <Link
            href={gitUrl}
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:border-amber-300/60 hover:text-white"
          >
            <CodeBracketIcon className="h-5 w-5" />
            Código
          </Link>
          {previewUrl ? (
            <Link
              href={previewUrl}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-orange-500/30"
            >
              <EyeIcon className="h-5 w-5" />
              Ver demo
            </Link>
          ) : (
            <span className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/50">
              Demo privada
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
