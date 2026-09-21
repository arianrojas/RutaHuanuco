import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Bus,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Footprints,
  MapPin,
  Pencil,
  Share2,
  Sparkles,
  X,
} from 'lucide-react';

const suggestedInterests = [
  'Gastronomía',
  'Café local',
  'Naturaleza',
  'Artesanía',
  'Cultura',
  'Aventura',
];

const featuredRoutes = [
  {
    tag: 'Familiar',
    title: 'Plan de domingo',
    description: 'Gastronomía, una visita cultural y tiempo al aire libre.',
    detail: '3–4 horas · Desde S/ 35',
    image: '/images/gastronomia.jpg',
  },
  {
    tag: 'Producto local',
    title: 'Ruta del café',
    description: 'Degustación, compra directa y emprendimientos de altura.',
    detail: 'Media jornada · Desde S/ 45',
    image: '/images/cafe.png',
  },
  {
    tag: 'Escapada',
    title: 'Naturaleza cercana',
    description: 'Mirador, experiencia local y una pausa para recargar energía.',
    detail: 'Día completo · Desde S/ 60',
    image: '/images/naturaleza.jpg',
  },
];

export default function Rutas({ onBackToHome }) {
  const [origin, setOrigin] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [durationUnit, setDurationUnit] = useState('horas');
  const [interestInput, setInterestInput] = useState('');
  const [interests, setInterests] = useState([]);
  const [notes, setNotes] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [routeStage, setRouteStage] = useState(1);

  const availability = duration ? `${duration} ${durationUnit}` : 'Aún no definida';
  const routeTitle = useMemo(
    () => (interests.length ? `Tu ruta de ${interests[0].toLowerCase()}` : 'Una ruta a tu ritmo'),
    [interests],
  );

  const addInterest = (value) => {
    const cleanValue = value.trim();
    if (!cleanValue) {
      setInterestInput('');
      return;
    }
    setInterests((current) => (
      current.some((interest) => interest.toLowerCase() === cleanValue.toLowerCase())
        ? current
        : [...current, cleanValue]
    ));
    setInterestInput('');
  };

  const removeInterest = (value) => {
    setInterests((current) => current.filter((interest) => interest !== value));
  };

  const handleInterestKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      addInterest(interestInput);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (interestInput.trim()) addInterest(interestInput);
    setHasGenerated(true);
    setShowResults(true);
    setRouteStage(2);
  };

  return (
    <section id="rutas" className="relative overflow-hidden bg-[#f7f6f1] pt-28 sm:pt-36 pb-20 sm:pb-24 min-h-screen">
      <div className="absolute -right-32 top-12 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Top Navigation Bar */}
        {onBackToHome && (
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider border border-emerald-200">
              Rutas Turísticas
            </span>
          </div>
        )}

        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
            Planifica a tu manera
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Diseña una ruta que se adapte <span className="text-emerald-700">a ti</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Elige un punto de partida, define tu disponibilidad y añade todo lo que te interese.
            Tú marcas el plan; nosotros conectamos experiencias locales.
          </p>
        </div>

        <PlannerSteps stage={routeStage} />

        {showResults ? (
          <RouteResults
            title={routeTitle}
            origin={origin}
            date={date}
            availability={availability}
            interests={interests}
            onEdit={() => { setShowResults(false); setRouteStage(1); }}
            onSave={() => setRouteStage(3)}
          />
        ) : (
          <>
        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)]">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/[0.04] sm:p-8">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900">Cuéntanos tu plan</h3>
            <p className="mt-1 text-sm text-slate-500">No hay respuestas obligatorias: empieza con lo que ya sabes.</p>

            <div className="mt-7">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <label htmlFor="route-origin" className="text-sm font-bold text-slate-700">¿Dónde quieres iniciar?</label>
                <span className="text-xs text-slate-400">Puedes escribir cualquier lugar</span>
              </div>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-600" />
                <input id="route-origin" value={origin} onChange={(event) => setOrigin(event.target.value)} list="route-origin-options" placeholder="Ej. Plaza de Armas, Huánuco" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                <datalist id="route-origin-options"><option value="Plaza de Armas, Huánuco" /><option value="Tingo María" /><option value="Pillco Marca" /><option value="Terminal terrestre de Huánuco" /></datalist>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="mb-2 flex items-baseline justify-between gap-3"><label htmlFor="route-date" className="text-sm font-bold text-slate-700">¿Cuándo quieres ir?</label><span className="text-xs text-slate-400">Opcional</span></div>
                <div className="relative"><CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-600" /><input id="route-date" value={date} onChange={(event) => setDate(event.target.value)} type="date" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" /></div>
              </div>
              <div>
                <div className="mb-2 flex items-baseline justify-between gap-3"><label htmlFor="route-duration" className="text-sm font-bold text-slate-700">Tiempo disponible</label><span className="text-xs text-slate-400">A tu medida</span></div>
                <div className="grid grid-cols-[1fr_0.85fr] gap-2"><input id="route-duration" value={duration} onChange={(event) => setDuration(event.target.value)} type="number" min="0.5" step="0.5" placeholder="Ej. 3" className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" /><select value={durationUnit} onChange={(event) => setDurationUnit(event.target.value)} aria-label="Unidad de tiempo" className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"><option value="horas">horas</option><option value="días">días</option><option value="minutos">minutos</option></select></div>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-baseline justify-between gap-3"><label htmlFor="route-interest" className="text-sm font-bold text-slate-700">¿Qué quieres incluir?</label><span className="text-xs text-slate-400">Añade tantos intereses como quieras</span></div>
              <div className="flex min-h-12 flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
                {interests.map((interest) => <span key={interest} className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1.5 text-xs font-bold text-emerald-800">{interest}<button type="button" onClick={() => removeInterest(interest)} aria-label={`Quitar ${interest}`} className="rounded text-emerald-700 hover:text-emerald-950"><X className="h-3.5 w-3.5" /></button></span>)}
                <input id="route-interest" value={interestInput} onChange={(event) => setInterestInput(event.target.value)} onKeyDown={handleInterestKeyDown} onBlur={() => interestInput.trim() && addInterest(interestInput)} placeholder="Escribe y presiona Enter" className="min-w-36 flex-1 border-0 px-1 py-1.5 text-sm text-slate-800 outline-none" />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">{suggestedInterests.map((interest) => <button key={interest} type="button" onClick={() => addInterest(interest)} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-emerald-100 hover:text-emerald-800">{interest}</button>)}</div>
              <p className="mt-2 text-xs text-slate-400">Las sugerencias son opcionales: puedes usar cualquier interés.</p>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-baseline justify-between gap-3"><label htmlFor="route-notes" className="text-sm font-bold text-slate-700">¿Hay algo importante para tu ruta?</label><span className="text-xs text-slate-400">Opcional</span></div>
              <textarea id="route-notes" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Ej. Vamos con niños, buscamos opciones accesibles, queremos evitar caminatas largas…" className="min-h-24 w-full resize-y rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5"><div><label htmlFor="route-personalize" className="text-sm font-bold text-slate-700">Quiero recomendaciones más personalizadas</label><p className="mt-1 text-xs text-slate-400">Luego podrás indicar presupuesto, movilidad y accesibilidad.</p></div><button id="route-personalize" type="button" onClick={() => setShowAdvanced((current) => !current)} aria-pressed={showAdvanced} className={`relative h-7 w-12 rounded-full transition ${showAdvanced ? 'bg-emerald-700' : 'bg-slate-200'}`}><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${showAdvanced ? 'left-6' : 'left-1'}`} /></button></div>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4"><button type="button" className="text-sm font-bold text-slate-500 transition hover:text-emerald-700">Guardar para después</button><button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-800/15 transition hover:-translate-y-0.5 hover:bg-emerald-800"><Sparkles className="h-4 w-4" />Ver propuestas de ruta</button></div>
          </form>

          <aside className="overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-xl shadow-emerald-950/[0.04]">
            <div className="bg-gradient-to-br from-emerald-900 to-teal-800 px-6 py-6 text-white"><p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">Tu solicitud</p><h3 className="mt-2 text-xl font-extrabold tracking-tight">{hasGenerated ? routeTitle : 'Una ruta a tu ritmo'}</h3><p className="mt-1 text-sm text-emerald-100">Se actualizará con cada decisión.</p></div>
            <div className="p-6"><SummaryRow label="Punto de inicio" value={origin || 'Aún no definido'} empty={!origin} /><SummaryRow label="Fecha" value={date ? new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00`)) : 'Aún no definida'} empty={!date} /><SummaryRow label="Disponibilidad" value={availability} empty={!duration} /><SummaryRow label="Intereses" value={interests.length ? interests.join(', ') : 'Añade lo que te gustaría vivir'} empty={!interests.length} /><SummaryRow label="Consideraciones" value={notes || 'Sin preferencias adicionales'} empty={!notes} last /><div className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-800">Las propuestas combinarán MYPES y lugares compatibles con tus elecciones. Podrás editar cada parada antes de guardar.</div></div>
          </aside>
        </div>

        <div className="mt-16"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Para empezar ahora</p><h3 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">Rutas listas para ti</h3></div><p className="max-w-sm text-sm leading-relaxed text-slate-500">Elige un plan ya preparado o crea uno desde cero arriba.</p></div><div className="mt-6 grid gap-5 md:grid-cols-3">{featuredRoutes.map((route) => <article key={route.title} className="group overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-lg shadow-emerald-950/[0.04] transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-36 overflow-hidden"><img src={route.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-emerald-800 shadow-sm">{route.tag}</span></div><div className="p-5"><h4 className="text-lg font-extrabold text-slate-900">{route.title}</h4><p className="mt-1.5 text-sm leading-relaxed text-slate-500">{route.description}</p><div className="mt-4 flex items-center justify-between gap-3"><span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800"><Clock3 className="h-3.5 w-3.5" />{route.detail}</span><button type="button" className="rounded-lg p-1 text-emerald-700 transition hover:bg-emerald-50" aria-label={`Ver ${route.title}`}><ChevronRight className="h-5 w-5" /></button></div></div></article>)}</div></div>
          </>
        )}
      </div>
    </section>
  );
}

function SummaryRow({ label, value, empty, last = false }) {
  return <div className={last ? 'py-3' : 'border-b border-slate-100 py-3'}><span className="block text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</span><span className={`mt-1 block text-sm font-bold leading-relaxed ${empty ? 'font-medium text-slate-400' : 'text-slate-700'}`}>{value}</span></div>;
}

function PlannerSteps({ stage }) {
  const steps = ['Preferencias', 'Tu ruta', 'Ajustar y guardar'];
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold" aria-label="Progreso del planificador">
      {steps.map((step, index) => {
        const number = index + 1;
        const complete = number < stage;
        const current = number === stage;
        return <span key={step} className="flex items-center gap-2"><span className={`flex items-center gap-2 ${current ? 'text-emerald-700' : complete ? 'text-emerald-600' : 'text-slate-400'}`}><span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-extrabold ${current ? 'bg-emerald-700 text-white ring-4 ring-emerald-100' : complete ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-500'}`}>{complete ? <Check className="h-3.5 w-3.5" /> : number}</span>{step}</span>{number < steps.length && <span className={`h-px w-8 ${number < stage ? 'bg-emerald-400' : 'bg-slate-300'}`} />}</span>;
      })}
    </div>
  );
}

