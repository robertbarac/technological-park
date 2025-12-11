import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    name: 'CaribeDAO',
    category: 'DeFi / Governance',
    description: 'Plataforma de gobernanza descentralizada para la gestión de recursos naturales en la costa.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: '2',
    name: 'LogiPort',
    category: 'Logistics',
    description: 'Solución de IA para la optimización de contenedores en el puerto de Cartagena.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: '3',
    name: 'EcoToken',
    category: 'Green Tech',
    description: 'Mercado de bonos de carbono tokenizados en la red Polygon.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Nuestro Talento</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Startups que están construyendo el futuro
            </h2>
          </div>
          <button className="text-slate-900 font-medium hover:text-brand-600 flex items-center gap-2 group transition-colors">
            Ver todo el portafolio 
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-800">
                  Ver Proyecto <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;