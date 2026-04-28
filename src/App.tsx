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
        className="fixed top-0 left-0 right-0 z-[90] bg-[#0d0d0d]/80 backdrop-blur-lg border-b border-white/10 px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Arven" className="h-8 md:h-10 object-contain" />
          <div className="h-6 w-px bg-white/20 hidden md:block" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-arven-yellow">Proposta Comercial</span>
        </div>
        <div className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-widest hidden sm:block">GOLLOG B2B</div>
      </motion.header>

      <BackgroundOrbs />
      
      <Suspense fallback={<div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gollog border-t-transparent rounded-full animate-spin" /></div>}>
        {/* Hero is sticky so others scroll over it */}
        <div className="sticky top-0 z-0">
          <HeroSection scrollYProgress={scrollYProgress} />
        </div>

        {/* Following sections scroll over the Hero with higher z-index */}
        <div className="relative z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
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
