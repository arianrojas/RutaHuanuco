import { Mountain, Heart, Mail, Phone, MapPin, Globe, Share2, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logo-transparent.png" 
                alt="Ruta HCO" 
                className="h-16 w-auto object-contain filter drop-shadow-lg"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Plataforma digital para la promoción del turismo sostenible, revalorización cultural y desarrollo de micro y pequeñas empresas (MYPES) en la región Huánuco.
            </p>

            <div className="flex items-center gap-3 text-emerald-400 font-handwriting text-2xl pt-2">
              <span>Descubre. Consume. Apoya.</span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Categorías</a></li>
              <li><a href="#banner-cta" className="hover:text-emerald-400 transition-colors">Rutas Turísticas</a></li>
              <li><a href="#banner-cta" className="hover:text-emerald-400 transition-colors">Directorio MYPES</a></li>
              <li><a href="#impacto" className="hover:text-emerald-400 transition-colors">Sobre el Proyecto</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Categorías</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Gastronomía Huanuqueña</a></li>
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Artesanías & Textiles</a></li>
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Ecoturismo & Naturaleza</a></li>
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Sitios Arqueológicos</a></li>
              <li><a href="#categorias" className="hover:text-emerald-400 transition-colors">Café & Cacao de Origen</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Plaza de Armas, Huánuco, Perú</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contacto@consumehuanuco.pe</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+51 (062) 512-345</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[Globe, Share2, MessageCircle, Send].map((SocialIcon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-800"
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Consume Huánuco. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Hecho con <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 inline" /> para el turismo y desarrollo de Huánuco
          </p>
        </div>

      </div>
    </footer>
  );
}
