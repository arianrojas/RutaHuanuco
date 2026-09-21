import React, { useState } from 'react';
import { 
  ArrowLeft, Award, Check, Lock, QrCode, Sparkles, MapPin, 
  Gift, Trophy, Bookmark, Coffee, Landmark, Utensils, Mountain, ShoppingBag, ChevronRight
} from 'lucide-react';

export default function PasaporteSection({ onBackToHome, onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('sellos'); // 'sellos' | 'logros' | 'recompensas'
  const [selectedStamp, setSelectedStamp] = useState(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [scannedSuccess, setScannedSuccess] = useState(false);

  const stamps = [
    {
      id: 1,
      title: 'Templo de Kotosh',
      category: 'Arqueología & Cultura',
      unlocked: true,
      date: '12 de Septiembre, 2026',
      image: '/images/kotosh.png',
      desc: 'Visitaste el histórico Templo de las Manos Cruzadas, cuna de la civilización en Huánuco.',
      icon: Landmark
    },
    {
      id: 2,
      title: 'Ruta del Café Huanuqueño',
      category: 'Gastronomía & Agro',
      unlocked: true,
      date: '15 de Septiembre, 2026',
      image: '/images/cafe.png',
      desc: 'Degustaste café de especialidad orgánico cultivado en las laderas de la selva alta.',
      icon: Coffee
    },
    {
      id: 3,
      title: 'Gastronomía Tradicional',
      category: 'Sabores Locales',
      unlocked: true,
      date: '18 de Septiembre, 2026',
      image: '/images/gastronomia.jpg',
      desc: 'Probaste la auténtica Pachamanca huanuqueña de 3 carnes en un restaurante local.',
      icon: Utensils
    },
    {
      id: 4,
      title: 'Mirador Pillco Mozo',
      category: 'Naturaleza & Paisaje',
      unlocked: true,
      date: '20 de Septiembre, 2026',
      image: '/images/naturaleza.jpg',
      desc: 'Completaste la caminata hacia la legendaria figura de piedra que custodia la ciudad.',
      icon: Mountain
    },
    {
      id: 5,
      title: 'Artesanías & Hilado',
      category: 'Tradición Textil',
      unlocked: false,
      date: 'Pendiente de visita',
      image: '/images/artesanias.jpg',
      desc: 'Visita un taller artesanal huanuqueño y escanea el código QR del artesano para desbloquear.',
      icon: ShoppingBag
    },
    {
      id: 6,
      title: 'Productos de la Región',
      category: 'Comercio Directo',
      unlocked: false,
      date: 'Pendiente de visita',
      image: '/images/productos.png',
      desc: 'Compra directamente a productores y emprendedores locales en la feria o mercado regional.',
      icon: ShoppingBag
    },
    {
      id: 7,
      title: 'Aventura Huanuqueña',
      category: 'Ruta Ecoturística',
      unlocked: false,
      date: 'Pendiente de visita',
      image: '/images/aventura.png',
      desc: 'Completa un recorrido de trekking o ecoturismo guiado por la selva o sierra huanuqueña.',
      icon: Mountain
    },
    {
      id: 8,
      title: 'Embajador de Huánuco',
      category: 'Logro Máximo',
      unlocked: false,
      date: 'Pendiente de visita',
      image: '/images/hero.jpg',
      desc: 'Recompensa final otorgada al recolectar los 7 sellos anteriores.',
      icon: Award
    }
  ];

  const logros = [
    {
      title: 'Primeros Pasos',
      desc: 'Desbloqueaste tu primer sello en Huánuco.',
      icon: Sparkles,
      completed: true
    },
    {
      title: 'Amante del Café',
      desc: 'Visitaste un emprendimiento cafetalero huanuqueño.',
      icon: Coffee,
      completed: true
    },
    {
      title: 'Comprador Local',
      desc: 'Apoyaste a 3 Mypes locales directamente.',
      icon: ShoppingBag,
      completed: false
    },
    {
      title: 'Explorador Andino',
      desc: 'Completaste 3 rutas turísticas en la región.',
      icon: Mountain,
      completed: false
    }
  ];

  const recompensas = [
    {
      title: '15% de descuento en Café Orgánico',
      mype: 'Cafetería Selva Alta',
      code: 'RUTA-CAFE-15',
      image: '/images/cafe.png',
      available: true
    },
    {
      title: 'Souvenir Artesanal de Regalo',
      mype: 'Taller Tejedores Pillco',
      code: 'RUTA-ARTESANIA-2026',
      image: '/images/artesanias.jpg',
      available: true
    },
    {
      title: 'Postre Huanuqueño Gratis',
      mype: 'Restaurante Tradiciones Huanuqueñas',
      code: 'RUTA-POSTRE-FREE',
      image: '/images/gastronomia.jpg',
      available: false
    }
  ];

  const unlockedCount = stamps.filter(s => s.unlocked).length;
  const progressPercent = Math.round((unlockedCount / stamps.length) * 100);

  const handleSimulateScan = () => {
    setScannedSuccess(true);
    setTimeout(() => {
      setScannedSuccess(false);
      setQrModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Back Button & Top Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </button>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            Pasaporte Digital
          </span>
        </div>

        {/* MAIN PASAPORTE CARD CONTAINER (Styled matching the photo mockup) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 max-w-md mx-auto sm:max-w-xl transition-all text-left">

          {/* Header Title with Passport Icon */}
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <Award className="w-7 h-7 text-emerald-700" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                Mi Pasaporte Huánuco
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Explora, consume y acumula sellos en tu recorrido.
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="mt-6 mb-7 bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700">
              <span>{unlockedCount} de {stamps.length} sellos</span>
              <span className="text-emerald-700 font-extrabold">{progressPercent}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-700 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
          </div>

          {/* Navigation Tabs (Sellos | Logros | Recompensas) */}
          <div className="flex items-center justify-between border-b border-slate-200 mb-6 text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab('sellos')}
              className={`pb-3 px-3 relative transition-colors ${
                activeTab === 'sellos' 
                  ? 'text-emerald-700 font-extrabold' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Sellos
              {activeTab === 'sellos' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('logros')}
              className={`pb-3 px-3 relative transition-colors ${
                activeTab === 'logros' 
                  ? 'text-emerald-700 font-extrabold' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Logros
              {activeTab === 'logros' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('recompensas')}
              className={`pb-3 px-3 relative transition-colors ${
                activeTab === 'recompensas' 
                  ? 'text-emerald-700 font-extrabold' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Recompensas
              {activeTab === 'recompensas' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
              )}
            </button>
          </div>

          {/* TAB 1: SELLOS GRID WITH REFERENTIAL IMAGES */}
          {activeTab === 'sellos' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stamps.map((stamp) => {
                  const IconComponent = stamp.icon;
                  return (
                    <button
                      key={stamp.id}
                      onClick={() => setSelectedStamp(stamp)}
                      className={`relative flex flex-col items-center justify-between p-3 rounded-2xl border transition-all text-center group ${
                        stamp.unlocked
                          ? 'bg-emerald-50/80 hover:bg-emerald-100/80 border-emerald-300 shadow-sm'
                          : 'bg-slate-100/70 hover:bg-slate-100 border-slate-200 opacity-75'
                      }`}
                    >
                      {/* Stamp Image Thumbnail with Badge Overlay */}
                      <div className="relative w-full h-16 sm:h-20 rounded-xl overflow-hidden mb-2 shadow-inner">
                        <img
                          src={stamp.image}
                          alt={stamp.title}
                          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                            !stamp.unlocked && 'grayscale brightness-75'
                          }`}
                        />
                        <div className="absolute inset-0 bg-slate-950/20" />
                        
                        {/* Lock / Check Icon overlay badge */}
                        <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md text-xs font-bold ${
                          stamp.unlocked ? 'bg-emerald-600' : 'bg-slate-700/80'
                        }">
                          {stamp.unlocked ? <Check className="w-3.5 h-3.5 text-white" /> : <Lock className="w-3 h-3 text-slate-300" />}
                        </div>
                      </div>

                      <span className="text-xs font-extrabold text-slate-900 leading-tight truncate w-full">
                        {stamp.title}
                      </span>
                      <span className={`text-[10px] font-bold mt-0.5 ${stamp.unlocked ? 'text-emerald-700' : 'text-slate-400'}`}>
                        {stamp.unlocked ? 'Obtenido ✓' : 'Bloqueado'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Action Button: Scan QR code */}
              <button
                onClick={() => setQrModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full font-bold text-sm sm:text-base bg-[#0d4738] hover:bg-[#083328] text-white transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <QrCode className="w-5 h-5 text-amber-300" />
                <span>Escanear código QR en lugar</span>
              </button>
            </div>
          )}

          {/* TAB 2: LOGROS */}
          {activeTab === 'logros' && (
            <div className="space-y-3">
              {logros.map((logro, idx) => {
                const IconComp = logro.icon;
                return (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all ${
                      logro.completed ? 'bg-emerald-50/70 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-70'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      logro.completed ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-400'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-extrabold text-slate-900">{logro.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{logro.desc}</p>
                    </div>
                    {logro.completed && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                        ¡Completado!
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: RECOMPENSAS */}
          {activeTab === 'recompensas' && (
            <div className="space-y-4">
              {recompensas.map((rec, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80">
                  <img src={rec.image} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-extrabold uppercase text-emerald-700 tracking-wider block">
                      {rec.mype}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900 truncate">
                      {rec.title}
                    </h4>
                    <span className="inline-block text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 mt-1">
                      {rec.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* STAMP DETAIL MODAL */}
        {selectedStamp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 text-left space-y-4">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
                <img src={selectedStamp.image} alt={selectedStamp.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  {selectedStamp.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedStamp.title}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">{selectedStamp.date}</p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{selectedStamp.desc}</p>
              </div>

              <button
                onClick={() => setSelectedStamp(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* QR SCANNER SIMULATOR MODAL */}
        {qrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Escanear Sello en Lugar</h3>
              <p className="text-xs text-slate-500">
                Apunta la cámara al código QR ubicado en el establecimiento o atractivo turístico de Huánuco.
              </p>

              {scannedSuccess ? (
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-extrabold animate-bounce">
                  ¡Sello validado correctamente! Sello añadido a tu pasaporte.
                </div>
              ) : (
                <button
                  onClick={handleSimulateScan}
                  className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all"
                >
                  Simular Escaneo QR
                </button>
              )}

              <button
                onClick={() => setQrModalOpen(false)}
                className="w-full py-2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
