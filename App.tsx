
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  ShieldAlert, 
  FileText, 
  Users, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  MapPin,
  Check,
  ChevronDown,
  Wrench,
  Construction,
  Factory,
  Truck,
  ShoppingBag,
  Utensils,
  Briefcase,
  Info
} from 'lucide-react';

import { Header } from './components/layout/Header';
import { Button } from './components/ui/button';
import { InfiniteGrid } from './components/ui/infinite-grid-integration';
import { Logo } from './components/ui/Logo';
import { 
  SERVICES, 
  SECTORS, 
  PROCESS, 
  FAQS, 
  WHATSAPP_URL 
} from './constants';

const IconMap: Record<string, any> = {
  ClipboardCheck,
  ShieldAlert,
  FileText,
  Users,
  Wrench,
  Construction,
  Factory,
  Truck,
  ShoppingBag,
  Utensils,
  Briefcase
};

const Section: React.FC<{ id?: string, className?: string, children: React.ReactNode, title?: string, sub?: string }> = ({ id, className, children, title, sub }) => (
  <section id={id} className={`py-24 px-4 scroll-mt-24 ${className}`}>
    <div className="container mx-auto">
      {(title || sub) && (
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl md:text-5xl font-bold text-[#003366] mb-4">{title}</h2>}
          {sub && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{sub}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
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
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#FFD700] selection:text-[#003366]">
      <Header />
      
      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          ¿En qué puedo ayudarte?
        </span>
      </a>

      {/* Hero Section using the new InfiniteGrid */}
      <InfiniteGrid className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 mb-8 backdrop-blur-md">
              <MapPin size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Medellín & Área Metropolitana</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Diseño e Implementación <span className="text-[#FFD700]">SG-SST</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Protege a tu equipo y cumple con la normativa <span className="text-white font-bold">Decreto 1072/2015</span> con expertos en seguridad laboral en Medellín.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full sm:w-auto py-5 px-10 text-xl shadow-[0_0_30px_rgba(255,215,0,0.3)]" 
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                >
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Cotizar por WhatsApp
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto py-5 px-10 text-xl text-white border-white/20 hover:bg-white/10 hover:border-white/50" 
                  onClick={(e) => scrollToSection(e, 'servicios')}
                >
                  <Info className="mr-2 w-6 h-6" />
                  Ver alcance
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#FFD700]" />
                <span>Normativa 1072/2015</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#FFD700]" />
                <span>Res. 0312 de 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#FFD700]" />
                <span>Implementación en 3 Meses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </InfiniteGrid>

      {/* Services Section */}
      <Section id="servicios" title="Alcance del Servicio" sub="Nuestra metodología garantiza una transición suave hacia el cumplimiento normativo total.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, idx) => {
            const Icon = IconMap[s.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 51, 102, 0.1)' }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 bg-slate-50 text-[#003366] rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  <Icon size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Sectors Section */}
      <Section id="sectores" className="bg-slate-50" title="Sectores Atendidos" sub="Diseñamos sistemas de gestión específicos para la naturaleza de tu negocio.">
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {SECTORS.map((sector, idx) => {
            const SectorIcon = IconMap[sector.icon] || Wrench;
            return (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm hover:border-[#003366] hover:text-[#003366] transition-all group cursor-default"
              >
                 <div className="text-slate-400 group-hover:text-[#003366] transition-colors">
                    <SectorIcon size={24} />
                 </div>
                 <span className="font-bold text-slate-700 group-hover:text-[#003366] transition-colors">{sector.name}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
           <div className="inline-block p-6 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-lg">
             <p className="text-slate-500 italic text-lg">
               "Nuestra especialidad es el sector <span className="text-[#003366] font-bold">Metalmecánico</span>, donde los riesgos nivel IV y V requieren precisión absoluta."
             </p>
           </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="proceso" title="Ruta de Implementación" sub="Tres meses para transformar la cultura de seguridad de tu empresa.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PROCESS.map((p, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-xl transition-shadow relative z-10">
                <div className="bg-[#003366] text-white font-black text-xs uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-md">
                  {p.duration}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#003366]">{p.title}</h3>
                <p className="text-slate-600 mb-8">{p.description}</p>
                <div className="space-y-4">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Entregables clave:</div>
                  {p.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="precio" className="bg-slate-950 text-white relative overflow-hidden" title="Inversión y Transparencia" sub="Valores competitivos ajustados a la realidad de la PYME colombiana.">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#003366]/20 rounded-full blur-[120px] -z-1" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden border border-slate-800/20">
             <div className="absolute top-0 right-0 bg-[#FFD700] text-[#003366] px-8 py-3 font-black text-xs uppercase rounded-bl-3xl tracking-tighter">
              Caso de Referencia
             </div>
             <div className="grid md:grid-cols-2 gap-16">
               <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-black mb-4 text-[#003366]">Metalmecánica</h3>
                  <p className="text-slate-500 mb-8 flex items-center gap-2">
                    <Users size={18} /> Hasta 10 trabajadores • Riesgo IV/V
                  </p>
                  <div className="text-6xl font-black text-[#003366] mb-4 tracking-tighter">$5.000.000 <span className="text-xl font-normal text-slate-400">COP</span></div>
                  <p className="text-sm text-slate-400 mb-10 italic">*El valor final se determina según sector y número de centros de trabajo.</p>
                  
                  <div className="space-y-5">
                    {["Diseño documental completo", "Capacitación de personal", "Carga en plataforma MinTrabajo"].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1 p-1 bg-green-500 rounded-full text-white">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                  <h4 className="font-black text-slate-400 mb-8 uppercase text-xs tracking-[0.2em]">Esquema de Pagos</h4>
                  <div className="space-y-6">
                    {[
                      { label: "Diagnóstico inicial", val: "50%" },
                      { label: "Entrega matriz legal/riesgos", val: "30%" },
                      { label: "Informe final y cierre", val: "20%" }
                    ].map((step, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <span className="text-slate-600 font-medium">{step.label}</span>
                        <span className="font-black text-[#003366] text-xl">{step.val}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="text-[10px] font-black text-slate-400 mb-4 tracking-widest">EXCLUSIONES TÉCNICAS:</div>
                    <ul className="text-xs text-slate-500 space-y-2">
                      <li className="flex items-center gap-2 opacity-60">• <span className="line-through">Exámenes médicos</span></li>
                      <li className="flex items-center gap-2 opacity-60">• <span className="line-through">Equipos de emergencia</span></li>
                      <li className="flex items-center gap-2 opacity-60">• <span className="line-through">Inversiones físicas en planta</span></li>
                    </ul>
                  </div>
               </div>
             </div>
             
             <div className="mt-16">
               <Button variant="accent" className="w-full py-8 text-2xl uppercase tracking-tighter" onClick={() => window.open(WHATSAPP_URL, '_blank')}>
                Solicitar Cotización Gratis
               </Button>
             </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" title="Resolviendo Dudas">
        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-[#003366]/30">
              <summary className="list-none p-8 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                <div className="p-2 bg-slate-100 rounded-full group-open:bg-[#FFD700] group-open:text-[#003366] transition-colors">
                  <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="p-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50 bg-slate-50/30">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
               <div className="flex items-center gap-5 mb-8">
                  <div className="flex items-center justify-center bg-white px-4 py-2 rounded-xl border border-slate-800 shadow-xl">
                    <Logo className="h-12" />
                  </div>
                  <span className="text-3xl font-black tracking-tighter">Consultoras SST</span>
               </div>
               <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                Soluciones integrales en seguridad y salud laboral. Transformamos riesgos en entornos protegidos y productivos en el Valle de Aburrá.
               </p>
               <div className="text-sm font-bold text-slate-500 flex items-center gap-2">
                 <ShieldAlert size={16} /> Profesional: Carina Andrea Serna Morales - Ana María Sánchez Pérez
               </div>
            </div>
            
            <div>
              <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-xs">Contacto Directo</h4>
              <ul className="space-y-6 text-slate-400 text-lg">
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg text-[#FFD700]"><MapPin size={20} /></div>
                  Medellín, Colombia
                </li>
                <li 
                  className="flex items-center gap-4 cursor-pointer hover:text-[#FFD700] transition-colors group"
                  onClick={() => window.open(WHATSAPP_URL, '_blank')}
                >
                  <div className="p-2 bg-slate-900 rounded-lg text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-all"><MessageCircle size={20} /></div>
                  +57 302 817 7727
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-xs">Navegación</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                {['servicios', 'sectores', 'proceso', 'precio', 'faq'].map(id => (
                  <li key={id}>
                    <a 
                      href={`#${id}`} 
                      onClick={(e) => scrollToSection(e, id)}
                      className="hover:text-white transition-colors capitalize cursor-pointer"
                    >
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-sm">
            <div>© {new Date().getFullYear()} A&A Consultoras SST. Medellín, Antioquia.</div>
            <div className="flex gap-8">
              <span className="hover:text-slate-400 cursor-pointer transition-colors">Política de Privacidad</span>
              <span className="hover:text-slate-400 cursor-pointer transition-colors">Términos y Condiciones</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
