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
  const { scrollYProgress, scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], [-20, 0]);

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
        className="fixed top-0 left-0 right-0 z-[90] bg-[#141414] border-b border-white/10 shadow-xl md:top-4 md:left-8 md:right-8 md:rounded-3xl overflow-hidden"
      >
        <div className="relative z-10 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-5">
            <img 
              src="/logo.png" 
              alt="Arven" 
              className="h-6 md:h-10 object-contain brightness-0 invert" 
            />
            <div className="h-6 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gollog leading-none">Proposta</span>
              <span className="text-[11px] md:text-sm font-bold uppercase tracking-tight text-white mt-0.5">Comercial</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#investimento" 
              className="bg-gollog hover:bg-white text-black px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300"
            >
              Fechar Agora
            </a>
          </div>
        </div>
      </motion.header>

      <BackgroundOrbs />
      
      <Suspense fallback={<div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gollog border-t-transparent rounded-full animate-spin" /></div>}>
        {/* Hero Section */}
        <HeroSection scrollYProgress={scrollYProgress} />

        {/* Content Sections */}
        <div className="relative z-10 bg-[#0d0d0d] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[2rem] md:rounded-t-[5rem] -mt-10 overflow-hidden">
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
