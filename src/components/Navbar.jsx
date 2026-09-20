import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Compass, UserCheck, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'categorias', 'banner-cta', 'impacto'];
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', name: 'Inicio', href: '#hero' },
    { id: 'categorias', name: 'Explorar', href: '#categorias' },
    { id: 'banner-cta', name: 'Rutas', href: '#banner-cta' },
    { id: 'banner-cta', name: 'MYPES', href: '#banner-cta' },
    { id: 'impacto', name: 'Sobre el proyecto', href: '#impacto' }
  ];

  const isItemActive = (item, index) => {
    // If multiple items share href '#banner-cta' (Rutas and MYPES)
    if (item.id === 'banner-cta') {
      if (activeSection === 'banner-cta') {
        return index === 2; // Default to Rutas when in banner section
      }
      return false;
    }
    return activeSection === item.id;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
        : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-3.5 text-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={scrolled ? '/images/logo2.png' : '/images/logo.png'}
            alt="Ruta HCO"
            className="h-16 sm:h-18 md:h-22 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const active = isItemActive(item, index);
            return (
              <a
                key={`${item.name}-${index}`}
                href={item.href}
                className={`relative text-sm transition-colors duration-200 ${active
                    ? 'text-emerald-500 font-extrabold'
                    : scrolled
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
            className={`p-2.5 rounded-full transition-all duration-200 border ${scrolled
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
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${scrolled
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

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className={`p-2 rounded-full ${scrolled ? 'bg-slate-100 text-slate-700' : 'bg-white/10 text-white'}`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${scrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 text-white px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => {
              const active = isItemActive(item, index);
              return (
                <a
                  key={`mobile-${item.name}-${index}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 transition-colors ${active ? 'text-emerald-400 font-bold text-lg' : 'text-slate-200 hover:text-emerald-300'}`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
              className="w-full py-2.5 text-center font-semibold border border-emerald-500 text-emerald-400 rounded-xl"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('register'); }}
              className="w-full py-2.5 text-center font-bold bg-emerald-600 text-white rounded-xl shadow-lg"
            >
              Registrarse
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