function RouteResults({ title, origin, date, availability, interests, onEdit, onSave }) {
  const [selectedOption, setSelectedOption] = useState('recommended');
  const [selectedStop, setSelectedStop] = useState(0);
  const [notice, setNotice] = useState('');
  const [developmentOpen, setDevelopmentOpen] = useState(false);
  const formattedDate = date
    ? new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'short' }).format(new Date(`${date}T12:00:00`))
    : 'Fecha flexible';
  const routeOptions = [
    { id: 'recommended', label: 'Mejor opción para ti', title, text: 'Combina MYPES, cultura local y paradas con un ritmo cómodo.', price: 'Desde S/ 48', image: '/images/cafe.png' },
    { id: 'economic', label: 'Más económica', title: 'Sabores locales a tu ritmo', text: 'Una alternativa con paradas cercanas y menor gasto estimado.', price: 'Desde S/ 32', image: '/images/gastronomia.jpg' },
    { id: 'nature', label: 'Con más naturaleza', title: 'Aire libre y producto local', text: 'Incluye una experiencia natural y emprendimientos de la zona.', price: 'Desde S/ 55', image: '/images/naturaleza.jpg' },
  ];
  const activeRoute = routeOptions.find((route) => route.id === selectedOption);
  const stops = [
    { name: 'Café de altura huanuqueño', description: 'Degustación y compra directa a productores locales.', time: '45 min', image: '/images/cafe.png' },
    { name: 'Artesanías Pillco Mozo', description: 'Conoce técnicas y piezas elaboradas en Huánuco.', time: '40 min', image: '/images/artesanias.jpg' },
    { name: 'Centro histórico de Huánuco', description: 'Una pausa cultural entre plazas e historia local.', time: '50 min', image: '/images/kotosh.png' },
    { name: 'Almuerzo regional', description: 'Cierre con sabores tradicionales de la región.', time: '1 h 15 min', image: '/images/gastronomia.jpg' },
  ];

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 rounded-3xl bg-emerald-950 p-6 text-white shadow-xl shadow-emerald-950/15 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">Propuestas para tu plan</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Encontramos rutas para ti</h3>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-emerald-50">
            <span className="rounded-full bg-white/10 px-3 py-1.5">{origin || 'Huánuco'}</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">{formattedDate}</span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">{availability}</span>
            {interests.slice(0, 2).map((interest) => <span key={interest} className="rounded-full bg-white/10 px-3 py-1.5">{interest}</span>)}
          </div>
        </div>
        <button type="button" onClick={onEdit} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Pencil className="h-4 w-4" />Editar preferencias</button>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)]">
        <article className="overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-xl shadow-emerald-950/[0.04]">
          <div className="relative h-48 overflow-hidden sm:h-56"><img src={activeRoute.image} alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-emerald-950/5 to-transparent" /><span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-3 py-1.5 text-xs font-extrabold text-emerald-950"><Sparkles className="h-3.5 w-3.5" />{activeRoute.label}</span><div className="absolute bottom-5 left-5 right-5"><h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{activeRoute.title}</h3><p className="mt-1 text-sm text-emerald-50">{activeRoute.text}</p></div></div>
          <div className="p-5 sm:p-6">
            <div className="grid gap-3 border-b border-slate-100 pb-5 sm:grid-cols-4">
              <ResultFact icon={<Clock3 className="h-4 w-4" />} label="Duración" value={availability === 'Aún no definida' ? '4 horas aprox.' : availability} />
              <ResultFact icon={<MapPin className="h-4 w-4" />} label="Paradas" value="4 lugares" />
              <ResultFact icon={<Footprints className="h-4 w-4" />} label="Caminata" value="Ligera" />
              <ResultFact icon={<Bus className="h-4 w-4" />} label="Movilidad" value="A pie y taxi" />
            </div>
            <ol className="mt-5 space-y-3">{stops.map((stop, index) => <li key={stop.name} className={`flex gap-3 rounded-2xl border p-3 transition ${selectedStop === index ? 'border-emerald-400 bg-emerald-50 shadow-sm' : 'border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/40'}`}><button type="button" onClick={() => setSelectedStop(index)} aria-pressed={selectedStop === index} aria-label={`Seleccionar parada ${index + 1}: ${stop.name}`} className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-extrabold transition ${selectedStop === index ? 'bg-emerald-700 text-white ring-4 ring-emerald-100' : 'bg-slate-200 text-slate-600 hover:bg-emerald-200 hover:text-emerald-900'}`}>{index + 1}</button><img src={stop.image} alt="" className="h-12 w-12 rounded-xl object-cover" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-2"><h4 className="font-bold text-slate-800">{stop.name}</h4><span className="text-xs font-semibold text-emerald-700">{stop.time}</span></div><p className="mt-0.5 text-xs leading-relaxed text-slate-500">{stop.description}</p></div><button type="button" onClick={() => { setSelectedStop(index); setNotice(`Pronto podrás cambiar “${stop.name}” por otra parada disponible.`); }} className="self-center text-xs font-bold text-emerald-700 hover:text-emerald-900">Cambiar</button></li>)}</ol>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs text-slate-400">Gasto estimado</p><p className="text-lg font-extrabold text-emerald-800">{activeRoute.price} <span className="text-xs font-semibold text-slate-500">por persona</span></p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => { onSave(); setNotice('La ruta se guardó en Mi pasaporte.'); }} className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3 py-2.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"><Bookmark className="h-4 w-4" />Guardar</button><button type="button" onClick={() => setNotice('La opción para compartir estará disponible al conectar tu cuenta.')} className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3 py-2.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"><Share2 className="h-4 w-4" />Compartir</button><button type="button" onClick={() => setDevelopmentOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-emerald-800"><Check className="h-4 w-4" />Empezar ruta</button></div></div>
            {notice && <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800" role="status">{notice}</p>}
          </div>
        </article>

        <aside><h3 className="text-lg font-extrabold text-slate-900">También podrías elegir</h3><p className="mt-1 text-sm text-slate-500">Compara alternativas antes de guardar.</p><div className="mt-4 space-y-3">{routeOptions.filter((route) => route.id !== selectedOption).map((route) => <button type="button" key={route.id} onClick={() => setSelectedOption(route.id)} className="group w-full overflow-hidden rounded-2xl border border-emerald-950/10 bg-white text-left shadow-lg shadow-emerald-950/[0.035] transition hover:border-emerald-300 hover:shadow-xl"><div className="flex gap-3 p-3"><img src={route.image} alt="" className="h-20 w-20 rounded-xl object-cover" /><span className="min-w-0 flex-1"><span className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-700">{route.label}</span><span className="mt-1 block font-extrabold text-slate-800">{route.title}</span><span className="mt-1 block text-xs font-semibold text-emerald-800">{route.price} · 4 paradas</span></span><ChevronRight className="mt-7 h-5 w-5 shrink-0 text-emerald-700 transition group-hover:translate-x-0.5" /></div></button>)}</div><div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4"><p className="text-sm font-extrabold text-amber-900">Consumo con impacto local</p><p className="mt-1 text-xs leading-relaxed text-amber-800">Esta ruta incluye emprendimientos locales. El detalle de disponibilidad se confirmará cuando se conecte el backend.</p></div></aside>
      </div>
      <button type="button" onClick={onEdit} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950"><ArrowLeft className="h-4 w-4" />Volver al formulario</button>
      {developmentOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/45 p-4" role="dialog" aria-modal="true" aria-labelledby="development-title"><div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700"><Sparkles className="h-7 w-7" /></span><h3 id="development-title" className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900">En desarrollo</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">Muy pronto podrás iniciar esta ruta desde la plataforma y seguir cada parada.</p><button type="button" autoFocus onClick={() => setDevelopmentOpen(false)} className="mt-6 w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-800">Entendido</button></div></div>}
    </div>
  );
}

function ResultFact({ icon, label, value }) {
  return <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-700">{icon}</span><span><span className="block text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">{label}</span><span className="block text-xs font-bold text-slate-700">{value}</span></span></div>;
}
