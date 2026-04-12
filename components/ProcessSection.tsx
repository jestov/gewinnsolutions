"use client";

import { useState } from "react";
import ButtonWithArrow from "./ButtonWithArrow";
import { 
  MessageSquare, 
  PenTool, 
  HardHat, 
  SlidersHorizontal, 
  LifeBuoy,
  Scan,
  ClipboardList,
  Wallet,
  Goal,
  LayoutGrid,
  Box,
  Layers,
  ImageIcon,
  Cable,
  Cog,
  Gauge,
  FlaskConical,
  Waves,
  BarChart3,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  RefreshCcw,
  Wrench
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Consultoría",
    subtitle: "Entendemos tu visión",
    icon: MessageSquare,
    description: "Comenzamos con una consulta detallada para entender tus necesidades, el espacio disponible y tus objetivos. Evaluamos las condiciones acústicas y técnicas para diseñar la solución perfecta.",
    tags: [
      { label: "Análisis de espacio", icon: Scan },
      { label: "Requerimientos", icon: ClipboardList },
      { label: "Presupuesto", icon: Wallet },
      { label: "Objetivos", icon: Goal },
    ],
  },
  {
    id: 2,
    title: "Diseño",
    subtitle: "Creamos la solución",
    icon: PenTool,
    description: "Nuestro equipo de ingenieros desarrolla un diseño personalizado que integra audio, video e iluminación de manera armónica con la arquitectura de tu espacio.",
    tags: [
      { label: "Planos técnicos", icon: LayoutGrid },
      { label: "Selección de equipos", icon: Box },
      { label: "Integración", icon: Layers },
      { label: "Renders", icon: ImageIcon },
    ],
  },
  {
    id: 3,
    title: "Instalación",
    subtitle: "Ejecutamos con precisión",
    icon: HardHat,
    description: "Implementamos el proyecto con los más altos estándares de calidad. Cada cable, cada equipo y cada detalle es instalado por técnicos certificados.",
    tags: [
      { label: "Cableado estructurado", icon: Cable },
      { label: "Montaje", icon: Box },
      { label: "Configuración", icon: Cog },
      { label: "Calibración", icon: Gauge },
    ],
  },
  {
    id: 4,
    title: "Calibración",
    subtitle: "Afinamos cada detalle",
    icon: SlidersHorizontal,
    description: "Realizamos mediciones acústicas y ajustes finos para garantizar que el sistema funcione en su máximo potencial, adaptado específicamente a tu espacio.",
    tags: [
      { label: "Medición acústica", icon: Waves },
      { label: "Ecualización", icon: BarChart3 },
      { label: "Optimización", icon: Sparkles },
      { label: "Testing", icon: FlaskConical },
    ],
  },
  {
    id: 5,
    title: "Soporte",
    subtitle: "Te acompañamos siempre",
    icon: LifeBuoy,
    description: "Ofrecemos capacitación completa y soporte continuo. Estamos disponibles para mantenimiento, actualizaciones y cualquier necesidad que surja.",
    tags: [
      { label: "Capacitación", icon: GraduationCap },
      { label: "Mantenimiento", icon: Wrench },
      { label: "Garantía", icon: ShieldCheck },
      { label: "Actualizaciones", icon: RefreshCcw },
    ],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative z-20 bg-[#f5f5f3] py-20 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-black text-sm lg:text-base font-clash uppercase tracking-wide">
              Nuestro proceso
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light text-black !leading-[1.1]">
            De la idea a la experiencia,<br />
            un <span className="font-medium">proceso sin fricciones</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-5 border-y border-black/10 mb-12 lg:mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative py-5 text-sm lg:text-base font-clash transition-all duration-300 flex items-center justify-center gap-2 ${
                  index !== processSteps.length - 1 ? "border-r border-black/10" : ""
                } ${
                  activeStep === index
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                }`}
              >
                <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden lg:inline">{step.title}</span>
                {/* Active indicator line */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-primary transition-all duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-0"
                  }`} 
                />
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-black text-sm font-clash uppercase tracking-wide">
                {processSteps[activeStep].subtitle}
              </span>
            </div>
            {/* Title with icon */}
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const IconComponent = processSteps[activeStep].icon;
                return <IconComponent className="w-8 h-8 text-black/30" strokeWidth={1.5} />;
              })()}
              <h3 className="text-2xl lg:text-4xl font-clash text-black !leading-[1.1]">
                {processSteps[activeStep].title}
              </h3>
            </div>
            <p className="text-black/60 leading-relaxed mb-8">
              {processSteps[activeStep].description}
            </p>
            <div className="inline-block">
              <ButtonWithArrow href="/av#contacto">
                Agenda una consulta
              </ButtonWithArrow>
            </div>
          </div>

          {/* Right - Visual tags */}
          <div className="relative min-h-[300px] lg:min-h-[400px]">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              {processSteps[activeStep].tags.map((tag, index) => {
                const positions = [
                  { top: "8%", left: "5%" },
                  { top: "5%", right: "5%" },
                  { bottom: "8%", left: "5%" },
                  { bottom: "5%", right: "5%" },
                ];
                const pos = positions[index] || positions[0];
                const TagIcon = tag.icon;
                
                return (
                  <div
                    key={tag.label}
                    className="absolute bg-[#e8e8e6] backdrop-blur-sm rounded-2xl pl-3 pr-4 py-3 text-sm text-black animate-fade-in flex items-center gap-3 border border-black/20 hover:border-black/40 transition-all duration-300 hover:scale-105"
                    style={{
                      ...pos,
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center">
                      <TagIcon className="w-5 h-5 text-black/50" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium">{tag.label}</span>
                  </div>
                );
              })}
              
              {/* Progress circles */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Outer ring */}
                  <svg className="w-28 h-28 lg:w-32 lg:h-32" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e5e5"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeDasharray={`${((activeStep + 1) / processSteps.length) * 283} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-500"
                    />
                  </svg>
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl lg:text-3xl font-light text-black">
                        {activeStep + 1}
                      </span>
                      <span className="text-black/30 text-base">/{processSteps.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
