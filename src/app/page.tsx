'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Code, Code2, PenTool, Rocket, Users,
  CheckCircle2, TerminalSquare, Blocks, Globe2,
  BrainCircuit, MessageSquare, BookOpen, Cpu,
  Smartphone, Monitor, Cloud, Search, TrendingUp,
  Paintbrush, Layers, Bot, Fingerprint, Star,
  Zap, Shield, Award, GitBranch, Package,
  Play, ChevronRight, Sparkles, Heart,
} from 'lucide-react';

import dynamic from 'next/dynamic';

const BloodCellCanvas = dynamic(() => import('./components/BloodCell'), { ssr: false });

/* ── Design tokens ──────────────────────────────────────── */
const D  = '#080000';   // dark bg
const L  = '#ffffff';   // light bg
const L2 = '#fff8f8';   // warm light bg
const R  = '#db0000';   // red accent
const Rd = '#a80000';   // dim red

const DH = '#fff1f1';   // dark heading
const DB = '#a08080';   // dark body
const DM = '#6b3030';   // dark muted
const DCB = '#0f0000';  // dark card bg
const DBR = '#2e0000';  // dark border
const DIB = '#1f0000';  // dark icon bg

const LH = '#1a0000';   // light heading
const LB = '#5a2020';   // light body
const LCB = '#fff1f1';  // light card bg
const LBR = '#f0d5d5';  // light border
const LIB = '#ffe0e0';  // light icon bg

const DC = { background: DCB, border: `1px solid ${DBR}` };
const LC = { background: '#ffffff', border: `1px solid ${LBR}` };

