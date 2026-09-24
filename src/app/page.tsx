'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Code2,
  PenTool,
  Rocket,
  Users,
  CheckCircle2,
  TerminalSquare,
  Blocks,
  Globe2,
  BrainCircuit,
  MessageSquare,
  BookOpen,
  Cpu,
  Smartphone,
  Monitor,
  Cloud,
  Search,
  TrendingUp,
  Paintbrush,
  Layers,
  Bot,
  Fingerprint,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ─────────────────────────────────────────────────────────
          1. HERO — Deep black #080000
      ───────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden"
        style={{ background: '#080000' }}
      >
        {/* Radial glow blobs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(219,0,0,0.18) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(117,0,0,0.22) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10 text-sm font-medium"
            style={{ borderColor: '#3a0000', backgroundColor: '#120000', color: '#db0000' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#db0000' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#db0000' }} />
            </span>
            A new way to master technology
          </div>

          <h1 className="font-display font-black tracking-tight leading-[1.08] mb-7"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#fff1f1' }}>
            Learn. Build.{' '}
            <span style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #db0000 0%, #750000 100%)',
            }}>
              Contribute.
            </span>
          </h1>

          <p className="text-xl leading-relaxed mb-12 mx-auto max-w-2xl"
            style={{ color: '#a08080' }}>
            Learn technology by working on real problems, building real products, and collaborating with people who are building the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/join"
              className="h-14 px-9 rounded-full font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-all hover:-translate-y-1"
              style={{ background: '#db0000', color: '#fff1f1', boxShadow: '0 0 24px rgba(219,0,0,0.35)' }}>
              Join the Program <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/projects"
              className="h-14 px-9 rounded-full font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-all hover:-translate-y-1"
              style={{ background: '#140000', border: '1px solid #3a0000', color: '#fff1f1' }}>
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. LEARNING PHILOSOPHY — Rich maroon #140000
      ───────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#100000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Left: text */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#db0000' }}>
                Philosophy
              </p>
              <h2 className="font-display font-black leading-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1' }}>
                Learning shouldn't end<br />with a certificate.
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#a08080', fontSize: '1.1rem' }}>
                The best way to understand technology is to use it.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'Learn the fundamentals.',
                  'Build real things.',
                  'Work with a team.',
                  'Solve meaningful problems.',
                  'Launch something people can actually use.',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#db0000' }} />
                    <span className="font-medium" style={{ color: '#fff1f1' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="inline-flex items-center gap-2 font-semibold transition-colors group"
                style={{ color: '#db0000' }}>
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: code editor mockup */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl -z-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(219,0,0,0.12) 0%, transparent 70%)' }} />
              <div className="rounded-2xl p-8 border"
                style={{ background: '#0c0000', borderColor: '#2e0000', boxShadow: '0 4px 60px rgba(0,0,0,0.6)' }}>
                {/* Title bar */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b" style={{ borderColor: '#2e0000' }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#db0000' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#8e0000' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#3a0000' }} />
                  <span className="text-xs font-mono ml-2" style={{ color: '#6b3030' }}>real-project.tsx</span>
                </div>
                {/* Code */}
                <div
                  className="font-mono text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `
<p style="color:#6b3030"><span style="color:#c10000">import</span> { Team, Impact } <span style="color:#c10000">from</span> <span style="color:#8e0000">'@infinitybloods/core'</span>;</p>
<br/>
<p style="color:#c10000">export default function <span style="color:#db0000">ChangeTheWorld</span>() {</p>
<p style="margin-left:1rem;color:#6b3030"><span style="color:#c10000">const</span> project = <span style="color:#db0000">build</span>(meaningfulProblem);</p>
<p style="margin-left:1rem;color:#c10000">return (</p>
<p style="margin-left:2rem;color:#fff1f1">&lt;<span style="color:#db0000">Team</span> members={} collab={}&gt;</p>
<p style="margin-left:3rem;color:#a08080">&lt;<span style="color:#db0000">Impact</span> scale="global" /&gt;</p>
<p style="margin-left:2rem;color:#fff1f1">&lt;/<span style="color:#db0000">Team</span>&gt;</p>
<p style="margin-left:1rem;color:#c10000">);</p>
<p style="color:#6b3030">}</p>
                    `.trim()
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. HOW IT WORKS — Darker black #080000
      ───────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#080000', borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#db0000' }}>Process</p>
            <h2 className="font-display font-black leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1' }}>
              How it works
            </h2>
            <p style={{ color: '#a08080' }}>A structured path from learning fundamentals to launching real products.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Learn', desc: 'Understand modern technologies through structured, mentor-led training.', icon: <BookOpen className="w-6 h-6" /> },
              { num: '02', title: 'Build', desc: 'Apply what you learn by building real applications and products.', icon: <TerminalSquare className="w-6 h-6" /> },
              { num: '03', title: 'Collaborate', desc: 'Work with developers, designers, mentors, and other learners.', icon: <Users className="w-6 h-6" /> },
              { num: '04', title: 'Contribute', desc: 'Use your skills to solve real-world problems and create useful products.', icon: <Globe2 className="w-6 h-6" /> },
            ].map((step) => (
              <div key={step.num}
                className="relative p-7 rounded-2xl border group hover:-translate-y-1 transition-all duration-300"
                style={{ background: '#0f0000', borderColor: '#2e0000' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#db0000')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e0000')}
              >
                <div className="text-5xl font-display font-black absolute top-4 right-5 select-none"
                  style={{ color: '#1f0000' }}>
                  {step.num}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: '#1f0000', color: '#db0000' }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3" style={{ color: '#fff1f1' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a08080' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. PROGRAMS — Full course catalogue
      ───────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#100000', borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#db0000' }}>Programs</p>
              <h2 className="font-display font-black leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1', maxWidth: '36rem' }}>
                Everything you need to become a builder.
              </h2>
            </div>
            <Link href="/programs"
              className="shrink-0 h-12 px-7 rounded-full font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5"
              style={{ background: '#fff1f1', color: '#080000' }}>
              Explore All Programs
            </Link>
          </div>

          {/* Sub-label */}
          <p className="mb-14 text-base" style={{ color: '#a08080', maxWidth: '48rem' }}>
            From branding to AI — a comprehensive curriculum built around real skills that real builders use every day.
          </p>

          {/* 3-col course grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Fingerprint className="w-5 h-5" />,
                tag: 'Foundation',
                title: 'Branding',
                desc: 'Build a memorable brand identity from scratch — logo, color, voice, and positioning.',
                topics: ['Brand Strategy', 'Logo Design', 'Color Theory', 'Brand Voice', 'Visual Identity'],
              },
              {
                icon: <Paintbrush className="w-5 h-5" />,
                tag: 'Foundation',
                title: 'Design',
                desc: 'Master digital design principles and create interfaces people love to use.',
                topics: ['UI Design', 'UX Research', 'Figma', 'Design Systems', 'Accessibility'],
              },
              {
                icon: <Layers className="w-5 h-5" />,
                tag: 'Web',
                title: 'Web App Development',
                desc: 'Design and build fully functional web applications from concept to deployment.',
                topics: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'API Integration'],
              },
              {
                icon: <Code className="w-5 h-5" />,
                tag: 'Web',
                title: 'Frontend Development',
                desc: 'Build pixel-perfect, interactive user interfaces with modern frontend tools.',
                topics: ['React', 'TypeScript', 'Tailwind CSS', 'Animations', 'Performance'],
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                tag: 'Web',
                title: 'Backend Development',
                desc: 'Engineer the server-side logic, APIs, and databases that power applications.',
                topics: ['Node.js', 'Laravel', 'REST APIs', 'Databases', 'Auth', 'Security'],
              },
              {
                icon: <TerminalSquare className="w-5 h-5" />,
                tag: 'Core Skills',
                title: 'Programming Languages',
                desc: 'Build strong programming foundations across the languages that matter most.',
                topics: ['JavaScript', 'Python', 'PHP', 'TypeScript', 'SQL', 'Dart'],
              },
              {
                icon: <Smartphone className="w-5 h-5" />,
                tag: 'Mobile',
                title: 'Mobile App Development',
                desc: 'Create cross-platform and native mobile apps for iOS and Android.',
                topics: ['Flutter', 'React Native', 'Dart', 'App Store Deployment', 'Push Notifications'],
              },
              {
                icon: <Monitor className="w-5 h-5" />,
                tag: 'Desktop',
                title: 'Desktop App Development',
                desc: 'Build powerful desktop applications using modern frameworks and languages.',
                topics: ['Electron.js', 'Tauri', 'Python (Tkinter)', 'Cross-platform Builds'],
              },
              {
                icon: <Cloud className="w-5 h-5" />,
                tag: 'Infrastructure',
                title: 'Cloud Hosting',
                desc: 'Learn to deploy, scale, and manage applications on modern cloud platforms.',
                topics: ['Vercel', 'AWS', 'DigitalOcean', 'Docker', 'CI/CD', 'Environment Config'],
              },
              {
                icon: <Search className="w-5 h-5" />,
                tag: 'Infrastructure',
                title: 'Domain & DNS',
                desc: 'Find, register, and configure domains — and understand how the web is wired.',
                topics: ['Domain Registration', 'DNS Setup', 'SSL/HTTPS', 'Subdomain Config', 'Email DNS'],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                tag: 'Business',
                title: 'Business & Marketing',
                desc: 'Turn your product into a business — learn to reach users and grow sustainably.',
                topics: ['Product Marketing', 'SEO', 'Social Media', 'Email Campaigns', 'Go-to-Market'],
              },
              {
                icon: <BrainCircuit className="w-5 h-5" />,
                tag: 'AI',
                title: 'AI & Automation',
                desc: 'Harness AI to build intelligent products and automate complex workflows.',
                topics: ['AI APIs', 'AI Agents', 'LLM Apps', 'Workflow Automation', 'Prompt Engineering'],
              },
              {
                icon: <Bot className="w-5 h-5" />,
                tag: 'AI',
                title: 'AI Product Building',
                desc: 'Go beyond APIs — design and ship full AI-powered products used by real people.',
                topics: ['AI-first Design', 'RAG Systems', 'Chatbots', 'AI SaaS', 'Model Fine-tuning'],
              },
            ].map((prog, i) => {
              const tagColor: Record<string, string> = {
                Foundation: '#8e0000',
                Web: '#a80000',
                'Core Skills': '#750000',
                Mobile: '#a80000',
                Desktop: '#8e0000',
                Infrastructure: '#750000',
                Business: '#8e0000',
                AI: '#db0000',
              };
              return (
                <div key={i}
                  className="p-7 rounded-2xl border flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: '#0c0000', borderColor: '#2e0000' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#db0000')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e0000')}
                >
                  {/* Tag + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: '#1f0000', color: tagColor[prog.tag] ?? '#db0000', border: `1px solid ${tagColor[prog.tag] ?? '#db0000'}40` }}>
                      {prog.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: '#1f0000', color: '#db0000' }}>
                      {prog.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors"
                    style={{ color: '#fff1f1' }}>
                    {prog.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#a08080' }}>
                    {prog.desc}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.topics.map(t => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                        style={{ background: '#1a0000', color: '#c10000', border: '1px solid #3a0000' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI highlight banner */}
          <div className="mt-8 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border"
            style={{ background: 'linear-gradient(135deg, #1a0000, #0c0000)', borderColor: '#5a0000' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: '#db0000', boxShadow: '0 0 24px rgba(219,0,0,0.4)' }}>
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-display font-bold text-lg mb-1" style={{ color: '#fff1f1' }}>AI is integrated across every program.</p>
              <p className="text-sm" style={{ color: '#a08080' }}>Every course includes AI-assisted workflows, tools, and techniques — so you learn how modern builders actually work.</p>
            </div>
            <Link href="/programs"
              className="shrink-0 h-11 px-6 rounded-full font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: '#db0000', color: '#fff1f1' }}>
              Explore AI Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. REAL PROJECTS — #080000
      ───────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#080000', borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#db0000' }}>Real Work</p>
            <h2 className="font-display font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1' }}>
              Don't just learn.{' '}
              <span style={{
                backgroundClip: 'text', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #db0000, #8e0000)',
              }}>
                Build something real.
              </span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#a08080' }}>
              Instead of spending months watching tutorials, participants work together on real products and meaningful problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-14">
            {[
              { category: 'Education Technology', name: 'OpenLearn LMS', problem: 'Affordable LMS for underserved schools', status: 'In Development', team: 6, tech: 'Next.js · PostgreSQL' },
              { category: 'Social Impact', name: 'Infinity Bloods', problem: 'Connecting blood donors with receivers', status: '🟢 Live', team: 4, tech: 'React · Node.js' },
              { category: 'AI Tools', name: 'Agentic Workflow', problem: 'Automating repetitive business processes', status: 'Prototyping', team: 3, tech: 'Python · OpenAI' },
            ].map((proj, i) => (
              <div key={i}
                className="rounded-2xl p-7 border flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0f0000', borderColor: '#2e0000' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#750000'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e0000'; }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#db0000' }}>{proj.category}</p>
                <h3 className="font-display font-black text-2xl mb-3 transition-colors" style={{ color: '#fff1f1' }}>{proj.name}</h3>
                <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: '#a08080' }}>{proj.problem}</p>
                <div className="space-y-3 text-sm border-t pt-4 mb-6" style={{ borderColor: '#2e0000' }}>
                  {[['Status', proj.status], ['Team', `${proj.team} Contributors`], ['Tech', proj.tech]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span style={{ color: '#6b3030' }}>{k}</span>
                      <span className="font-medium" style={{ color: '#fcd5d5' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  style={{ background: '#1f0000', color: '#db0000', border: '1px solid #3a0000' }}>
                  View Case Study →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects"
              className="inline-flex h-14 items-center justify-center rounded-full px-10 font-semibold transition-all hover:-translate-y-1"
              style={{ background: '#db0000', color: '#fff1f1', boxShadow: '0 0 30px rgba(219,0,0,0.3)' }}>
              Explore All Real Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. VOLUNTEER — Rich #1a0000 with grid pattern
      ───────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#110000', borderTop: '1px solid #2e0000' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'linear-gradient(rgba(90,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(90,0,0,0.15) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'rgba(117,0,0,0.25)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#db0000' }}>Volunteer</p>
              <h2 className="font-display font-black leading-tight mb-7"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1' }}>
                Your skills can create<br />more than a career.
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#a08080' }}>
                Volunteers contribute their skills to real projects while learning from experienced builders and working within a collaborative team.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {['Developer', 'UI/UX Designer', 'AI Engineer', 'Content Creator', 'Project Coordinator', 'QA / Tester'].map(role => (
                  <span key={role} className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: '#1f0000', border: '1px solid #5a0000', color: '#fcd5d5' }}>
                    {role}
                  </span>
                ))}
              </div>
              <Link href="/join"
                className="inline-flex h-14 items-center justify-center rounded-full px-10 font-semibold transition-all hover:-translate-y-1"
                style={{ background: '#db0000', color: '#fff1f1', boxShadow: '0 0 24px rgba(219,0,0,0.3)' }}>
                Become a Volunteer
              </Link>
            </div>

            {/* Stats panel */}
            <div className="rounded-3xl p-8 border hidden md:block"
              style={{ background: '#0c0000', borderColor: '#2e0000' }}>
              <h3 className="font-display font-bold text-xl mb-8" style={{ color: '#fff1f1' }}>What volunteers gain</h3>
              {[
                ['Real-World Experience', 'Work on actual products used by real people.'],
                ['Mentorship Access', 'Learn directly from experienced builders.'],
                ['Team Collaboration', 'Operate like a real product development team.'],
                ['Portfolio Building', 'Ship things you can show to employers.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 mb-7 last:mb-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#1f0000' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#db0000' }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#fff1f1' }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#a08080' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. WHY JOIN — #080000
      ───────────────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#080000', borderTop: '1px solid #1a0000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#db0000' }}>Why Join</p>
            <h2 className="font-display font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff1f1' }}>
              More than training. A place to become a builder.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Real Projects', desc: 'Build applications instead of only completing tutorials.', icon: <Blocks className="w-5 h-5" /> },
              { title: 'Mentor Guidance', desc: 'Learn from people who actively build technology.', icon: <Users className="w-5 h-5" /> },
              { title: 'Team Experience', desc: 'Understand how real development teams work.', icon: <MessageSquare className="w-5 h-5" /> },
              { title: 'AI First', desc: 'Learn how AI is changing modern software development.', icon: <BrainCircuit className="w-5 h-5" /> },
              { title: 'Practical Skills', desc: 'Focus on skills that can actually be applied.', icon: <Cpu className="w-5 h-5" /> },
              { title: 'Community', desc: 'Grow alongside other builders from around the world.', icon: <Globe2 className="w-5 h-5" /> },
            ].map((f, i) => (
              <div key={i}
                className="p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: '#0f0000', borderColor: '#2e0000' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#750000'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2e0000'}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: '#1f0000', color: '#db0000' }}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#fff1f1' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#a08080' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. CTA BANNER — #db0000 solid red
      ───────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#db0000' }}>
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff1f1' }}>
            Technology becomes meaningful when you use it to solve real problems.
          </h2>
          <p className="text-lg mb-10 opacity-80" style={{ color: '#fff1f1' }}>
            Join InfinityBloods and start building. Not just learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join"
              className="h-14 px-10 rounded-full font-bold flex items-center gap-2 justify-center transition-all hover:-translate-y-1"
              style={{ background: '#fff1f1', color: '#db0000' }}>
              Join the Program <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/programs"
              className="h-14 px-10 rounded-full font-bold flex items-center gap-2 justify-center transition-all hover:-translate-y-1"
              style={{ background: 'transparent', border: '2px solid rgba(255,241,241,0.5)', color: '#fff1f1' }}>
              View Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
