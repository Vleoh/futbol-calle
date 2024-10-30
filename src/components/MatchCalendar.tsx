import React from 'react';
import { Calendar, Twitch, Youtube, Instagram } from 'lucide-react';

const matches = [
  {
    date: '2024-03-25',
    time: '20:00',
    opponent: 'Los Magos FC',
    platform: 'twitch',
    platformUrl: 'https://twitch.tv/freestylersteam'
  },
  {
    date: '2024-04-02',
    time: '19:30',
    opponent: 'Street Kings',
    platform: 'youtube',
    platformUrl: 'https://youtube.com/freestylersteam'
  },
  {
    date: '2024-04-15',
    time: '21:00',
    opponent: 'Freestyle Masters',
    platform: 'instagram',
    platformUrl: 'https://instagram.com/freestylersteam'
  }
];

const platformIcons = {
  twitch: <Twitch className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />
};

export default function MatchCalendar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 border-2 border-red-600"
        >
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-white font-bold">
                {new Date(match.date).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                })}
              </p>
              <p className="text-gray-400">{match.time} hs</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-4">
            FREESTYLERS vs {match.opponent}
          </h3>
          
          <a
            href={match.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            {platformIcons[match.platform as keyof typeof platformIcons]}
            <span>Ver en vivo</span>
          </a>
        </div>
      ))}
    </div>
  );
}