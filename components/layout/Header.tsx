
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { WHATSAPP_URL } from '../../constants';
import { Logo } from '../ui/Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Sectores', id: 'sectores' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'Precio', id: 'precio' },
    { name: 'FAQ', id: 'faq' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Container */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className={`flex items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white/95 shadow-lg shadow-black/10'}`}>
            <Logo className="h-10 md:h-12" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-600 hover:text-[#003366]' : 'text-white/70 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="accent" 
            size="md" 
            className="rounded-full px-8 shadow-xl"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-3 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100 text-[#003366]' : 'bg-white/10 text-white border border-white/20'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-white z-[45] animate-in slide-in-from-right duration-300">
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-2xl font-black text-slate-800 py-6 border-b border-slate-100 flex items-center justify-between group active:bg-slate-50 transition-colors"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
                <ChevronRight size={24} className="text-[#FFD700]" />
              </a>
            ))}
            <div className="mt-12 space-y-4">
              <Button variant="accent" className="w-full py-8 text-2xl rounded-2xl" onClick={() => window.open(WHATSAPP_URL, '_blank')}>
                Cotizar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
