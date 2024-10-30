import React, { useState } from 'react';
import { Calendar, Youtube, Twitch, Instagram, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from './components/Slider';
import MatchCalendar from './components/MatchCalendar';
import VideoCard from './components/VideoCard';
import ContactForm from './components/ContactForm';

function App() {
  const videos = [
    {
      id: '1',
      title: 'FREESTYLERS vs Los Magos - ¡Partido Épico!',
      views: '1.2M',
      thumbnail: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=500',
      youtubeUrl: 'https://youtube.com/watch?v=example1'
    },
    {
      id: '2',
      title: 'Top 10 Trucos - FREESTYLERS Edition',
      views: '890K',
      thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&q=80&w=500',
      youtubeUrl: 'https://youtube.com/watch?v=example2'
    },
    {
      id: '3',
      title: 'Street Soccer Challenge - FREESTYLERS',
      views: '750K',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500',
      youtubeUrl: 'https://youtube.com/watch?v=example3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Slider */}
      <Slider />

      {/* Social Media Bar */}
      <div className="bg-red-600 py-3">
        <div className="container mx-auto flex justify-center gap-8">
          <a href="https://twitch.tv/freestylersteam" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
            <Twitch className="w-5 h-5" />
            <span>Twitch</span>
          </a>
          <a href="https://youtube.com/freestylersteam" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
            <Youtube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
          <a href="https://instagram.com/freestylersteam" className="flex items-center gap-2 text-white hover:text-red-200 transition-colors">
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Upcoming Matches */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Próximos Partidos</h2>
        <MatchCalendar />
      </section>

      {/* Videos Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Últimos Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Contacto</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">FREESTYLERS</h3>
          <p className="mb-4">Llevando el Street Soccer al siguiente nivel</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-red-200 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-red-200 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;