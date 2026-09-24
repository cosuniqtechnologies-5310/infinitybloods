'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { X, Menu, ArrowRight, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: 'Branding & Design',       href: '/programs/design' },
      { label: 'Web Development',         href: '/programs/web' },
      { label: 'Mobile & Desktop Apps',   href: '/programs/apps' },
      { label: 'AI & Automation',         href: '/programs/ai' },
      { label: 'Cloud & Infrastructure',  href: '/programs/cloud' },
      { label: 'Business & Marketing',    href: '/programs/marketing' },
    ],
  },
  { label: 'Projects',   href: '/projects' },
  { label: 'Community',  href: '/community' },
  { label: 'About',      href: '/about' },
  { label: 'Pricing',    href: '/pricing' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [dropdownOpen,  setDropdownOpen]  = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); setDropdownOpen(false); }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Top announcement bar ─────────────────────── */}
      <div
        className="w-full text-center text-xs py-2 font-medium tracking-wide"
        style={{ background: '#db0000', color: '#fff1f1' }}
      >
        🎓 New cohort starting soon —{' '}
        <Link href="/join" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
          Apply now
        </Link>
      </div>

      {/* ── Main navbar ──────────────────────────────── */}
      <header
        className="fixed left-0 right-0 z-50 transition-all duration-300"
        style={{
          top: '0', // sits below the announcement bar initially; JS scrolled state changes this
          background: scrolled
            ? 'rgba(8,0,0,0.92)'
            : 'rgba(8,0,0,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #2e0000' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-2xl text-white transition-all duration-200 group-hover:scale-105 group-hover:rotate-12"
              style={{ background: '#db0000', boxShadow: '0 0 20px rgba(219,0,0,0.4)' }}
            >
              ∞
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-black text-lg tracking-tight" style={{ color: '#fff1f1' }}>
                Infinity<span style={{ color: '#db0000' }}>Bloods</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6b3030' }}>
                Learn · Build · Contribute
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                /* Dropdown item */
                <div key={link.href} className="relative">
                  <button
                    onClick={() => setDropdownOpen(v => !v)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive(link.href) ? '#db0000' : '#a08080',
                    }}
                    onMouseEnter={e => {
                      if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#fff1f1';
                    }}
                    onMouseLeave={e => {
                      if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#a08080';
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl p-2 shadow-2xl"
                      style={{ background: '#100000', border: '1px solid #3a0000' }}
                    >
                      {link.dropdown.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group"
                          style={{ color: '#a08080' }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.color = '#fff1f1';
                            (e.currentTarget as HTMLElement).style.background = '#1f0000';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.color = '#a08080';
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#db0000' }} />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular link */
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: isActive(link.href) ? '#db0000' : '#a08080' }}
                  onMouseEnter={e => {
                    if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#fff1f1';
                  }}
                  onMouseLeave={e => {
                    if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#a08080';
                  }}
                >
                  {link.label}
                  {/* Active underline */}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full"
                      style={{ background: '#db0000' }}
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* ── Right side CTA ── */}
          <div className="flex items-center gap-3">
            {/* Contact */}
            <Link
              href="/contact"
              className="hidden lg:flex text-sm font-medium transition-colors duration-200"
              style={{ color: '#6b3030' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a08080')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b3030')}
            >
              Contact
            </Link>

            {/* Join CTA */}
            <Link
              href="/join"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full text-sm font-bold px-5 transition-all duration-200 hover:-translate-y-0.5 gap-1.5"
              style={{ background: '#db0000', color: '#fff1f1', boxShadow: '0 0 18px rgba(219,0,0,0.35)' }}
            >
              Join Free
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{ background: mobileOpen ? '#db0000' : '#1f0000', color: '#fff1f1' }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile slide-in menu ──────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[80vw] max-w-sm flex flex-col transition-transform duration-300"
          style={{
            background: '#080000',
            borderLeft: '1px solid #2e0000',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b" style={{ borderColor: '#1a0000' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-lg text-white"
                style={{ background: '#db0000' }}>
                ∞
              </div>
              <span className="font-display font-bold" style={{ color: '#fff1f1' }}>
                Infinity<span style={{ color: '#db0000' }}>Bloods</span>
              </span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ background: '#1f0000', color: '#a08080' }}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map(link => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold transition-all"
                  style={{
                    background: isActive(link.href) ? '#1f0000' : 'transparent',
                    color: isActive(link.href) ? '#db0000' : '#a08080',
                  }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#db0000' }} />
                  )}
                </Link>
                {/* Mobile sub-links */}
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l-2 pl-4" style={{ borderColor: '#2e0000' }}>
                    {link.dropdown.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 rounded-lg text-sm font-medium"
                        style={{ color: '#6b3030' }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-6 border-t space-y-3" style={{ borderColor: '#1a0000' }}>
            <Link href="/join"
              className="flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-sm transition-all"
              style={{ background: '#db0000', color: '#fff1f1', boxShadow: '0 0 20px rgba(219,0,0,0.3)' }}>
              Join Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="flex items-center justify-center h-12 rounded-xl font-semibold text-sm"
              style={{ background: '#1f0000', color: '#a08080', border: '1px solid #3a0000' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
