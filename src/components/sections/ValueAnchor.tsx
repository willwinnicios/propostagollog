import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useInView, animate } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function ValueAnchor({ scrollYProgress }: any) {
  return (
    <>
      {/* 4.5. THE VALUE ANCHOR */}
      <Section className="bg-[#0d0d0d] text-white relative !min-h-[70svh] border-t border-white/5 selection:bg-gollog selection:text-white" bg={<GridBackground color="rgba(255, 90, 0, 0.05)" />}>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_transparent_0%,_gollog_100%)]" />
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          <FadeIn>
            <div className="w-24 h-24 bg-gollog/10 flex items-center justify-center rounded-[2rem] transform rotate-3 mb-10 mx-auto">
              <Target size={48} className="text-gollog" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1] text-slate-500 mb-6 uppercase tracking-widest">
              Uma reflexão rápida para o seu negócio:
            </h2>
            
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-8 text-white max-w-6xl mx-auto tracking-tight">
              "Se eu te entregasse de <span className="text-gollog italic">10 a 20 empresas</span> interessadas na sua solução <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-gollog px-1">por mês</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gollog/20 rounded-sm" />
              </span>, quanto valeria meu serviço de <br className="hidden md:block" />
              <span className="underline decoration-gollog decoration-2 underline-offset-[8px]">assessoria de marketing?</span>"
            </h3>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
