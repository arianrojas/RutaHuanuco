import React from 'react';
import { Utensils, ShoppingBag, Leaf, Landmark, Coffee, Compass, ArrowRight } from 'lucide-react';

export default function CategoryExplorer({ onSelectCategory, onOpenAllCategories }) {
  const categories = [
    {
      id: 'gastronomia',
      title: 'Gastronomía',
      desc: 'Sabores que cuentan nuestra historia',
      image: '/images/gastronomia.jpg',
      icon: Utensils,
      badge: 'Popular',
      color: 'from-amber-500/20 to-orange-500/10'
    },
    {
      id: 'artesanias',
      title: 'Artesanías',
      desc: 'Manos que mantienen viva la tradición',
      image: '/images/artesanias.jpg',
      icon: ShoppingBag,
      badge: 'Tradición',
      color: 'from-pink-500/20 to-rose-500/10'
    },
    {
      id: 'naturaleza',
      title: 'Naturaleza',
      desc: 'Paisajes que te inspiran',
      image: '/images/naturaleza.jpg',
      icon: Leaf,
      badge: 'Ecoturismo',
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      id: 'cultura',
      title: 'Cultura',
      desc: 'Historia que sigue viva',
      image: '/images/cultura.png',
      icon: Landmark,
      badge: 'Patrimonio',
      color: 'from-amber-700/20 to-yellow-600/10'
    },
    {
      id: 'productos',
      title: 'Productos locales',
      desc: 'Calidad con identidad',
      image: '/images/productos.png',
      icon: Coffee,
      badge: 'Orgánico',
      color: 'from-yellow-700/20 to-amber-600/10'
    },
    {
      id: 'aventura',
      title: 'Aventura',
      desc: 'Vive la emoción',
      image: '/images/aventura.png',
      icon: Compass,
      badge: 'Outdoor',
      color: 'from-blue-500/20 to-cyan-500/10'
    }
  ];

  return (
    <section id="categorias" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              EXPLORA POR CATEGORÍAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Un Huánuco para <span className="text-emerald-700">todos los gustos</span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-base mt-2">
              Descubre lo mejor de nuestra región y encuentra experiencias que te conectan con su gente, su historia y sus sabores.
            </p>
          </div>
          <button
            onClick={onOpenAllCategories}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group shrink-0"
          >
            Ver todas las categorías
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-slate-200/80 flex flex-col"
              >
                {/* Card Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold rounded-full shadow-md">
                    {cat.badge}
                  </span>
                </div>

                {/* Card Info Bottom Content */}
                <div className="p-6 flex items-start gap-4 bg-white flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shadow-sm border border-emerald-100">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
