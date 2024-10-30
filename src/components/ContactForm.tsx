import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-red-500 focus:outline-none transition-colors resize-none"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group"
        >
          <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          <span>Enviar Mensaje</span>
        </button>
      </form>
    </div>
  );
}