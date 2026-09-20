import React from 'react';
import { Store, MapPin, Star, MessageCircle, Phone, Award, ArrowRight, Heart } from 'lucide-react';

export default function MypesSection({ onSelectMype }) {
  const mypes = [
    {
      id: 1,
      name: 'Textilería Tradicional Doña Isabel',
      artisan: 'Isabel Condor & Familia',
      category: 'Artesanía & Textiles',
      location: 'Ambo, Huánuco',
      rating: 4.9,
      reviews: 48,
      specialty: 'Textiles en Lana de Ovino',
      desc: 'Maestra tejedora con más de 30 años preservando técnicas ancestrales de hilado y tintes naturales de la región.',
      image: '/images/artisan.jpg',
      badge: 'Artesano Destacado',
      phone: '+51 987 654 321'
    },
    {
      id: 2,
      name: 'Finca Café & Cacao Don Tomás',
      artisan: 'Tomás Huamán',
      category: 'Gastronomía & Agro',
      location: 'Tingo María, Huánuco',
      rating: 5.0,
      reviews: 62,
      specialty: 'Café de Altura & Chocolatería',
      desc: 'Productor galardonado de café especial cultivado en selva alta a más de 1,600 msnm mediante procesos sostenibles.',
      image: '/images/cafe.png',
      badge: 'Agroindustria Local',
      phone: '+51 954 888 999'
    },
    {
      id: 3,
      name: 'Taller de Cerámica Arte Kotosh',
      artisan: 'Marco & Lucía Albornoz',
      category: 'Artesanía & Escultura',
      location: 'Huánuco Ciudad',
      rating: 4.8,
      reviews: 35,
      specialty: 'Réplicas Ancestrales',
      desc: 'Artesanos dedicados a la revalorización cultural de símbolos ancestrales huanuqueños en cerámica y piedra.',
      image: '/images/kotosh.png',
      badge: 'Identidad Cultural',
      phone: '+51 999 111 222'
    },
    {
      id: 4,
      name: 'Recreo Campestre Tradición Huanuqueña',
      artisan: 'Familia Mendoza',
      category: 'Gastronomía Típica',
      location: 'Pillco Marca, Huánuco',
      rating: 4.9,
      reviews: 89,
      specialty: 'Pachamanca & Platos Típicos',
      desc: 'Cocina autóctona con insumos de la chacra a la mesa y la auténtica receta tradicional de la pachamanca.',
      image: '/images/gastronomia.jpg',
      badge: 'Gastronomía Típica',
      phone: '+51 912 345 678'
    }
  ];

  return (
    <section id="mypes" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3">
              <Store className="w-3.5 h-3.5 text-emerald-700" />
              EMPRENDIMIENTO CON IDENTIDAD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              MYPES & <span className="text-emerald-700">Artesanos Locales</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Conoce las historias de pasión, tradición y excelencia detrás de los productores y artesanos que mueven nuestra economía regional.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <Award className="w-4 h-4 text-amber-500" />
              Productores 100% Huanuqueños
            </span>
          </div>
        </div>

        {/* Mypes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mypes.map((mype) => (
            <div
              key={mype.id}
              className="group flex flex-col justify-between bg-white rounded-3xl p-5 border border-slate-200/90 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={mype.image}
                    alt={mype.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-900 text-xs font-extrabold rounded-full shadow-md">
                    {mype.badge}
                  </span>

                  {/* Rating Pill */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-bold shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{mype.rating}</span>
                    <span className="text-slate-400 text-[10px]">({mype.reviews})</span>
                  </div>
                </div>

                {/* Artisan & Location info */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    {mype.category}
                  </span>
                  <div className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{mype.location}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
                  {mype.name}
                </h3>

                {/* Artisan Name */}
                <p className="text-xs font-semibold text-amber-700 mb-2">
                  Representante: {mype.artisan}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {mype.desc}
                </p>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {mype.specialty}
                </span>

                <a
                  href={`https://wa.me/${mype.phone.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20informacion%20sobre%20${encodeURIComponent(mype.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-sm hover:shadow-md flex items-center justify-center shrink-0"
                  title="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
