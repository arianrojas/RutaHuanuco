import React, { useState } from 'react';
import { X, Search, Star, Phone, CheckCircle, Lock, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DetailModal({ type, data, onClose }) {
  const [searchQuery, setSearchQuery] = useState(data?.searchQuery || '');
  const [authType, setAuthType] = useState(data?.authType || 'login');
  const [authSubmitted, setAuthSubmitted] = useState(false);

  // Mock list of registered MYPES & tourist spots in Huánuco
  const mockItems = [
    {
      id: 101,
      name: 'Textilería Tradicional Doña Isabel',
      category: 'artesanias',
      rating: 4.9,
      reviews: 48,
      location: 'Ambo, Huánuco',
      phone: '+51 987 654 321',
      desc: 'Maestra tejedora con más de 30 años preservando técnicas ancestrales de hilado y mantas 100% lana de ovino con tintes naturales de la región.',
      image: '/images/artisan.jpg',
      badge: 'Artesano Destacado'
    },
    {
      id: 102,
      name: 'Finca Café & Cacao Don Tomás',
      category: 'productos',
      rating: 5.0,
      reviews: 62,
      location: 'Tingo María, Huánuco',
      phone: '+51 954 888 999',
      desc: 'Productor galardonado de café de altura orgánico (1,800 msnm) y chocolates artesanales de cacao fino de aroma.',
      image: '/images/cafe.png',
      badge: 'Agroindustria Local'
    },
    {
      id: 103,
      name: 'Taller de Cerámica Arte Kotosh',
      category: 'artesanias',
      rating: 4.8,
      reviews: 35,
      location: 'Huánuco Ciudad',
      phone: '+51 999 111 222',
      desc: 'Réplicas culturales y tallados artesanales en piedra y cerámica de las Manos Cruzadas de Kotosh.',
      image: '/images/kotosh.png',
      badge: 'Identidad Cultural'
    },
    {
      id: 104,
      name: 'Recreo Campestre Tradición Huanuqueña',
      category: 'gastronomia',
      rating: 4.9,
      reviews: 89,
      location: 'Pillco Marca, Huánuco',
      phone: '+51 912 345 678',
      desc: 'Cocina autóctona campestre con insumos de la chacra a la mesa y la receta tradicional de la pachamanca huanuqueña.',
      image: '/images/gastronomia.jpg',
      badge: 'Gastronomía Típica'
    },
    {
      id: 1,
      name: 'Recreo Campestre El Bosque',
      category: 'gastronomia',
      rating: 4.9,
      reviews: 128,
      location: 'Tomayquichua, Huánuco',
      phone: '+51 962 345 678',
      desc: 'Especialidad en Pachamanca a la olla, Locro de Gallina y Cecina con Tacacho en un ambiente natural rodeado de eucaliptos.',
      image: '/images/gastronomia.jpg',
      badge: 'Destacado'
    },
    {
      id: 2,
      name: 'Artesanías Pillco Mozo',
      category: 'artesanias',
      rating: 4.8,
      reviews: 95,
      location: 'Jr. General Prado 452, Huánuco',
      phone: '+51 987 654 321',
      desc: 'Tejidos a mano en lana de alpaca, bordados tradicionales de los Negritos de Huánuco y tallados en madera.',
      image: '/images/artesanias.jpg',
      badge: 'Verificado'
    },
    {
      id: 3,
      name: 'Ruta al Templo de Kotosh',
      category: 'cultura',
      rating: 4.9,
      reviews: 310,
      location: 'A 5km de Huánuco',
      phone: '+51 999 111 222',
      desc: 'Visita guiada al Templo de las Manos Cruzadas, uno de los centros ceremoniales más antiguos de América.',
      image: '/images/kotosh.png',
      badge: 'Histórico'
    },
    {
      id: 6,
      name: 'Laguna de Lauricocha & Cañón',
      category: 'naturaleza',
      rating: 4.9,
      reviews: 160,
      location: 'Lauricocha, Huánuco',
      phone: '+51 977 444 333',
      desc: 'Origen del Río Amazonas y paisajes andinos sobrecogedores para amantes del ecoturismo.',
      image: '/images/lauricocha.png',
      badge: 'Naturaleza'
    }
  ];

  const filteredItems = mockItems.filter(item => {
    if (!searchQuery) return false;
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 max-h-[85vh] flex flex-col transition-all">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {type === 'auth' 
                  ? (authType === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta en Ruta HCO') 
                  : 'Buscador'}
              </h3>
              <p className="text-xs text-slate-400">
                {type === 'auth' 
                  ? 'Accede para guardar tu ruta y pasaporte' 
                  : 'Encuentra experiencias, lugares, MYPES y rutas en Huánuco'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {type === 'auth' ? (
          <div className="p-6 sm:p-8 overflow-y-auto">
            {authSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">¡Bienvenido a Consume Huánuco!</h4>
                <p className="text-slate-600 max-w-md mx-auto">
                  Tu cuenta ha sido activada con éxito. Ahora puedes guardar rutas favoritas y apoyar a emprendedores huanuqueños.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-2xl shadow-lg"
                >
                  Comenzar a explorar
                </button>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="max-w-md mx-auto space-y-5">
                {authType === 'register' && (
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nombre Completo</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ej. María Condor"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Contraseña</label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  {authType === 'login' ? 'Iniciar Sesión' : 'Crear mi Cuenta Gratis'}
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setAuthType(authType === 'login' ? 'register' : 'login')}
                    className="text-xs text-emerald-700 hover:underline font-semibold"
                  >
                    {authType === 'login' ? '¿No tienes cuenta? Regístrate aquí' : '¿Ya tienes cuenta? Inicia sesión'}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Pure Search Interface */
          <div className="p-5 flex flex-col flex-1 overflow-hidden bg-slate-50/50">

            {/* Input Bar */}
            <div className="mb-4 shrink-0">
              <div className="relative">
                <Search className="w-5 h-5 text-emerald-600 absolute left-4 top-3.5" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Escribe lo que buscas (ej. café, kotosh, pachamanca)..."
                  className="w-full pl-12 pr-10 py-3 rounded-2xl border border-slate-300 bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-base font-semibold text-slate-800 shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Results or Clean Empty Search State */}
            <div className="overflow-y-auto pr-1 space-y-3 flex-1">
              {!searchQuery.trim() ? (
                <div className="text-center py-12 px-4 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    Ingresa una palabra clave para buscar en Huánuco
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                    {['café', 'kotosh', 'pachamanca', 'artesanías', 'rutas'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 rounded-full bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-600 hover:text-emerald-700 text-xs font-semibold shadow-xs transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <p className="text-sm font-bold text-slate-700">Sin resultados para "{searchQuery}"</p>
                  <p className="text-xs text-slate-500">Prueba buscando "café", "pachamanca", "kotosh" o "artesanías".</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-500 px-1">
                    {filteredItems.length} resultado{filteredItems.length > 1 ? 's' : ''}:
                  </p>
                  {filteredItems.map(item => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col sm:flex-row gap-3.5 bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-28 h-24 object-cover rounded-xl shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">{item.desc}</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs mt-2">
                          <span className="flex items-center gap-1 font-bold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            {item.rating} ({item.reviews})
                          </span>
                          <a
                            href={`https://wa.me/?text=Hola%20deseo%20informacion%20de%20${encodeURIComponent(item.name)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 text-xs"
                          >
                            <Phone className="w-3 h-3" />
                            Contactar
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
