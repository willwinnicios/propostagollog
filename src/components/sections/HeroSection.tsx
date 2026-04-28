import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function HeroSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 1. HERO SECTION (NEW PREMIUM DESIGN) */}
      <Section 
        className="relative overflow-hidden min-h-screen bg-[#0d0d0d] !p-0"
        bg={
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Desktop Image */}
            <img 
              src="/capa_fundo_topo.webp" 
              alt="Capa Fundo Topo" 
              className="hidden md:block w-full h-full object-cover opacity-90"
              fetchPriority="high"
              decoding="async"
            />
            {/* Mobile Image */}
            <img 
              src="/capa_fundo_mobile.webp" 
              alt="Capa Fundo Mobile" 
              className="block md:hidden w-full h-full object-cover opacity-90"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d] pointer-events-none" />
          </div>
        }
      >
        <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col-reverse lg:flex-row items-start lg:items-center justify-center lg:justify-between min-h-screen px-6 py-12 lg:py-0 gap-4 lg:gap-0">
          
          {/* Left Content */}
          <div className="text-left w-full lg:flex-1">
            <FadeIn delay={0.2} direction="right">
              <div className="flex flex-col">
                <h1 className="font-display flex flex-col mb-4 md:mb-8">
                  <span className="text-lg md:text-4xl text-arven-yellow font-bold tracking-[0.2em] uppercase mb-0 md:mb-2 leading-none">Proposta</span>
                  <span className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] md:leading-none">COMERCIAL</span>
                </h1>
                
                <p className="text-lg md:text-3xl text-slate-300 font-light mb-6 md:mb-12 max-w-xl leading-relaxed">
                  Soluções estratégicas que <br className="hidden md:block"/> <span className="text-white font-medium">impulsionam resultados.</span>
                </p>

                <div className="h-1 w-16 md:h-1.5 md:w-24 bg-arven-yellow mb-8 md:mb-16 rounded-full" />

                {/* Icon Grid */}
                <div className="grid grid-cols-3 gap-2 md:gap-8">
                  <div className="flex flex-col items-start gap-2 md:gap-4">
                    <Target className="text-arven-yellow" size={20} md:size={32} />
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Estratégia</p>
                      <p className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider">Personalizada</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:gap-4 border-l border-white/10 pl-3 md:pl-8">
                    <TrendingUp className="text-arven-yellow" size={20} md:size={32} />
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Foco em</p>
                      <p className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider">Resultados</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:gap-4 border-l border-white/10 pl-3 md:pl-8">
                    <Handshake className="text-arven-yellow" size={20} md:size={32} />
                    <div className="text-left">
                      <p className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Parceria e</p>
                      <p className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider">Confiança</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Logo Area */}
          <div className="flex flex-col justify-start lg:justify-end relative w-full lg:flex-1 mb-2 lg:mb-0">
            <FadeIn delay={0.5} direction="left" className="relative">
              <div className="absolute inset-0 bg-arven-yellow/10 blur-[60px] md:blur-[100px] rounded-full" />
              <ArvenLogo className="relative z-10 scale-75 md:scale-150 lg:scale-[1.8] -ml-20 md:ml-0" priority={true} />
            </FadeIn>
          </div>
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
          >
            <FadeIn delay={1.5} direction="down">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold hidden md:block">Role para descobrir</span>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center p-1"
                >
                  <motion.div 
                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-arven-yellow rounded-full"
                  />
                </motion.div>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
