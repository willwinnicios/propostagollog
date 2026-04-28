import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function ComparisonSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 4. COMPARISON SECTION - NOW vs FUTURE */}
      <Section className="bg-[#f8f9fa] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(0, 0, 0, 0.02)" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <FadeIn className="text-center mb-16 md:mb-24">
             <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight mb-6">
                Onde você <span className="text-slate-300">está</span> <br className="hidden md:block"/> vs <span className="text-gollog">Para onde vamos.</span>
             </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
             <FadeIn delay={0.2} direction="right">
                <div className="bg-white border border-black/5 p-6 md:p-12 rounded-[3rem] h-full relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Zap size={120} strokeWidth={1} />
                   </div>
                   <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
                      Cenário Atual
                   </div>
                   <h3 className="font-display text-3xl font-bold mb-6">Hoje você está aqui</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem agência ou consultoria dedicada
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem estratégia de crescimento definida
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem clareza de como alcançar os R$ 400k
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Dependência de indicações orgânicas
                      </li>
                   </ul>
                   <div className="mt-12 pt-8 border-t border-slate-100">
                      <p className="text-slate-400 text-sm italic">"Esperar o resultado sem estratégia é como dirigir no escuro."</p>
                   </div>
                </div>
             </FadeIn>

             <FadeIn delay={0.4} direction="left">
                <div className="bg-[#0d0d0d] text-white p-6 md:p-12 rounded-[3rem] h-full relative overflow-hidden group border border-white/5 shadow-2xl">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Rocket size={120} strokeWidth={1} className="text-gollog" />
                   </div>
                   <div className="inline-block px-4 py-1 bg-gollog/10 rounded-full text-xs font-black uppercase tracking-widest text-gollog mb-8">
                      Com Minha Assessoria
                   </div>
                   <h3 className="font-display text-3xl font-bold mb-6 text-white">Com minha Assessoria</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Determinação e constância diária
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> <strong className="text-white">O Catalisador Estratégico</strong> que faltava para a escala
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Estratégia multicanal (Road & Air)
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Trabalho em conjunto para os R$ 400k
                      </li>
                   </ul>
                   <div className="mt-12 pt-8 border-t border-white/10">
                      <p className="text-slate-400 text-sm italic">"Eu trago o método que faltava para transformar sua força operacional em faturamento real."</p>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
