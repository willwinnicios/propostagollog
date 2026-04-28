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

  return (
    <div className="bg-[#0d0d0d] text-slate-50 font-sans selection:bg-gollog selection:text-white overflow-x-hidden relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gollog z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <BackgroundOrbs />
      
      <Suspense fallback={<div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gollog border-t-transparent rounded-full animate-spin" /></div>}>
        <HeroSection scrollYProgress={scrollYProgress} />
        <StatusQuoSection />
        <StrategySection />
        <DeliverablesSection />
        <ComparisonSection />
        <GoalSection />
        <ValueAnchorSection />
        <InvestmentSection />
        <FinalCtaSection />
      </Suspense>
    </div>
  );
}
