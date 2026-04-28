import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useInView, animate } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';

// --- INTERACTIVE COMPONENTS --- //

export const GridBackground = ({ color = "rgba(255, 90, 0, 0.05)" }: { color?: string }) => (
  <div className="absolute inset-0 pointer-events-none z-0" 
       style={{ backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
);

export const LightDepthBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gollog/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-slate-400/20 rounded-full blur-[150px]" />
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#00000008 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
  </div>
);

export const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      animate={{ 
        x: [0, 100, 0], 
        y: [0, 50, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gollog/10 blur-[120px] rounded-full"
    />
    <motion.div 
      animate={{ 
        x: [0, -100, 0], 
        y: [0, -50, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full"
    />
  </div>
);

export const ArvenLogo = ({ className = "", priority = false }: { className?: string, priority?: boolean }) => (
  <div className={`select-none ${className}`}>
    <img 
      src="/logo.png" 
      alt="Arven Assessoria de Marketing" 
      className="h-64 md:h-80 lg:h-96 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] brightness-110" 
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
    />
  </div>
);

export const SpotlightCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-gollog/40 hover:shadow-gollog/5 print:opacity-100 print:transform-none group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255, 90, 0, 0.12), transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 print:hidden"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 90, 0, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 p-6 md:p-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`print:opacity-100 print:transform-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Section = ({ children, bg, className = "", id = "" }: { children: React.ReactNode, bg?: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id={id} ref={ref} className={`min-h-[100svh] py-20 px-6 md:py-24 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden w-full ${className}`}>
      {bg && <div className="absolute inset-0 z-0">{bg}</div>}
      <div className="relative z-10 h-full w-full flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
};

export const Counter = ({ value, duration = 2.5 }: { value: number, duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('pt-BR'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // End of the current month at 23:59:59
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center font-display">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/5 p-3 md:p-6 rounded-2xl md:rounded-3xl min-w-[70px] md:min-w-[110px]">
          <div className="text-2xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
            {item.value.toString().padStart(2, '0')}
          </div>
          <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gollog font-black mt-2">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export const RevenueChart = () => {
  const data = [
    { month: 'Maio', value: 180, current: true },
    { month: 'Jun', value: 205 },
    { month: 'Jul', value: 240 },
    { month: 'Ago', value: 285 },
    { month: 'Set', value: 330 },
    { month: 'Out', value: 365 },
    { month: 'Nov', value: 390 },
    { month: 'Dez', value: 400, goal: true },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px] flex items-end gap-1.5 md:gap-4 px-2 md:px-4 pt-16 relative">
      {/* Background Lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05]">
        {[...Array(6)].map((_, i) => <div key={i} className="w-full h-px bg-black" />)}
      </div>

      {data.map((item, index) => (
        <div key={item.month} className="flex-1 flex flex-col items-center gap-4 group relative z-10 h-full">
          <div className="relative w-full flex flex-col items-center justify-end h-full">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: `${(item.value / 400) * 100}%` }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full max-w-[45px] rounded-t-xl md:rounded-t-2xl relative transition-all duration-500 group-hover:scale-x-110 ${item.goal ? 'bg-gradient-to-t from-gollog to-[#ff9000] shadow-[0_0_30px_rgba(255,90,0,0.4)]' : item.current ? 'bg-slate-900 shadow-xl' : 'bg-slate-400/30'}`}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black text-white text-[10px] md:text-xs font-black px-2 py-1 rounded-lg shadow-xl z-20">
                R$ {item.value}k
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-center shrink-0">
             <span className={`text-[9px] md:text-xs font-black uppercase tracking-tighter ${item.goal ? 'text-gollog font-black' : 'text-slate-500'}`}>{item.month}</span>
             {item.current && <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">Atual</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

