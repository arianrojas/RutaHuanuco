import React from 'react';
import { Compass, MapPin, ShoppingBag, Mountain, Target } from 'lucide-react';

export default function ImpactSection() {
  const pillars = [
    {
      icon: Compass,
      title: 'Descubre',
      desc: 'Conoce lugares, sabores, naturaleza y cultura de Huánuco.'
    },
    {
      icon: MapPin,
      title: 'Recorre',
      desc: 'Organiza rutas según tus intereses, tiempo y presupuesto.'
    },
    {
      icon: ShoppingBag,
      title: 'Consume local',
      desc: 'Conecta con MYPES y emprendimientos huanuqueños.'
    }
  ];

  return (
    <section id="impacto" className="relative py-20 bg-white overflow-hidden border-b border-slate-200">
      
      {/* Background Graphic Accent (Calicanto Bridge Illustration) */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none max-w-lg hidden lg:block">
        <svg viewBox="0 0 600 300" className="w-full h-auto fill-current text-slate-800">
          <path d="M 50 250 Q 150 150 250 250 Q 350 150 450 250 L 550 250 L 550 280 L 50 280 Z" />
          <path d="M 50 240 L 550 240" strokeWidth="8" stroke="currentColor" />
          <circle cx="150" cy="200" r="10" />
          <circle cx="350" cy="200" r="10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Container */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 mb-3">
              <Mountain className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                SOBRE EL PROYECTO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Sobre <span className="text-emerald-700">RUTA HCO</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-medium">
              RUTA HCO es una plataforma digital que busca conectar a los visitantes con los atractivos, experiencias y emprendimientos locales de Huánuco. Permite explorar lugares, gastronomía, cultura, naturaleza y MYPES locales desde un solo espacio.
            </p>
          </div>

          {/* Right Handwritten Badge */}
          <div className="lg:text-right shrink-0">
            <div className="inline-block transform rotate-2 hover:rotate-0 transition-transform bg-amber-50/80 p-4 rounded-2xl border border-amber-200 shadow-sm">
              <p className="font-handwriting text-3xl sm:text-4xl text-slate-800 font-bold leading-none">
                Huánuco <br />
                <span className="text-emerald-700">siempre sorprende</span>
              </p>
              <svg viewBox="0 0 160 16" className="w-full h-3 text-amber-400 fill-current mt-1">
                <path d="M 5 8 Q 80 2 155 12 L 150 15 Q 75 5 5 10 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="p-4 rounded-2xl bg-white text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm border border-slate-200">
                  <IconComp className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nuestro propósito Container */}
        <div className="flex flex-col sm:flex-row items-start gap-5 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group mb-12">
          <div className="p-4 rounded-2xl bg-white text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm border border-slate-200">
            <Target className="w-7 h-7 stroke-[2]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                NUESTRO PROPÓSITO
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
              Nuestro propósito
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              “Promover una forma de turismo que no solo permita conocer Huánuco, sino también apoyar a quienes producen, emprenden y mantienen viva su identidad local.”
            </p>
          </div>
        </div>

        {/* Final Phrase */}
        <div className="text-center pt-2">
          <p className="font-handwriting text-3xl sm:text-4xl text-emerald-700 font-bold tracking-wide drop-shadow-sm">
            “Huánuco no solo se visita. Se descubre, se recorre y se vive.”
          </p>
        </div>

      </div>
    </section>
  );
}
