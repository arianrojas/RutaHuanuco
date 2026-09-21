import React from 'react';
import { Compass, MapPin, ShoppingBag, Mountain, ShieldCheck, Heart, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';

export default function ImpactSection() {
  const pillars = [
    {
      icon: Compass,
      title: '1. Descubre lo Auténtico',
      desc: 'Explora lugares únicos, desde maravillas naturales hasta centros arqueológicos milenarios como Kotosh y rincones por descubrir.'
    },
    {
      icon: MapPin,
      title: '2. Rutas a tu Ritmo',
      desc: 'Encuentra y arma itinerarios según tu tiempo y presupuesto: caminatas, rutas del café, gastronomía y paseos en familia.'
    },
    {
      icon: ShoppingBag,
      title: '3. Apoyo Directo a la Economía Local',
      desc: 'Conéctate sin intermediarios con artesanos, agricultores y productores huanuqueños. Tu consumo beneficia directamente a sus familias.'
    }
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: 'Trato Directo y Transparente',
      desc: 'Te comunicas directo vía WhatsApp con cada emprendedor. Sin cobros de comisión ni costos ocultos.'
    },
    {
      icon: TrendingUp,
      title: 'Impulso a Emprendedores',
      desc: 'Damos visibilidad a MYPES de distritos y comunidades rurales, llevando oportunidades a donde antes no llegaba la difusión.'
    },
    {
      icon: Heart,
      title: 'Orgullo e Identidad Local',
      desc: 'Valoramos el telar tradicional, los cultivos orgánicos y los sabores autóctonos para que nuestras costumbres sigan vivas.'
    }
  ];

  return (
    <section id="impacto" className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
              <Mountain className="w-3.5 h-3.5 text-emerald-700" />
              EL PROYECTO
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Un puente entre viajeros y el <span className="text-emerald-700">talento de Huánuco</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-slate-900">RUTA HCO</strong> es una iniciativa creada para visibilizar lo mejor de nuestra tierra: su gente, sus paisajes y sus emprendimientos.
            </p>
          </div>

          {/* Right Badge Callout */}
          <div className="lg:text-right shrink-0">
            <div className="inline-block transform rotate-1 hover:rotate-0 transition-transform bg-amber-100/90 p-5 rounded-3xl border border-amber-300 shadow-md">
              <p className="font-handwriting text-3xl sm:text-4xl text-slate-900 font-bold leading-none">
                Huánuco <br />
                <span className="text-emerald-800">se vive y se apoya</span>
              </p>
              <div className="mt-2 text-xs font-extrabold text-emerald-900 uppercase tracking-wider flex items-center justify-center lg:justify-end gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Iniciativa Regional
              </div>
            </div>
          </div>
        </div>

        {/* Story & Purpose Block */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/90 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
              ¿Por qué nace este proyecto?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Conectar a nuestra gente con nuevas oportunidades
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Huánuco tiene una diversidad única: desde el café de la selva alta en Tingo María hasta la tradición textil y artesanal de nuestras comunidades andinas. Sin embargo, muchos productores y emprendedores locales no contaban con un espacio digital accesible para dar a conocer su trabajo.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Por eso creamos RUTA HCO: un punto de encuentro sencillo y directo para que visitantes y vecinos puedan descubrir experiencias reales, contactar a los creadores y apoyar el comercio local.
            </p>
          </div>

          {/* Commitment Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h4 className="text-xl font-bold text-amber-300 border-b border-white/10 pb-3 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5" />
              Nuestro Compromiso
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Contacto 100% directo</strong> Te comunicas directamente por WhatsApp con el emprendedor.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Valor a lo hecho a mano</strong> Impulsamos productos locales, artesanías y gastronomía de la región.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Plataforma abierta</strong> Registro sin costos ni comisiones para los emprendedores locales.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps / Pillars Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Cómo aporta al turismo local?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Una forma más cercana de viajar, donde cada visita deja un impacto positivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 flex items-center justify-center border border-emerald-100 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {valueProps.map((prop, idx) => {
            const IconComp = prop.icon;
            return (
              <div key={idx} className="bg-slate-100/80 p-6 rounded-3xl border border-slate-200/90 flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-emerald-700">
                  <IconComp className="w-6 h-6" />
                  <h4 className="text-base font-extrabold text-slate-900">{prop.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Convincing Quote (Without container box, in italics) */}
        <div className="max-w-3xl mx-auto text-center py-6 sm:py-8 space-y-3">
          <p className="italic text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight">
            “Huánuco no solo se visita. Se descubre, se apoya y se vive.”
          </p>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Cada elección de compra local apoya a familias huanuqueñas y mantiene viva nuestra cultura.
          </p>
        </div>

      </div>
    </section>
  );
}
