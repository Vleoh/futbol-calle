import React from 'react';
import { Play, Eye } from 'lucide-react';

interface VideoCardProps {
  title: string;
  views: string;
  thumbnail: string;
  youtubeUrl: string;
}

export default function VideoCard({ title, views, thumbnail, youtubeUrl }: VideoCardProps) {
  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-12 h-12 text-red-500" />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-gray-400">
          <Eye className="w-4 h-4" />
          <span>{views} visualizaciones</span>
        </div>
      </div>
    </a>
  );
}