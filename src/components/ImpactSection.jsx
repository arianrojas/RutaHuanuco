import React from 'react';
import { Compass, MapPin, ShoppingBag, Mountain, Target, ShieldCheck, Heart, Sparkles, TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  const pillars = [
    {
      icon: Compass,
      title: '1. Descubre lo Auténtico',
      desc: 'Accede a un catálogo vivo de atractivos naturales, centros arqueológicos milenarios como Kotosh y joyas culturales ocultas de Huánuco.'
    },
    {
      icon: MapPin,
      title: '2. Rutas a tu Medida',
      desc: 'Planifica itinerarios personalizados por clima, presupuesto e intereses, desde trekking andino hasta agroturismo en la selva alta.'
    },
    {
      icon: ShoppingBag,
      title: '3. Impacto Económico Directo',
      desc: 'Conecta sin intermediarios con artesanos, agricultores y gastronómicos locales. El 100% del beneficio va directo a las familias huanuqueñas.'
    }
  ];

  const valueProps = [
    {
      icon: ShieldCheck,
      title: 'Sin Comisiones ni Intermediarios',
      desc: 'Fomentamos un canal 100% directo vía WhatsApp. La tarifa negociada es íntegra para el emprendedor.'
    },
    {
      icon: TrendingUp,
      title: 'Descentralización & Empleo Local',
      desc: 'Impulsamos la economía en distritos y comunidades rurales, llevando oportunidades donde antes no llegaba la difusión.'
    },
    {
      icon: Heart,
      title: 'Preservación de la Identidad',
      desc: 'Revalorizamos el hilado tradicional, la cerámica ancestral y la gastronomía típica, asegurando que sigan vivas por generaciones.'
    }
  ];

  return (
    <section id="impacto" className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      
      {/* Topographic Background Graphic Accent */}
      <div className="absolute inset-0 topographic-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
              <Mountain className="w-3.5 h-3.5 text-emerald-700" />
              CONOCE EL PROYECTO
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transformando el turismo en <span className="text-emerald-700">oportunidad para Huánuco</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-slate-900">RUTA HCO / Consume Huánuco</strong> nace con una misión clara: democratizar la visibilidad del turismo y conectar directamente a los viajeros con la riqueza cultural, natural y humana de nuestra región.
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
                Iniciativa de Impacto Regional
              </div>
            </div>
          </div>
        </div>

        {/* Story & Problem-Solution Block */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/90 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
              ¿Por qué surge esta propuesta?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Una ventana digital para quienes producen con orgullo huanuqueño
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Huánuco posee una biodiversidad asombrosa —desde la selva alta de Tingo María hasta las alturas andinas de Lauricocha— y una herencia milenaria reflejada en sus tejedores, agricultores de café orgánico y maestros gastronómicos.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sin embargo, muchos emprendedores locales carecían de canales digitales para mostrar su talento al mundo. RUTA HCO elimina esa barrera reuniendo en un solo lugar la oferta turística y el comercio regional justo.
            </p>
          </div>

          {/* Quick Metrics / Differentiators Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h4 className="text-xl font-bold text-amber-300 border-b border-white/10 pb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Nuestra Promesa de Valor
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Contacto directo sin intermediarios</strong> Cada perfil enlaza al WhatsApp oficial del emprendedor.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Fomento del consumo responsable</strong> Promovemos productos locales orgánicos y hechos a mano.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p><strong className="text-white block">Acceso libre para la comunidad</strong> Registro sin costo para artesanos y microempresarios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps / Pillars Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Cómo funciona el modelo de impacto?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Un ciclo virtuoso donde ganan los viajeros, los productores y la región.
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

        {/* Final Convincing Quote & Banner Call to Action */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/30">
              UNÁMONOS AL CAMBIO
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              “Huánuco no solo se visita. Se descubre, se apoya y se vive.”
            </h3>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Cada elección de compra local transforma vidas de familias huanuqueñas y mantiene vivas nuestras tradiciones. Sé parte activa de este proyecto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
