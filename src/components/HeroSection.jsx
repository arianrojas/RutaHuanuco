import React, { useState } from 'react';
import { Search, Utensils, ShoppingBag, Leaf, Landmark, MapPin, Sparkles } from 'lucide-react';

export default function HeroSection({ onSearch, onSelectCategory }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const quickFilters = [
    { id: 'gastronomia', label: 'Gastronomía', icon: Utensils },
    { id: 'mypes', label: 'MYPES locales', icon: ShoppingBag },
    { id: 'naturaleza', label: 'Naturaleza', icon: Leaf },
    { id: 'cultura', label: 'Cultura', icon: Landmark },
    { id: 'rutas', label: 'Rutas turísticas', icon: MapPin },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-16 sm:pt-20 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Hero Image & Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Plaza de Armas de Huánuco"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-subtle"
        />
        {/* Multi-layer Dark Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/40" />
        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />
      </div>

      {/* Decorative Handwritten Slogan (Top Left Callout) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-1 sm:pt-2">
        <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="font-handwriting text-base sm:text-2xl text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
            Más que un viaje, una conexión real con nuestra tierra
          </div>
          <svg viewBox="0 0 200 20" className="w-28 sm:w-36 h-2.5 sm:h-3 text-amber-400 stroke-current fill-none -mt-0.5">
            <path d="M5 12 Q 100 2, 195 14" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Hero Center Main Content (Positioned higher on mobile) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto py-0 sm:py-2 -mt-10 sm:mt-0">

        {/* Main Heading */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 drop-shadow-xl">
          Descubre <span className="relative inline-block text-white">
            Huánuco
            {/* Hand-drawn yellow accent curve mark above/beside title */}
            <svg viewBox="0 0 100 40" className="absolute -top-3 -right-8 w-10 h-10 text-amber-400 fill-none stroke-current stroke-[3] hidden sm:block">
              <path d="M 10 30 Q 30 10 50 20 T 90 10" />
              <path d="M 80 5 L 90 10 L 85 20" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-100 font-medium max-w-2xl mx-auto mb-4 sm:mb-5 drop-shadow-md">
          Paisajes que inspiran, sabores que enamoran, comunidades que hacen la diferencia.
        </p>

        {/* Main Search Bar (Hidden on Mobile) */}
        <form
          onSubmit={handleSubmit}
          className="hidden sm:flex relative max-w-2xl mx-auto mb-6 bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl sm:rounded-full shadow-2xl flex-col sm:flex-row items-center gap-2 border border-white/50"
        >
          <div className="flex items-center gap-3 pl-4 pr-2 w-full py-1">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="¿Qué te gustaría descubrir en Huánuco?"
              className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 text-base focus:outline-none font-medium"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl sm:rounded-full transition-all duration-200 shadow-md hover:shadow-emerald-900/30 shrink-0 flex items-center justify-center gap-2"
          >
            Buscar
          </button>
        </form>

        {/* Quick Category Pill Cards (5 in a single row on mobile) */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2 max-w-3xl mx-auto w-full">
          {quickFilters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => onSelectCategory && onSelectCategory(filter.id)}
                className="group flex flex-col items-center justify-center p-1 sm:p-2.5 rounded-xl bg-slate-200/30 hover:bg-slate-100/50 backdrop-blur-md border border-white/40 hover:border-emerald-500/60 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl w-full"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-100/90 group-hover:bg-emerald-800 flex items-center justify-center text-emerald-900 group-hover:text-white mb-0.5 sm:mb-1 transition-colors shadow-sm shrink-0">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 group-hover:text-emerald-950 tracking-tight text-center leading-tight truncate w-full">
                  {filter.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Row - Location Tag & Slogan */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">

        {/* Location Tag */}
        <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-white shadow-xl">

          <div className="text-left">

          </div>
        </div>

        {/* Bottom Right Handwritten Slogan */}
        <div className="text-center sm:text-right hidden sm:block">
          <p className="font-handwriting text-xl sm:text-2xl text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight transform rotate-1">
            Consume local. Haz grande Huánuco.
          </p>
        </div>
      </div>

    </section>
  );
}
