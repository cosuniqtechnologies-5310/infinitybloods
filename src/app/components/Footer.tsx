'use client';

import Link from 'next/link';

const PLATFORM_LINKS = [
  ['Programs',  '/programs'],
  ['Projects',  '/projects'],
  ['Community', '/community'],
  ['Pricing',   '/pricing'],
];

const ORG_LINKS = [
  ['About Us',          '/about'],
  ['Join as Volunteer', '/join'],
  ['FAQ',               '/faq'],
  ['Contact',           '/contact'],
];

const PROGRAM_LINKS = [
  ['Branding & Design',    '/programs/design'],
  ['Web Development',      '/programs/web'],
  ['Mobile & Desktop',     '/programs/apps'],
  ['AI & Automation',      '/programs/ai'],
  ['Cloud & Hosting',      '/programs/cloud'],
  ['Business & Marketing', '/programs/marketing'],
];

export default function Footer() {
  return (
    <footer style={{ background: '#050000', borderTop: '1px solid #1a0000' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">

          {/* Brand col – takes 2 cols */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-2xl text-white group-hover:scale-105 transition-transform"
                style={{ background: '#db0000' }}
              >
                ∞
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-lg" style={{ color: '#fff1f1' }}>
                  Infinity<span style={{ color: '#db0000' }}>Bloods</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6b3030' }}>
                  Learn · Build · Contribute
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs mb-8" style={{ color: '#6b3030' }}>
              Technology becomes meaningful when you use it to solve real problems.
              We don't just teach technology — we build with it.
            </p>

            {/* Palette strip */}
            <div className="flex gap-1.5 mb-8">
              {['#3a0000','#5a0000','#750000','#8e0000','#a80000','#c10000','#db0000'].map(c => (
                <div key={c} className="h-1.5 flex-1 rounded-full" style={{ background: c }} />
              ))}
            </div>

            {/* Social / links */}
            <div className="flex gap-3">
              {[
                { label: 'GitHub',    href: 'https://github.com' },
                { label: 'LinkedIn',  href: 'https://linkedin.com' },
                { label: 'Twitter',   href: 'https://twitter.com' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                  style={{ background: '#1a0000', color: '#6b3030', border: '1px solid #2e0000' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#db0000' }}>
              Platform
            </h4>
            <ul className="space-y-3">
              {PLATFORM_LINKS.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm font-medium transition-colors" style={{ color: '#6b3030' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#a08080')}
                    onMouseOut={e => (e.currentTarget.style.color = '#6b3030')}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#db0000' }}>
              Programs
            </h4>
            <ul className="space-y-3">
              {PROGRAM_LINKS.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm font-medium transition-colors" style={{ color: '#6b3030' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#a08080')}
                    onMouseOut={e => (e.currentTarget.style.color = '#6b3030')}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Org links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#db0000' }}>
              Organization
            </h4>
            <ul className="space-y-3">
              {ORG_LINKS.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm font-medium transition-colors" style={{ color: '#6b3030' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#a08080')}
                    onMouseOut={e => (e.currentTarget.style.color = '#6b3030')}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #1a0000' }}
        >
          <p className="text-xs" style={{ color: '#3a0000' }}>
            © {new Date().getFullYear()} InfinityBloods. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: '#3a0000' }}>
            <Link href="/privacy" className="hover:text-muted-foreground transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-muted-foreground transition-colors">Terms of Use</Link>
            <span className="flex items-center gap-1 ml-2">
              Built with <span style={{ color: '#db0000' }}>♥</span> for learners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
