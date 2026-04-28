import React, { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BackgroundOrbs } from './components/ui/Shared';

// Lazy Load Sections
const HeroSection = React.lazy(() => import('./components/sections/HeroSection'));
const StatusQuoSection = React.lazy(() => import('./components/sections/StatusQuoSection'));
const StrategySection = React.lazy(() => import('./components/sections/StrategySection'));
const DeliverablesSection = React.lazy(() => import('./components/sections/DeliverablesSection'));
const ComparisonSection = React.lazy(() => import('./components/sections/ComparisonSection'));
const GoalSection = React.lazy(() => import('./components/sections/GoalSection'));
const ValueAnchorSection = React.lazy(() => import('./components/sections/ValueAnchorSection'));
const InvestmentSection = React.lazy(() => import('./components/sections/InvestmentSection'));
const FinalCtaSection = React.lazy(() => import('./components/sections/FinalCtaSection'));

export default function App() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.05, 0.1], [-20, -20, 0]);

  return (
    <div className="bg-[#0d0d0d] text-slate-50 font-sans selection:bg-gollog selection:text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gollog z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Header (Menu) */}
      <motion.header 
        style={{ opacity: headerOpacity, y: headerY }}
        className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-[90] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      >
        {/* Solid Background (No Transparency) */}
        <div className="absolute inset-0 bg-[#141414]" />
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-full -left-full w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.1)_0%,transparent_50%)] pointer-events-none"
        />
        
        <div className="relative z-10 px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="relative group">
              <img 
                src="/logo.png" 
                alt="Arven" 
                className="h-7 md:h-10 object-contain brightness-0 invert" 
              />
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gollog to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gollog leading-none">Proposta</span>
              <span className="text-[12px] md:text-sm font-bold uppercase tracking-tight text-white mt-0.5">Comercial</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Projeto</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">GOLLOG B2B</span>
            </div>
            <a 
              href="#investimento" 
              className="bg-gollog hover:bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] active:scale-95"
            >
              Fechar Agora
            </a>
          </div>
        </div>
      </motion.header>

      <BackgroundOrbs />
      
      <Suspense fallback={<div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gollog border-t-transparent rounded-full animate-spin" /></div>}>
        {/* Hero is sticky so others scroll over it */}
        <div className="sticky top-0 z-0">
          <HeroSection scrollYProgress={scrollYProgress} />
        </div>

        {/* Following sections scroll over the Hero with higher z-index and rounded corners */}
        <div className="relative z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)] rounded-t-[2.5rem] md:rounded-t-[5rem] overflow-hidden bg-[#0d0d0d]">
          <StatusQuoSection />
          <StrategySection />
          <DeliverablesSection />
          <ComparisonSection />
          <GoalSection />
          <ValueAnchorSection />
          <InvestmentSection />
          <FinalCtaSection />
        </div>
      </Suspense>
    </div>
  );
}
