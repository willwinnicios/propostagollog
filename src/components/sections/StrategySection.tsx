import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function StrategySection({ scrollYProgress }: any) {
  return (
    <>
      {/* 3. THE STRATEGY MACHINE (FUNNEL) */}
      <Section className="bg-[#0d0d0d] text-white relative border-t border-white/5 selection:bg-gollog selection:text-white" bg={<GridBackground color="rgba(255, 90, 0, 0.05)" />}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gollog/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FadeIn className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight mb-6">
              A Máquina de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog via-white to-gollog">Resultados.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto px-4 leading-relaxed">
              Não fazemos "posts bonitos". Construímos ativos digitais que trabalham 24h por dia para interceptar orçamentos e gerar caixa para a GOLLOG.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
            <SpotlightCard delay={0.1}>
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="text-gollog" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">1. Atração Ativa</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                Utilizamos o Meta Ads para interceptar empresas e pessoas físicas que precisam de agilidade. Impacto direto na sua região de cobertura.
              </p>
              <div className="text-sm font-display text-gollog uppercase tracking-widest font-bold">Foco: Volume & Leads</div>
            </SpotlightCard>

            <SpotlightCard delay={0.3}>
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="text-gollog" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">2. Retenção & Confiança</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                Criamos um Instagram/Facebook impecáveis. Ao clicar no anúncio, o cliente vê uma GOLLOG estruturada, moderna e confiável.
              </p>
              <div className="text-sm font-display text-slate-500 uppercase tracking-widest font-bold">Foco: Autoridade</div>
            </SpotlightCard>

            <SpotlightCard delay={0.5}>
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-gollog" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">3. Conversão B2B</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                Ataque direto no LinkedIn. Posicionamos sua unidade para captar contratos de logística fracionada com tomadores de decisão.
              </p>
              <div className="text-sm font-display text-gollog uppercase tracking-widest font-bold">Foco: Ticket Médio</div>
            </SpotlightCard>
          </div>
        </div>
      </Section>
    </>
  );
}
