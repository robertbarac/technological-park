import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana García',
    role: 'CEO',
    company: 'Fintech Caribe',
    quote: 'El ambiente aquí es inigualable. Hemos cerrado nuestra ronda semilla gracias a las conexiones que hicimos en la semana de networking.',
    avatarUrl: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'CTO',
    company: 'BlockLogistics',
    quote: 'La infraestructura es de clase mundial. Internet redundante y espacios que realmente inspiran a mi equipo de desarrollo.',
    avatarUrl: 'https://picsum.photos/100/100?random=11',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-600 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent-600 rounded-full blur-[128px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que dicen nuestros miembros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-slate-600 w-8 h-8 opacity-50" />
              <p className="text-slate-300 text-lg mb-8 relative z-10 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500" 
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-slate-400">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;