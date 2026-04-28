import React from 'react';
import { motion, useTransform } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';
import { Section, FadeIn, GridBackground, LightDepthBackground, SpotlightCard, Counter, CountdownTimer, RevenueChart, ArvenLogo } from '../ui/Shared';

export default function FinalCtaSection({ scrollYProgress }: any) {
  return (
    <>
      {/* 6. FINAL CTA & URGENCY */}
      <footer id="aceitar-oferta" className="relative bg-[#0d0d0d] py-32 px-6 overflow-hidden">
        <GridBackground color="rgba(255, 90, 0, 0.03)" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 bg-gollog/10 text-gollog border border-gollog/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
              Oferta com Tempo Limitado
            </div>
            
            <h2 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase text-white">
              Domínio ou <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog to-white">Estagnação?</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-medium mb-10 text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Enquanto você lê isso, a demanda por frete na sua região está sendo drenada por quem está visível. <strong className="text-white">Vamos tomar o que é seu por direito?</strong>
            </p>
            
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gollog mb-10 opacity-80">
              Esta proposta e as condições comerciais apresentadas expiram em:
            </p>

            <div className="mb-20">
              <CountdownTimer />
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 20px 50px rgba(255,90,0,0.2)", "0 20px 80px rgba(255,90,0,0.5)", "0 20px 50px rgba(255,90,0,0.2)"] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              href="https://wa.me/5546999847839?text=Ol%C3%A1%21%20Vi%20a%20proposta%20da%20GOLLOG%20e%20gostaria%20de%20aceitar%20a%20oferta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gollog text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-lg md:text-2xl font-black shadow-[0_20px_50px_rgba(255,90,0,0.3)] transition-all group"
            >
              ACEITAR OFERTA AGORA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </motion.a>

            <div className="mt-24 pt-12 border-t border-white/5 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gollog/20 to-transparent" />
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
                     <p className="font-display font-black text-2xl tracking-tighter text-white group-hover:text-gollog transition-colors duration-500">Willian Winnicios Cardoso</p>
                     <p className="font-sans font-bold text-[10px] tracking-[0.4em] uppercase text-gollog/80 mt-1">Proprietário da Arven</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <ArvenLogo className="scale-90 md:scale-100 opacity-100 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,90,0,0.3)]" />
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gollog/20 hover:border-gollog/40 transition-all cursor-pointer">
                          <Target size={14} className="text-white/60" />
                       </div>
                       <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gollog/20 hover:border-gollog/40 transition-all cursor-pointer">
                          <BarChart3 size={14} className="text-white/60" />
                       </div>
                       <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gollog/20 hover:border-gollog/40 transition-all cursor-pointer">
                          <MonitorSmartphone size={14} className="text-white/60" />
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-2">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                       © 2026 Arven Assessoria
                    </p>
                    <div className="h-px w-12 bg-white/10" />
                    <p className="text-slate-600 text-[9px] font-medium uppercase tracking-widest">
                       All rights reserved
                    </p>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </>
  );
}
