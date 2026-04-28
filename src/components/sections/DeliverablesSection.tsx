import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function DeliverablesSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 4. DELIVERABLES (Bento Grid) */}
      <Section className="bg-[#f0f2f5] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white overflow-hidden" bg={<LightDepthBackground />}>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gollog" />
              <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Escopo</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-black">Entregáveis Mensais</h2>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6 auto-rows-[minmax(300px,_auto)]">
            
            {/* Social Media - Takes 3 cols */}
            <SpotlightCard delay={0.1} className="md:col-span-3 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <MonitorSmartphone className="text-gollog" size={36} />
                <div className="flex flex-col items-end gap-1">
                  <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-black/5">
                    Presença Digital
                  </div>
                  <div className="text-[10px] font-bold text-gollog/60 mr-2">8-10 Posts/mês</div>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold mb-4 text-black">Mídia Social que Comercializa</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-xl">
                Deixamos de lado as artes "poluídas". Trazemos o refinamento da GOLLOG nacional para a sua agência local com copys voltadas para venda e segurança.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Design</p>
                   <p className="text-sm font-bold text-slate-700 leading-tight">Artes B2B High-End & Identidade Visual</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Copywriting</p>
                   <p className="text-sm font-bold text-slate-700 leading-tight">Legendas Persuasivas & CTAs Diretas</p>
                </div>
              </div>
            </SpotlightCard>

            {/* LinkedIn - Takes 2 cols */}
            <SpotlightCard delay={0.2} className="md:col-span-2 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Handshake className="text-gollog" size={36} />
                <div className="px-3 py-1 bg-gollog/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gollog border border-gollog/10">
                  Business B2B
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-black">Ofensiva LinkedIn</h3>
              <p className="text-slate-500 mb-8">
                Posicionamento C-Level. Estruturamos a presença dos gestores para abrir portas no corporativo.
              </p>
              <div className="mt-auto space-y-3">
                 <div className="text-xs px-4 py-4 bg-slate-50 border border-black/5 rounded-2xl font-bold flex justify-between text-slate-600 group/item hover:bg-slate-100 transition-colors">
                   <span>Networking Mapeado</span> <ArrowRight size={18} className="text-gollog group-hover/item:translate-x-1 transition-transform"/>
                 </div>
                 <div className="text-xs px-4 py-4 bg-slate-50 border border-black/5 rounded-2xl font-bold flex justify-between text-slate-600 group/item hover:bg-slate-100 transition-colors">
                   <span>Prospecção Ativa</span> <ArrowRight size={18} className="text-gollog group-hover/item:translate-x-1 transition-transform"/>
                 </div>
              </div>
            </SpotlightCard>

            {/* Vídeos - Takes 2 cols */}
            <SpotlightCard delay={0.3} className="md:col-span-2 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Video className="text-gollog" size={36} />
                <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-black/5">
                  Engajamento
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-black">Reels Formato Dinâmico</h3>
              <p className="text-slate-500 mb-6">
                Atenção dura segundos. Editamos <strong>2 vídeos mensais</strong> a partir dos materiais imersivos da sua operação (cargas, frotas, bastidores).
              </p>
              <div className="mt-auto flex items-center gap-4 text-xs font-display text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-3 rounded-2xl w-full border border-black/5">
                 <Zap size={14} className="text-gollog" /> Ritmo • Viralidade • Autoridade
              </div>
            </SpotlightCard>

            {/* Tráfego Pago - Takes 3 cols */}
            <SpotlightCard delay={0.4} className="md:col-span-3 !bg-gollog border-none text-black overflow-hidden group shadow-xl">
              <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000 ease-out">
                <BarChart3 size={400} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Send className="text-black" size={36} />
                  <span className="px-4 py-1.5 bg-black/10 rounded-full font-bold text-xs tracking-widest uppercase backdrop-blur-sm border border-black/20">
                    Geração de Caixa
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-black mb-6">Motor de Tráfego Pago</h3>
                <p className="text-black/90 text-lg mb-8 max-w-xl font-medium">
                  Seu orçamento alocado matematicamente para gerar contatos diários de quem procura frete. Campanhas no Meta Ads (Instagram/Facebook).
                </p>
                <div className="mt-auto flex flex-wrap gap-4">
                  <span className="bg-black/10 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 border border-black/5">
                     <Crosshair size={18}/> Segmentação Hiper-Local
                  </span>
                  <span className="bg-black/10 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 border border-black/5">
                     <MonitorSmartphone size={18}/> Mensagens no WhatsApp
                  </span>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </Section>
    </>
  );
}
