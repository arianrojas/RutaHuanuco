import React from 'react';
import { Sprout, Users, Map, Heart } from 'lucide-react';

export default function FeatureBar() {
  const features = [
    {
      icon: Sprout,
      title: 'Impulsa la economía local',
      desc: 'Cada visita apoya a una familia emprendedora.'
    },
    {
      icon: Users,
      title: 'Vive experiencias auténticas',
      desc: 'Conecta con nuestra cultura, gastronomía y naturaleza.'
    },
    {
      icon: Map,
      title: 'Rutas hechas para ti',
      desc: 'Crea tu ruta ideal según tus intereses y tiempo.'
    },
    {
      icon: Heart,
      title: 'Deja una huella positiva',
      desc: 'Viaja de forma responsable y sostenible.'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-200 group"
              >
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0 border border-emerald-100 shadow-sm">
                  <IconComp className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
