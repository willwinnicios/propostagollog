import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Target, BarChart3, Video, Send, CheckCircle2, ChevronDown, Handshake, TrendingUp, MonitorSmartphone, ShieldCheck, ArrowRight, PackageOpen, Rocket, Zap, Crosshair } from 'lucide-react';

// --- INTERACTIVE COMPONENTS --- //

const ArvenLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <img 
      src="/logo.png" 
      alt="Arven Assessoria de Marketing" 
      className="h-48 md:h-56 object-contain drop-shadow-2xl mix-blend-screen" 
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] print:opacity-100 print:transform-none ${className}`}
    >
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`print:opacity-100 print:transform-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-[100svh] py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative ${className}`}>
    {children}
  </section>
);

// --- MAIN PORTFOLIO / PROPOSAL APP --- //

export default function App() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div className="bg-black text-slate-50 font-sans selection:bg-gollog selection:text-white overflow-x-hidden relative">
      <div className="absolute inset-0 bg-noise z-50 pointer-events-none" />
      
      {/* 1. HERO SECTION (CINEMATIC) */}
      <Section className="relative overflow-hidden items-start md:items-center text-left md:text-center justify-center">
        {/* Cinematic Backdrop */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0 opacity-30 print:hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop" 
            alt="Logística" 
            className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gollog/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        <motion.div style={{ y: yContent }} className="max-w-6xl mx-auto w-full z-10 relative print:mt-0 flex flex-col items-center justify-center min-h-[70svh]">
          <FadeIn delay={0.1} direction="down" className="mb-10 lg:mb-12">
            <ArvenLogo />
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up" className="flex flex-col items-center text-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gollog to-transparent mb-10 opacity-50"></div>
            
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-slate-400 font-light tracking-[0.2em] md:tracking-[0.4em] uppercase leading-loose">
              Proposta de<br className="md:hidden"/>
              <strong className="text-white font-bold ml-0 md:ml-4 tracking-[0.1em] md:tracking-[0.2em] block md:inline mt-4 md:mt-0">Assessoria de Marketing</strong>
            </h1>
            
            <div className="mt-12 px-6 ml-1 py-3 border border-white/10 rounded-full bg-black/40 backdrop-blur-md shadow-2xl">
              <p className="text-xs md:text-sm font-sans tracking-[0.3em] text-slate-400 uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gollog"></span>
                Exclusivo para <strong className="text-white font-bold ml-1">GOLLOG</strong>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.7} className="mt-24 print:hidden absolute bottom-0 lg:-bottom-20">
            <a 
              href="#desafio"
              className="flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110 text-white/50 hover:text-white"
            >
              <ChevronDown size={24} />
            </a>
          </FadeIn>
        </motion.div>
      </Section>

      {/* 2. THE STATUS QUO / PERSUASION SECTION */}
      <Section id="desafio" className="bg-[#020202] relative border-t border-white/5">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-gollog" />
                  <span className="font-display font-bold tracking-widest text-slate-500 uppercase text-sm">O Cenário Atual</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
                  Seu frete está <br/>
                  <span className="text-[#333]">invisível?</span>
                </h2>
                <div className="space-y-6 text-xl text-slate-400 font-light leading-relaxed mb-10">
                  <p>
                    O mercado não compra de quem tem o melhor caminhão ou o melhor galpão. Ele compra de quem é <strong className="text-white font-medium">lembrado primeiro</strong> quando a necessidade de envio surge.
                  </p>
                  <p>
                    Hoje, a jornada comercial (B2B e B2C) acontece nos feeds e stories. Nossa meta não é apenas "fazer posts bonitos", mas construir uma <strong>arquitetura de atração</strong>.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            {/* Minimalist Stat Data Display */}
            <div className="relative">
              <FadeIn delay={0.3} direction="left">
                <div className="grid gap-6">
                  <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-gollog/30 transition-colors">
                    <TrendingUp className="text-gollog" size={32} />
                    <div>
                      <h4 className="font-display text-4xl font-bold text-white">Posicionamento</h4>
                      <p className="text-slate-500 mt-2">Tomar a liderança de marca regional frente aos concorrentes tradicionais.</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-gollog/30 transition-colors lg:translate-x-12">
                    <Target className="text-gollog" size={32} />
                    <div>
                      <h4 className="font-display text-4xl font-bold text-white">Conversão</h4>
                      <p className="text-slate-500 mt-2">Drenar tráfego qualificado de pesquisas e redes sociais direto para o seu WhatsApp/Balcão.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. THE STRATEGY MACHINE (FUNNEL) */}
      <Section className="bg-black relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gollog/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FadeIn className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              A Máquina de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gollog to-gollog-light">Vendas.</span>
            </h2>
            <p className="text-2xl text-slate-400 font-light max-w-3xl mx-auto">
              Como vamos estruturar o ecossistema digital da GOLLOG para gerar orçamentos diariamente.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <SpotlightCard delay={0.1}>
              <div className="w-16 h-16 bg-gollog/10 border border-gollog/20 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="text-gollog" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">1. Atração Ativa</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                Utilizamos o Meta Ads para interceptar empresas e pessoas físicas que precisam de agilidade. Impacto direto na sua região de cobertura.
              </p>
              <div className="text-sm font-display text-gollog uppercase tracking-wider font-bold">Foco: Volume & Leads</div>
            </SpotlightCard>

            <SpotlightCard delay={0.3}>
              <div className="w-16 h-16 bg-slate-800/50 border border-slate-700/50 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="text-slate-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">2. Retenção & Confiança</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                Criamos um Instagram/Facebook impecáveis. Ao clicar no anúncio, o cliente vê uma GOLLOG estruturada, moderna e confiável.
              </p>
              <div className="text-sm font-display text-slate-500 uppercase tracking-wider font-bold">Foco: Autoridade</div>
            </SpotlightCard>

            <SpotlightCard delay={0.5}>
              <div className="w-16 h-16 bg-gollog/10 border border-gollog/20 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-gollog" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">3. Conversão B2B</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                Ataque direto no LinkedIn. Posicionamos sua unidade para captar contratos de logística fracionada com tomadores de decisão.
              </p>
              <div className="text-sm font-display text-gollog uppercase tracking-wider font-bold">Foco: Ticket Médio</div>
            </SpotlightCard>
          </div>
        </div>
      </Section>

      {/* 4. DELIVERABLES (Bento Grid) */}
      <Section className="bg-[#020202] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gollog" />
              <span className="font-display font-bold tracking-widest text-slate-500 uppercase text-sm">O Escopo</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Entregáveis Mensais</h2>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6 auto-rows-[minmax(300px,_auto)]">
            
            {/* Social Media - Takes 3 cols */}
            <SpotlightCard delay={0.1} className="md:col-span-3">
              <MonitorSmartphone className="text-gollog mb-6" size={36} />
              <h3 className="font-display text-3xl font-bold mb-4">Mídia Social que Comercializa</h3>
              <p className="text-slate-400 text-lg mb-8 max-w-xl">
                Deixamos de lado as artes "poluídas". Trazemos o refinamento da GOLLOG nacional para a sua agência local com copys voltadas para venda e segurança.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 mt-auto">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gollog shrink-0" size={20} /> <span>8 a 10 Posts High-End/mês</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gollog shrink-0" size={20} /> <span>Copywriting Persuasivo</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gollog shrink-0" size={20} /> <span>Planejamento Institucional</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gollog shrink-0" size={20} /> <span>Aprovação Ágil</span></li>
              </ul>
            </SpotlightCard>

            {/* LinkedIn - Takes 2 cols */}
            <SpotlightCard delay={0.2} className="md:col-span-2 bg-blue-950/10">
              <Handshake className="text-blue-500 mb-6" size={36} />
              <h3 className="font-display text-2xl font-bold mb-4">Ofensiva LinkedIn</h3>
              <p className="text-slate-400 mb-8">
                Posicionamento C-Level. Estruturamos a presença dos gestores para abrir portas no corporativo (indústrias, e-commerces, distribuidores).
              </p>
              <div className="mt-auto space-y-3">
                 <div className="text-sm px-4 py-3 bg-white/5 rounded-xl border border-white/5 font-medium flex justify-between">
                   <span>Networking Mapeado</span> <ArrowRight size={18} className="text-blue-500"/>
                 </div>
                 <div className="text-sm px-4 py-3 bg-white/5 rounded-xl border border-white/5 font-medium flex justify-between">
                   <span>Fechamento B2B</span> <ArrowRight size={18} className="text-blue-500"/>
                 </div>
              </div>
            </SpotlightCard>

            {/* Vídeos - Takes 2 cols */}
            <SpotlightCard delay={0.3} className="md:col-span-2">
              <Video className="text-gollog mb-6" size={36} />
              <h3 className="font-display text-2xl font-bold mb-4">Reels Formato Dinâmico</h3>
              <p className="text-slate-400 mb-6">
                Atenção dura segundos. Editamos <strong>2 vídeos mensais</strong> a partir dos materiais imersivos da sua operação (cargas, frotas, bastidores).
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-xs font-display text-slate-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg w-fit">
                 Ritmo • Engajamento • Viralidade
              </div>
            </SpotlightCard>

            {/* Tráfego Pago - Takes 3 cols */}
            <SpotlightCard delay={0.4} className="md:col-span-3 !bg-gollog border-none text-white overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000 ease-out">
                <BarChart3 size={400} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Send className="text-white" size={36} />
                  <span className="px-4 py-1.5 bg-black/20 rounded-full font-bold text-xs tracking-widest uppercase backdrop-blur-sm border border-white/20">
                    Geração de Caixa
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-black mb-6">Motor de Tráfego Pago</h3>
                <p className="text-white/90 text-lg mb-8 max-w-xl font-medium">
                  Seu orçamento alocado matematicamente para gerar contatos diários de quem procura frete. Campanhas no Meta Ads (Instagram/Facebook).
                </p>
                <div className="mt-auto flex flex-wrap gap-4">
                  <span className="bg-black/30 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                     <Crosshair size={18}/> Segmentação Hiper-Local
                  </span>
                  <span className="bg-black/30 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                     <MonitorSmartphone size={18}/> Mensagens no WhatsApp
                  </span>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </Section>

      {/* 4.5. THE VALUE ANCHOR */}
      <Section className="bg-gollog text-black relative !min-h-[70svh] border-t border-black/10 selection:bg-black selection:text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          <FadeIn>
            <div className="w-24 h-24 bg-black/10 flex items-center justify-center rounded-[2rem] transform rotate-3 mb-10 mx-auto">
              <Target size={48} className="text-black/80" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1] text-black/70 mb-6 uppercase tracking-widest">
              Uma reflexão rápida para o seu negócio:
            </h2>
            
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight md:leading-tight mb-8">
              "Se eu te entregasse de <span className="text-white">10 a 20 empresas</span> interessadas na sua solução,<br className="hidden lg:block"/> quanto acha que valeria meu serviço de <br className="hidden md:block"/> <span className="underline decoration-black/30 underline-offset-8">assessoria de marketing?</span>"
            </h3>
          </FadeIn>
        </div>
      </Section>

      {/* 5. INVESTMENT & TERMS - THE BIG CLOSING */}
      <Section className="bg-black relative border-t border-white/10 overflow-hidden">
        {/* Cinematic abstract glow */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gollog/10 blur-[150px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-blue-500/5 blur-[150px] opacity-70 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-gollog" />
                <span className="font-display font-bold tracking-widest text-slate-400 uppercase text-sm">O Acordo Comercial</span>
                <div className="h-[2px] w-8 bg-gollog" />
              </div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 tracking-tight">
                Variação <span className="italic text-gollog pr-2">Assimétrica.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto">
                A resposta é muito maior que nosso investimento mental. O valor abaixo representa uma fração mínima do faturamento que uma única carga B2B pode gerar. Nosso objetivo é um ROI rápido e agressivo.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto relative">
            
            {/* The Price Card */}
            <FadeIn delay={0.2} direction="up" className="lg:col-span-7">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/15 p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gollog to-gollog-light" />
                
                <div className="mb-10">
                  <p className="font-display text-slate-500 uppercase tracking-[0.2em] text-sm font-bold mb-6 flex items-center gap-3">
                     <CheckCircle2 size={16} className="text-gollog"/> Pacote Agency Premium
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-3xl font-bold text-gollog mt-2">R$</span>
                    <span className="font-display text-[5.5rem] md:text-[7rem] font-black tracking-tighter leading-none text-white">2.500</span>
                    <span className="text-2xl text-slate-500 font-light self-end pb-4">/mês</span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mt-6 border-l-2 border-white/10 pl-4 py-1">
                    * Fee da agência. Verba de campanhas para as plataformas (Meta) deve ser definida e paga à parte pela unidade.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-slate-300 font-medium">
                  <div className="bg-white/5 py-3 px-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gollog" /> Social Media & Vídeos
                  </div>
                  <div className="bg-white/5 py-3 px-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gollog" /> Gestão de LinkedIn
                  </div>
                  <div className="bg-white/5 py-3 px-4 rounded-xl flex items-center gap-3 sm:col-span-2">
                    <div className="w-2 h-2 rounded-full bg-gollog" /> Tráfego Pago (Instagram, Face & WP)
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* The "No Risk" Guarantee -> Super Persuasive */}
            <FadeIn delay={0.4} direction="up" className="lg:col-span-5 w-full">
              <div className="flex flex-col gap-6">
                
                <SpotlightCard className="!p-8 !rounded-3xl">
                  <ShieldCheck className="text-gollog mb-5 opacity-40 absolute right-6 top-6" size={80} />
                  <div className="inline-block px-3 py-1 bg-gollog/20 text-gollog border border-gollog/30 font-display font-bold text-xs tracking-widest uppercase rounded-lg mb-4">
                    Primeiros 3 Meses
                  </div>
                  <h4 className="font-display text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Validação sem Risco</h4>
                  <p className="text-slate-400 text-base relative z-10 leading-relaxed font-light">
                    Pagamento antecipado no mês. <strong className="text-white font-medium">Não amarramos clientes com multas.</strong> Se no trimestre inicial você não enxergar o valor da operação, finalizamos o serviço tranquilamente. Sem burocracia.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="!p-8 !rounded-3xl !border-white/5">
                  <Handshake className="text-slate-500 mb-5 opacity-20 absolute right-6 top-6" size={80} />
                  <div className="inline-block px-3 py-1 bg-white/10 text-slate-300 border border-white/20 font-display font-bold text-xs tracking-widest uppercase rounded-lg mb-4">
                    A Partir do 4º Mês
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-3 relative z-10 tracking-tight">Partnership Anual</h4>
                  <p className="text-slate-400 text-sm md:text-base relative z-10 leading-relaxed font-light">
                    Após provarmos o retorno, desenhamos um contrato de 12 meses. O detalhe: <strong className="text-white font-medium">se o serviço prestado cair de qualidade, você pode cancelar.</strong> Mantemos a relação pautada em entregas.
                  </p>
                </SpotlightCard>
                
              </div>
            </FadeIn>

          </div>
        </div>
      </Section>
      
      {/* 6. BIG CTA FOOTER / PRINT HINTS */}
      <footer className="relative bg-gollog text-black pt-24 pb-12 overflow-hidden selection:bg-black selection:text-white">
        {/* Background typographic noise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] text-center opacity-10 pointer-events-none">
          <span className="font-display font-black text-[25vw] leading-none whitespace-nowrap tracking-tighter">GOLLOG</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl font-black mb-8 tracking-tighter">Pronto para acelerar?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
              A resposta entre fechar o frete com você ou com a concorrência começa no digital.
            </p>
            <button 
              onClick={() => window.print()}
              className="bg-black text-white hover:bg-[#1a1a1a] hover:scale-105 px-10 py-5 rounded-full font-display font-bold text-lg transition-all duration-300 shadow-2xl print:hidden flex items-center justify-center gap-3 mx-auto"
            >
              Exportar Proposta em PDF <ArrowRight size={20}/>
            </button>
            <p className="mt-6 text-sm font-bold opacity-60 print:hidden">
              Dica: Ajuste nas configurações de impressão para "Salvar como PDF" e habilite a impressão de "Gráficos de Fundo" para preservar o design premium.
            </p>
          </FadeIn>
        </div>

        <div className="relative z-10 mt-24 border-t border-black/10 pt-12 flex flex-col items-center max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-60 mb-8 border-b border-black/10 pb-4">Proposta Confidencial elaborada para apresentação</p>
          
          <div className="flex flex-col items-center justify-center">
            <p className="font-display font-black text-2xl tracking-tighter opacity-90 mb-1">Willian Winnicios Cardoso</p>
            <p className="font-sans font-bold text-sm tracking-widest uppercase opacity-70 mb-4 bg-black text-white px-3 py-1 rounded-sm">Proprietário da Agência</p>
            
            <div className="mt-4">
               <ArvenLogo className="scale-75" />
            </div>
            <p className="opacity-60 text-xs font-bold uppercase mt-6">Validade comercial: 15 dias corridos.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
