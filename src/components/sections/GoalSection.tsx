import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function GoalSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 4.5. THE SHARED GOAL - 400K REVENUE */}
      <Section className="bg-[#0d0d0d] text-white relative border-t border-white/5 selection:bg-gollog selection:text-white" bg={<GridBackground color="rgba(255, 90, 0, 0.05)" />}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-gollog" />
                <span className="font-display font-bold tracking-widest text-slate-500 uppercase text-sm">Visão Estratégica</span>
              </div>
              <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
                A Jornada aos <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog to-[#ff9000]">R$ 400.000,00</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                Flávio me deu a meta, eu trouxe a estratégia. Sair dos R$ 180k atuais e chegar aos <strong className="text-gollog">400 mil</strong> não é um "talvez", é uma questão de <strong className="text-white underline decoration-gollog underline-offset-8">método e execução.</strong>
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gollog/10 flex items-center justify-center shrink-0">
                    <Handshake className="text-gollog" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Esforço Conjunto</h4>
                    <p className="text-sm text-slate-500">O marketing é o combustível (gera as oportunidades), mas o motor é a sua equipe comercial. Precisamos de <strong className="text-slate-300">atendimento ágil e prospecção ativa</strong> para converter cada lead em faturamento.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Escalabilidade</h4>
                    <p className="text-sm text-slate-500">A meta é ambiciosa, mas <strong className="text-slate-300">plausível.</strong> Com o aumento do volume de orçamentos, o time precisa estar preparado para o novo patamar de demanda rodoviária e aérea.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gollog" />
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <h3 className="text-black font-display text-2xl font-black">Projeção de Crescimento</h3>
                   <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Faturamento Mensal (R$)</p>
                 </div>
                 <div className="text-right">
                   <p className="text-gollog font-display text-4xl font-black">+122%</p>
                   <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Expectativa de ROI</p>
                 </div>
               </div>
               
               <RevenueChart />
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
