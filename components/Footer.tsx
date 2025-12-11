import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Hexagon, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-slate-900 z-0"></div>
             <div className="absolute right-0 top-0 w-64 h-64 bg-accent-500 blur-[100px] opacity-20"></div>
             
             <div className="relative z-10 text-center md:text-left">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">¿Listo para innovar?</h2>
                 <p className="text-slate-300">Únete al parque tecnológico hoy y escala tu proyecto.</p>
             </div>
             <div className="relative z-10">
                 <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg">
                     Aplicar Ahora
                 </button>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-brand-600 fill-slate-200" />
              <span className="font-bold text-lg text-slate-900">Cartagena<span className="text-brand-600">Tech</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              El epicentro de la innovación y tecnología Web3 en el Caribe colombiano. Transformando ideas en realidades escalables.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Plataforma</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Proyectos</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-600 shrink-0 mt-0.5" />
                <span>Anillo Vial, Zona Norte<br/>Cartagena, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-600 shrink-0" />
                <span>contacto@cartagenatech.co</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-600 shrink-0" />
                <span>+57 (605) 123 4567</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
           <div>
            <h3 className="font-bold text-slate-900 mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Parque Tecnológico Cartagena. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-slate-500 font-medium">Sistemas Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;