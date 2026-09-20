import React, { useState } from 'react';
import { X, Search, Star, MapPin, Phone, ExternalLink, Sparkles, CheckCircle, Heart, Lock, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DetailModal({ type, data, onClose, onSelectCategory }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState(data?.searchQuery || '');
  const [authType, setAuthType] = useState(data?.authType || 'login');
  const [authSubmitted, setAuthSubmitted] = useState(false);

  // Mock list of registered MYPES & tourist spots in Huánuco
  const mockItems = [
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
      id: 4,
      name: 'Café de Altura Huanucoqueño',
      category: 'productos',
      rating: 5.0,
      reviews: 215,
      location: 'Tingo María / Huánuco',
      phone: '+51 954 888 999',
      desc: 'Café orgánico especial de aroma intenso producido a más de 1,800 msnm por cooperativas locales.',
      image: '/images/cafe.png',
      badge: 'Orgánico'
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
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesQuery = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
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
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-emerald-900 to-teal-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-700/80 rounded-xl">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {type === 'auth' ? (authType === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta en Consume Huánuco') : 'Explora MYPES & Rutas en Huánuco'}
              </h3>
              <p className="text-xs text-emerald-200">
                {type === 'auth' ? 'Sé parte del crecimiento turístico local' : 'Conecta directamente con emprendedores de nuestra región'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
          /* Search & Filter Explorer Body */
          <div className="p-6 flex flex-col flex-1 overflow-hidden">

            {/* Search Input + Category Filter Pills */}
            <div className="space-y-4 mb-6 shrink-0">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar restaurantes, artesanos, hospedajes o lugares..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm font-medium"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'gastronomia', label: 'Gastronomía' },
                  { id: 'artesanias', label: 'Artesanías' },
                  { id: 'naturaleza', label: 'Naturaleza' },
                  { id: 'cultura', label: 'Cultura' },
                  { id: 'productos', label: 'Productos Locales' },
                  { id: 'aventura', label: 'Aventura' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${activeTab === tab.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Results Grid */}
            <div className="overflow-y-auto pr-2 space-y-4 flex-1">
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <p className="text-base font-semibold">No se encontraron resultados para tu búsqueda.</p>
                  <p className="text-xs mt-1">Prueba con otra categoría o término de búsqueda.</p>
                </div>
              ) : (
                filteredItems.map(item => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-36 h-32 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.desc}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                        <div className="flex items-center gap-3 text-slate-500">
                          <span className="flex items-center gap-1 font-bold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            {item.rating} ({item.reviews})
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {item.location}
                          </span>
                        </div>

                        <a
                          href={`https://wa.me/?text=Hola%20deseo%20informacion%20de%20${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Contactar MYPES
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
