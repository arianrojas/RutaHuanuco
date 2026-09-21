import React, { useState } from 'react';
import { Store, MapPin, Star, MessageCircle, Phone, Award, ArrowLeft, Search, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MypesSection({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const mypes = [
    {
      id: 1,
      name: 'Textilería Tradicional Doña Isabel',
      artisan: 'Isabel Condor & Familia',
      category: 'artesanias',
      categoryLabel: 'Artesanía & Textiles',
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
      category: 'agro',
      categoryLabel: 'Gastronomía & Agro',
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
      category: 'artesanias',
      categoryLabel: 'Artesanía & Escultura',
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
      category: 'gastronomia',
      categoryLabel: 'Gastronomía Típica',
      location: 'Pillco Marca, Huánuco',
      rating: 4.9,
      reviews: 89,
      specialty: 'Pachamanca & Platos Típicos',
      desc: 'Cocina autóctona con insumos de la chacra a la mesa y la auténtica receta tradicional de la pachamanca.',
      image: '/images/gastronomia.jpg',
      badge: 'Gastronomía Típica',
      phone: '+51 912 345 678'
    },
    {
      id: 5,
      name: 'Asociación Tejedores de Tomayquichua',
      artisan: 'Rosa Malpartida',
      category: 'artesanias',
      categoryLabel: 'Artesanía & Textiles',
      location: 'Tomayquichua, Huánuco',
      rating: 4.7,
      reviews: 29,
      specialty: 'Bordados Tradicionales',
      desc: 'Elaboración artesanal de trajes tradicionales de Los Negritos de Huánuco y accesorios finamente bordados.',
      image: '/images/artesanias.jpg',
      badge: 'Patrimonio Vivo',
      phone: '+51 965 432 109'
    },
    {
      id: 6,
      name: 'Chocolatería Rupa Rupa Organic',
      artisan: 'Carlos Ruiz',
      category: 'agro',
      categoryLabel: 'Agroindustria Local',
      location: 'Leoncio Prado, Huánuco',
      rating: 4.9,
      reviews: 74,
      specialty: 'Chocolates al 70% Cacao',
      desc: 'Transformación artesanal de cacao criollo amazónico en barras de chocolate fino de aroma sin preservantes.',
      image: '/images/cafe.png',
      badge: 'Orgánico Certificado',
      phone: '+51 978 123 456'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos los Emprendimientos' },
    { id: 'artesanias', label: 'Artesanía & Textiles' },
    { id: 'gastronomia', label: 'Gastronomía Típica' },
    { id: 'agro', label: 'Agroindustria & Café' }
  ];

  const filteredMypes = mypes.filter(mype => {
    const matchesCategory = activeCategory === 'all' || mype.category === activeCategory;
    const matchesQuery = !searchQuery ||
      mype.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mype.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mype.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mype.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div id="mypes-page" className="min-h-screen bg-slate-50 pt-20 pb-20">

      {/* Top Banner Hero Header with heromype.png */}
      <div className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-slate-950 text-white shadow-2xl overflow-hidden mb-12">

        {/* Background Image & Multi-layer Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heromype.png"
            alt="Hero MYPES Huánuco"
            className="w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-emerald-950/50" />
          <div className="absolute inset-0 bg-emerald-950/30 mix-blend-overlay" />
        </div>

        {/* Decorative Topographic Overlay Pattern */}
        <div className="absolute inset-0 topographic-bg opacity-20 mix-blend-overlay z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">

          {/* Back button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 hover:bg-emerald-50 font-bold text-xs shadow-md border border-slate-200 hover:border-emerald-300 transition-all duration-200 group mb-6"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Title & Description Column */}
            <div className="lg:col-span-8 space-y-4">


              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
                Impulsa lo nuestro. <br className="hidden sm:inline" />
                Descubre <span className="text-amber-300 relative inline-block">
                  MYPES & Artesanos
                  <svg viewBox="0 0 100 20" className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 fill-none stroke-current stroke-[3]">
                    <path d="M 5 10 Q 50 18 95 8" />
                  </svg>
                </span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-md">
                Conecta directamente con productores, tejedores, caficultores y artesanos huanuqueños. Apoya la economía local sin intermediarios.
              </p>
            </div>

            {/* Quick Highlights Box - Clean Typography & Stats (Hidden on mobile) */}
            <div className="hidden md:block lg:col-span-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-amber-300 block tracking-tight">
                  100% Local
                </span>
                <span className="text-sm font-bold text-white block mt-1">
                  Artesanos y productores de la región
                </span>
                <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                  Preservando técnicas ancestrales e insumos autóctonos.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <span className="text-3xl sm:text-4xl font-black text-white block tracking-tight">
                  Trato Directo
                </span>
                <span className="text-sm font-bold text-emerald-200 block mt-1">
                  Sin comisiones ni intermediarios
                </span>
                <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                  Conexión directa vía WhatsApp con cada emprendedor.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, artesano o producto..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm font-medium outline-none transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Cards Grid */}
        {filteredMypes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-lg font-bold text-slate-700">No se encontraron MYPES para tu búsqueda.</p>
            <p className="text-xs text-slate-500 mt-1">Intenta seleccionar otra categoría o cambiar las palabras clave.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMypes.map((mype) => (
              <div
                key={mype.id}
                className="group flex flex-col justify-between bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <img
                      src={mype.image}
                      alt={mype.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-extrabold rounded-full shadow-md">
                      {mype.badge}
                    </span>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold shadow-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{mype.rating}</span>
                      <span className="text-slate-400 text-[10px]">({mype.reviews})</span>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                      {mype.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mype.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
                    {mype.name}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mb-3 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Representante: {mype.artisan}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {mype.desc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                    {mype.specialty}
                  </span>

                  <a
                    href={`https://wa.me/${mype.phone.replace(/[^0-9]/g, '')}?text=Hola,%20deseo%20informacion%20sobre%20${encodeURIComponent(mype.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all hover:scale-105 shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Contactar MYPES
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
