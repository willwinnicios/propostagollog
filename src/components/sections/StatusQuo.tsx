import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useInView, animate } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function StatusQuo({ scrollYProgress }: any) {
  return (
    <>
      {/* 2. THE STATUS QUO / PERSUASION SECTION */}
      <Section id="desafio" className="bg-[#f0f2f5] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white overflow-hidden" bg={<LightDepthBackground />}>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-gollog" />
                  <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Cenário Atual</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-[5.5rem] font-bold mb-8 leading-[1.05] tracking-tight text-black">
                  Seu frete está <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog to-[#ff8c00]">invisível?</span>
                </h2>
                <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed mb-10">
                  <p>
                    O mercado não compra de quem tem o melhor caminhão. Ele compra de quem é <strong className="text-black font-black uppercase">lembrado primeiro</strong> quando a carga precisa sair — seja no <strong className="text-gollog">rodoviário ou no aéreo.</strong>
                  </p>
                  <p>
                    Se você não está no feed do seu cliente, você simplesmente não existe para a decisão dele. Minha meta é transformar sua unidade GOLLOG na <strong className="text-black">única opção lógica</strong> na mente do transportador regional.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            <div className="relative">
              <FadeIn delay={0.3} direction="left">
                <div className="grid gap-6">
                  <div className="bg-white border border-black/5 p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-gollog/30 transition-colors shadow-sm">
                    <TrendingUp className="text-gollog" size={32} />
                    <div>
                      <h4 className="font-display text-3xl font-bold text-black">Posicionamento</h4>
                      <p className="text-slate-500 mt-2">Tomar a liderança de marca regional frente aos concorrentes tradicionais.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-black/5 p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-gollog/30 transition-colors shadow-sm lg:translate-x-12">
                    <Zap className="text-gollog" size={32} />
                    <div>
                      <h4 className="font-display text-3xl font-bold text-black">Velocidade Híbrida</h4>
                      <p className="text-slate-500 mt-2">Explorar a força do modal <strong className="text-black">aéreo e rodoviário</strong> para atrair contratos de alta urgência.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-black/5 p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-gollog/30 transition-colors shadow-sm">
                    <Target className="text-gollog" size={32} />
                    <div>
                      <h4 className="font-display text-3xl font-bold text-black">Conversão</h4>
                      <p className="text-slate-500 mt-2">Drenar tráfego qualificado de pesquisas e redes sociais direto para o seu WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
