import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Briefcase, TrendingUp, MonitorCheck, Coffee } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: 'Coworking Premium',
    description: 'Espacios flexibles diseñados para la productividad, con zonas de silencio y salas de juntas equipadas.',
    icon: Briefcase,
  },
  {
    title: 'Networking Web3',
    description: 'Conecta con desarrolladores blockchain, inversores y visionarios tecnológicos en eventos semanales.',
    icon: Users,
  },
  {
    title: 'Infraestructura 5G',
    description: 'Conectividad simétrica de alta velocidad y redundancia para garantizar que tu operación nunca se detenga.',
    icon: Wifi,
  },
  {
    title: 'Acceso a Capital',
    description: 'Enlace directo con fondos de Venture Capital y ángeles inversionistas interesados en el Caribe.',
    icon: TrendingUp,
  },
  {
    title: 'Labs de Innovación',
    description: 'Acceso a hardware de última generación, impresoras 3D y servidores para pruebas de concepto.',
    icon: MonitorCheck,
  },
  {
    title: 'Lifestyle Balance',
    description: 'Áreas de descanso, cafetería de especialidad y zonas verdes para mantener el equilibrio mental.',
    icon: Coffee,
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué elegir nuestro Ecosistema?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Más que una oficina, somos un catalizador para tu crecimiento en la era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-slate-700 group-hover:text-brand-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;