/* ── Stats bar data ─────────────────────────────────────── */
const STATS = [
  { value: '13+', label: 'Programs',        icon: <BookOpen className="w-5 h-5" /> },
  { value: '50+', label: 'Real Projects',   icon: <Package className="w-5 h-5" /> },
  { value: '200+',label: 'Students',        icon: <Users className="w-5 h-5" /> },
  { value: '12+', label: 'Mentors',         icon: <Star className="w-5 h-5" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════════════════
          1 — HERO  ░ DARK
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col min-h-[calc(100vh-104px)]" style={{ background: D }}>
        {/* 3D WebGL Blood Cells Feature */}
        <BloodCellCanvas />
        <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(90deg, ${D} 40%, rgba(8,0,0,0) 100%)` }} />

        {/* Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(219,0,0,0.15) 0%, rgba(219,0,0,0) 70%)' }} />

        <div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 py-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left: copy */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-xs font-semibold"
                style={{ borderColor: '#3a0000', backgroundColor: '#120000', color: R }}>
                <Heart className="w-3 h-3 fill-current animate-pulse" />
                Code to save lives
              </div>

              <h1 className="font-display font-black tracking-tight leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: DH }}>
                Grow your skills.{' '}
                <span style={{ backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  backgroundImage:`linear-gradient(135deg, ${R} 0%, #750000 100%)` }}>
                  Support our people.
                </span>
              </h1>

              <p className="text-base leading-relaxed mb-8" style={{ color: DB, maxWidth: '28rem' }}>
                Thousands face critical risks daily due to blood shortages and circulation issues. Master modern technology by building real platforms that connect donors with those in need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/join"
                  className="h-12 px-6 rounded-full font-bold flex items-center gap-2 justify-center transition-all hover:-translate-y-1 text-sm"
                  style={{ background: R, color: '#fff1f1', boxShadow: '0 0 28px rgba(219,0,0,0.4)' }}>
                  <Play className="w-3.5 h-3.5 fill-current" /> Start Building
                </Link>
                <Link href="/programs"
                  className="h-12 px-6 rounded-full font-semibold flex items-center gap-2 justify-center transition-all hover:-translate-y-1 text-sm"
                  style={{ background: DIB, border: `1px solid #3a0000`, color: DH }}>
                  Explore Programs <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex -space-x-2">
                  {['#db0000','#a80000','#c10000','#8e0000'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                      style={{ background: c, borderColor: D, color: '#fff' }}>
                      <Heart className="w-2.5 h-2.5 fill-current" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" style={{ color: R }} />)}</div>
                  <p className="text-[11px] mt-0.5" style={{ color: DM }}>Join 200+ developers making an impact</p>
                </div>
              </div>
            </div>

            {/* Right: floating stat cards */}
            <div className="hidden md:block relative h-[380px] scale-95 origin-right">
              {/* Floating card 1 */}
              <div className="absolute top-2 right-6 rounded-xl p-4 w-48 shadow-2xl backdrop-blur-md animate-float-delayed"
                style={{ background: 'rgba(15,0,0,0.85)', border: `1px solid ${DBR}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: DIB, color: R }}><Zap className="w-3.5 h-3.5" /></div>
                  <span className="text-[11px] font-bold" style={{ color: DB }}>Critical Need</span>
                </div>
                <p className="text-xl font-display font-black" style={{ color: DH }}>2 Seconds</p>
                <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: DBR }}>
                  <div className="h-full rounded-full animate-pulse" style={{ width: '100%', background: R }} />
                </div>
                <p className="text-[11px] mt-1" style={{ color: DM }}>Someone needs blood</p>
              </div>

              {/* Floating card 2 */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 rounded-xl p-4 w-44 shadow-2xl animate-float-fast"
                style={{ background: R }}>
                <Heart className="w-6 h-6 text-white mb-2 fill-current" />
                <p className="font-display font-black text-lg text-white">Save Lives</p>
                <p className="text-white/80 text-[11px] mt-0.5">Connect donors faster</p>
              </div>

              {/* Floating card 3 */}
              <div className="absolute bottom-2 right-10 rounded-xl p-4 w-52 shadow-2xl animate-float"
                style={{ background: 'rgba(15,0,0,0.9)', border: `1px solid ${DBR}` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: DM }}>Live Impact</span>
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: R }} />
                </div>
                {['Donor Matched in NY','Urgent Request Filled','New Blood Drive'].map((p, i) => (
                  <div key={p} className="flex items-center gap-2 py-1 border-b last:border-0" style={{ borderColor: DBR }}>
                    <div className="w-1 h-1 rounded-full" style={{ background: i === 0 ? '#22c55e' : R }} />
                    <span className="text-[11px] font-medium" style={{ color: DH }}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Floating card 4 */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 rounded-lg px-3 py-1.5 shadow-xl animate-float"
                style={{ background: 'rgba(15,0,0,0.8)', border: `1px solid ${DBR}` }}>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5" style={{ color: R }} />
                  <span className="text-[11px] font-mono" style={{ color: DH }}>main ← feature/donor-match</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t" style={{ borderColor: DBR }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
              {STATS.map(s => (
                <div key={s.label} className="flex items-center gap-3 py-3 md:py-4 px-6 first:pl-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: DIB, color: R }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-display font-black text-lg leading-none mb-0.5" style={{ color: DH }}>{s.value}</p>
                    <p className="text-[10px]" style={{ color: DM }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2 — PHILOSOPHY (ARC LAYOUT)  ░ LIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-100px)]" style={{ background: L, borderTop: `1px solid ${LBR}` }}>
        
        {/* Desktop Scattered Stats (Full screen width) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[35%] left-[4vw] xl:left-[8vw] text-left">
            <p className="font-display font-black text-6xl xl:text-7xl mb-1 opacity-20" style={{ color: LH }}>12+</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-40" style={{ color: DM }}>Years of Experience</p>
          </div>
          
          <div className="absolute top-[15%] right-[4vw] xl:right-[8vw] text-right">
            <p className="font-display font-black text-6xl xl:text-7xl mb-1 opacity-20" style={{ color: LH }}>25+</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-40" style={{ color: DM }}>Real Projects</p>
          </div>
          
          <div className="absolute bottom-[20%] left-[6vw] xl:left-[12vw] text-left">
            <p className="font-display font-black text-6xl xl:text-7xl mb-1 opacity-20" style={{ color: LH }}>98%</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-40" style={{ color: DM }}>Developer Success</p>
          </div>
          
          <div className="absolute bottom-[25%] right-[6vw] xl:right-[12vw] text-right">
            <p className="font-display font-black text-6xl xl:text-7xl mb-1 opacity-20" style={{ color: LH }}>1:1</p>
            <p className="text-[11px] font-semibold uppercase tracking-widest opacity-40" style={{ color: DM }}>Mentorship Support</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* The Arc Graphic & Images */}
          <div className="relative w-full max-w-[1000px] h-[250px] md:h-[310px] mb-4 flex justify-center pointer-events-none mx-auto">
            
            {/* Image 1: Left-most */}
            <div className="absolute left-[10%] bottom-[10%] md:bottom-[15%] w-20 h-36 md:w-32 md:h-52 overflow-hidden shadow-xl -rotate-[15deg] pointer-events-auto transition-transform hover:scale-105 hover:-rotate-[10deg] origin-bottom border-4 border-white -translate-x-1/2 z-10 rounded-[5px]">
              <Image src="/team.jpg" alt="Student" fill className="object-cover" />
            </div>
            
            {/* Image 2: Mid-left */}
            <div className="absolute left-[30%] top-[25%] md:top-[20%] w-24 h-44 md:w-36 md:h-64 overflow-hidden shadow-2xl -rotate-[10deg] pointer-events-auto transition-transform hover:scale-105 hover:-rotate-[5deg] origin-bottom border-4 border-white -translate-x-1/2 z-20 rounded-[5px]">
              <Image src="/hero.jpg" alt="Mentorship" fill className="object-cover" />
            </div>
            
            {/* Image 3: Center (highest) */}
            <div className="absolute left-1/2 top-0 md:-top-5 w-28 h-52 md:w-44 md:h-[19rem] overflow-hidden shadow-2xl z-30 pointer-events-auto transition-transform hover:scale-105 origin-bottom border-4 border-white -translate-x-1/2 rounded-[5px]">
              <Image src="/team.jpg" alt="Founder" fill className="object-cover" />
            </div>
            
            {/* Image 4: Mid-right */}
            <div className="absolute left-[70%] top-[25%] md:top-[20%] w-24 h-44 md:w-36 md:h-64 overflow-hidden shadow-2xl rotate-[10deg] pointer-events-auto transition-transform hover:scale-105 hover:rotate-[5deg] origin-bottom border-4 border-white -translate-x-1/2 z-20 rounded-[5px]">
              <Image src="/hero.jpg" alt="Builder" fill className="object-cover" />
            </div>
            
            {/* Image 5: Right-most */}
            <div className="absolute left-[90%] bottom-[10%] md:bottom-[15%] w-20 h-36 md:w-32 md:h-52 overflow-hidden shadow-xl rotate-[15deg] pointer-events-auto transition-transform hover:scale-105 hover:rotate-[10deg] origin-bottom border-4 border-white -translate-x-1/2 z-10 rounded-[5px]">
              <Image src="/team.jpg" alt="Launch" fill className="object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border relative bg-white z-20 shadow-sm"
            style={{ borderColor: LBR, color: '#444' }}>
            <Zap className="w-3.5 h-3.5" style={{ color: R }} /> Founder Mindset
          </div>
          
          <h2 className="font-display font-black leading-[1.05] mb-4 max-w-4xl relative z-20"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: LH, letterSpacing: '-0.03em' }}>
            Learn. Build. Conquer.
          </h2>
          
          <p className="mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto relative z-20" style={{ color: LB }}>
            We believe meaningful tech education starts with building. Our goal is to train you to think like a founder, understand the business behind the code, and launch scalable startups.
          </p>

          <Link href="/about" className="relative z-20 inline-flex h-12 pl-6 pr-1.5 rounded-full font-bold items-center gap-4 justify-center transition-all hover:-translate-y-1 shadow-md hover:shadow-lg text-sm" 
            style={{ background: '#f5f0f0', color: '#111', border: `1px solid ${LBR}` }}>
            Learn More About Us 
            <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ background: '#221' }}>
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>

          {/* Mobile Stats Row (Hidden on Desktop) */}
          <div className="w-full max-w-full mx-auto mt-12 pt-8 border-t grid grid-cols-2 gap-6 lg:hidden" style={{ borderColor: LBR }}>
            {[
              { value: '12+', label: 'Years of Experience' },
              { value: '25+', label: 'Real Projects' },
              { value: '98%', label: 'Developer Success' },
              { value: '1:1', label: 'Mentorship Support' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-black text-3xl mb-1" style={{ color: LH }}>{stat.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: DM }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3 — FOUNDER & CEO  ░ DARK
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative overflow-hidden flex flex-col justify-center" style={{ background: D, borderTop: '1px solid #1a0000' }}>
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Badge with SVG squiggles */}
          <div className="relative mb-6">
            {/* Decorative Sparkles/Squiggles */}
            <div className="absolute -top-6 -right-8" style={{ color: R }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" opacity="0.5"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-10" style={{ color: R }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v4M4.93 4.93l2.83 2.83" opacity="0.4"/>
              </svg>
            </div>
            
            <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold border tracking-wider shadow-xl" style={{ borderColor: '#3a0000', color: DH, background: '#120000' }}>
              Hello!
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black leading-[1.05] mb-12 z-10 relative" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: DH, letterSpacing: '-0.03em' }}>
            I'm <span style={{ color: R }}>Gowtham</span>,<br />
            Founder & CEO
          </h2>

          {/* Center Subject Container */}
          <div className="relative w-full max-w-[320px] mx-auto mt-0">
            
            {/* Floating Left Testimonial (Bulletproof: always completely outside the left edge) */}
            <div className="absolute top-4 lg:top-12 right-full mr-8 xl:mr-16 text-left w-64 md:w-72 z-20 hidden lg:block p-6 rounded-3xl backdrop-blur-xl border shadow-2xl"
              style={{ background: 'rgba(15,0,0,0.65)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="text-4xl font-serif leading-none mb-2" style={{ color: R }}>"</div>
              <p className="text-[11px] md:text-sm leading-relaxed font-medium mb-4" style={{ color: '#e5d5d5' }}>
                Gowtham's visionary leadership and exceptional technical architecture ensure the platform's incredible success. 
                <br/><br/><span style={{ color: R }}>Highly Recommended</span>
              </p>
            </div>

            {/* Floating Right Stats (Bulletproof: always completely outside the right edge) */}
            <div className="absolute top-12 lg:top-20 left-full ml-8 xl:ml-16 text-right w-48 md:w-56 z-20 hidden lg:flex flex-col items-end p-6 rounded-3xl backdrop-blur-xl border shadow-2xl"
              style={{ background: 'rgba(15,0,0,0.65)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex justify-end gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: R }} />)}
              </div>
              <p className="font-display font-black text-3xl md:text-4xl mb-1" style={{ color: '#ffffff' }}>12 Years</p>
              <p className="text-xs uppercase tracking-wider font-bold" style={{ color: '#e5d5d5' }}>Experience</p>
            </div>

            {/* Subject Image */}
            <div className="relative w-60 h-60 md:w-[320px] md:h-[320px] mx-auto rounded-full overflow-hidden border-[8px] md:border-[10px] shadow-2xl z-10" style={{ borderColor: D }}>
               <Image src="/team.jpg" alt="Founder" fill className="object-cover object-top" />
            </div>

            {/* Floating CTA Pill */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center p-1.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20 border"
              style={{ background: 'rgba(20,0,0,0.8)', borderColor: '#4a0000' }}>
              <Link href="#portfolio" className="px-6 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 transition-all hover:scale-105 shadow-md" style={{ background: R, color: '#fff' }}>
                Portfolio <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
              </Link>
              <Link href="#contact" className="px-6 py-2.5 rounded-full font-bold text-[13px] transition-colors hover:text-white whitespace-nowrap" style={{ color: DB }}>
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4 — HOW IT WORKS  ░ LIGHT RED
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16" style={{ background: '#fff5f5', borderTop: `1px solid ${LBR}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: '#ffe8e8', color: R, border: `1px solid #ffd0d0` }}>
              <Zap className="w-3.5 h-3.5" /> Process
            </div>
            <h2 className="font-display font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: LH, letterSpacing: '-0.02em' }}>
              Learn. Build. Ship.
            </h2>
            <p className="text-lg" style={{ color: LB }}>A structured path from learning fundamentals to launching real products.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px" style={{ background: `linear-gradient(90deg, transparent, #ffbaba, #ffbaba, transparent)` }} />

            {[
              { num:'01', title:'Learn',       desc:'Structured, mentor-led training on the tech that matters.',    icon:<BookOpen className="w-7 h-7" />,     color: '#ff4d4d' },
              { num:'02', title:'Build',       desc:'Apply skills immediately by building real apps and products.', icon:<TerminalSquare className="w-7 h-7" />,color: '#ff3333' },
              { num:'03', title:'Collaborate', desc:'Work in teams just like a real product company.',              icon:<Users className="w-7 h-7" />,         color: '#e60000' },
              { num:'04', title:'Contribute',  desc:'Ship things that solve real problems and help real people.',   icon:<Globe2 className="w-7 h-7" />,        color: R },
            ].map((step, i) => (
              <div key={step.num} className="relative p-8 rounded-3xl text-center shadow-lg transition-transform hover:-translate-y-1" style={LC}>
                {/* Step number */}
                <div className="text-6xl font-display font-black absolute top-4 right-5 select-none" style={{ color: '#fff0f0' }}>{step.num}</div>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{ background: step.color, boxShadow: `0 8px 20px ${step.color}40`, color: '#fff' }}>
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: LH }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: LB }}>{step.desc}</p>
                {/* Bottom accent */}
                <div className="mt-6 h-1 rounded-full mx-auto w-12" style={{ background: step.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4 — PROGRAMS  ░ LIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16" style={{ background: '#ffffff', borderTop: `1px solid ${LBR}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: '#ffe8e8', color: R }}>
                <Award className="w-3 h-3" /> Programs
              </div>
              <h2 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: LH }}>
                Design. Code. Launch.
              </h2>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => { const s = document.getElementById('prog-slider'); if(s) s.scrollBy({left:-350, behavior:'smooth'}); }} 
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm bg-white"
                style={{ border: `1px solid ${LBR}`, color: '#222' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <button onClick={() => { const s = document.getElementById('prog-slider'); if(s) s.scrollBy({left:350, behavior:'smooth'}); }} 
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm bg-white"
                style={{ border: `1px solid ${LBR}`, color: '#222' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>

              <Link href="/programs" className="ml-2 shrink-0 h-12 px-7 rounded-full font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-md"
                style={{ background: R, color: '#fff' }}>
                All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div> {/* Close header flex */}
        </div> {/* Close max-w-7xl */}

        {/* Full-width slider wrapper */}
        <div className="w-full">

          <div id="prog-slider" className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-12 pt-4 pl-6 xl:pl-[calc(50vw_-_40rem_+_1.5rem)] pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { icon:<Fingerprint className="w-5 h-5" />, tag:'Foundation', title:'Branding',              desc:'Brand identity — logo, color, voice, and positioning.',          topics:['Brand Strategy','Logo Design','Color Theory','Brand Voice'] },
              { icon:<Paintbrush className="w-5 h-5" />,  tag:'Foundation', title:'Design',                desc:'Digital design principles and interfaces people love to use.',   topics:['UI Design','UX Research','Figma','Design Systems'] },
              { icon:<Layers className="w-5 h-5" />,       tag:'Web',        title:'Web App Development',  desc:'Full web applications from concept to deployment.',              topics:['HTML/CSS','JavaScript','React','Next.js'] },
              { icon:<Code className="w-5 h-5" />,         tag:'Web',        title:'Frontend',             desc:'Pixel-perfect, interactive UIs with modern tools.',              topics:['React','TypeScript','Tailwind CSS','Animations'] },
              { icon:<Code2 className="w-5 h-5" />,        tag:'Web',        title:'Backend',              desc:'Server-side logic, APIs, and databases.',                        topics:['Node.js','Laravel','REST APIs','Auth'] },
              { icon:<TerminalSquare className="w-5 h-5" />,tag:'Core',      title:'Programming Languages',desc:'Strong foundations across the languages that matter.',           topics:['JavaScript','Python','PHP','TypeScript'] },
              { icon:<Smartphone className="w-5 h-5" />,   tag:'Mobile',     title:'Mobile Apps',          desc:'Cross-platform apps for iOS and Android.',                       topics:['Flutter','React Native','Dart'] },
              { icon:<Monitor className="w-5 h-5" />,      tag:'Desktop',    title:'Desktop Apps',         desc:'Powerful desktop applications.',                                 topics:['Electron.js','Tauri','Python'] },
              { icon:<Cloud className="w-5 h-5" />,        tag:'Infra',      title:'Cloud Hosting',        desc:'Deploy, scale, manage on modern cloud platforms.',               topics:['Vercel','AWS','Docker','CI/CD'] },
              { icon:<Search className="w-5 h-5" />,       tag:'Infra',      title:'Domain & DNS',         desc:'Register domains and understand how the web is wired.',          topics:['DNS Setup','SSL/HTTPS','Email DNS'] },
              { icon:<TrendingUp className="w-5 h-5" />,   tag:'Business',   title:'Business & Marketing', desc:'Turn your product into a business.',                             topics:['SEO','Social Media','Go-to-Market'] },
              { icon:<BrainCircuit className="w-5 h-5" />, tag:'AI',         title:'AI & Automation',      desc:'Build intelligent products and automate workflows.',             topics:['AI APIs','LLM Apps','Prompt Eng.'] },
              { icon:<Bot className="w-5 h-5" />,          tag:'AI',         title:'AI Product Building',  desc:'Ship full AI-powered products used by real people.',             topics:['RAG Systems','Chatbots','AI SaaS'] },
            ].map((prog, i) => {
              const bgImg = i % 2 === 0 ? '/hero.jpg' : '/team.jpg';
              
              return (
                <div key={i} className="relative w-[280px] sm:w-[320px] shrink-0 h-[480px] rounded-3xl overflow-hidden snap-start group cursor-pointer shadow-xl">
                  {/* Background Image */}
                  <Image src={bgImg} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={prog.title} />
                  
                  {/* Dark Gradient Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-10 pointer-events-none" />
                  
                  {/* Content Container */}
                  <div className="relative z-20 p-7 flex flex-col h-full justify-between pointer-events-none">
                    
                    {/* Top Text */}
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-gray-300 mb-2 uppercase">{prog.tag}</p>
                      <h3 className="font-display font-bold text-3xl md:text-4xl text-white leading-[1.1]">{prog.title}.</h3>
                    </div>
                    
                    {/* Bottom Info & Button */}
                    <div className="flex items-end justify-between w-full">
                       <div className="flex flex-col gap-2">
                          {prog.topics.slice(0,2).map(t => (
                             <span key={t} className="text-[10px] text-white/90 font-bold tracking-wide bg-white/10 px-3 py-1.5 rounded-lg w-fit backdrop-blur-md border border-white/10">
                               {t}
                             </span>
                          ))}
                       </div>
                       
                       {/* Plus Icon Button */}
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-white/40 transition-colors shadow-lg border border-white/10 pointer-events-auto">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12 5v14M5 12h14"/>
                         </svg>
                       </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div> {/* Close full-width wrapper */}

        {/* Re-open max-w-7xl for AI banner */}
        <div className="max-w-7xl mx-auto px-6">
          {/* AI banner */}
          <div className="mt-8 p-7 rounded-2xl flex flex-col md:flex-row items-center gap-5"
            style={{ background: '#1a0000', border: '1px solid #5a0000' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: R, boxShadow: '0 0 24px rgba(219,0,0,0.4)' }}>
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-display font-bold text-lg mb-1" style={{ color: DH }}>AI is woven into every program.</p>
              <p className="text-sm" style={{ color: DB }}>Every course includes AI-assisted workflows so you learn how modern builders actually work.</p>
            </div>
            <Link href="/programs" className="shrink-0 h-11 px-6 rounded-full font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: R, color: '#fff1f1' }}>
              Explore AI Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5 — REAL PROJECTS  ░ DARK
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16" style={{ background: D, borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: DIB, color: R, border: `1px solid #3a0000` }}>
                <Blocks className="w-3 h-3" /> Real Work
              </div>
              <h2 className="font-display font-black leading-tight mb-5"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: DH }}>
                Don't just learn.{' '}
                <span style={{ backgroundClip:'text', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  backgroundImage:`linear-gradient(135deg, ${R}, #8e0000)` }}>
                  Build something real.
                </span>
              </h2>
              <p className="leading-relaxed" style={{ color: DB }}>
                Participants work together on real products and meaningful problems — not toy tutorials.
              </p>
            </div>

            {/* Dashboard image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image src="/dashboard.jpg" alt="Real project dashboard" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(8,0,0,0.8) 100%)' }} />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[R, '#a80000', '#5a0000'].map((c, i) => (
                      <div key={i} className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: c, color: '#fff' }}>
                        {['Live','Building','Idea'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs" style={{ color: DM }}>3 active projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-14">
            {[
              { category:'Education Tech', name:'OpenLearn LMS',    problem:'Affordable LMS for underserved schools',  status:'In Development', statusColor:'#c10000', team:6, tech:'Next.js · PostgreSQL', icon:<BookOpen className="w-5 h-5" /> },
              { category:'Social Impact',   name:'Infinity Bloods',  problem:'Connecting blood donors with receivers',   status:'🟢 Live',         statusColor:'#22c55e', team:4, tech:'React · Node.js',     icon:<Heart className="w-5 h-5" /> },
              { category:'AI Tools',        name:'Agentic Workflow', problem:'Automating repetitive business processes', status:'Prototyping',     statusColor: R,        team:3, tech:'Python · OpenAI',     icon:<Bot className="w-5 h-5" /> },
            ].map((proj, i) => (
              <div key={i} className="rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 group" style={DC}>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: R }}>{proj.category}</p>
                    <h3 className="font-display font-black text-xl" style={{ color: DH }}>{proj.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: DIB, color: R }}>
                    {proj.icon}
                  </div>
                </div>
                <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: DB }}>{proj.problem}</p>
                <div className="space-y-2.5 text-sm border-t pt-4 mb-5" style={{ borderColor: DBR }}>
                  {([['Status', proj.status, proj.statusColor], ['Team', `${proj.team} Contributors`, DH], ['Tech', proj.tech, DH]] as [string, string, string][]).map(([k, v, c]) => (
                    <div key={k} className="flex justify-between items-center">
                      <span style={{ color: DM }}>{k}</span>
                      <span className="font-semibold text-xs px-2 py-0.5 rounded-full" style={{ color: c, background: `${c}18` }}>{v}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: DIB, color: R, border: '1px solid #3a0000' }}>
                  View Case Study →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-full px-10 font-bold gap-2 transition-all hover:-translate-y-1"
              style={{ background: R, color: '#fff1f1', boxShadow: '0 0 30px rgba(219,0,0,0.3)' }}>
              <Package className="w-5 h-5" /> Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6 — VOLUNTEER  ░ LIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16" style={{ background: L, borderTop: `1px solid ${LBR}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: '#ffe8e8', color: R }}>
                <Heart className="w-3 h-3" /> Volunteer
              </div>
              <h2 className="font-display font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: LH }}>
                Your skills can create more than a career.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: LB }}>
                Volunteers contribute to real projects while learning from experienced builders and working in a collaborative team environment.
              </p>

              {/* Role chips with icons */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  [<Code key="d" className="w-3.5 h-3.5" />,        'Developer'],
                  [<PenTool key="u" className="w-3.5 h-3.5" />,     'UI/UX Designer'],
                  [<BrainCircuit key="a" className="w-3.5 h-3.5" />,'AI Engineer'],
                  [<MessageSquare key="c" className="w-3.5 h-3.5" />,'Content Creator'],
                  [<Shield key="q" className="w-3.5 h-3.5" />,      'QA / Tester'],
                  [<Rocket key="p" className="w-3.5 h-3.5" />,      'Product Lead'],
                ].map(([icon, role]) => (
                  <span key={role as string} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: '#ffe8e8', border: `1px solid ${LBR}`, color: LH }}>
                    <span style={{ color: R }}>{icon}</span>
                    {role as string}
                  </span>
                ))}
              </div>

              <Link href="/join" className="inline-flex h-13 items-center justify-center rounded-full px-9 font-bold gap-2 transition-all hover:-translate-y-1 text-sm"
                style={{ background: R, color: '#fff1f1', boxShadow: '0 0 20px rgba(219,0,0,0.2)' }}>
                <Heart className="w-4 h-4" /> Become a Volunteer
              </Link>
            </div>

            {/* Benefits card */}
            <div className="rounded-3xl p-8 border shadow-lg" style={{ background: LCB, borderColor: LBR }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: LIB, color: R }}>
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg" style={{ color: LH }}>What you gain</h3>
              </div>
              {[
                { icon:<Shield className="w-5 h-5" />,       title:'Real-World Experience', desc:'Work on actual products used by real people.' },
                { icon:<Users className="w-5 h-5" />,         title:'Mentorship Access',     desc:'Learn directly from experienced builders.' },
                { icon:<GitBranch className="w-5 h-5" />,     title:'Team Collaboration',    desc:'Operate like a real product team.' },
                { icon:<Package className="w-5 h-5" />,       title:'Portfolio Building',    desc:'Ship things you can show to the world.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 mb-6 last:mb-0 p-4 rounded-xl transition-colors hover:bg-white"
                  style={{ border: '1px solid transparent' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: LIB, color: R }}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold mb-0.5 text-sm" style={{ color: LH }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: LB }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7 — WHY JOIN  ░ DARK
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16" style={{ background: D, borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: DIB, color: R, border: `1px solid #3a0000` }}>
              <Star className="w-3 h-3" /> Why Join
            </div>
            <h2 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: DH }}>
              More than training. A place to become a builder.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title:'Real Projects',    desc:'Build applications instead of only completing tutorials.',     icon:<Blocks className="w-6 h-6" />,     glow: '#3a0000' },
              { title:'Mentor Guidance',  desc:'Learn from people who are actively building technology.',     icon:<Users className="w-6 h-6" />,       glow: '#5a0000' },
              { title:'Team Experience',  desc:'Understand how real development teams collaborate.',          icon:<MessageSquare className="w-6 h-6" />,glow: '#750000' },
              { title:'AI Integrated',    desc:'Learn how AI is changing modern software development.',       icon:<BrainCircuit className="w-6 h-6" />, glow:  R        },
              { title:'Practical Skills', desc:'Focus on skills that can actually be applied on the job.',   icon:<Cpu className="w-6 h-6" />,          glow: '#a80000' },
              { title:'Global Community', desc:'Grow alongside builders from across the world.',             icon:<Globe2 className="w-6 h-6" />,       glow: '#c10000' },
            ].map((f, i) => (
              <div key={i} className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group" style={DC}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: DIB, color: R, boxShadow: `0 0 16px ${f.glow}60` }}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: DH }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: DB }}>{f.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold" style={{ color: R }}>
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8 — CTA BANNER  ░ RED
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: R }}>
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none">
          <Image src="/hero.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff1f1' }}>
            <Sparkles className="w-4 h-4" /> Applications open now
          </div>
          <h2 className="font-display font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff1f1' }}>
            Technology becomes meaningful when you use it to solve real problems.
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,241,241,0.75)' }}>
            Join InfinityBloods. Start building — not just learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="h-14 px-10 rounded-full font-black flex items-center gap-2 justify-center transition-all hover:-translate-y-1 text-base"
              style={{ background: '#fff1f1', color: R }}>
              <Play className="w-5 h-5 fill-current" /> Join the Program
            </Link>
            <Link href="/programs" className="h-14 px-10 rounded-full font-bold flex items-center gap-2 justify-center transition-all hover:-translate-y-1"
              style={{ background: 'transparent', border: '2px solid rgba(255,241,241,0.4)', color: '#fff1f1' }}>
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
