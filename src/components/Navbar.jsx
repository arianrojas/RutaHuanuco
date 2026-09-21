import React, { useState, useEffect } from 'react';
import { 
  Search, Menu, X, Compass, Home, MapPin, Store, Sparkles, ChevronRight, LogIn, UserPlus, Award 
} from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenAuth, activeView, onNavigateView }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (activeView === 'home') {
        const sections = ['hero', 'categorias', 'rutas', 'banner-cta', 'impacto'];
        const scrollPosition = window.scrollY + 220;

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const top = element.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const navItems = [
    { id: 'hero', name: 'Inicio', href: '#hero', icon: Home },
    { id: 'explorar', name: 'Explorar', href: '#explorar', icon: Compass },
    { id: 'rutas', name: 'Rutas', href: '#rutas', icon: MapPin },
    { id: 'mypes', name: 'MYPES', href: '#mypes', icon: Store },
    { id: 'pasaporte', name: 'Pasaporte', href: '#pasaporte', icon: Award },
    { id: 'impacto', name: 'Sobre el proyecto', href: '#impacto', icon: Sparkles }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.id === 'mypes') {
      if (onNavigateView) onNavigateView('mypes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === 'explorar') {
      if (onNavigateView) onNavigateView('explorar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === 'rutas') {
      if (onNavigateView) onNavigateView('rutas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === 'pasaporte') {
      if (onNavigateView) onNavigateView('pasaporte');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activeView !== 'home') {
        if (onNavigateView) onNavigateView('home');
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activeView !== 'home' && onNavigateView) {
      onNavigateView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isItemActive = (item) => {
    if (activeView === 'mypes') {
      return item.id === 'mypes';
    }
    if (activeView === 'explorar') {
      return item.id === 'explorar';
    }
    if (activeView === 'rutas') {
      return item.id === 'rutas';
    }
    if (activeView === 'pasaporte') {
      return item.id === 'pasaporte';
    }
    return activeSection === item.id;
  };

  const isStandaloneView = activeView === 'mypes' || activeView === 'explorar' || activeView === 'rutas' || activeView === 'pasaporte';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isStandaloneView
      ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
      : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-3.5 text-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center group">
          <img
            src={(scrolled || isStandaloneView) ? '/images/logo2.png' : '/images/logo.png'}
            alt="Ruta HCO"
            className="h-14 sm:h-16 md:h-22 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const active = isItemActive(item);
            return (
              <a
                key={`${item.name}-${index}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative text-sm transition-colors duration-200 ${active
                  ? 'text-emerald-500 font-extrabold'
                  : (scrolled || isStandaloneView)
                    ? 'text-slate-600 hover:text-emerald-600 font-semibold'
                    : 'text-slate-100 hover:text-emerald-300 font-semibold'
                  }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Trigger Icon */}
          <button
            onClick={onOpenSearch}
            className={`p-2.5 rounded-full transition-all duration-200 border ${(scrolled || isStandaloneView)
              ? 'bg-slate-100 hover:bg-emerald-50 border-slate-200 text-slate-700 hover:text-emerald-600'
              : 'bg-white/10 hover:bg-white/20 border-white/20 text-white hover:scale-105'
              }`}
            title="Buscar experiencias y MYPES"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Iniciar Sesión */}
          <button
            onClick={() => onOpenAuth('login')}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${(scrolled || isStandaloneView)
              ? 'border-emerald-600 text-emerald-700 hover:bg-emerald-50'
              : 'border-white/40 text-white hover:bg-white/10'
              }`}
          >
            Iniciar sesión
          </button>

          {/* Registrarse */}
          <button
            onClick={() => onOpenAuth('register')}
            className="px-4 py-2 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Registrarse
          </button>
        </div>

        {/* Mobile Actions & Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${(scrolled || isStandaloneView)
              ? 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200/80 shadow-sm'
              : 'bg-white/15 text-white hover:bg-white/25 border border-white/20 backdrop-blur-sm'
              }`}
            aria-label="Buscar"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold">Buscar</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-all ${(scrolled || isStandaloneView)
              ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200/80 shadow-sm'
              : 'bg-white/15 text-white hover:bg-white/25 border border-white/20 backdrop-blur-sm'
              }`}
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-50/98 backdrop-blur-2xl border-b border-emerald-200/80 text-slate-800 px-5 py-6 space-y-5 animate-fadeIn shadow-2xl">
          {/* Quick Search Bar */}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
            className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-emerald-100/60 border border-emerald-200/80 rounded-2xl text-slate-700 text-sm font-medium transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="text-slate-700">Buscar experiencias o MYPES...</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-700 text-white">Buscar</span>
          </button>

          {/* Navigation Items List */}
          <nav className="flex flex-col space-y-1.5 pt-1">
            {navItems.map((item, index) => {
              const active = isItemActive(item);
              const Icon = item.icon;
              return (
                <a
                  key={`mobile-${item.name}-${index}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 ${active
                    ? 'bg-emerald-700 text-white font-bold shadow-md shadow-emerald-900/20'
                    : 'text-slate-700 hover:bg-emerald-100/60 hover:text-emerald-900 font-semibold'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl ${active ? 'bg-emerald-800 text-white' : 'bg-emerald-100/80 text-emerald-800'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base">{item.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${active ? 'text-white translate-x-0.5' : 'text-slate-400'}`} />
                </a>
              );
            })}
          </nav>

          {/* Auth Action Buttons */}
          <div className="pt-4 border-t border-emerald-200/60 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 font-bold border border-emerald-600 text-emerald-800 bg-white hover:bg-emerald-100/60 rounded-2xl transition-all shadow-sm"
            >
              <LogIn className="w-4 h-4 text-emerald-700" />
              <span>Iniciar sesión</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('register'); }}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 font-bold bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <UserPlus className="w-4 h-4" />
              <span>Registrarse</span>
            </button>
          </div>

          {/* Footer badge */}
          <div className="pt-1 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Ruta HCO · Plataforma Turística & MYPES
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
