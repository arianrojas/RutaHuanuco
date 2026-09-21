import React from 'react';
import { Store, Route, Users, ArrowRight, Heart } from 'lucide-react';

export default function BannerCTA({ onExploreNow }) {
  return (
    <section id="banner-cta" className="relative py-16 sm:py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Gradient & Micro-Dotted Pattern (Dark Slate/Obsidian & Amber) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 z-0" />
      <div className="absolute inset-0 topographic-bg opacity-15 pointer-events-none z-0" />
      
      {/* Soft Ambient Radial Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Local Artisan Woman Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 max-w-sm sm:max-w-md group">
              <img
                src="/images/artisan.jpg"
                alt="Gente increíble, historias reales"
                className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Handwritten Callout Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-center">
                <p className="font-handwriting text-2xl text-amber-300 drop-shadow-md flex items-center justify-center gap-2">
                  Gente increíble, historias reales
                  <Heart className="w-5 h-5 fill-amber-300 text-amber-300 inline animate-bounce" />
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Title & CTA */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-400/15 px-3.5 py-1 rounded-full border border-amber-400/30">
              CONSUME HUÁNUCO
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Viaja. Descubre. <span className="text-amber-400">Apoya.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Sé parte de un turismo que genera oportunidades y mantiene viva la esencia de nuestra región.
            </p>

            <button
              onClick={onExploreNow}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-2xl text-base shadow-xl hover:shadow-amber-400/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              Explora ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column: Statistics List (Dark Slate & Warm Gold accents) */}
          <div className="lg:col-span-3 space-y-6 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
            
            {/* Stat Item 1 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30 shadow-lg group-hover:scale-105 transition-transform">
                <Store className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block tracking-tight">
                  +250
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  MYPES registradas
                </span>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Stat Item 2 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30 shadow-lg group-hover:scale-105 transition-transform">
                <Route className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block tracking-tight">
                  +50
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  Rutas turísticas
                </span>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Stat Item 3 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30 shadow-lg group-hover:scale-105 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block tracking-tight">
                  +5,000
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  Viajeros ya han explorado
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
