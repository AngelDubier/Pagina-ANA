
import React from 'react';
import { 
  ClipboardCheck, 
  ShieldAlert, 
  FileText, 
  Users, 
  Construction, 
  Factory, 
  Truck, 
  ShoppingBag, 
  Utensils, 
  Briefcase,
  Wrench
} from 'lucide-react';
import { ServiceCard, SectorItem, ProcessPhase, FAQItem } from './types';

export const WHATSAPP_NUMBER = "573028177727";
export const WHATSAPP_MESSAGE = encodeURIComponent("Hola, soy [Nombre]. Estoy en Medellín. Quiero implementar o actualizar el SG-SST en mi empresa. Sector: [Sector]. Nº de trabajadores: [#]. ¿Me compartes una cotización y tiempos?");
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SERVICES: ServiceCard[] = [
  {
    title: "Diagnóstico Inicial",
    description: "Evaluación exhaustiva del cumplimiento normativo actual bajo la Res. 0312 de 2019.",
    icon: "ClipboardCheck"
  },
  {
    title: "Matriz de Peligros (GTC 45)",
    description: "Identificación, evaluación y valoración de riesgos para establecer controles efectivos.",
    icon: "ShieldAlert"
  },
  {
    title: "Diseño Documental",
    description: "Elaboración de políticas, objetivos, plan anual y matriz legal personalizada.",
    icon: "FileText"
  },
  {
    title: "Capacitación e Inducción",
    description: "Sensibilización y formación técnica para todo el personal de la organización.",
    icon: "Users"
  }
];

export const SECTORS: SectorItem[] = [
  { name: "Metalmecánica", icon: "Wrench" },
  { name: "Construcción", icon: "Construction" },
  { name: "Manufactura", icon: "Factory" },
  { name: "Logística", icon: "Truck" },
  { name: "Comercio", icon: "ShoppingBag" },
  { name: "Alimentos", icon: "Utensils" },
  { name: "Servicios", icon: "Briefcase" }
];

export const PROCESS: ProcessPhase[] = [
  {
    title: "Fase 1: Diagnóstico",
    duration: "Mes 1",
    description: "Levantamiento de información y diagnóstico de estándares mínimos.",
    deliverables: ["Informe diagnóstico", "Plan de trabajo inicial"]
  },
  {
    title: "Fase 2: Diseño Documental",
    duration: "Mes 2",
    description: "Creación de matrices (Legal, Riesgos) y documentación estratégica.",
    deliverables: ["Matriz GTC 45", "Matriz Legal", "Política y Objetivos"]
  },
  {
    title: "Fase 3: Implementación",
    duration: "Mes 3",
    description: "Capacitaciones, puesta en marcha de programas y cierre.",
    deliverables: ["Registro capacitaciones", "Manual SG-SST", "Informe Final"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tarda la implementación?",
    answer: "Nuestro proceso estándar tiene una duración de 3 meses, divididos en fases de diagnóstico, diseño e implementación."
  },
  {
    question: "¿Qué pasa si ya tengo documentos?",
    answer: "Realizamos un diagnóstico de lo existente. Si cumple con la norma, lo integramos y actualizamos; si no, diseñamos la base correcta."
  },
  {
    question: "¿Incluye capacitación?",
    answer: "Sí, incluimos la inducción y sensibilización inicial requerida por la normativa para el personal."
  },
  {
    question: "¿Ayudan con el reporte en MinTrabajo?",
    answer: "Brindamos asesoría técnica para la carga de la autoevaluación en el aplicativo del Ministerio del Trabajo."
  },
  {
    question: "¿El precio cambia por sector?",
    answer: "Sí. La cotización varía según la actividad económica (clase de riesgo) y el número de trabajadores de la empresa."
  }
];
