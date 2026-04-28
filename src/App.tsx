import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useInView, animate } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, MonitorSmartphone, ShieldCheck, ArrowRight, Rocket, Zap, Crosshair, TrendingUp } from 'lucide-react';

// --- INTERACTIVE COMPONENTS --- //

const GridBackground = ({ color = "rgba(255, 90, 0, 0.05)" }: { color?: string }) => (
  <div className="absolute inset-0 pointer-events-none z-0" 
       style={{ backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
);

const BackgroundOrbs = () => (
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

const ArvenLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <img 
      src="/logo.png" 
      alt="Arven Assessoria de Marketing" 
      className="h-64 md:h-80 lg:h-96 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] brightness-110" 
    />
  </div>
);

const SpotlightCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
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
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string }) => {
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

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id={id} ref={ref} className={`min-h-[100svh] py-20 px-4 md:py-24 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative z-10 h-full w-full flex flex-col justify-center">
        {children}
      </motion.div>
    </section>
  );
};

const Counter = ({ value, duration = 2.5 }: { value: number, duration?: number }) => {
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

const CountdownTimer = () => {
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

const RevenueChart = () => {
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

// --- MAIN PORTFOLIO / PROPOSAL APP --- //

export default function App() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div className="bg-[#0d0d0d] text-slate-50 font-sans selection:bg-gollog selection:text-white overflow-x-hidden relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gollog z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <BackgroundOrbs />
      
      {/* 1. HERO SECTION (NEW PREMIUM DESIGN) */}
      <Section className="relative overflow-hidden min-h-screen bg-[#0d0d0d] !p-0">
        {/* Background Image - Responsive */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           {/* Desktop Image */}
           <img 
             src="/capa_fundo_topo.png" 
             alt="Capa Fundo Topo" 
             className="hidden md:block w-full h-full object-cover opacity-90"
           />
           {/* Mobile Image */}
           <img 
             src="/capa_fundo_mobile.png" 
             alt="Capa Fundo Mobile" 
             className="block md:hidden w-full h-full object-cover opacity-90"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 py-20 lg:py-0 gap-16 lg:gap-0">
          
          {/* Left Content */}
          <div className="flex-1 text-left">
            <FadeIn delay={0.2} direction="right">
              <h1 className="font-display flex flex-col mb-8">
                <span className="text-2xl md:text-4xl text-arven-yellow font-bold tracking-[0.2em] uppercase mb-2">Proposta</span>
                <span className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">COMERCIAL</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-300 font-light mb-12 max-w-xl leading-relaxed">
                Soluções estratégicas que <br className="hidden md:block"/> <span className="text-white font-medium">impulsionam resultados.</span>
              </p>

              <div className="h-1.5 w-24 bg-arven-yellow mb-16 rounded-full" />

              {/* Icon Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <Target className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Estratégia</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Personalizada</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-l-0 md:border-l border-white/10 md:pl-8">
                  <TrendingUp className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Foco em</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Resultados</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-l-0 md:border-l border-white/10 md:pl-8">
                  <Handshake className="text-arven-yellow" size={32} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Parceria e</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Confiança</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Logo Area */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <FadeIn delay={0.5} direction="left" className="relative">
              <div className="absolute inset-0 bg-arven-yellow/10 blur-[100px] rounded-full" />
              <ArvenLogo className="relative z-10 scale-110 md:scale-150 lg:scale-[1.8]" />
            </FadeIn>
          </div>
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
          >
            <FadeIn delay={1.5} direction="down">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold hidden md:block">Role para descobrir</span>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center p-1"
                >
                  <motion.div 
                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-arven-yellow rounded-full"
                  />
                </motion.div>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </Section>

      {/* 2. THE STATUS QUO / PERSUASION SECTION */}
      <Section id="desafio" className="bg-[#f8f9fa] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(0, 0, 0, 0.02)" />
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

      {/* 3. THE STRATEGY MACHINE (FUNNEL) */}
      <Section className="bg-[#0d0d0d] text-white relative border-t border-white/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(255, 90, 0, 0.05)" />
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

      {/* 4. DELIVERABLES (Bento Grid) */}
      <Section className="bg-[#f8f9fa] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(0, 0, 0, 0.02)" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gollog" />
              <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Escopo</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-black">Entregáveis Mensais</h2>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6 auto-rows-[minmax(300px,_auto)]">
            
            {/* Social Media - Takes 3 cols */}
            <SpotlightCard delay={0.1} className="md:col-span-3 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <MonitorSmartphone className="text-gollog" size={36} />
                <div className="flex flex-col items-end gap-1">
                  <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-black/5">
                    Presença Digital
                  </div>
                  <div className="text-[10px] font-bold text-gollog/60 mr-2">8-10 Posts/mês</div>
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold mb-4 text-black">Mídia Social que Comercializa</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-xl">
                Deixamos de lado as artes "poluídas". Trazemos o refinamento da GOLLOG nacional para a sua agência local com copys voltadas para venda e segurança.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Design</p>
                   <p className="text-sm font-bold text-slate-700 leading-tight">Artes B2B High-End & Identidade Visual</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Copywriting</p>
                   <p className="text-sm font-bold text-slate-700 leading-tight">Legendas Persuasivas & CTAs Diretas</p>
                </div>
              </div>
            </SpotlightCard>

            {/* LinkedIn - Takes 2 cols */}
            <SpotlightCard delay={0.2} className="md:col-span-2 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Handshake className="text-gollog" size={36} />
                <div className="px-3 py-1 bg-gollog/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gollog border border-gollog/10">
                  Business B2B
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-black">Ofensiva LinkedIn</h3>
              <p className="text-slate-500 mb-8">
                Posicionamento C-Level. Estruturamos a presença dos gestores para abrir portas no corporativo.
              </p>
              <div className="mt-auto space-y-3">
                 <div className="text-xs px-4 py-4 bg-slate-50 border border-black/5 rounded-2xl font-bold flex justify-between text-slate-600 group/item hover:bg-slate-100 transition-colors">
                   <span>Networking Mapeado</span> <ArrowRight size={18} className="text-gollog group-hover/item:translate-x-1 transition-transform"/>
                 </div>
                 <div className="text-xs px-4 py-4 bg-slate-50 border border-black/5 rounded-2xl font-bold flex justify-between text-slate-600 group/item hover:bg-slate-100 transition-colors">
                   <span>Prospecção Ativa</span> <ArrowRight size={18} className="text-gollog group-hover/item:translate-x-1 transition-transform"/>
                 </div>
              </div>
            </SpotlightCard>

            {/* Vídeos - Takes 2 cols */}
            <SpotlightCard delay={0.3} className="md:col-span-2 !bg-white !border-black/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Video className="text-gollog" size={36} />
                <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-black/5">
                  Engajamento
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-black">Reels Formato Dinâmico</h3>
              <p className="text-slate-500 mb-6">
                Atenção dura segundos. Editamos <strong>2 vídeos mensais</strong> a partir dos materiais imersivos da sua operação (cargas, frotas, bastidores).
              </p>
              <div className="mt-auto flex items-center gap-4 text-xs font-display text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-3 rounded-2xl w-full border border-black/5">
                 <Zap size={14} className="text-gollog" /> Ritmo • Viralidade • Autoridade
              </div>
            </SpotlightCard>

            {/* Tráfego Pago - Takes 3 cols */}
            <SpotlightCard delay={0.4} className="md:col-span-3 !bg-gollog border-none text-black overflow-hidden group shadow-xl">
              <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000 ease-out">
                <BarChart3 size={400} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Send className="text-black" size={36} />
                  <span className="px-4 py-1.5 bg-black/10 rounded-full font-bold text-xs tracking-widest uppercase backdrop-blur-sm border border-black/20">
                    Geração de Caixa
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-black mb-6">Motor de Tráfego Pago</h3>
                <p className="text-black/90 text-lg mb-8 max-w-xl font-medium">
                  Seu orçamento alocado matematicamente para gerar contatos diários de quem procura frete. Campanhas no Meta Ads (Instagram/Facebook).
                </p>
                <div className="mt-auto flex flex-wrap gap-4">
                  <span className="bg-black/10 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 border border-black/5">
                     <Crosshair size={18}/> Segmentação Hiper-Local
                  </span>
                  <span className="bg-black/10 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 border border-black/5">
                     <MonitorSmartphone size={18}/> Mensagens no WhatsApp
                  </span>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </Section>

      {/* 4. COMPARISON SECTION - NOW vs FUTURE */}
      <Section className="bg-[#f8f9fa] text-black relative border-t border-black/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(0, 0, 0, 0.02)" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <FadeIn className="text-center mb-16 md:mb-24">
             <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight mb-6">
                Onde você <span className="text-slate-300">está</span> <br className="hidden md:block"/> vs <span className="text-gollog">Para onde vamos.</span>
             </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
             <FadeIn delay={0.2} direction="right">
                <div className="bg-white border border-black/5 p-8 md:p-12 rounded-[3rem] h-full relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Zap size={120} strokeWidth={1} />
                   </div>
                   <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
                      Cenário Atual
                   </div>
                   <h3 className="font-display text-3xl font-bold mb-6">Hoje você está aqui</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem agência ou consultoria dedicada
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem estratégia de crescimento definida
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Sem clareza de como alcançar os R$ 400k
                      </li>
                      <li className="flex gap-3 text-slate-500 font-medium">
                         <span className="text-red-500 font-bold">✕</span> Dependência de indicações orgânicas
                      </li>
                   </ul>
                   <div className="mt-12 pt-8 border-t border-slate-100">
                      <p className="text-slate-400 text-sm italic">"Esperar o resultado sem estratégia é como dirigir no escuro."</p>
                   </div>
                </div>
             </FadeIn>

             <FadeIn delay={0.4} direction="left">
                <div className="bg-[#0d0d0d] text-white p-8 md:p-12 rounded-[3rem] h-full relative overflow-hidden group border border-white/5 shadow-2xl">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Rocket size={120} strokeWidth={1} className="text-gollog" />
                   </div>
                   <div className="inline-block px-4 py-1 bg-gollog/10 rounded-full text-xs font-black uppercase tracking-widest text-gollog mb-8">
                      Com Minha Assessoria
                   </div>
                   <h3 className="font-display text-3xl font-bold mb-6 text-white">Com minha Assessoria</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Determinação e constância diária
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> <strong className="text-white">O Catalisador Estratégico</strong> que faltava para a escala
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Estratégia multicanal (Road & Air)
                      </li>
                      <li className="flex gap-3 text-slate-300 font-medium">
                         <span className="text-gollog font-bold">✓</span> Trabalho em conjunto para os R$ 400k
                      </li>
                   </ul>
                   <div className="mt-12 pt-8 border-t border-white/10">
                      <p className="text-slate-400 text-sm italic">"Eu trago o método que faltava para transformar sua força operacional em faturamento real."</p>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4.5. THE SHARED GOAL - 400K REVENUE */}
      <Section className="bg-[#0d0d0d] text-white relative border-t border-white/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(255, 90, 0, 0.05)" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-gollog" />
                <span className="font-display font-bold tracking-widest text-slate-500 uppercase text-sm">Visão Estratégica</span>
              </div>
              <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
                A Jornada aos <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog to-[#ff9000]">R$ 400.000,00</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                Flávio me deu a meta, eu trouxe a estratégia. Sair dos R$ 180k atuais e chegar aos <strong className="text-gollog">400 mil</strong> não é um "talvez", é uma questão de <strong className="text-white underline decoration-gollog underline-offset-8">método e execução.</strong>
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gollog/10 flex items-center justify-center shrink-0">
                    <Handshake className="text-gollog" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Esforço Conjunto</h4>
                    <p className="text-sm text-slate-500">O marketing é o combustível (gera as oportunidades), mas o motor é a sua equipe comercial. Precisamos de <strong className="text-slate-300">atendimento ágil e prospecção ativa</strong> para converter cada lead em faturamento.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Escalabilidade</h4>
                    <p className="text-sm text-slate-500">A meta é ambiciosa, mas <strong className="text-slate-300">plausível.</strong> Com o aumento do volume de orçamentos, o time precisa estar preparado para o novo patamar de demanda rodoviária e aérea.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gollog" />
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <h3 className="text-black font-display text-2xl font-black">Projeção de Crescimento</h3>
                   <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Faturamento Mensal (R$)</p>
                 </div>
                 <div className="text-right">
                   <p className="text-gollog font-display text-4xl font-black">+122%</p>
                   <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Expectativa de ROI</p>
                 </div>
               </div>
               
               <RevenueChart />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4.5. THE VALUE ANCHOR */}
      <Section className="bg-[#0d0d0d] text-white relative !min-h-[70svh] border-t border-white/5 selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(255, 90, 0, 0.05)" />
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

      {/* 5. INVESTMENT & TERMS - THE BIG CLOSING */}
      <Section className="bg-[#f8f9fa] text-black relative border-t border-black/5 overflow-hidden selection:bg-gollog selection:text-white">
        <GridBackground color="rgba(0, 0, 0, 0.02)" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-gollog" />
                <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Acordo Comercial</span>
                <div className="h-[2px] w-8 bg-gollog" />
              </div>
              <h2 className="font-display text-4xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tight">
                Variação <span className="italic text-gollog pr-2">Assimétrica.</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto px-4 leading-relaxed">
                Investir R$ 2.500,00 para buscar um faturamento de <strong className="text-black">R$ 400.000,00</strong> não é um custo, é a decisão mais lógica que você tomará este ano. O risco de ficar onde você está hoje é infinitamente maior.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto relative px-2 md:px-0">
            
            {/* The Price Card */}
            <FadeIn delay={0.2} direction="up" className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-gollog/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="bg-white border border-black/5 p-8 md:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gollog to-gollog/50" />
                
                <div className="mb-10">
                  <p className="font-display text-slate-400 uppercase tracking-[0.2em] text-sm font-bold mb-6 flex items-center gap-3">
                     <CheckCircle2 size={16} className="text-gollog"/> Pacote Agency Premium
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-3xl font-bold text-gollog mt-2 md:mt-4">R$</span>
                    <span className="font-display text-[4.5rem] md:text-[7.5rem] font-black tracking-tighter leading-none text-black">
                      <Counter value={2500} />
                    </span>
                    <span className="text-xl md:text-2xl text-slate-400 font-light self-end pb-2 md:pb-6 ml-2">/mês</span>
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

      {/* 6. FINAL CTA & URGENCY */}
      <footer className="relative bg-[#0d0d0d] py-32 px-6 overflow-hidden">
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
              href="https://wa.me/5546999847839?text=Ol%C3%A1%21%20Vi%20a%20proposta%20da%20GOLLOG%20e%20gostaria%20de%20aceitar%20a%20oferta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gollog text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-lg md:text-2xl font-black shadow-[0_20px_50px_rgba(255,90,0,0.3)] hover:shadow-[0_20px_70px_rgba(255,90,0,0.5)] transition-all group"
            >
              ACEITAR OFERTA AGORA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </motion.a>

            <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="font-display font-black text-xl tracking-tighter text-white">Willian Winnicios Cardoso</p>
                  <p className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-gollog">Proprietário da Arven</p>
               </div>
               <ArvenLogo className="scale-75 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
               <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                  © 2026 Arven Assessoria
               </p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
