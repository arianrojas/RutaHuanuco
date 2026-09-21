import React, { useState } from 'react';
import { 
  ArrowLeft, Clock, Banknote, Heart, MapPin, Check, Bookmark, 
  Share2, Sparkles, Compass, ChevronRight, Utensils, Coffee, Landmark, ShoppingBag, ShieldCheck
} from 'lucide-react';

export default function ExplorarSection({ onBackToHome, onOpenAuth }) {
  const [selectedRouteId, setSelectedRouteId] = useState('recomendada');
  const [isSaved, setIsSaved] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const routes = [
    {
      id: 'recomendada',
      name: 'Tu ruta recomendada',
      subtitle: 'Hemos diseñado una experiencia única para ti en Huánuco.',
      duration: '5 horas',
      price: 'S/ 100',
      categories: 'Gastronomía & Cultura',
      image: '/images/hero.jpg',
      stops: [
        {
          num: 1,
          title: 'Café Huanuqueño',
          tag: 'Desayuno',
          time: '8:00 - 9:00',
          desc: 'Degustación de café orgánico de la selva alta con pan de agua regional.',
          image: '/images/cafe.png'
        },
        {
          num: 2,
          title: 'Plaza de Armas',
          tag: 'Visita cultural',
          time: '9:30 - 10:30',
          desc: 'Recorrido por la pileta histórica esculpida en piedra de granito.',
          image: '/images/kotosh.png'
        },
        {
          num: 3,
          title: 'Almuerzo local',
          tag: 'Gastronomía',
          time: '12:00 - 13:30',
          desc: 'Disfruta de la tradicional Pachamanca huanuqueña o Locro de gallina.',
          image: '/images/gastronomia.jpg'
        },
        {
          num: 4,
          title: 'Artesanías y productos',
          tag: 'Compras',
          time: '14:00 - 16:00',
          desc: 'Visita a talleres locales de tejedores y maestros artesanos.',
          image: '/images/artesanias.jpg'
        }
      ]
    },
    {
      id: 'gastronomica',
      name: 'Ruta Gastronómica & Café',
      subtitle: 'Sabores autóctonos y la tradición cafetalera huanuqueña.',
      duration: '3.5 horas',
      price: 'S/ 65',
      categories: 'Gastronomía & Tradición',
      image: '/images/gastronomia.jpg',
      stops: [
        {
          num: 1,
          title: 'Barismo y Selección de Grano',
          tag: 'Cata de café',
          time: '9:00 - 10:00',
          desc: 'Demostración de tostado y métodos de extracción artesanal.',
          image: '/images/cafe.png'
        },
        {
          num: 2,
          title: 'Mercado Central de Huánuco',
          tag: 'Recorrido culinario',
          time: '10:30 - 11:30',
          desc: 'Degustación de frutas nativas, plátano bizcocho y quesos regionales.',
          image: '/images/productos.png'
        },
        {
          num: 3,
          title: 'Restaurante Típico Regional',
          tag: 'Almuerzo tradicional',
          time: '12:00 - 13:30',
          desc: 'Picante de Cuy o Majadillo con refresco de camu camu.',
          image: '/images/gastronomia.jpg'
        }
      ]
    },
    {
      id: 'naturaleza',
      name: 'Ruta de Naturaleza & Paisajes',
      subtitle: 'Exploración al aire libre, miradores y biodiversidad.',
      duration: '6 horas',
      price: 'S/ 120',
      categories: 'Naturaleza & Aventura',
      image: '/images/naturaleza.jpg',
      stops: [
        {
          num: 1,
          title: 'Mirador Pillco Mozo',
          tag: 'Fotografía & Paisajes',
          time: '8:30 - 10:00',
          desc: 'Caminata suave hasta la enigmática figura de piedra en el cerro Marabamba.',
          image: '/images/naturaleza.jpg'
        },
        {
          num: 2,
          title: 'Campos de Agroturismo',
          tag: 'Experiencia viva',
          time: '10:30 - 12:30',
          desc: 'Cosecha guiada e interacción con agricultores locales.',
          image: '/images/productos.png'
        },
        {
          num: 3,
          title: 'Almuerzo Campestre',
          tag: 'Al aire libre',
          time: '13:00 - 14:30',
          desc: 'Degustación de trucha fresca a la parrilla junto al río.',
          image: '/images/gastronomia.jpg'
        }
      ]
    }
  ];

  const currentRoute = routes.find(r => r.id === selectedRouteId) || routes[0];

  const handleSaveRoute = () => {
    setIsSaved(true);
    setSavedMessage('¡Ruta guardada con éxito en tu dispositivo!');
    setTimeout(() => {
      setSavedMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Back Button & Top Bar Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Explorar Rutas
          </span>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {routes.map((r) => (
            <button
              key={r.id}
              onClick={() => { setSelectedRouteId(r.id); setIsSaved(false); }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedRouteId === r.id
                  ? 'bg-[#0d4738] text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* MAIN MOCKUP CARD CONTAINER - Styled directly after the user's image */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 max-w-md mx-auto sm:max-w-xl transition-all">

          {/* Header Title */}
          <div className="text-left mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentRoute.name}
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
              {currentRoute.subtitle}
            </p>
          </div>

          {/* Featured Hero Banner Image */}
          <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-4 shadow-md">
            <img
              src={currentRoute.image}
              alt={currentRoute.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Stat Metrics Row: Clock, Price, Category (Matching the exact design of the image) */}
          <div className="flex items-center justify-around py-3 px-2 mb-6 bg-slate-50/80 rounded-2xl border border-slate-100 text-slate-700 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>{currentRoute.duration}</span>
            </div>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-emerald-700" />
              <span>{currentRoute.price}</span>
            </div>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-emerald-700" />
              <span className="truncate max-w-[120px]">{currentRoute.categories}</span>
            </div>
          </div>

          {/* Vertical Itinerary Stops (Exact Timeline design from image) */}
          <div className="relative space-y-6 mb-8 pl-2">
            
            {/* Connecting Vertical Line behind circles */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-emerald-700/80 z-0" />

            {currentRoute.stops.map((stop) => (
              <div key={stop.num} className="relative z-10 flex items-start gap-4">
                
                {/* Number Circle Badge */}
                <div className="w-8 h-8 rounded-full bg-[#0d4738] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md ring-4 ring-white">
                  {stop.num}
                </div>

                {/* Stop Card item */}
                <div className="flex-1 flex items-center gap-3.5 bg-slate-50/60 p-2.5 rounded-2xl border border-slate-100/80 hover:bg-slate-50 transition-colors">
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                      {stop.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {stop.tag}
                    </p>
                    <p className="text-[11px] font-bold text-emerald-700 mt-0.5">
                      {stop.time}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Call To Action Button (Exact pill dark emerald button from photo) */}
          <button
            onClick={handleSaveRoute}
            className={`w-full py-3.5 px-6 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-[#0d4738] hover:bg-[#093529] text-white active:scale-98'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-5 h-5 text-amber-300" />
                <span>Ruta guardada en Mi Pasaporte</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-emerald-300" />
                <span>Guardar mi ruta</span>
              </>
            )}
          </button>

          {/* Success Notification Alert */}
          {savedMessage && (
            <div className="mt-4 p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center border border-emerald-200 animate-fadeIn">
              {savedMessage}
            </div>
          )}

        </div>

        {/* Bottom Tagline / Info Badge */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-semibold">
            ¿Quieres personalizar esta ruta? Puedes ajustar tiempos e intereses en la sección de <button onClick={onBackToHome} className="text-emerald-700 underline font-bold">Rutas Turísticas</button>.
          </p>
        </div>

      </div>
    </div>
  );
}
