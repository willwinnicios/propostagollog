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
        <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 py-20 lg:py-0 gap-16 lg:gap-0">
          
          {/* Left Content */}
          <div className="flex-1 text-left">
            <FadeIn delay={0.2} direction="right">
              <h1 className="font-display flex flex-col mb-8">
                <span className="text-2xl md:text-4xl text-arven-yellow font-bold tracking-[0.2em] uppercase mb-2">Proposta</span>
                <span className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">COMERCIAL</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-300 font-light mb-12 max-w-xl leading-relaxed">
                Soluções estratégicas que <br className="hidden md:block"/> <span className="text-white font-medium">impulsionam resultados.</span>
              </p>

              <div className="h-1.5 w-24 bg-arven-yellow mb-16 rounded-full" />

              {/* Icon Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <Target className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Estratégia</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Personalizada</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-l-0 md:border-l border-white/10 md:pl-8">
                  <TrendingUp className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Foco em</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Resultados</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-l-0 md:border-l border-white/10 md:pl-8">
                  <Handshake className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Parceria e</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Confiança</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Logo Area */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <FadeIn delay={0.5} direction="left" className="relative">
              <div className="absolute inset-0 bg-arven-yellow/10 blur-[100px] rounded-full" />
              <ArvenLogo className="relative z-10 scale-110 md:scale-150 lg:scale-[1.8]" priority={true} />
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
