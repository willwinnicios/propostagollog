import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function InvestmentSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 5. INVESTMENT & TERMS - THE BIG CLOSING */}
      <Section className="bg-[#f0f2f5] text-black relative border-t border-black/5 overflow-hidden selection:bg-gollog selection:text-white" bg={<LightDepthBackground />}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-gollog" />
                <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Acordo Comercial</span>
                <div className="h-[2px] w-8 bg-gollog" />
              </div>
              <h2 className="font-display text-4xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tight leading-tight">
                Variação <span className="italic text-gollog pr-2">Assimétrica.</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                Investir R$ 2.500,00 para buscar um faturamento de <strong className="text-black">R$ 400.000,00</strong> não é um custo, é a decisão mais lógica que você tomará este ano. O risco de ficar onde você está hoje é infinitamente maior.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto relative px-2 md:px-0">
            
            {/* The Price Card */}
            <FadeIn delay={0.2} direction="up" className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-gollog/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="bg-white border border-black/5 p-6 md:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gollog to-gollog/50" />
                
                <div className="mb-10">
                  <p className="font-display text-slate-400 uppercase tracking-[0.2em] text-sm font-bold mb-6 flex items-center gap-3">
                     <CheckCircle2 size={16} className="text-gollog"/> Pacote Agency Premium
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-2xl font-bold text-gollog mt-2 md:mt-4">R$</span>
                    <span className="font-display text-[3.8rem] md:text-[7.5rem] font-black tracking-tighter leading-none text-black">
                      <Counter value={2500} />
                    </span>
                    <span className="text-lg md:text-2xl text-slate-400 font-light self-end pb-2 md:pb-6 ml-2">/mês</span>
                  </div>
                </div>

                <div className="grid gap-2 text-slate-600 font-bold mt-auto">
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Planejamento Estratégico Mensal
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Social Media (8 a 10 Posts High-End)
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Edição de Vídeos (2 Reels Dinâmicos)
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Ofensiva LinkedIn B2B (Prospecção)
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Gestão de Tráfego Pago (Ads)
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Configuração de API de Conversão
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Relatórios de Métricas & Leads
                  </div>
                  <div className="bg-slate-50 py-3 px-5 rounded-xl flex items-center gap-3 border border-black/5 text-[10px] md:text-xs uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-gollog shrink-0" /> Suporte VIP via WhatsApp
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* The "No Risk" Guarantee -> Super Persuasive */}
            <FadeIn delay={0.4} direction="up" className="lg:col-span-5 w-full">
              <div className="flex flex-col gap-6 h-full">
                
                <SpotlightCard className="!p-8 md:!p-10 !rounded-[2.5rem] !bg-white !border-black/5 shadow-lg flex-1 text-black">
                  <ShieldCheck className="text-gollog mb-5 opacity-20 absolute right-8 top-8" size={80} />
                  <div className="inline-block px-3 py-1 bg-gollog/10 text-gollog border border-gollog/20 font-display font-bold text-xs tracking-widest uppercase rounded-lg mb-6">
                    Primeiros 3 Meses
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-black mb-4 relative z-10 tracking-tight">Validação sem Risco</h4>
                  <p className="text-slate-500 text-sm md:text-base relative z-10 leading-relaxed font-light">
                    Pagamento antecipado no mês. <strong className="text-black font-medium">Não amarramos clientes com multas.</strong> Se no trimestre inicial você não enxergar o valor da operação, finalizamos o serviço tranquilamente. Sem burocracia.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="!p-8 md:!p-10 !rounded-[2.5rem] !bg-white !border-black/5 shadow-lg flex-1 text-black">
                  <Handshake className="text-slate-200 mb-5 opacity-50 absolute right-8 top-8" size={80} />
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 border border-black/5 font-display font-bold text-xs tracking-widest uppercase rounded-lg mb-6">
                    A Partir do 4º Mês
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-black mb-4 relative z-10 tracking-tight">Partnership Anual</h4>
                  <p className="text-slate-500 text-sm md:text-base relative z-10 leading-relaxed font-light">
                    Após provarmos o retorno, desenhamos um contrato de 12 meses. O detalhe: <strong className="text-black font-medium">se o serviço prestado cair de qualidade, você pode cancelar.</strong> Mantemos a relação pautada em entregas.
                  </p>
                </SpotlightCard>
                
              </div>
            </FadeIn>

          </div>
        </div>
      </Section>
    </>
  );
}
