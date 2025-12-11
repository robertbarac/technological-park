import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-200/40 rounded-full blur-[100px]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              Hub de Innovación Web3
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Innovación tecnológica en el corazón del <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Caribe.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Impulsa tu startup en un ecosistema diseñado para el crecimiento. 
              Conecta con fondos de inversión, talento global y la infraestructura Web3 
              más avanzada de Cartagena.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Descubre los Beneficios <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Ver Ubicación
              </button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/3] group">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Parque Tecnológico Cartagena" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Cards simulating Web3/Tech elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 glass-card p-4 rounded-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Conectividad Global</p>
                    <p className="text-sm font-bold text-slate-800">100+ Startups</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-6 right-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent-100 rounded-lg text-accent-600">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Latencia Reducida</p>
                    <p className="text-sm font-bold text-slate-800">5G Ready</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;